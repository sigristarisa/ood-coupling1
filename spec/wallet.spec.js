const Wallet = require('../src/wallet.js')
const Balance = require('../src/balance.js')

describe("Wallet", () => {
  let wallet

  beforeEach(() => {
    wallet = new Wallet(new Balance(100))
  })

  it("add 10 to balance", () => {
    expect(wallet.add(10)).toEqual(110);
  })

  it("adds 100 from balance", () => {
    expect(wallet.add(100)).toEqual(200);
  })
})
