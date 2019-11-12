import { fakerBr, validateBr } from '../index';
import { expect } from 'chai';

describe('Faker test', () => {

  it('ADDRESS', () => {
    const address = fakerBr.address();
    expect(address.cep).to.exist;
    expect(address.logradouro).to.exist;
    expect(address.complemento).to.exist;
    expect(address.numero).to.exist;
    expect(address.bairro).to.exist;
    expect(address.cidade).to.exist;
    expect(address.estado).to.exist;
  });

  it('BANKACCOUNT', () => {
    const bankaccount = fakerBr.bankaccount();
    expect(validateBr.bankaccount(bankaccount)).to.be.true;
  });

  it('CELULAR', () => {
    const celular = fakerBr.celular();
    expect(validateBr.celular(celular)).to.be.true;
  });
  it('CEP', () => {
    expect(fakerBr.cep()).to.exist;
    const cep = fakerBr.cep();
    expect(validateBr.cep(cep)).to.be.true;
  });

  it('CERTIDAO - TODO', () => {
    // const certidao = fakerBr.certidao();
    // expect(validateBr.certidao(certidao)).to.be.true;
  });

  it('CHASSI', () => {
    const chassi = fakerBr.chassi();
    expect(validateBr.chassi(chassi)).to.be.true;
  });

  it('CNAE', () => {
    const cnae = fakerBr.cnae();
    expect(validateBr.cnae(cnae)).to.be.true;
  });

  it('CNH', () => {
    const cnh = fakerBr.cnh();
    expect(validateBr.cnh(cnh)).to.be.true;
  });

  it('CNPJ', () => {
    expect(fakerBr.cnpj()).to.exist;
    const cnpj = fakerBr.cnpj();
    expect(validateBr.cnpj(cnpj)).to.be.true;
  });

  it('CNS', () => {
    const cns = fakerBr.cns();
    expect(validateBr.cns(cns)).to.be.true;
  });

  it('COMPANY', () => {
    const company = fakerBr.company();
    expect(company.name).to.exist;
    expect(validateBr.cnpj(company.cnpj)).to.be.true;
    expect(validateBr.telefone(company.telefone)).to.be.true;
    expect(validateBr.celular(company.celular)).to.be.true;
  });

  it('CPF', () => {
    const cpf = fakerBr.cpf();
    expect(fakerBr.cpf()).to.exist;
    expect(validateBr.cpf(cpf)).to.be.true;
  });

  it('CPFCNPJ', () => {
    const cpfcnpj = fakerBr.cpfcnpj();
    expect(validateBr.cpfcnpj(cpfcnpj)).to.be.true;
  });

  it('CREDITCARD - TODO', () => {
    // const creditcard = fakerBr.creditcard();
    // expect(validateBr.creditcard(creditcard)).to.be.true;
  });

  it('Currency', () => {
        // expect(fakerBr.currency()).to.exist;
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

    // expect(fakerBr.inscricaoestadual()).to.exist;
    
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
    // expect(fakerBr.percentage()).to.exist;
    // const percentage = fakerBr.percentage();
    // expect(validateBr.percentage(percentage)).to.be.true;
  });

  it('PIS/PASEP', () => {
    // const pispasep = fakerBr.pispasep();
    // expect(validateBr.pispasep(pispasep)).to.be.true;
  });
  it('PLACA', () => {
    expect(fakerBr.placa()).to.exist;
    const placa = fakerBr.placa();
    expect(validateBr.placa(placa)).to.be.true;
  });
  it('RENAVAM', () => {
    const renavam = fakerBr.renavam();
    expect(validateBr.renavam(renavam)).to.be.true;
  });
  it('RG', () => {
    expect(fakerBr.rg()).to.exist;
    const rg = fakerBr.rg();
    expect(validateBr.rg(rg)).to.be.true;
  });
  it('SPED - TODO', () => {
    // const sped = fakerBr.sped();
    // expect(validateBr.sped(sped)).to.be.true;
  });
  it('Telefone', () => {
    expect(fakerBr.telefone()).to.exist;
    const telefone = fakerBr.telefone();
    expect(validateBr.telefone(telefone)).to.be.true;
  });
  // it('Time', () => {
    // expect(fakerBr.time()).to.exist;
  //   const time = fakerBr.time();
  //   expect(validateBr.time(time)).to.be.true;
  // });
  it('Titulo', () => {
    expect(fakerBr.titulo()).to.exist;
    const titulo = fakerBr.titulo();
    expect(validateBr.titulo(titulo)).to.be.true;
  });

  it('Veículo', () => {
    const veiculo = fakerBr.veiculo();
    expect(veiculo.placa).to.exist;
    expect(veiculo.chassi).to.exist;
    expect(veiculo.marca).to.exist;
    expect(veiculo.modelo).to.exist;
    expect(veiculo.categoria).to.exist;
    expect(veiculo.especie).to.exist;
    expect(veiculo.restricao).to.exist;
    expect(veiculo.tipo).to.exist;
    expect(veiculo.carroceria).to.exist;
    expect(veiculo.combustivel).to.exist;
  });

});