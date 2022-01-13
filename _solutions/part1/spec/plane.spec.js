const Plane = require('../src/plane.js')

describe("Plane", () => {
  it("moves", function() {
    let plane = new Plane()
    expect(plane.move()).toEqual("moved 10000m");
  })
})
