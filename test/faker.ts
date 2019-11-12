import { fakerBr, validateBr } from '../index';
import { expect } from 'chai';

describe('Faker test', () => {
  it('To generate any data', () => {
    expect(fakerBr.cep()).to.exist;
    // expect(fakerBr.cnpj()).to.exist;
    expect(fakerBr.cpf()).to.exist;
    // expect(fakerBr.currency()).to.exist;
    // expect(fakerBr.inscricaoestadual()).to.exist;
    // expect(fakerBr.percentage()).to.exist;
    expect(fakerBr.rg()).to.exist;
    expect(fakerBr.placa()).to.exist;
    expect(fakerBr.telefone()).to.exist;
    // expect(fakerBr.time()).to.exist;
    expect(fakerBr.titulo()).to.exist;
  });

  it('address', () => {
    const address = fakerBr.address();
    expect(validateBr.address(address)).to.be.true;
  });

  it('bankaccount', () => {
    const bankaccount = fakerBr.bankaccount();
    expect(validateBr.bankaccount(bankaccount)).to.be.true;
  });

  it('celular', () => {
    const celular = fakerBr.celular();
    expect(validateBr.celular(celular)).to.be.true;
  });
  it('CEP', () => {
    const cep = fakerBr.cep();
    expect(validateBr.cep(cep)).to.be.true;
  });

  it('certidao - TODO', () => {
    // const certidao = fakerBr.certidao();
    // expect(validateBr.certidao(certidao)).to.be.true;
  });

  it('cnae', () => {
    const cnae = fakerBr.cnae();
    expect(validateBr.cnae(cnae)).to.be.true;
  });

  it('cnh', () => {
    const cnh = fakerBr.cnh();
    expect(validateBr.cnh(cnh)).to.be.true;
  });

  it('CNPJ', () => {
    const cnpj = fakerBr.cnpj();
    expect(validateBr.cnpj(cnpj)).to.be.true;
  });

  it('CNS', () => {
    const cns = fakerBr.cns();
    expect(validateBr.cns(cns)).to.be.true;
  });

  it('CPF', () => {
    const cpf = fakerBr.cpf();
    expect(validateBr.cpf(cpf)).to.be.true;
  });

  it('cpfcnpj', () => {
    const cpfcnpj = fakerBr.cpfcnpj();
    expect(validateBr.cpfcnpj(cpfcnpj)).to.be.true;
  });

  it('creditcard - TODO', () => {
    // const creditcard = fakerBr.creditcard();
    // expect(validateBr.creditcard(creditcard)).to.be.true;
  });

  it('Currency', () => {
    // const currency = fakerBr.currency();
    // expect(validateBr.currency(currency)).to.be.true;
    const currencyNumber = fakerBr.currencyNumber();
    expect(validateBr.currency(currencyNumber)).to.be.true;
  });

  it('date', () => {
    const date = fakerBr.date();
    expect(validateBr.date(date)).to.be.true;
  });

  it('ECT', () => {
    const ect = fakerBr.ect();
    expect(validateBr.ect(ect)).to.be.true;
  });

  it('inscricaoestadual - TODO', () => {
    // const inscricaoestadual = fakerBr.inscricaoestadual();
    // expect(validateBr.inscricaoestadual(inscricaoestadual)).to.be.true;
  });


  it('iptu - TODO', () => {
    // const iptu = fakerBr.iptu();
    // expect(validateBr.iptu(iptu)).to.be.true;
  });

  it('number', () => {
    const number = fakerBr.number().toString();
    expect(validateBr.number(number)).to.be.true;
  });


  it('Percentage - TODO', () => {
    // const percentage = fakerBr.percentage();
    // expect(validateBr.percentage(percentage)).to.be.true;
  });

  it('PIS/PASEP', () => {
    // const pispasep = fakerBr.pispasep();
    // expect(validateBr.pispasep(pispasep)).to.be.true;
  });
  it('PLACA', () => {
    const placa = fakerBr.placa();
    expect(validateBr.placa(placa)).to.be.true;
  });
  it('RENAVAM', () => {
    const renavam = fakerBr.renavam();
    expect(validateBr.renavam(renavam)).to.be.true;
  });
  it('RG', () => {
    const rg = fakerBr.rg();
    expect(validateBr.rg(rg)).to.be.true;
  });
  it('SPED - TODO', () => {
    // const sped = fakerBr.sped();
    // expect(validateBr.sped(sped)).to.be.true;
  });
  it('Telefone', () => {
    const telefone = fakerBr.telefone();
    expect(validateBr.telefone(telefone)).to.be.true;
  });
  // it('Time', () => {
  //   const time = fakerBr.time();
  //   expect(validateBr.time(time)).to.be.true;
  // });
  it('Titulo', () => {
    const titulo = fakerBr.titulo();
    expect(validateBr.titulo(titulo)).to.be.true;
  });



});