"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_util_1 = require("./file_util");
const graph_1 = require("./graph");
function trim_route(route) {
    while (route[0] === " ") {
        route = route.slice(1);
    }
    return route;
}
function main() {
    const airports = (0, file_util_1.read_airport_data)().toString().split("\n");
    const routes = (0, file_util_1.read_aiport_routes)().toString().split("\n");
    const grouped_routes = [];
    for (const route of routes) {
        const [origin, destination] = route.split(",").map(trim_route);
        grouped_routes.push([origin, destination]);
    }
    const graph = new graph_1.Graph();
    for (const airport of airports) {
        graph.add_node(airport);
    }
    for (const [origin, destination] of grouped_routes) {
        graph.set_destinations(origin, destination);
    }
    console.log("Graph created", graph.list);
    graph.dfs("NYC", "LAS");
}
main();
