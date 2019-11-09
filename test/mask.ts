import { maskBr, fakerBr, validateBr } from '../index';
import { expect } from 'chai';


const testGeneric = (key) => {
  let val = fakerBr[key]();
  val = val.replace(/[^\d\w]+/g, '');
  const valMask = maskBr[key](val);
  expect(validateBr[key](valMask)).to.be.true;
}

describe('Mask test', () => {
  it('To generate any data', () => {
    expect(maskBr.inscricaoestadual('mg', '123')).to.exist;
    expect(maskBr.percentage('123')).to.exist;
    expect(maskBr.time('123')).to.exist;
    
    // testGeneric('inscricaoestadual');
    // testGeneric('percentage');
    // testGeneric('time');
  });

  it('CEP', () => {
    const cep = '30456098';
    expect(maskBr.cep(cep)).to.be.equal('30.456-098');
    testGeneric('cep');
    expect(maskBr.cep('123')).to.exist;
  });
  it('CNPJ', () => {
    const cnpj = '83529443183182';
    expect(maskBr.cnpj(cnpj)).to.be.equal('83.529.443/1831-82');
    expect(maskBr.cnpj('123')).to.exist;
    testGeneric('cnpj');
  });
  it('CPF', () => {
    const cpf = '92044202271';
    expect(maskBr.cpf(cpf)).to.be.equal('920.442.022-71');
    testGeneric('cpf');
    expect(maskBr.cpf('123')).to.exist;
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

  it('PIS/PASEP', () => {
    const pispasep = '12312345121';
    expect(maskBr.pispasep(pispasep)).to.be.equal('123.12345.12-1');
    testGeneric('pispasep');
  });
  it('PLACA', () => {
    const placa = 'ABC1234';
    expect(maskBr.placa(placa)).to.be.equal('ABC-1234');
    testGeneric('placa');
    expect(maskBr.placa('123')).to.exist;
  });
  it('Processos', () => {
    // const processo = '000001001520081000000';
    // expect(maskBr.processo(processo)).to.be.equal('00000100-15.2008.100.0000');
    // testGeneric('processo');
    expect(maskBr.processo('123')).to.exist;
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

    // const inscricaoestadual  = fakerBr.inscricaoestadual();
    // expect(validateBr.inscricaoestadual(inscricaoestadual)).to.be.true;

    // const percentage  = fakerBr.percentage();
    // expect(validateBr.percentage(percentage)).to.be.true;
  });

});