"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let FlatEntity = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _floor_decorators;
    let _floor_initializers = [];
    let _pos_on_floor_decorators;
    let _pos_on_floor_initializers = [];
    let _price_decorators;
    let _price_initializers = [];
    let _rooms_decorators;
    let _rooms_initializers = [];
    let _area_total_decorators;
    let _area_total_initializers = [];
    let _area_kitchen_decorators;
    let _area_kitchen_initializers = [];
    let _area_live_decorators;
    let _area_live_initializers = [];
    let _layout_image_decorators;
    let _layout_image_initializers = [];
    var FlatEntity = _classThis = class extends typeorm_1.BaseEntity {
        constructor() {
            super(...arguments);
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.floor = __runInitializers(this, _floor_initializers, void 0);
            this.pos_on_floor = __runInitializers(this, _pos_on_floor_initializers, void 0);
            this.price = __runInitializers(this, _price_initializers, void 0);
            this.rooms = __runInitializers(this, _rooms_initializers, void 0);
            this.area_total = __runInitializers(this, _area_total_initializers, void 0);
            this.area_kitchen = __runInitializers(this, _area_kitchen_initializers, void 0);
            this.area_live = __runInitializers(this, _area_live_initializers, void 0);
            this.layout_image = __runInitializers(this, _layout_image_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "FlatEntity");
    (() => {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _floor_decorators = [(0, typeorm_1.Column)()];
        _pos_on_floor_decorators = [(0, typeorm_1.Column)()];
        _price_decorators = [(0, typeorm_1.Column)()];
        _rooms_decorators = [(0, typeorm_1.Column)()];
        _area_total_decorators = [(0, typeorm_1.Column)()];
        _area_kitchen_decorators = [(0, typeorm_1.Column)()];
        _area_live_decorators = [(0, typeorm_1.Column)()];
        _layout_image_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _floor_decorators, { kind: "field", name: "floor", static: false, private: false, access: { has: obj => "floor" in obj, get: obj => obj.floor, set: (obj, value) => { obj.floor = value; } } }, _floor_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pos_on_floor_decorators, { kind: "field", name: "pos_on_floor", static: false, private: false, access: { has: obj => "pos_on_floor" in obj, get: obj => obj.pos_on_floor, set: (obj, value) => { obj.pos_on_floor = value; } } }, _pos_on_floor_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: obj => "price" in obj, get: obj => obj.price, set: (obj, value) => { obj.price = value; } } }, _price_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _rooms_decorators, { kind: "field", name: "rooms", static: false, private: false, access: { has: obj => "rooms" in obj, get: obj => obj.rooms, set: (obj, value) => { obj.rooms = value; } } }, _rooms_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _area_total_decorators, { kind: "field", name: "area_total", static: false, private: false, access: { has: obj => "area_total" in obj, get: obj => obj.area_total, set: (obj, value) => { obj.area_total = value; } } }, _area_total_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _area_kitchen_decorators, { kind: "field", name: "area_kitchen", static: false, private: false, access: { has: obj => "area_kitchen" in obj, get: obj => obj.area_kitchen, set: (obj, value) => { obj.area_kitchen = value; } } }, _area_kitchen_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _area_live_decorators, { kind: "field", name: "area_live", static: false, private: false, access: { has: obj => "area_live" in obj, get: obj => obj.area_live, set: (obj, value) => { obj.area_live = value; } } }, _area_live_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _layout_image_decorators, { kind: "field", name: "layout_image", static: false, private: false, access: { has: obj => "layout_image" in obj, get: obj => obj.layout_image, set: (obj, value) => { obj.layout_image = value; } } }, _layout_image_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        FlatEntity = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FlatEntity = _classThis;
})();
