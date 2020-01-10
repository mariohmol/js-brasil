import { validateBr } from '../index';
import { expect } from 'chai';

describe('Validate test', () => {

  it('AIH', () => {
    expect(validateBr.aih('351923414312-8')).to.be.true;
    expect(validateBr.aih('212019114312-5')).to.be.true;
    expect(validateBr.aih('3519234143128')).to.be.true;
    expect(validateBr.aih('2120191143125')).to.be.true;
    expect(validateBr.aih('351923414312-9')).to.be.false;
    expect(validateBr.aih('3519234143129')).to.be.false;
  });

  it('Celular', () => {
    expect(validateBr.celular('31 999876767')).to.be.true;
    expect(validateBr.celular('31 99876767')).to.be.false;
    expect(validateBr.celular('(90) 00057-1600')).to.be.false;
    expect(validateBr.celular('1234')).to.be.false;
  });

  it('CEP', () => {
    expect(validateBr.cep('30.380-123')).to.be.true;
    expect(validateBr.cep('30380123')).to.be.true;
    expect(validateBr.cep('1234')).to.be.false;
    expect(validateBr.cep('999999999')).to.be.false;
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

  it('CANE - TODO', () => {
    // expect(validateBr.cnae('9973')).to.be.false;
    // expect(validateBr.cnae('997395071-33')).to.be.true;
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
    expect(validateBr.cnpj('56.853.433/0001-55')).to.be.false;
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

  context('Cartão de Crédito', () => {
    it('Varios numeros', () => {
      const cards = [
        //Visa
        4188070876106948,
        4828520877461391,
        4235847202560382,
        4583169254516867,
        4127767936125719,

        // MasterCard
        5544041389465929,
        5534440068754722,
        5494914497723795,
        5314873598838001,
        5224028755804580,

        // Discover
        6011523319985755,
        6011530975815416,
        6011855196654181,
        6011863578329737,
        6011156237485580,

        // AmericanExpress
        377746315429590,
        371710805536914,
        372480110818253,
        349390722611337,
        343993210018935,

        // JCB
        3558158014498220,
        3548269233562333,
        3529944014226604,
        3558044445895491,
        3528714886433609];

      cards.forEach(card => {
        expect(validateBr.cartaocredito(card)).to.be.true;
      });
    })
    it('Completo', () => {
      expect(validateBr.cartaocredito('4688966912267492 01/21 488')).to.be.true;
      expect(validateBr.cartaocredito('4688966912267492 01/19 488')).to.be.false;
      expect(validateBr.cartaocredito('4688966912267492 10/19 488')).to.be.false;
      expect(validateBr.cartaocredito('1234')).to.be.false;
    });
  });

  it('Data', () => {
    expect(validateBr.data('01/12/1980')).to.be.true;
    expect(validateBr.data('01/13/1980')).to.be.false;
    expect(validateBr.data('32/12/1980')).to.be.false;
    expect(validateBr.data('')).to.be.false;
    expect(validateBr.data(null)).to.be.false;
    expect(validateBr.data('32')).to.be.false;
    expect(validateBr.data('32/12')).to.be.false;
    expect(validateBr.data('32/12/')).to.be.false;
  });

  context('Moeda', () => {
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

  it('EMAIL', () => {
    expect(validateBr.email('mario@js-brasil.com')).to.be.true;
    expect(validateBr.email('mario@js brasil.com')).to.be.false;
    expect(validateBr.email('mario@js-brasilcom')).to.be.false;
    expect(validateBr.email('mariojs-brasil.com')).to.be.false;
  });

  it('Inscricao Estadual', () => {
    expect(validateBr.inscricaoestadual('862.445.372/2351', 'mg')).to.be.true;
    expect(validateBr.inscricaoestadual('094.290.083', 'sc')).to.be.true;
    expect(validateBr.inscricaoestadual('094.290.0839', 'sc')).to.be.false;
    expect(validateBr.inscricaoestadual('111111111111', 'mg').message).to.be.equal('ie com todos dígitos iguais');
    expect(validateBr.inscricaoestadual('1234', 'mg')).to.be.false;
  });

  it('IPTU', () => {
    expect(validateBr.iptu('668.686.179.694.6', 'minas-gerais', 'belo-horizonte')).to.be.true;
    expect(validateBr.iptu('68152735387-9', 'sao-paulo', 'sao-paulo')).to.be.true;
    // expect(validateBr.iptu('12891948261-2','parana','curitiba')).to.be.true;
  });

  it('Número', () => {
    expect(validateBr.number('473124829')).to.be.true;
    expect(validateBr.number('473.12,48,28,1231231312')).to.be.false;
  });

  context('Porcentagem', () => {
    it('Pass when valid', () => {
      expect(validateBr.porcentagem('10')).to.be.true;
      expect(validateBr.porcentagem('10%')).to.be.true;
      expect(validateBr.porcentagem('1.000%')).to.be.true;
      expect(validateBr.porcentagem('1.000,10%')).to.be.true;
    });
    it('Error when not valid', () => {
      expect(validateBr.porcentagem('1234,23,23')).to.be.false;
    });
  });

  context('PIS/PASEP', () => {
    it('Pass when valid', () => {
      expect(validateBr.pispasep('648.60185.98-9')).to.be.true;
    });
    it('Error when not valid', () => {
      expect(validateBr.pispasep('648.60185.98-2')).to.be.false;
      expect(validateBr.pispasep('1234')).to.be.false;
    });
  });

  it('PLACA', () => {
    expect(validateBr.placa('ABC1234')).to.be.true;
    expect(validateBr.placa('SAW0002')).to.be.false;
    expect(validateBr.placa('1234')).to.be.false;
  });

  // it.only('PROCESSO', () => {
  //   // expect(validateBr.processo('0123456-15.2008.100.0000')).to.be.true;
  //   expect(validateBr.processo('000208-36.0201.2.51.50049')).to.be.true;
  // });

  it('RENAVAM', () => {
    expect(validateBr.renavam('72176426415')).to.be.true;
    expect(validateBr.renavam('72176426414')).to.be.false;
  });

  it('RG', () => {
    expect(validateBr.rg('mg 11124567')).to.be.true;
    expect(validateBr.rg('1234')).to.be.false;
  });

  it('Senha', () => {
    expect(validateBr.senha('asdsadasd')).to.be.false;
    expect(validateBr.senha('ASDADASD')).to.be.false;
    expect(validateBr.senha('315296490')).to.be.false;
    expect(validateBr.senha('$$$$$$')).to.be.false;
    expect(validateBr.senha('$Aa1234567')).to.be.true;
  });

  it('Site', () => {
    expect(validateBr.site('www.teste.com')).to.be.true;
    expect(validateBr.site('testecom')).to.be.false;
    expect(validateBr.site('teste.comasdadas')).to.be.false;
    // expect(validateBr.site('315296491')).to.be.false;
  });

  it('SPED', () => {
    // expect(validateBr.sped('31529649-0')).to.be.true;
    // expect(validateBr.sped('31529649-1')).to.be.false;
    // expect(validateBr.sped('315296490')).to.be.true;
    // expect(validateBr.sped('315296491')).to.be.false;
  });

  it('Telefone', () => {
    expect(validateBr.telefone('31 99876767')).to.be.true;
    expect(validateBr.telefone('(90) 1057-1600')).to.be.true;
    expect(validateBr.telefone('(90) 0057-1600')).to.be.false;
    expect(validateBr.telefone('1234')).to.be.false;
  });

  it('Time', () => {
    expect(validateBr.time('12:34')).to.be.true;
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
