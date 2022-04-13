const Balance = require('../src/balance.js')

describe('Balance', () => {
  let balance

  beforeEach(() => {
    balance = new Balance()
  })

  it('starts with 0 by default', () => {
    expect(balance.total()).toEqual(0)
  })

  it('starts with a balance', () => {
    const balance = new Balance(10)
    expect(balance.total()).toEqual(10)
  })

  it('adding 10 money increases transactions array length', () => {
    const transactions = balance.add(10)
    expect(transactions.length).toEqual(2)
  })

  it('adding 10 money - transaction is included in array', () => {
    const transactions = balance.add(10)
    expect(transactions.includes(10)).toEqual(true)
  })

  it('totals the transactions', () => {
    balance.add(10)
    expect(balance.total()).toEqual(10)
  })
})
