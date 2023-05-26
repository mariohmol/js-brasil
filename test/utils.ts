import { utilsBr } from '../src/index';
import { expect } from 'chai';

describe('Utils test', () => {

  it('Utils currencyToNumber Currency', () => {
    const number = 1234456.44;
    // Br format
    const currency = utilsBr.currencyToNumber(' R$ 1.234.456,44 ');
    expect(currency).to.be.equal(number);

    // USA format
    const currencyFormatEN = utilsBr.currencyToNumber(' R$ 1234456.44 ');
    expect(currencyFormatEN).to.be.equal(number);

    const currencyEN = utilsBr.currencyToNumber(' USD 1234456.44 ');
    expect(currencyEN).to.be.equal(number);
  });

  it('Utils currencyToNumber Porcentagem', () => {
    const percent = utilsBr.currencyToNumber(' 1.234.456,44%');
    expect(percent).to.be.equal(1234456.44);

    const percent2 = utilsBr.currencyToNumber(' 12 % ');
    expect(percent2).to.be.equal(12);
  });

  it('Utils numberToCurrency R$ 12,00', () => {
    const currencyNumber = utilsBr.numberToCurrency(12);
    expect(currencyNumber).to.be.equal(' R$ 12,00 ');
  });

  it('Utils numberToCurrency R$ 0.95 ', () => {
    const currencyNumber = utilsBr.numberToCurrency(0.95);
    expect(currencyNumber).to.be.equal(' R$ 0,95 ');
  });

  it('Utils numberToCurrency R$ 0,10 ', () => {
    const currencyNumber = utilsBr.numberToCurrency(0.1);
    expect(currencyNumber).to.be.equal(' R$ 0,10 ');
  })

  /**
   * https://pt.wikipedia.org/wiki/D%C3%ADgito_verificador
   */
  it('Module11', () => {

    let result = utilsBr.modulo11('547823548');
    expect(result).to.be.equal(9);

    // Wikipedia example
    result = utilsBr.modulo11('1201611227');
    expect(result).to.be.equal(3);
    result = utilsBr.modulo11('261533');
    expect(result).to.be.equal(9);

    // BB Agencia
    result = utilsBr.modulo11('3294');
    expect(result).to.be.equal(8);

    // BB Conta
    result = utilsBr.modulo11('117884');
    expect(result).to.be.equal(9);
  })

});
