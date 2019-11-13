import { validateBr } from '../index';
import { expect } from 'chai';

describe('Validate test', () => {

  it('Celular', () => {
    // expect(validateBr.celular('31 999876767')).to.be.true;
    expect(validateBr.celular('31 99876767')).to.be.false;
    // expect(validateBr.celular('(90) 1057-1600')).to.be.true;
    // expect(validateBr.celular('(90) 00057-1600')).to.be.false;
    expect(validateBr.celular('1234')).to.be.false;
  });

  it('CEP', () => {
    expect(validateBr.cep('30.380-123')).to.be.true;
    expect(validateBr.cep('1234')).to.be.false;
  });

  it('Certidão', () => {
    expect(validateBr.certidao('104539.01.55.2013.1.00012.021.0000123-21')).to.be.true;
    expect(validateBr.certidao('10453901552013100012021000012321')).to.be.true;
    expect(validateBr.certidao('10453901552013100012021000012322')).to.be.false;
  });


  it('Chassi', () => {
    // 1 - Possuir o número "0" (ZERO) como 1º dígito.
    expect(validateBr.chassi('0BWZZZ377VT004251')).to.be.false;
    // 2 - Possuir espaço no chassi -- ele deve limpar o espaço
    expect(validateBr.chassi('9BWZZZ377 T004251')).to.be.true;
    // 3 - Se, a partir do 4º dígito, houver uma repetição consecutiva, por mais de seis vezes, do mesmo dígito (alfabético ou numérico).
    // Exemplos: 9BW11111119452687 e 9BWZZZ5268AAAAAAA.
    expect(validateBr.chassi('9BW11111119452687')).to.be.false;
    expect(validateBr.chassi('9BWZZZ5268AAAAAAA')).to.be.false;
    // 4 - Apresente os caracteres "i", "I", "o", "O", "q", "Q".
    expect(validateBr.chassi('9BWZZZ377IT004251')).to.be.false;
    // 5 - Os quatro últimos caracteres devem ser obrigatoriamente numéricos
    expect(validateBr.chassi('9BWZZZ377VT00A251')).to.be.false;
    // 6 - Se possuir número de dígitos diferente de 17 (alfanuméricos). 
    expect(validateBr.chassi('9BWZZZ377VT0042512')).to.be.false;
    expect(validateBr.chassi('9BWZZZ377VT004251')).to.be.true;
  });

  it('CNH', () => {
    expect(validateBr.cnh('9973')).to.be.false;
    expect(validateBr.cnh('997395071-33')).to.be.true;
    expect(validateBr.cnh('99739507133')).to.be.true;
    expect(validateBr.cnh('997395071-31')).to.be.false;
    expect(validateBr.cnh('99739507131')).to.be.false;
  });

  it('CNPJ', () => {
    expect(validateBr.cnpj('56.853.433/0001-44')).to.be.true;
    expect(validateBr.cnpj('1234')).to.be.false;
  });

  it('CNS', () => {
    expect(validateBr.cns('755845919762262')).to.be.true;
    expect(validateBr.cns('755 8459 1976 22-62')).to.be.true;
    expect(validateBr.cns('755845919762263')).to.be.false;
    expect(validateBr.cns('755 8459 1976 22-63')).to.be.false;
  });

  it('CPF', () => {
    expect(validateBr.cpf('127.529.875-36')).to.be.true;
    expect(validateBr.cpf('090.988.020-44')).to.be.true;
    expect(validateBr.cpf('127.529.875-46')).to.be.false;
    expect(validateBr.cpf('127.529.875-37')).to.be.false;
    expect(validateBr.cpf('00.000.000/0000-00')).to.be.false;
    expect(validateBr.cpf('1234')).to.be.false;
  });


  it('Credit Card - TODO', () => {
    // expect(validateBr.cartaocredito('56.853.433/0001-44')).to.be.true;
    // expect(validateBr.cartaocredito('1234')).to.be.false;
  });

  context('Currency', () => {
    it('Pass when valid', () => {
      // expect(validateBr.currency('R$ 1234')).to.be.true;
      expect(validateBr.currency('R$ 1234,10')).to.be.true;
      expect(validateBr.currency('R$ 1.234,10')).to.be.true;
      expect(validateBr.currency('1234,56')).to.be.true;
      expect(validateBr.currency('1.234,56')).to.be.true;
    });
    it('Error when not valid', () => {
      expect(validateBr.currency('$1234')).to.be.false;
      expect(validateBr.currency('1,234.00')).to.be.false;
    });
  })

  it('ECT', () => {
    expect(validateBr.ect('31529649-0')).to.be.true;
    expect(validateBr.ect('31529649-1')).to.be.false;
    expect(validateBr.ect('315296490')).to.be.true;
    expect(validateBr.ect('315296491')).to.be.false;
  });

  it('Inscricao Estadual', () => {
    expect(validateBr.inscricaoestadual('862.445.372/2351', 'mg')).to.be.true;
    expect(validateBr.inscricaoestadual('094.290.083', 'sc')).to.be.true;
    expect(validateBr.inscricaoestadual('094.290.0839', 'sc')).to.be.false;
    expect(validateBr.inscricaoestadual('111111111111', 'mg').message).to.be.equal('ie com todos dígitos iguais');
    expect(validateBr.inscricaoestadual('1234', 'mg')).to.be.false;
  });

  it('IPTU - TODO', () => {
    // expect(validateBr.ect('473124829')).to.be.true;
    // expect(validateBr.ect('473124828')).to.be.false;
  });

  it('Number - TODO', () => {
    // expect(validateBr.number('473124829')).to.be.true;
    // expect(validateBr.number('473124828')).to.be.false;
  });

  // context('Percentage', () => {
  //   it('Pass when valid', () => {
  //     expect(validateBr.percentage('10')).to.be.true;
  //   });
  //   it('Error when not valid', () => {
  //     expect(validateBr.percentage('1234')).to.be.false;
  //   });
  // });

  context('PIS/PASEP', () => {
    it('Pass when valid', () => {
      // expect(validateBr.pispasep('103.12345.12-1')).to.be.true;
    });
    it('Error when not valid', () => {
      expect(validateBr.pispasep('1234')).to.be.false;
    });
  });

  it('PLACA', () => {
    expect(validateBr.placa('ABC1234')).to.be.true;
    expect(validateBr.placa('SAW0002')).to.be.false;
    expect(validateBr.placa('1234')).to.be.false;
  });


  it('PROCESSO', () => {
    // expect(validateBr.processo('0123456-15.2008.100.0000')).to.be.true;
  });

  it('RENAVAM', () => {
    expect(validateBr.renavam('72176426415')).to.be.true;
    expect(validateBr.renavam('72176426415')).to.be.true;
  });

  it('RG', () => {
    expect(validateBr.rg('mg 11124567')).to.be.true;
    expect(validateBr.rg('1234')).to.be.false;
  });

  it('Telefone', () => {
    expect(validateBr.telefone('31 99876767')).to.be.true;
    expect(validateBr.telefone('(90) 1057-1600')).to.be.true;
    expect(validateBr.telefone('(90) 0057-1600')).to.be.false;
    expect(validateBr.telefone('1234')).to.be.false;
  });

  it('Time', () => {
    expect(validateBr.time('1234')).to.be.false;
  });

  context('TITULO', () => {
    it('Test digito verificador', () => {
      expect(validateBr.titulo('6490.8084.2003')).to.be.true;
      expect(validateBr.titulo('6490.8084.2022')).to.be.false;
      expect(validateBr.titulo('1234')).to.be.false;
    });

    it('Test Sao Paulo e Minas Gerais', () => {
      //Para os títulos emitidos em São Paulo ou Minas Gerais (UF 01 ou 02), o resto 0 no cálculo do 1º ou do 2º DV será assumido como 1.
      // expect(validateBr.titulo('0072.0235.0108')).to.be.true;
      // expect(validateBr.titulo('0674.0580.0108')).to.be.true;

      expect(validateBr.titulo('0072.0235.0116')).to.be.true;
      expect(validateBr.titulo('0674.0580.0116')).to.be.true;
    });
  });


});
