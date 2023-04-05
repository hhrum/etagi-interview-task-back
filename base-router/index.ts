import {api, BaseRoute} from "./api";
import {Express} from "express";

export class BaseRouter {
  static readonly api: BaseRoute[] = api

  static init(app: Express) {
    this.api.forEach((route) => {
      if (route.method === 'get') {
        app.get(`/api${route.path}`, route.handler)
      }
    })
  }
}
