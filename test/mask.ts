import { maskBr, fakerBr, validateBr } from '../index';
import { expect } from 'chai';


const testGeneric = (key) => {
  let val = fakerBr[key]();
  val = val.replace(/[^\d]+/g, '');
  const valMask = maskBr[key](val);
  expect(validateBr[key](valMask)).to.be.true;
}

describe('Mask test', () => {
  it('To generate any data', () => {
    expect(maskBr.cep('123')).to.exist;
    // expect(maskBr.cnpj('123)).to.exist;
    expect(maskBr.cpf('123')).to.exist;
    // expect(maskBr.currency('123)).to.exist;
    // expect(maskBr.inscricaoestadual('123)).to.exist;
    // expect(maskBr.percentage('123)).to.exist;
    expect(maskBr.rg('123')).to.exist;
    expect(maskBr.placa('123')).to.exist;
    expect(maskBr.telefone('123')).to.exist;
    expect(maskBr.time('123')).to.exist;
    expect(maskBr.titulo('123')).to.exist;
  });

  it('Generic Testing with Faker , Mask and Validate', () => {
    testGeneric('cep');
    // testGeneric('cnp');
    // testGeneric('cpf');
    // // testGeneric('currenc');
    // // testGeneric('inscricaoestadua');
    // // testGeneric('percentag');
    // testGeneric('rg');
    // testGeneric('placa');
    // testGeneric('telefone');
    // testGeneric('time');
    // testGeneric('titulo');
  });


  it('CEP', () => {

  });
  // it('CNPJ', () => {
  //   const cnpj = fakerBr.cnpj();
  //   console.log(cnpj)
  //   expect(validateBr.cnpj(cnpj)).to.be.true;
  // });
  // // it('CPF', () => {
  // //   const cpf = fakerBr.cpf();
  // //   expect(validateBr.cpf(cpf)).to.be.true;
  // // });
  // // it('RG', () => {
  // //   const rg = fakerBr.rg();
  // //   expect(validateBr.rg(rg)).to.be.true;
  // // });
  // // it('PLACA', () => {
  // //   const placa = fakerBr.placa();
  // //   expect(validateBr.placa(placa)).to.be.true;
  // // });
  // // it('Telefone', () => {
  // //   const telefone = fakerBr.telefone();
  // //   expect(validateBr.telefone(telefone)).to.be.true;
  // // });
  // // it('Time', () => {
  // //   const time = fakerBr.time();
  // //   expect(validateBr.time(time)).to.be.true;
  // // });
  // // it('Titulo', () => {
  // //   const titulo = fakerBr.titulo();
  // //   expect(validateBr.titulo(titulo)).to.be.true;
  // // });
  // it('Others', () => {
  //   // const currency  = fakerBr.currency();
  //   // expect(validateBr.currency(currency)).to.be.true;

  //   // const inscricaoestadual  = fakerBr.inscricaoestadual();
  //   // expect(validateBr.inscricaoestadual(inscricaoestadual)).to.be.true;

  //   // const percentage  = fakerBr.percentage();
  //   // expect(validateBr.percentage(percentage)).to.be.true;
  // });

});