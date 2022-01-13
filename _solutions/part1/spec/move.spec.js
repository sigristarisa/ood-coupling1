const move = require('../src/move.js')

// test double
class TestVehicle {
  move() {
    return "moved some distance"
  }
}

describe("move()", () => {
  it("moves a vehicle", () => {
    expect(move(new TestVehicle())).toEqual("moved some distance");
  })
})
