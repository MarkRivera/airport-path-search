import fs from 'fs';

export function read_airport_data() {
    return fs.readFileSync("airports");
}

export function read_aiport_routes() {
    return fs.readFileSync("routes");
}