import { maskBr, fakerBr, validateBr } from '../index';
import { expect } from 'chai';


const testGeneric = (key: string) => {
  let val = fakerBr[key]();
  val = val.replace(/[^\d\w]+/g, '');
  const valMask = maskBr[key](val);
  expect(validateBr[key](valMask)).to.be.true;
}

const testGenericIPTU = (estado: string, cidade: string) => {
  let val = fakerBr['iptu'](estado, cidade);
  val = val.replace(/[^\d\w]+/g, '');
  const valMask = maskBr['iptu'](val, estado, cidade);
  expect(validateBr['iptu'](valMask, estado, cidade)).to.be.true;
}

describe('Mask test', () => {

  it('AIH', () => {
    const aih = '3519234143128';
    expect(maskBr.aih(aih)).to.be.equal('351923414312-8');
  });

  it('endereco - TODO', () => {
    const endereco = '12312345121';
    // expect(maskBr.endereco(endereco)).to.be.equal('123.12345.12-1');
    // testGeneric('endereco');
  });

  it('contabanco - TODO', () => {
    const contabanco = '12312345121';
    // expect(maskBr.contabanco(contabanco)).to.be.equal('123.12345.12-1');
    // testGeneric('contabanco');
  });

  it('celular', () => {
    const celular = '31999915454';
    expect(maskBr.celular(celular)).to.be.equal('(31) 99991-5454');
    testGeneric('celular');
  });

  it('CEP', () => {
    const cep = '30456098';
    expect(maskBr.cep(cep)).to.be.equal('30.456-098');
    testGeneric('cep');
    expect(maskBr.cep('123')).to.exist;
  });

  it('Certidão', () => {
    const certidao = '10453901552013100012021000012321';
    const mask = maskBr.certidao(certidao);
    expect(mask).to.be.equal('104539.01.55.2013.1.00012.021.0000123-21');
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

  it('CNH - BINCO', () => {
    const cnh = '99739507132';
    expect(maskBr.cnh(cnh)).to.be.equal('997395071-32');
    testGeneric('cnh');
  });

  it('RENACH SEGURANÇA CNH', () => {
    const renachseguranca = '51474546854';
    expect(maskBr.renachseguranca(renachseguranca)).to.be.equal('51474546854');
    testGeneric('renachseguranca');
  });

  it('RENACH ESTADUAL CNH', () => {
    const renachestadual = 'MG597812560';
    expect(maskBr.renachestadual(renachestadual)).to.be.equal('MG597812560');
  });

  it('ESPELHO CNH', () => {
    const cnhespelho = '2318339130';
    expect(maskBr.cnhespelho(cnhespelho)).to.be.equal('2318339130');
    testGeneric('cnhespelho');
  });

  it('CNPJ', () => {
    const cnpj = '83529443183182';
    expect(maskBr.cnpj(cnpj)).to.be.equal('83.529.443/1831-82');
    expect(maskBr.cnpj('123')).to.exist;
    testGeneric('cnpj');
  });

  it('CNS', () => {
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

  it('cartaocredito - TODO', () => {
    const cartaocredito = '12312345121';
    // expect(maskBr.cartaocredito(cartaocredito)).to.be.equal('123.12345.12-1');
    // testGeneric('cartaocredito');
  });


  it('DATA', () => {
    const data = '01/12/1980';
    expect(maskBr.data(data)).to.be.equal('01/12/1980');
    testGeneric('data');
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

    expect(maskBr.inscricaoestadual('1234567-48', 'ba')).to.be.equal('1234567-48');
    expect(maskBr.inscricaoestadual('123456-63', 'ba')).to.be.equal('123456-63');
    expect(maskBr.inscricaoestadual('1 6 2 3 4 5 6 -5 1', 'ba')).to.be.equal('1623456-51');
  });

  it('IPTU', () => {
    expect(maskBr.iptu('1231234512132', 'minas-gerais', 'belo-horizonte')).to.be.equal('123.123.451.213.2');
    testGenericIPTU('minas-gerais', 'belo-horizonte');

    expect(maskBr.iptu('123456789012', 'sao-paulo', 'sao-paulo')).to.be.equal('12345678901-2');
    testGenericIPTU('sao-paulo', 'sao-paulo');

    expect(maskBr.iptu('123456789012', 'parana', 'curitiba')).to.be.equal('12345678901-2');
    // testGenericIPTU('parana','curitiba');
  });

  it('Número', () => {
    const number = '1234,10';
    expect(maskBr.number(number)).to.be.equal('1.234,10');
    expect(maskBr.number(1234.10)).to.be.equal('1.234,10');
    expect(maskBr.number(1234, 0)).to.be.equal('1.234');
    expect(maskBr.number(1234.56, 1)).to.be.equal('1.234,5');
    expect(maskBr.number(1234.56, 2)).to.be.equal('1.234,56');
    expect(maskBr.number(1234.565, 3)).to.be.equal('1.234,565');
    expect(maskBr.number(1234.5656, 4)).to.be.equal('1.234,5656');
  });


  it('Moeda', () => {
    const currency = 'R$ 5.103,94';
    const currencyText = '5.103,94';
    const currencyNumber = 5103.94;
    const currencyNoDecimals = 'R$ 5.103';
    const currencyTextNoDecimals = '5.103';
    const currencyNumberNoDecimals = 5103;
    const currencyNumberMany = 5103.9423234;
    const currencyTextNegative = '-5.103,94';
    const currencyNumberNegative = -125.95;
    const currencyNegative = '-R$ 5.103,94';

    expect(maskBr.currency(currencyNoDecimals)).to.be.equal('R$ 5.103,00');
    expect(maskBr.currency(currencyTextNoDecimals)).to.be.equal('R$ 5.103,00');
    expect(maskBr.currency(currencyNumberNoDecimals)).to.be.equal('R$ 5.103,00');

    expect(maskBr.currency(currency)).to.be.equal('R$ 5.103,94');
    expect(maskBr.currency(currencyNumber)).to.be.equal('R$ 5.103,94');
    expect(maskBr.currency(currencyText)).to.be.equal('R$ 5.103,94');
    expect(maskBr.currency(currencyNumberMany)).to.be.equal('R$ 5.103,94');
    expect(maskBr.currency(currencyTextNegative)).to.be.equal('-R$ 5.103,94');
    expect(maskBr.currency(currencyNumberNegative)).to.be.equal('-R$ 125,95');
    expect(maskBr.currency(currencyNegative)).to.be.equal('-R$ 5.103,94');

    expect(maskBr.currency(currencyNumberMany,0)).to.be.equal('R$ 5.103');
    expect(maskBr.currency(currencyNumberMany,1)).to.be.equal('R$ 5.103,9');
    expect(maskBr.currency(currencyNumberMany,2)).to.be.equal('R$ 5.103,94');
    expect(maskBr.currency(currencyNumberMany,3)).to.be.equal('R$ 5.103,942');
    expect(maskBr.currency(currencyNumberMany,4)).to.be.equal('R$ 5.103,9423');

    const currencyNumberBig = 1239999999.99
    expect(maskBr.currency(currencyNumberBig)).to.be.equal('R$ 1.239.999.999,99');
    expect(maskBr.currency(0)).to.be.equal('R$ 0,00');
    expect(maskBr.currency(25.5)).to.be.equal('R$ 25,50');
  });

  it('PIS/PASEP', () => {
    const pispasep = '12312345121';
    expect(maskBr.pispasep(pispasep)).to.be.equal('123.12345.12-1');
  });

  it('PLACA', () => {
    const placa = 'ABC1234';
    expect(maskBr.placa(placa)).to.be.equal('ABC-1234');
    testGeneric('placa');
    expect(maskBr.placa('123')).to.exist;
  });

  it('Porcentagem', () => {
    const porcentagem = '80';
    expect(maskBr.porcentagem(porcentagem)).to.be.equal('80,00%');
    expect(maskBr.porcentagem('65,10')).to.be.equal('65,10%');


    const porcentagemFull = '80,5656';
    expect(maskBr.porcentagem(porcentagemFull,0)).to.be.equal('80%');
    expect(maskBr.porcentagem(porcentagemFull,1)).to.be.equal('80,5%');
    expect(maskBr.porcentagem(porcentagemFull,2)).to.be.equal('80,56%');
    expect(maskBr.porcentagem(porcentagemFull,3)).to.be.equal('80,565%');
    expect(maskBr.porcentagem(porcentagemFull,4)).to.be.equal('80,5656%');
  });

  it('Processos', () => {
    const processo = '5613309901450BBP4943';
    expect(maskBr.processo(processo)).to.be.equal('5613309-90.1450.BBP.4943');
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

  it('SPED', () => {
    const sped = '313500350012';
    expect(maskBr.sped(sped)).to.be.equal('3135.0035.0012');
    // testGeneric('sped');
    expect(maskBr.sped('123')).to.exist;
  });

  context('Telefone', () => {
    it('Fixo', () => {
      const telefone = '3135003500';
      expect(maskBr.telefone(telefone)).to.be.equal('(31) 3500-3500');
      expect(maskBr.telefone('123')).to.exist;

      expect(maskBr.telefone('4735003500')).to.be.equal('(47) 3500-3500');
      expect(maskBr.telefone('6135003500')).to.be.equal('(61) 3500-3500');
      expect(maskBr.telefone('4935003500')).to.be.equal('(49) 3500-3500');
    });

    it('9 Digito', () => {
      const telefone = '31988886565';
      expect(maskBr.telefone(telefone)).to.be.equal('(31) 98888-6565');
      expect(maskBr.telefone('47935003500')).to.be.equal('(47) 93500-3500');
      expect(maskBr.telefone('61935003500')).to.be.equal('(61) 93500-3500');
      expect(maskBr.telefone('49935003500')).to.be.equal('(49) 93500-3500');
    });
  });

  it('Time', () => {
    const time = fakerBr.time();
    expect(validateBr.time(time)).to.be.true;
    expect(validateBr.time('23:61')).to.be.false;
    expect(validateBr.time('33:58', { diario: true })).to.be.false;
  });

  it('Titulo', () => {
    const titulo = fakerBr.titulo();
    expect(validateBr.titulo(titulo)).to.be.true;
    testGeneric('titulo');
    expect(maskBr.titulo('123')).to.exist;
  });

  it('Others', () => {
    // const currency  = fakerBr.currency();
    // expect(validateBr.currency(currency)).to.be.true;
    // const porcentagem  = fakerBr.porcentagem();
    // expect(validateBr.porcentagem(porcentagem)).to.be.true;
    // expect(maskBr.porcentagem('123')).to.exist;
    // expect(maskBr.time('123')).to.exist;
    // testGeneric('porcentagem');
    // testGeneric('time');
  });

});