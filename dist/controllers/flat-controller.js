"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatController = void 0;
const database_1 = require("../models/database");
const flat_1 = require("../models/flat");
const config_1 = __importDefault(require("../config"));
class FlatController {
    static index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = req.query.filter ? req.query.filter : null;
            const sorting = req.query.sorting ? req.query.sorting : null;
            const currentPage = req.query.page ? +req.query.page : 1;
            const client = database_1.Database.client();
            const flatsQuery = flat_1.FlatQuery.findAll(filter, sorting, currentPage);
            const flats = yield client.query(flatsQuery);
            const pageCount = yield client.query(flat_1.FlatQuery.getPageCount(filter, sorting));
            const totalPage = Math.ceil(pageCount[0].count / config_1.default.flat.limitOnPage);
            const pagination = {
                current: currentPage,
                total: totalPage,
                prev: currentPage > 1 ? currentPage - 1 : null,
                next: currentPage < totalPage && totalPage !== 0 ? currentPage + 1 : null,
            };
            res.json({
                status: 'ok', items: flats, pagination
            });
        });
    }
}
exports.FlatController = FlatController;
