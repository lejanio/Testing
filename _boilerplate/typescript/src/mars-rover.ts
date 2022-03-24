interface Coordinates {
    x: number;
    y: number;
}

type Direction = "N" | "S" | "E" | "W"

export class MarsRover {
    coordinates: Coordinates;
    direction: Direction;

    constructor(coordinates: Coordinates, direction: Direction) {
        this.coordinates = coordinates;
        this.direction = direction;
    }

    moveRight(): void {
        this.coordinates = {
            x: this.coordinates.x + 1,
            y: this.coordinates.y,
        };
    }

    moveLeft(): void {
        this.coordinates = {
            x: this.coordinates.x - 1,
            y: this.coordinates.y,
        };
    }

    moveUp(): void {
        this.coordinates = {
            x: this.coordinates.x,
            y: this.coordinates.y - 1,
        };
    }

    getCoordinates(): Coordinates {
        return this.coordinates;
    }
}
