"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatQuery = void 0;
const config_1 = __importDefault(require("../config"));
const concatRangeFilter = (column, filter) => {
    const query = [];
    if (filter.from) {
        query.push(`${column} > ${filter.from}`);
    }
    if (filter.to) {
        query.push(`${column} < ${filter.to}`);
    }
    return query.join(' AND ');
};
const useFilter = (filters) => {
    const query = ['WHERE'];
    const filterQuery = Object
        .entries(filters)
        .filter(([column]) => config_1.default.flat.columns.includes(column))
        .map(([column, filter]) => (concatRangeFilter(column, filter)))
        .join(' AND ');
    query.push(filterQuery);
    return query.join(' ');
};
const useSort = (sorting) => {
    return (`ORDER BY ${sorting.column} ${sorting.variant.toUpperCase()}`);
};
const usePage = (page) => {
    const limit = config_1.default.flat.limitOnPage;
    return `LIMIT ${limit} OFFSET ${Math.max(0, page - 1) * limit}`;
};
exports.FlatQuery = {
    findAll: (filters, sorting, page) => {
        let query = ['SELECT * FROM flats_data'];
        if (filters) {
            query.push(useFilter(filters));
        }
        if (sorting
            && config_1.default.flat.columns.includes(sorting.column)
            && ['asc', 'desc'].includes(sorting.variant)) {
            query.push(useSort(sorting));
        }
        query.push(usePage(page || 1));
        return query.join(' ');
    },
    getPageCount: (filters, sorting) => {
        const query = ['SELECT * FROM flats_data'];
        if (filters) {
            query.push(useFilter(filters));
        }
        if (sorting
            && config_1.default.flat.columns.includes(sorting.column)
            && ['asc', 'desc'].includes(sorting.variant)) {
            query.push(useSort(sorting));
        }
        return `SELECT COUNT(*) FROM (${query.join(' ')}) as count`;
    }
};
