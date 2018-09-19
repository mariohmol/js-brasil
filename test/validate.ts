import { validateBr } from '../index';
import { expect } from 'chai';

describe('Validate test', () => {
  it('To check when is valid', () => {
    expect(validateBr.cep('1234')).to.exist;
    expect(validateBr.cnpj('1234')).to.exist;
    expect(validateBr.cpf('1234')).to.exist;
    expect(validateBr.currency('1234')).to.exist;
    // expect(validateBr.inscricaoestadual('1234')).to.exist;
    expect(validateBr.percentage('1234')).to.exist;
    expect(validateBr.rg('1234')).to.exist;
    expect(validateBr.placa('1234')).to.exist;
    expect(validateBr.telefone('1234')).to.exist;
    expect(validateBr.time('1234')).to.exist;
    expect(validateBr.titulo('1234')).to.exist;
  });
});