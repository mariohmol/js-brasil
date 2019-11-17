import { fakerBr, validateBr } from '../index';
import { expect } from 'chai';

describe('Faker test', () => {

  it('AIH', () => {
    const aih = fakerBr.aih();
    expect(validateBr.aih(aih)).to.be.true;
  });

  it('Cartão Crédito - TODO', () => {
    // const cartaocredito = fakerBr.cartaocredito();
    // expect(validateBr.cartaocredito(cartaocredito)).to.be.true;
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

  it('Certidão', () => {
    const certidao = fakerBr.certidao();
    expect(validateBr.certidao(certidao)).to.be.true;
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

  it('ContaBancária', () => {
    const contabanco = fakerBr.contabanco();
    expect(validateBr.contabanco(contabanco)).to.be.true;
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

  it('Currency', () => {
    // expect(fakerBr.currency()).to.exist;
    // const currency = fakerBr.currency();
    // expect(validateBr.currency(currency)).to.be.true;
    const currencyNumber = fakerBr.currencyNumber();
    expect(validateBr.currency(currencyNumber)).to.be.true;
  });

  it('data', () => {
    let data = fakerBr.data();
    expect(validateBr.data(data)).to.be.true;
    data = fakerBr.data({
      idadeMin: 18,
      idadeMax: 40
    });
    expect(validateBr.data(data)).to.be.true;
  });


  it('ECT', () => {
    const ect = fakerBr.ect();
    expect(validateBr.ect(ect)).to.be.true;
  });

  it('Email', () => {
    let email = fakerBr.email();
    expect(validateBr.email(email)).to.be.true;

    email = fakerBr.email({
      nome: 'mario mol',
      empresa: 'JS Brasil',
    });
    expect(validateBr.email(email)).to.be.true;
  });

  it('Empresa', () => {
    const empresa = fakerBr.empresa();
    expect(empresa.nome).to.exist;
    expect(validateBr.cnpj(empresa.cnpj)).to.be.true;
    expect(validateBr.telefone(empresa.telefone)).to.be.true;
    expect(validateBr.telefone(empresa.celular)).to.be.true;
    expect(validateBr.email(empresa.email)).to.be.true;
    // expect(validateBr.inscricaoestadual(empresa.inscricaoestadual)).to.be.true;
    expect(empresa.endereco).to.exist;
    expect(empresa.inscricaoestadual).to.exist;
  });

  it('Endereço', () => {
    const endereco = fakerBr.endereco();
    expect(endereco.cep).to.exist;
    expect(endereco.logradouro).to.exist;
    expect(endereco.complemento).to.exist;
    expect(endereco.numero).to.exist;
    expect(endereco.bairro).to.exist;
    expect(endereco.cidade).to.exist;
    expect(endereco.estado).to.exist;
    expect(endereco.estadoSigla).to.exist;
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

  it('Pessoa', () => {
    const pessoa = fakerBr.pessoa();
    expect(pessoa.nome).to.exist;
    expect(pessoa.mae).to.exist;
    expect(pessoa.pai).to.exist;
    expect(pessoa.pai).to.exist;
    expect(pessoa.endereco).to.exist;

    expect(pessoa.usuario).to.exist;
    expect(pessoa.senha).to.exist;
    expect(pessoa.site).to.exist;

    expect(pessoa.altura).to.exist;
    expect(pessoa.peso).to.exist;
    expect(pessoa.signo).to.exist;
    expect(pessoa.tipoSanguineo).to.exist;

    expect(validateBr.rg(pessoa.rg)).to.be.true;
    expect(validateBr.email(pessoa.email)).to.be.true;
    expect(validateBr.cpf(pessoa.cpf)).to.be.true;
    expect(validateBr.telefone(pessoa.telefone)).to.be.true;
    expect(validateBr.celular(pessoa.celular)).to.be.true;
    expect(validateBr.data(pessoa.dataNascimento)).to.be.true;
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