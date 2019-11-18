
import { utilsBr, validateBr, fakerBr } from '../index';
import { expect } from 'chai';

describe('Initial test', () => {
  it('Import', () => {
    expect(utilsBr.isPresent).to.exist;
    expect(utilsBr.MASKS).to.exist;
    expect(validateBr.cep).to.exist;
    expect(validateBr.cnpj).to.exist;
    expect(validateBr.cpf).to.exist;
    expect(validateBr.currency).to.exist;
    expect(validateBr.inscricaoestadual).to.exist;
    expect(validateBr.porcentagem).to.exist;
    expect(validateBr.rg).to.exist;
    expect(validateBr.placa).to.exist;
    expect(validateBr.telefone).to.exist;
    expect(validateBr.time).to.exist;
    expect(validateBr.titulo).to.exist;
    expect(fakerBr.cep).to.exist;
    expect(fakerBr.cnpj).to.exist;
    expect(fakerBr.cpf).to.exist;
    // expect(fakerBr.currency).to.exist;
    expect(fakerBr.inscricaoestadual).to.exist;
    expect(fakerBr.porcentagem).to.exist;
    expect(fakerBr.rg).to.exist;
    expect(fakerBr.placa).to.exist;
    expect(fakerBr.telefone).to.exist;
    expect(fakerBr.time).to.exist;
    expect(fakerBr.titulo).to.exist;
  });
});