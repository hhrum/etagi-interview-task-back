"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const flat_controller_1 = require("../controllers/flat-controller");
exports.api = [
    {
        path: '/flat',
        handler: flat_controller_1.FlatController.index,
        method: 'get'
    }
];
