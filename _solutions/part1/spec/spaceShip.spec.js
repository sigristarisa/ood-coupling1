const SpaceShip = require('../src/spaceShip.js')

describe("SpaceShip", () => {
  it("moves", () => {
    let spaceShip = new SpaceShip()
    expect(spaceShip.move()).toEqual("moved 100000m");
  })
})
