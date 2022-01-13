const Car = require('../src/car.js')

describe("Car", () => {
  it("moves", () => {
    let car = new Car()
    expect(car.move()).toEqual("moved 1000m");
  })
})
