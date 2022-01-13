const Wallet = require('../src/wallet.js')

// test double
class BalanceDouble {
  add() {}
  total() { return "total" }
}

describe("Wallet", () => {
  it("add 10 to balance", () => {
    let wallet = new Wallet(new BalanceDouble())
    expect(wallet.add(10)).toEqual("total");
  })

  it("adds 100 from balance", () => {
    let wallet = new Wallet(new BalanceDouble())
    expect(wallet.add(100)).toEqual("total");
  })
})
