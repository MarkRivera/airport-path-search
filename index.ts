import { read_aiport_routes, read_airport_data } from "./file_util";
import { Graph } from "./graph";

function trim_route(route: string) {
    while (route[0] === " ") {
        route = route.slice(1);
    }

    return route;
}

function main() {
    const airports = read_airport_data().toString().split("\n");
    const routes = read_aiport_routes().toString().split("\n");
    const grouped_routes = [];

    for (const route of routes) {
        const [origin, destination] = route.split(",").map(trim_route);
        grouped_routes.push([origin, destination]);
    }

    const graph = new Graph();
    
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