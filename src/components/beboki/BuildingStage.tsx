"use client";

import { type ReactNode, useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/cn";
import type { BebokId } from "@/lib/beboki-store";
import { Portrait } from "./Portrait";

export function StageBack({ src, video }: { src: string; video?: string }) {
  const [live, setLive] = useState(Boolean(video));

  return (
    <>
      {live && video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          poster={src}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setLive(false)}
        />
      ) : (
        <img src={src} alt="" className="ken-burns-media absolute inset-0 h-full w-full object-cover" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-coal/55 via-transparent to-coal/20" />
    </>
  );
}

export function SceneChrome({
  title,
  hint,
  onBack,
  open,
  onToggle,
  children,
}: {
  title: string;
  hint?: string;
  onBack: () => void;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <>
      <button type="button" aria-label={open ? "Schowaj panel" : "Otwórz panel"} className="absolute inset-0 z-[2]" onClick={onToggle} />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between p-3">
        <button
          type="button"
          onClick={onBack}
          className="pointer-events-auto grid size-11 place-items-center rounded-full border border-line bg-coal/55 text-fg backdrop-blur-sm"
          aria-label="Osada"
        >
          <ChevronLeft className="size-5" />
        </button>
        <p className="pointer-events-none rounded-full border border-gold/50 bg-coal/45 px-3 py-1.5 font-display text-2xs tracking-wide text-gold backdrop-blur-sm">
          {title}
        </p>
      </div>

      {!open ? (
        <p className="pointer-events-none absolute inset-x-0 bottom-8 z-20 text-center font-display text-2xs tracking-wide text-gold/90 drop-shadow-[0_2px_8px_#000]">
          {hint ?? "Dotknij sceny"}
        </p>
      ) : null}

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-30 max-h-[46%] overflow-auto rounded-t-2xl border border-line bg-coal/88 px-4 pb-4 pt-2 shadow-panel backdrop-blur-md transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "pointer-events-none translate-y-[110%]",
        )}
      >
        <button type="button" onClick={onToggle} className="mx-auto mb-2 flex w-full items-center justify-center text-muted" aria-label="Schowaj">
          <ChevronDown className="size-5" />
        </button>
        {children}
      </div>
    </>
  );
}

export function BebokInRoom({
  who,
  working,
  hop,
  size = 196,
  className,
  onClick,
}: {
  who: BebokId;
  working?: boolean;
  hop?: boolean;
  size?: number;
  className?: string;
  onClick?: () => void;
}) {
  const pose = hop ? "hop" : working ? "work" : "idle";
  const body = (
    <div className={cn("bebok-in-room relative", working && "is-working", className)}>
      <Portrait who={who} size={size} pose={pose} />
    </div>
  );
  if (!onClick) return body;
  return (
    <button type="button" onClick={onClick} className="bg-transparent p-0">
      {body}
    </button>
  );
}
