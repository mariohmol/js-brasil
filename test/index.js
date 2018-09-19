
const { utils, validate } = require('../dist/index');
const expect = require('chai').expect;

describe('Initial test', () => {
  it('Import', () => {
    expect(utils).to.have.a.property('isPresent');
    expect(utils).to.have.a.property('MASKS');
    expect(validate).to.have.a.property('cep');
    expect(validate).to.have.a.property('cnpj');
    expect(validate).to.have.a.property('cpf');
    expect(validate).to.have.a.property('currency');
    expect(validate).to.have.a.property('inscricaoestadual');
    expect(validate).to.have.a.property('percentage');
    expect(validate).to.have.a.property('rg');
    expect(validate).to.have.a.property('placa');
    expect(validate).to.have.a.property('telefone');
    expect(validate).to.have.a.property('time');
    expect(validate).to.have.a.property('titulo');
  });
});