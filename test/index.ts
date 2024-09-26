
import { utilsBr, validateBr } from '../src/index';
import { expect } from 'chai';

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
});