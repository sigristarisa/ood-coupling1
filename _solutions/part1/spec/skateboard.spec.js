const Skateboard = require('../src/skateboard.js')

describe("Skateboard", () => {
  it("moves", () => {
    let skateboard = new Skateboard()
    expect(skateboard.move()).toEqual()"moved 100m");
  })
})
