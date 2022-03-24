import {MarsRover} from "./mars-rover";

describe("Mars Rover", () => {
    it("should be able to move right", () => {
        const rover = new MarsRover({x: 0, y: 0}, "E");
        rover.moveRight();
        expect(rover.getCoordinates()).toEqual({x: 1, y: 0});
    });

    it("should be able to move left", () => {
        const rover = new MarsRover({x: 0, y: 0}, "E");
        rover.moveLeft();
        expect(rover.getCoordinates()).toEqual({x: -1, y: 0});
    });

    it("should be able to move up", () => {
        const rover = new MarsRover({x: 0, y: 0}, "E");
        rover.moveUp();
        expect(rover.getCoordinates()).toEqual({x: 0, y: -1});
    });
});
