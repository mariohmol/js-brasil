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

  it('PLACA', () => {
    expect(validateBr.placa('ABC1234')).to.be.true;
    expect(validateBr.placa('SAW0002')).to.be.false;
  });

  it('Telefone', () => {
    expect(validateBr.telefone('31 99876767')).to.be.true;
    expect(validateBr.telefone('(90) 1057-1600')).to.be.true;
    expect(validateBr.telefone('(90) 0057-1600')).to.be.false;
    
  });

  it('Celular', () => {
    // expect(validateBr.celular('31 999876767')).to.be.true;
    expect(validateBr.celular('31 99876767')).to.be.false;
    // expect(validateBr.celular('(90) 1057-1600')).to.be.true;
    // expect(validateBr.celular('(90) 00057-1600')).to.be.false;
    
  });

  it('TITULO', () => {
    expect(validateBr.titulo('6490.8084.4421')).to.be.true;
    expect(validateBr.titulo('6490.8084.4422')).to.be.false;
  });

  it('PROCESSO', () => {
    expect(validateBr.processo('0123456-15.2008.100.0000')).to.be.true;
  });



  it('To check when is NOT valid', () => {
    expect(validateBr.cep('1234')).to.be.false;
    expect(validateBr.cnpj('1234')).to.be.false;
    expect(validateBr.cpf('1234')).to.be.false;
    expect(validateBr.currency('1234')).to.be.false;
    expect(validateBr.inscricaoestadual('1234', 'mg')).to.be.false;
    expect(validateBr.percentage('1234')).to.be.false;
    expect(validateBr.rg('1234')).to.be.false;
    expect(validateBr.placa('1234')).to.be.false;
    expect(validateBr.telefone('1234')).to.be.false;
    expect(validateBr.celular('1234')).to.be.false;
    expect(validateBr.time('1234')).to.be.false;
    expect(validateBr.titulo('1234')).to.be.false;
  });
});
