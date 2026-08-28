/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated route tree. Keep in sync with file routes.
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as SerceSlaskaRouteImport } from './routes/serce-slaska'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const SerceSlaskaRoute = SerceSlaskaRouteImport.update({ id: '/serce-slaska', path: '/serce-slaska', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath { '/': typeof IndexRoute; '/serce-slaska': typeof SerceSlaskaRoute }
export interface FileRoutesByTo { '/': typeof IndexRoute; '/serce-slaska': typeof SerceSlaskaRoute }
export interface FileRoutesById { __root__: typeof rootRouteImport; '/': typeof IndexRoute; '/serce-slaska': typeof SerceSlaskaRoute }
export interface FileRouteTypes { fileRoutesByFullPath: FileRoutesByFullPath; fullPaths: '/' | '/serce-slaska'; fileRoutesByTo: FileRoutesByTo; to: '/' | '/serce-slaska'; id: '__root__' | '/' | '/serce-slaska'; fileRoutesById: FileRoutesById }
export interface RootRouteChildren { IndexRoute: typeof IndexRoute; SerceSlaskaRoute: typeof SerceSlaskaRoute }

declare module '@tanstack/react-router' { interface FileRoutesByPath { '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }; '/serce-slaska': { id: '/serce-slaska'; path: '/serce-slaska'; fullPath: '/serce-slaska'; preLoaderRoute: typeof SerceSlaskaRouteImport; parentRoute: typeof rootRouteImport } } }

const rootRouteChildren: RootRouteChildren = { IndexRoute, SerceSlaskaRoute }
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' { interface Register { ssr: true; router: Awaited<ReturnType<typeof getRouter>> } }
