
const { utilsBr, validateBr } = require('../dist/index');
const expect = require('chai').expect;

describe('Initial test', () => {
  it('Import', () => {
    expect(utilsBr).to.have.a.property('isPresent');
    expect(utilsBr).to.have.a.property('MASKS');
    expect(validateBr).to.have.a.property('cep');
    expect(validateBr).to.have.a.property('cnpj');
    expect(validateBr).to.have.a.property('cpf');
    expect(validateBr).to.have.a.property('currency');
    expect(validateBr).to.have.a.property('inscricaoestadual');
    expect(validateBr).to.have.a.property('percentage');
    expect(validateBr).to.have.a.property('rg');
    expect(validateBr).to.have.a.property('placa');
    expect(validateBr).to.have.a.property('telefone');
    expect(validateBr).to.have.a.property('time');
    expect(validateBr).to.have.a.property('titulo');
  });
});