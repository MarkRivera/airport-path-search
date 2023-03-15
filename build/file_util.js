"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read_aiport_routes = exports.read_airport_data = void 0;
const fs_1 = __importDefault(require("fs"));
function read_airport_data() {
    return fs_1.default.readFileSync("airports");
}
exports.read_airport_data = read_airport_data;
function read_aiport_routes() {
    return fs_1.default.readFileSync("routes");
}
exports.read_aiport_routes = read_aiport_routes;
