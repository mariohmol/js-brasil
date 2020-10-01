import { utilsBr } from '../index';
import { expect } from 'chai';

describe('Utils test', () => {

  it('Utils currencyToNumber Currency', () => {
    const currency = utilsBr.currencyToNumber(' R$ 1.234.456,44 ');
    expect(currency).to.be.equal(1234456.44);
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
});


export enum States {
  ac, am, al, ap, ba, ce, df, es, go, ma, mg, ms, mt, pa, pb, pe, pi, pr, rj, rn, ro, rr,
  rs, sc, se, sp, to
}


export function stringToState (state: string, model = States){

  switch (state) {
      case 'ac':
          return model.ac;

      case 'am':
          return model.am;

      case 'al':
          return model.al;

      case 'ap':
          return model.ap;

      case 'ba':
          return model.ba;

      case 'ce':
          return model.ce;

      case 'df':
          return model.df;

      case 'es':
          return model.es;

      case 'go':
          return model.go;

      case 'ma':
          return model.ma;

      case 'mg':
          return model.mg;

      case 'ms':
          return model.ms;

      case 'mt':
          return model.mt;

      case 'pa':
          return model.pa;

      case 'pb':
          return model.pb;

      case 'pe':
          return model.pe;

      case 'pi':
          return model.pi;

      case 'pr':
          return model.pr;

      case 'rj':
          return model.rj;

      case 'rn':
          return model.rn;

      case 'ro':
          return model.ro;

      case 'rr':
          return model.rr;

      case 'rs':
          return model.rs;

      case 'sc':
          return model.sc;

      case 'se':
          return model.se;

      case 'sp':
          return model.sp;

      case 'to':
          return model.to;
  }
}