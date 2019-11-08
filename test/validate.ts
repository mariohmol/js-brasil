import { validateBr } from '../index';
import { expect } from 'chai';

describe('Validate test', () => {

  it('Celular', () => {
    // expect(validateBr.celular('31 999876767')).to.be.true;
    expect(validateBr.celular('31 99876767')).to.be.false;
    // expect(validateBr.celular('(90) 1057-1600')).to.be.true;
    // expect(validateBr.celular('(90) 00057-1600')).to.be.false;
    expect(validateBr.celular('1234')).to.be.false;
  });

  it('CEP', () => {
    expect(validateBr.cep('30.380-123')).to.be.true;
    expect(validateBr.cep('1234')).to.be.false;
  });

  it('CNPJ', () => {
    expect(validateBr.cnpj('56.853.433/0001-44')).to.be.true;
    expect(validateBr.cnpj('1234')).to.be.false;
  });

  it('CPF', () => {
    expect(validateBr.cpf('127.529.875-36')).to.be.true;
    expect(validateBr.cpf('090.988.020-44')).to.be.true;
    expect(validateBr.cpf('127.529.875-46')).to.be.false;
    expect(validateBr.cpf('127.529.875-37')).to.be.false;
    expect(validateBr.cpf('00.000.000/0000-00')).to.be.false;
    expect(validateBr.cpf('1234')).to.be.false;
  });

  context('Currency', ()=>{
    it('Pass when valid', () => {
      // expect(validateBr.currency('R$ 1234')).to.be.true;
      expect(validateBr.currency('R$ 1234,10')).to.be.true;
      expect(validateBr.currency('R$ 1.234,10')).to.be.true;
      expect(validateBr.currency('1234,56')).to.be.true;
      expect(validateBr.currency('1.234,56')).to.be.true;
    });
    it('Error when not valid', () => {
      expect(validateBr.currency('$1234')).to.be.false;
      expect(validateBr.currency('1,234.00')).to.be.false;
    });
  })

  it('Inscricao Estadual', () => {
    expect(validateBr.inscricaoestadual('862.445.372/2351', 'mg')).to.be.true;
    expect(validateBr.inscricaoestadual('094.290.083', 'sc')).to.be.true;
    expect(validateBr.inscricaoestadual('094.290.0839', 'sc')).to.be.false;
    expect(validateBr.inscricaoestadual('111111111111', 'mg').message).to.be.equal('ie com todos dígitos iguais');
    expect(validateBr.inscricaoestadual('1234', 'mg')).to.be.false;
  });

  it('Percentage', () => {
    it('Pass when valid', () => {
      expect(validateBr.percentage('10')).to.be.true;
    });
    it('Error when not valid', () => {
      expect(validateBr.percentage('1234')).to.be.false;
    });
  });

  it('PLACA', () => {
    expect(validateBr.placa('ABC1234')).to.be.true;
    expect(validateBr.placa('SAW0002')).to.be.false;
    expect(validateBr.placa('1234')).to.be.false;
  });


  it('PROCESSO', () => {
    expect(validateBr.processo('0123456-15.2008.100.0000')).to.be.true;
  });

  it('RG', () => {
    expect(validateBr.rg('mg 11124567')).to.be.true;
    expect(validateBr.rg('1234')).to.be.false;
  });


  it('RENAVAM', () => {
    expect(validateBr.renavam('72176426415')).to.be.true;
    expect(validateBr.renavam('72176426415')).to.be.true;
  });

  it('Telefone', () => {
    expect(validateBr.telefone('31 99876767')).to.be.true;
    expect(validateBr.telefone('(90) 1057-1600')).to.be.true;
    expect(validateBr.telefone('(90) 0057-1600')).to.be.false;
    expect(validateBr.telefone('1234')).to.be.false;
  });

  it('TITULO', () => {
    expect(validateBr.titulo('6490.8084.4421')).to.be.true;
    expect(validateBr.titulo('6490.8084.4422')).to.be.false;
    expect(validateBr.titulo('1234')).to.be.false;
  });

  it('Time', () => {
    expect(validateBr.time('1234')).to.be.false;
  });
});
