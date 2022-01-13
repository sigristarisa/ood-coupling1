const move = require('../src/move.js')

const Skateboard = require('../src/skateboard.js');
const Car = require('../src/car.js');
const Plane = require('../src/plane.js');

describe("move()", () => {
  it("moves Skateboard 100m ", function() {
    expect(move(new Skateboard())).toEqual("moved 100m");
  })

  it("moves Car 1000m", function() {
    expect(move(new Car())).toEqual("moved 1000m");
  })

  it("moves Plane 10000m", function() {
    expect(move(new Plane())).toEqual("moved 10000m");
  })

  it("moves SpaceShip 100000m", function() {
    expect(move(new SpaceShip())).toEqual("moved 100000m");
  })
})
