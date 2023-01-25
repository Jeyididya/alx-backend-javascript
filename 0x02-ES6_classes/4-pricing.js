export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount; // eslint-disable-line no-underscore-dangle
  }

  set amount(amount) {
    this._amount = amount; // eslint-disable-line no-underscore-dangle
  }

  get currency() {
    return this._currency; // eslint-disable-line no-underscore-dangle
  }

  set currency(currency) {
    this._currency = currency; // eslint-disable-line no-underscore-dangle
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
