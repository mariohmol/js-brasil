import { validateBr } from '../index';
import { expect } from 'chai';

describe('Validate test', () => {
  it('CEP', () => {
    expect(validateBr.cep('30.380-123')).to.be.true;
  });

  it('CNPJ', () => {
    expect(validateBr.cnpj('56.853.433/0001-44')).to.be.true;
  });

  it('CPF', () => {
    expect(validateBr.cpf('127.529.875-36')).to.be.true;
  });

  it('RG', () => {
    // expect(validateBr.currency('R$ 1234')).to.be.true;
    // // expect(validateBr.inscricaoestadual('1234')).to.be.true;
    // expect(validateBr.percentage('10')).to.be.true;
    expect(validateBr.rg('mg 11124567')).to.be.true;
  });

  it('Telefone', () => {
    // expect(validateBr.placa('LGH1234')).to.be.true;
    expect(validateBr.telefone('31 999876767')).to.be.true;
  });

  it('TITULO', () => {
    // expect(validateBr.time('12:34')).to.be.true;
    // expect(validateBr.titulo('1234')).to.be.true;
  });

  it('To check when is NOT valid', () => {
    expect(validateBr.cep('1234')).to.be.false;
    expect(validateBr.cnpj('1234')).to.be.false;
    expect(validateBr.cpf('1234')).to.be.false;
    expect(validateBr.currency('1234')).to.be.false;
    // expect(validateBr.inscricaoestadual('1234')).to.be.false;
    expect(validateBr.percentage('1234')).to.be.false;
    expect(validateBr.rg('1234')).to.be.false;
    expect(validateBr.placa('1234')).to.be.false;
    expect(validateBr.telefone('1234')).to.be.false;
    expect(validateBr.time('1234')).to.be.false;
    expect(validateBr.titulo('1234')).to.be.false;
  });
});