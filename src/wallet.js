
class Wallet {
  constructor(cashBalance) {
    this.cashBalance = cashBalance
    this.cards = []
  }

  add(amount) {
    this.cashBalance.add(amount)
    return this.cashBalance.total()
  }
}

module.exports = Wallet
