#!/usr/bin/env python3
"""Chroma-key original bebok studio photos and magenta building props."""

from __future__ import annotations

import shutil
from pathlib import Path

import numpy as np
from PIL import Image
from collections import deque

ROOT = Path("/workspace")
PUBLIC = ROOT / "public"


def rgb_to_hsv(arr: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    rgb = arr.astype(np.float32) / 255.0
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    cmax = np.maximum(np.maximum(r, g), b)
    cmin = np.minimum(np.minimum(r, g), b)
    delta = cmax - cmin
    h = np.zeros_like(cmax)
    mask = delta > 1e-5
    r_is = mask & (cmax == r)
    g_is = mask & (cmax == g)
    b_is = mask & (cmax == b)
    h[r_is] = np.mod((g[r_is] - b[r_is]) / delta[r_is], 6.0)
    h[g_is] = (b[g_is] - r[g_is]) / delta[g_is] + 2.0
    h[b_is] = (r[b_is] - g[b_is]) / delta[b_is] + 4.0
    h = h * 60.0
    s = np.zeros_like(cmax)
    s[cmax > 1e-5] = delta[cmax > 1e-5] / cmax[cmax > 1e-5]
    return h, s, cmax


def flood_mask(seed: np.ndarray) -> np.ndarray:
    h, w = seed.shape
    out = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        if seed[0, x]:
            q.append((0, x))
        if seed[h - 1, x]:
            q.append((h - 1, x))
    for y in range(h):
        if seed[y, 0]:
            q.append((y, 0))
        if seed[y, w - 1]:
            q.append((y, w - 1))
    while q:
        y, x = q.popleft()
        if y < 0 or y >= h or x < 0 or x >= w or out[y, x] or not seed[y, x]:
            continue
        out[y, x] = True
        q.append((y - 1, x))
        q.append((y + 1, x))
        q.append((y, x - 1))
        q.append((y, x + 1))
    return out


def dilate(mask: np.ndarray, n: int) -> np.ndarray:
    out = mask.copy()
    for _ in range(n):
        p = np.pad(out, 1, constant_values=False)
        out = (
            p[1:-1, 1:-1]
            | p[:-2, 1:-1]
            | p[2:, 1:-1]
            | p[1:-1, :-2]
            | p[1:-1, 2:]
        )
    return out


def feather(mask: np.ndarray, radius: int) -> np.ndarray:
    """mask True = background. Returns alpha 0-255."""
    bg = mask.astype(np.float32)
    for _ in range(radius):
        p = np.pad(bg, 1, mode="edge")
        bg = (p[1:-1, 1:-1] + p[:-2, 1:-1] + p[2:, 1:-1] + p[1:-1, :-2] + p[1:-1, 2:]) / 5.0
    alpha = (1.0 - bg) * 255.0
    return np.clip(alpha, 0, 255).astype(np.uint8)


def crop_alpha(im: Image.Image, pad: int = 12) -> Image.Image:
    a = np.array(im.split()[-1])
    ys, xs = np.where(a > 12)
    if len(xs) == 0:
        return im
    x0, x1 = max(0, xs.min() - pad), min(im.width, xs.max() + pad + 1)
    y0, y1 = max(0, ys.min() - pad), min(im.height, ys.max() + pad + 1)
    return im.crop((x0, y0, x1, y1))


def fit_height(im: Image.Image, height: int) -> Image.Image:
    if im.height <= height:
        return im
    w = max(1, int(im.width * (height / im.height)))
    return im.resize((w, height), Image.Resampling.LANCZOS)


def key_studio_pink(src: Path, dst: Path) -> None:
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    h, s, v = rgb_to_hsv(arr[..., :3])
    # dusty rose / magenta paper: pink hue, not too dark
    hue_pink = (h >= 270) | (h <= 28)
    studio = hue_pink & (s >= 0.07) & (v >= 0.48)
    # very pale pink (low sat, high value, still warm)
    pale = hue_pink & (s >= 0.03) & (v >= 0.78)
    seed = studio | pale
    bg = flood_mask(seed)
    bg = dilate(bg, 1)
    alpha = feather(bg, 3)
    arr[..., 3] = np.minimum(arr[..., 3], alpha)

    # despill remaining magenta bounce on edges
    h2, s2, v2 = rgb_to_hsv(arr[..., :3])
    fringe = (arr[..., 3] > 0) & (arr[..., 3] < 240)
    pinkish = ((h2 >= 280) | (h2 <= 20)) & (s2 > 0.12)
    mix = fringe & pinkish
    g = arr[..., 1].astype(np.int16)
    arr[..., 0] = np.where(mix, ((arr[..., 0].astype(np.int16) + g) // 2).astype(np.uint8), arr[..., 0])
    arr[..., 2] = np.where(mix, ((arr[..., 2].astype(np.int16) + g) // 2).astype(np.uint8), arr[..., 2])

    out = Image.fromarray(arr, "RGBA")
    out = crop_alpha(out, pad=16)
    out = fit_height(out, 640)
    dst.parent.mkdir(parents=True, exist_ok=True)
    out.save(dst, "PNG")
    print(f"studio {src.name} -> {dst} {out.size}")


def key_flat_magenta(src: Path, dst: Path, height: int = 720) -> None:
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    h, s, v = rgb_to_hsv(arr[..., :3])
    mag = ((h >= 285) | (h <= 15)) & (s >= 0.35) & (v >= 0.35)
    # jpeg bleed around true #FF00FF
    rgb = arr[..., :3].astype(np.int16)
    dist = np.abs(rgb[..., 0] - 255) + np.abs(rgb[..., 1] - 0) + np.abs(rgb[..., 2] - 255)
    mag = mag | (dist < 90)
    alpha = feather(mag, 2)
    arr[..., 3] = np.minimum(arr[..., 3], alpha)
    out = Image.fromarray(arr, "RGBA")
    out = crop_alpha(out, pad=10)
    out = fit_height(out, height)
    dst.parent.mkdir(parents=True, exist_ok=True)
    out.save(dst, "PNG")
    print(f"magenta {src.name} -> {dst} {out.size}")


def stamp_frames(portrait: Path, who: str) -> None:
    for pose, prefix in (("idle", "idle"), ("walk", "walk")):
        folder = PUBLIC / "sprites" / who / pose
        folder.mkdir(parents=True, exist_ok=True)
        for i in range(1, 5):
            shutil.copyfile(portrait, folder / f"{prefix}-{i}.png")
    print(f"stamped 8 frames for {who}")


def main() -> None:
    portraits = PUBLIC / "sprites"
    key_studio_pink(
        ROOT / "artifacts" / "podciep.jpeg",
        portraits / "podciep" / "portrait.png",
    )
    key_studio_pink(
        ROOT / "artifacts" / "fachura.jpeg",
        portraits / "fachura" / "portrait.png",
    )
    stamp_frames(portraits / "podciep" / "portrait.png", "podciep")
    stamp_frames(portraits / "fachura" / "portrait.png", "fachura")

    buildings = {
        "siedziba": "e67476f2-f4e0-4cf7-838e-79fcbffbb2f8.jpg",
        "kopalnia": "827cc8a8-9399-4d16-a117-b302c30caac0.jpg",
        "warsztat": "2188de3e-29e8-4f11-a5fe-30e1fa431a65.jpg",
        "latarnia": "ae2d23d2-077e-4288-99ec-6bb3a689078c.jpg",
        "schronisko": "d85d37fa-aa32-42bf-9134-b715908bd03c.jpg",
    }
    img = ROOT / "artifacts" / "imagine_images"
    out_b = PUBLIC / "buildings"
    out_b.mkdir(parents=True, exist_ok=True)
    for name, fname in buildings.items():
        key_flat_magenta(img / fname, out_b / f"{name}.png", height=780)

    shutil.copyfile(img / "d83c1fa8-926c-4ae4-8680-f2c244ca90b8.jpg", PUBLIC / "osada.jpg")
    shutil.copyfile(img / "d83c1fa8-926c-4ae4-8680-f2c244ca90b8.jpg", PUBLIC / "village.jpg")
    interiors = {
        "siedziba-in.jpg": "7787ae1f-d9e5-4fee-b7e2-62da04048b68.jpg",
        "kopalnia-in.jpg": "fcaa1681-d808-4333-8f04-34a21e3aaa26.jpg",
        "warsztat-in.jpg": "6b21c000-498f-4000-b5d7-9b1aed4f61ca.jpg",
        "latarnia-in.jpg": "3b7349ac-0e62-4896-92ff-37de008d4e0d.jpg",
        "schronisko-in.jpg": "868601d6-a3a4-43f6-ae14-07d5a7f26435.jpg",
    }
    for dest, src in interiors.items():
        shutil.copyfile(img / src, out_b / dest)
        print(f"interior {dest}")


if __name__ == "__main__":
    main()
