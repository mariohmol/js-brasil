
import { utilsBr, validateBr, maskBr, createCurrencyMask, createNumberMaskBr } from '../src/index';
import { expect } from 'chai';
import 'mocha';

describe('Initial test', () => {
  it('Import', () => {

    expect(utilsBr.isPresent).to.exist;
    expect(utilsBr.isArray).to.exist;
    expect(utilsBr.isString).to.exist;
    expect(utilsBr.isNumber).to.exist;
    expect(utilsBr.isNil).to.exist;
    expect(utilsBr.processCaretTraps).to.exist;
    expect(utilsBr.allNumbersAreSame).to.exist;
    expect(utilsBr.getAllDigits).to.exist;
    expect(utilsBr.getAllWords).to.exist;
    expect(utilsBr.currencyToNumber).to.exist;
    expect(utilsBr.numberToCurrency).to.exist;
    expect(utilsBr.slugify).to.exist;
    expect(utilsBr.fillString).to.exist;
    expect(utilsBr.randArray).to.exist;
    expect(utilsBr.rand).to.exist;
    expect(utilsBr.randomNumber).to.exist;
    expect(utilsBr.randomLetter).to.exist;
    expect(utilsBr.randomLetterOrNumber).to.exist;
    expect(utilsBr.getSpecialProperty).to.exist;

    expect(utilsBr.MASKS).to.exist;
    expect(validateBr.cep).to.exist;
    expect(validateBr.cnpj).to.exist;
    expect(validateBr.cpf).to.exist;
    expect(validateBr.cpfcnpj).to.exist;
    expect(validateBr.currency).to.exist;
    expect(validateBr.inscricaoestadual).to.exist;
    expect(validateBr.porcentagem).to.exist;
    expect(validateBr.rg).to.exist;
    expect(validateBr.placa).to.exist;
    expect(validateBr.telefone).to.exist;
    expect(validateBr.time).to.exist;
    expect(validateBr.titulo).to.exist;

  });

  // ── tests for the consolidated mask import refactor ─────────────────────────
  // index.ts previously had three separate `import/export … from './mask'`
  // statements which emitted three require('./mask') calls.  After the refactor
  // a single `import * as mask` drives all three exports.  These tests pin the
  // public surface so a regression would be caught immediately.

  it('maskBr is exported from index and contains core formatters', () => {
    expect(maskBr).to.be.an('object');
    expect(maskBr.cpf).to.be.a('function');
    expect(maskBr.cnpj).to.be.a('function');
    expect(maskBr.cep).to.be.a('function');
    expect(maskBr.currency).to.be.a('function');
    expect(maskBr.telefone).to.be.a('function');
  });

  it('createCurrencyMask is exported from index as a function', () => {
    expect(createCurrencyMask).to.be.a('function');
    const mask2 = createCurrencyMask(2);
    expect(mask2).to.be.a('function');
    const result = mask2('100');
    expect(result).to.be.an('array').with.length.above(0);
  });

  it('createNumberMaskBr is exported from index as a function', () => {
    expect(createNumberMaskBr).to.be.a('function');
    const mask2 = createNumberMaskBr(2);
    expect(mask2).to.be.a('function');
  });

  it('utilsBr.MASKS contains expected document-type keys', () => {
    const masks = utilsBr.MASKS;
    expect(masks).to.be.an('object');
    ['cpf', 'cnpj', 'cep', 'telefone', 'celular', 'cnh', 'renavam',
      'pispasep', 'currency', 'number'].forEach(key => {
      expect(masks).to.have.property(key, masks[key], `MASKS.${key} missing`);
    });
  });

  it('utilsBr.MASKSIE contains IE masks keyed by state abbreviation', () => {
    const masksie = utilsBr.MASKSIE;
    expect(masksie).to.be.an('object');
    // spot-check a few states that definitely have IE masks
    ['sp', 'rj', 'mg', 'ba', 'rs'].forEach(uf => {
      expect(masksie).to.have.property(uf, masksie[uf], `MASKSIE.${uf} missing`);
    });
  });

});