import { maskBr, fakerBr, validateBr } from '../index';
import { expect } from 'chai';


const testGeneric = (key) => {
  let val = fakerBr[key]();
  val = val.replace(/[^\d\w]+/g, '');
  const valMask = maskBr[key](val);
  expect(validateBr[key](valMask)).to.be.true;
}

describe('Mask test', () => {

  it('address - TODO', () => {
    const address = '12312345121';
    // expect(maskBr.address(address)).to.be.equal('123.12345.12-1');
    // testGeneric('address');
  });

  it('bankaccount - TODO', () => {
    const bankaccount = '12312345121';
    // expect(maskBr.bankaccount(bankaccount)).to.be.equal('123.12345.12-1');
    // testGeneric('bankaccount');
  });

  it('celular - TODO', () => {
    const celular = '12312345121';
    // expect(maskBr.celular(celular)).to.be.equal('123.12345.12-1');
    // testGeneric('celular');
  });

  it('CEP', () => {
    const cep = '30456098';
    expect(maskBr.cep(cep)).to.be.equal('30.456-098');
    testGeneric('cep');
    expect(maskBr.cep('123')).to.exist;
  });

  it('certidao - TODO', () => {
    const certidao = '12312345121';
    // expect(maskBr.certidao(certidao)).to.be.equal('123.12345.12-1');
    // testGeneric('certidao');
  });

  it('CHASSI', () => {
    const chassi = '9BWZZZ377VT004251';
    expect(maskBr.chassi(chassi)).to.be.equal('9BW ZZZ377 VT 004251');
    testGeneric('chassi');
  });

  

  it('cnae - TODO', () => {
    const cnae = '12312345121';
    // expect(maskBr.cnae(cnae)).to.be.equal('123.12345.12-1');
    // testGeneric('cnae');
  });

  it('CNH', () => {
    const cnh = '99739507132';
    expect(maskBr.cnh(cnh)).to.be.equal('997395071-32');
    testGeneric('cnh');
  });

  it('CNPJ', () => {
    const cnpj = '83529443183182';
    expect(maskBr.cnpj(cnpj)).to.be.equal('83.529.443/1831-82');
    expect(maskBr.cnpj('123')).to.exist;
    testGeneric('cnpj');
  });

  it('cns', () => {
    const cns = '755845919762262';
    expect(maskBr.cns(cns)).to.be.equal('755 8459 1976 22-62');
  });

  it('CPF', () => {
    const cpf = '92044202271';
    expect(maskBr.cpf(cpf)).to.be.equal('920.442.022-71');
    testGeneric('cpf');
    expect(maskBr.cpf('123')).to.exist;
  });

  it('cpfcnpj - TODO', () => {
    const cpfcnpj = '12312345121';
    // expect(maskBr.cpfcnpj(cpfcnpj)).to.be.equal('123.12345.12-1');
    // testGeneric('cpfcnpj');
  });

  it('creditcard - TODO', () => {
    const creditcard = '12312345121';
    // expect(maskBr.creditcard(creditcard)).to.be.equal('123.12345.12-1');
    // testGeneric('creditcard');
  });
  it('Currency', () => {
    const currency = 'R$ 5.103,94';
    const currencyText = '5.103,94';
    const currencyNumber = 5103.94;
    const currencyNoDecimals = 'R$ 5.103';
    const currencyTextNoDecimals = '5.103';
    const currencyNumberNoDecimals = 5103;
    const currencyNumberMany = 5103.9423234;

    expect(maskBr.currency(currencyNoDecimals)).to.be.equal('R$ 5.103,00');
    expect(maskBr.currency(currencyTextNoDecimals)).to.be.equal('R$ 5.103,00');
    expect(maskBr.currency(currencyNumberNoDecimals)).to.be.equal('R$ 5.103,00');

    expect(maskBr.currency(currency)).to.be.equal('R$ 5.103,94');
    expect(maskBr.currency(currencyNumber)).to.be.equal('R$ 5.103,94');
    expect(maskBr.currency(currencyText)).to.be.equal('R$ 5.103,94');
    expect(maskBr.currency(currencyNumberMany)).to.be.equal('R$ 5.103,94');
    // testGeneric('currency');
    // expect(maskBr.currency('123')).to.exist;
    // expect(maskBr.currency(123)).to.exist;
  });

  it('date - TODO', () => {
    const date = '12312345121';
    // expect(maskBr.date(date)).to.be.equal('123.12345.12-1');
    // testGeneric('date');
  });

  it('ECT', () => {
    const ect = '315296490';
    expect(maskBr.ect(ect)).to.be.equal('31529649-0');
    testGeneric('ect');
  });

  it('Inscricao estadual', () => {
    const estado = 'mg';
    expect(maskBr.inscricaoestadual(estado, '123')).to.exist;
    const inscricaoestadual = fakerBr.inscricaoestadual(estado);
    expect(validateBr.inscricaoestadual(inscricaoestadual, estado)).to.be.true;
  });

  it('iptu - TODO', () => {
    const iptu = '12312345121';
    // expect(maskBr.iptu(iptu)).to.be.equal('123.12345.12-1');
    // testGeneric('iptu');
  });

  it('number - TODO', () => {
    const number = '12312345121';
    // expect(maskBr.number(number)).to.be.equal('123.12345.12-1');
    // testGeneric('number');
  });


  it('Percentage - TODO', () => {
    const pispasep = '12312345121';
    // expect(maskBr.pispasep(pispasep)).to.be.equal('123.12345.12-1');
    // testGeneric('pispasep');
  });

  it('PIS/PASEP - TODO', () => {
    const pispasep = '12312345121';
    // expect(maskBr.pispasep(pispasep)).to.be.equal('123.12345.12-1');
    // testGeneric('pispasep');
  });
  it('PLACA', () => {
    const placa = 'ABC1234';
    expect(maskBr.placa(placa)).to.be.equal('ABC-1234');
    testGeneric('placa');
    expect(maskBr.placa('123')).to.exist;
  });
  it('Processos - TODO', () => {
    const processo = '5613309901450BBP4943';
    // expect(maskBr.processo(processo)).to.be.equal('5613309-90.1450.BBP.4943');
    // testGeneric('processo');
    // expect(maskBr.processo('123')).to.exist;
  });

  it('Renavam', () => {
    testGeneric('renavam');
  });

  it('RG MG', () => {
    const rg = 'mg11164324';
    expect(maskBr.rg(rg)).to.be.equal('mg-11.164.324');
    testGeneric('rg');
    expect(maskBr.rg('123')).to.exist;
  });
  it('SPED', () => {
    const sped = '313500350012';
    expect(maskBr.sped(sped)).to.be.equal('3135.0035.0012');
    // testGeneric('sped');
    expect(maskBr.sped('123')).to.exist;
  });
  it('Telefone', () => {
    const telefone = '3135003500';
    expect(maskBr.telefone(telefone)).to.be.equal('(31) 3500-3500');
    // testGeneric('telefone');
    expect(maskBr.telefone('123')).to.exist;
  });
  it('Telefone 9 Digito', () => {
    const telefone = '31988886565';
    expect(maskBr.telefone(telefone)).to.be.equal('(31) 98888-6565');
  });

  // it('Time', () => {
  //   const time = fakerBr.time();
  //   expect(validateBr.time(time)).to.be.true;
  // });
  it('Titulo', () => {
    const titulo = fakerBr.titulo();
    expect(validateBr.titulo(titulo)).to.be.true;
    testGeneric('titulo');
    expect(maskBr.titulo('123')).to.exist;
  });


  it('Others', () => {
    // const currency  = fakerBr.currency();
    // expect(validateBr.currency(currency)).to.be.true;
    // const percentage  = fakerBr.percentage();
    // expect(validateBr.percentage(percentage)).to.be.true;
    // expect(maskBr.percentage('123')).to.exist;
    // expect(maskBr.time('123')).to.exist;
    // testGeneric('percentage');
    // testGeneric('time');
  });

});