export  class Graph {
    public list = new Map();

    public add_node (airport: string) {
        this.list.set(airport, []);
    }

    public set_destinations (origin: string, destination: string) {
        this.list.get(origin).push(destination);
        this.list.get(destination).push(origin);
    }

    public bfs(start: string, target: string) {
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

    public dfs(start: string, target: string, visited = new Set()) {
        console.log(start);
        visited.add(start);

        const destinations = this.list.get(start);

        for (const dest of destinations) {
            if (dest === target) {
                console.log(`${target} found in DFS`)
                return
            }

            if (!visited.has(dest)) {
                this.dfs(dest, target, visited);
            }
        }
    }
}

