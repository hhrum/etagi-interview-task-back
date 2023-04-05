import {Request, Response} from "express";

import {FlatController} from "../controllers/flat-controller";

export type RouteHandler = (req: Request, res: Response) => void
export type RouteMethod = 'get'

export interface BaseRoute {
  path: string
  handler: RouteHandler
  method: RouteMethod
}

export const api: BaseRoute[] = [
  {
    path: '/flat',
    handler: FlatController.index,
    method: 'get'
  }
]
