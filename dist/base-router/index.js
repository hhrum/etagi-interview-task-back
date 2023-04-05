"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const api_1 = require("./api");
class BaseRouter {
    static init(app) {
        this.api.forEach((route) => {
            if (route.method === 'get') {
                app.get(`/api${route.path}`, route.handler);
            }
        });
    }
}
BaseRouter.api = api_1.api;
exports.BaseRouter = BaseRouter;
