"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
class Database {
    static init(connection) {
        this.connection = connection;
    }
    static client() {
        if (!this._client) {
            this._client = this.pgp(this.connection);
        }
        return this._client;
    }
}
Database.connection = '';
Database.pgp = (0, pg_promise_1.default)();
exports.Database = Database;
