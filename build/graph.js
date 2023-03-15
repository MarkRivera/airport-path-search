"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
class Graph {
    constructor() {
        this.list = new Map();
    }
    add_node(airport) {
        this.list.set(airport, []);
    }
    set_destinations(origin, destination) {
        this.list.get(origin).push(destination);
        this.list.get(destination).push(origin);
    }
    bfs(start, target) {
        const queue = [start];
        const visited = new Set();
        while (queue.length) {
            const airport = queue.shift(); // Mutates
            const destinations = this.list.get(airport);
            for (const dest of destinations) {
                console.log(airport, dest);
                if (dest === target) {
                    console.log("Found Path!");
                }
                if (!visited.has(dest)) {
                    visited.add(dest);
                    queue.push(dest);
                }
            }
        }
        return console.log("No Path Found");
    }
    dfs(start, target, visited = new Set()) {
        console.log(start);
        visited.add(start);
        const destinations = this.list.get(start);
        for (const dest of destinations) {
            if (dest === target) {
                console.log(`${target} found in DFS`);
                return;
            }
            if (!visited.has(dest)) {
                this.dfs(dest, target, visited);
            }
        }
    }
}
exports.Graph = Graph;
