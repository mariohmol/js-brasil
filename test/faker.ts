import { fakerBr } from '../index';
import { expect } from 'chai';

describe('Faker test', () => {
  it('To generate any data', () => {
    expect(fakerBr.cep()).to.exist;
    expect(fakerBr.cnpj()).to.exist;
    expect(fakerBr.cpf()).to.exist;
    // expect(fakerBr.currency()).to.exist;
    // expect(fakerBr.inscricaoestadual()).to.exist;
    // expect(fakerBr.percentage()).to.exist;
    expect(fakerBr.rg()).to.exist;
    expect(fakerBr.placa()).to.exist;
    expect(fakerBr.telefone()).to.exist;
    expect(fakerBr.time()).to.exist;
    expect(fakerBr.titulo()).to.exist;
  });
});