import { validateBr } from '../src/index';
import { expect } from 'chai';
import CNH_DATA from './data/cnh'

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

  // it('CNAE - TODO', () => {
  //   expect(validateBr.cnae('9973')).to.be.false;
  //   expect(validateBr.cnae('997395071-33')).to.be.true;
  // });

  it('RENACH SEGURANÇA CNH', () => {
    expect(validateBr.renachseguranca('997395071-33')).to.be.false;
    expect(validateBr.renachseguranca('51474546854')).to.be.true;
  })

  it('RENACH ESTADUAL CNH', () => {
    expect(validateBr.renachestadual('997395071-33')).to.be.false;
    expect(validateBr.renachestadual('MG597812560')).to.be.true;
    expect(validateBr.renachestadual('XX598814566')).to.be.false;
    expect(validateBr.renachestadual('MG597812565')).to.be.false;
  })

  it('ESPELHO CNH', () => {
    expect(validateBr.cnhespelho('997395071-33')).to.be.false;
    expect(validateBr.cnhespelho('2318339130')).to.be.true;
    expect(validateBr.cnhespelho('2244559032')).to.be.true;
  })

  it('CNH - BINCO', () => {
    expect(validateBr.cnh('9973')).to.be.false;
    expect(validateBr.cnh('997395071-1')).to.be.false;
    expect(validateBr.cnh('9973950711')).to.be.false;
    expect(validateBr.cnh('99739507183')).to.be.true;
    expect(validateBr.cnh('59796888141')).to.be.true;
    expect(validateBr.cnh('07021871297')).to.be.true;
    expect(validateBr.cnh('0702187120')).to.be.false;
    CNH_DATA.forEach(cnh => {
      let cnhString = cnh.toString()
      while (cnhString.length < 11) {
        cnhString = '0' + cnhString
      }
      expect(validateBr.cnh(cnhString)).to.be.true
    })
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
    expect(validateBr.cpf('111.111.111-11')).to.be.false;
    expect(validateBr.cpf('555.555.555-55')).to.be.false;
  });

  it('CPFCNPJ', () => {
    expect(validateBr.cpfcnpj('56.853.433/0001-44')).to.be.true;
    expect(validateBr.cpfcnpj('56.853.433/0001-55')).to.be.false;
    expect(validateBr.cpfcnpj('1234')).to.be.false;
    expect(validateBr.cpfcnpj('127.529.875-46')).to.be.false;
    expect(validateBr.cpfcnpj('127.529.875-37')).to.be.false;
    expect(validateBr.cpfcnpj('00.000.000/0000-00')).to.be.false;
    expect(validateBr.cpfcnpj('090.988.020-44')).to.be.true;
  });

  describe('Cartão de Crédito', () => {
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
      expect(validateBr.cartaocredito('4688966912267492 01/28 488')).to.be.true;
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

  it('DataHora', () => {
    expect(validateBr.datahora('12/01/1980 12:34')).to.be.true;
    expect(validateBr.datahora('12/01/1980 1234')).to.be.false;
  });

  it('Date', () => {
    expect(validateBr.date('12/01/1980')).to.be.true;
    expect(validateBr.date('13/01/1980')).to.be.false;
    expect(validateBr.date('12/32/1980')).to.be.false;
    expect(validateBr.date('')).to.be.false;
    expect(validateBr.date(null)).to.be.false;
    expect(validateBr.date('32')).to.be.false;
    expect(validateBr.date('32/12')).to.be.false;
    expect(validateBr.date('32/12/')).to.be.false;
  });

  it('DateTime', () => {
    expect(validateBr.datetime('12/01/1980 12:34')).to.be.true;
    expect(validateBr.datetime('13/01/1980 12:34')).to.be.false;
    expect(validateBr.datetime('12/01/1980 1234')).to.be.false;
    expect(validateBr.date('')).to.be.false;
    expect(validateBr.date(null)).to.be.false;
    expect(validateBr.date('32')).to.be.false;
    expect(validateBr.date('32/12')).to.be.false;
    expect(validateBr.date('32/12/')).to.be.false;
  });

  describe('Moeda', () => {
    it('Pass when valid', () => {
      // expect(validateBr.currency('R$ 1234')).to.be.true;
      expect(validateBr.currency('R$ 1234,10')).to.be.true;
      expect(validateBr.currency('R$ 99.999.999,99')).to.be.true;
      expect(validateBr.currency('R$ 1.234,10')).to.be.true;
      expect(validateBr.currency('1234,56')).to.be.true;
      expect(validateBr.currency('1.234,56')).to.be.true;
      expect(validateBr.currency('-1.234,56')).to.be.true;
      expect(validateBr.currency('R$ -1.234,56')).to.be.true;
    });
    it('Error when not valid', () => {
      expect(validateBr.currency('$1234')).to.be.false;
      expect(validateBr.currency('$-1234')).to.be.false;
      expect(validateBr.currency('1,234.00')).to.be.false;
      expect(validateBr.currency('-1,234.00')).to.be.false;
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

  describe('Inscricao Estadual', () => {
    it('testes genéricos', () => {
      expect(validateBr.inscricaoestadual('862.445.372/2351', 'mg')).to.be.true;
      expect(validateBr.inscricaoestadual('094.290.083', 'sc')).to.be.true;
      expect(validateBr.inscricaoestadual('094.290.0839', 'sc')).to.be.false;
      expect(validateBr.inscricaoestadual('111111111111', 'mg').message).to.be.equal('ie com todos dígitos iguais');
      expect(validateBr.inscricaoestadual('1234', 'mg')).to.be.false;
    });

    it('Acre', () => {
      expect(validateBr.inscricaoestadual('0118841365457', 'ac')).to.be.true;
      expect(validateBr.inscricaoestadual('01.800.070/625-96', 'ac')).to.be.true;
      expect(validateBr.inscricaoestadual('01.800.070/625-90', 'ac')).to.be.false;
    });
    it('Alagoas', () => {
      expect(validateBr.inscricaoestadual('24816730-8', 'al')).to.be.true;
      expect(validateBr.inscricaoestadual('24874839-4', 'al')).to.be.true;
      expect(validateBr.inscricaoestadual('24874839-0', 'al')).to.be.false;
      expect(validateBr.inscricaoestadual('240000048', 'al')).to.be.true;
      expect(validateBr.inscricaoestadual('240841530', 'al')).to.be.true;
    });
    it('Amazonas', () => {
      expect(validateBr.inscricaoestadual('251579085', 'am')).to.be.true;
      expect(validateBr.inscricaoestadual('62.703.748-8', 'am')).to.be.true;
      expect(validateBr.inscricaoestadual('62.703.748-0', 'am')).to.be.false;
    });
    it('Amapá', () => {
      expect(validateBr.inscricaoestadual('034120068', 'ap')).to.be.true;
      expect(validateBr.inscricaoestadual('031564976', 'ap')).to.be.true;
      expect(validateBr.inscricaoestadual('031564970', 'ap')).to.be.false;
    });
    it('Bahia', () => {
      expect(validateBr.inscricaoestadual('44820020', 'ba')).to.be.true;
      expect(validateBr.inscricaoestadual('145065-36', 'ba')).to.be.true;
      expect(validateBr.inscricaoestadual('145065-30', 'ba')).to.be.false;
      expect(validateBr.inscricaoestadual('1623456-51', 'ba')).to.be.true;
      expect(validateBr.inscricaoestadual('1234567-48', 'ba')).to.be.true;
      expect(validateBr.inscricaoestadual('123456-63', 'ba')).to.be.true;
    });
    it('Ceará', () => {
      expect(validateBr.inscricaoestadual('158270479', 'ce')).to.be.true;
      expect(validateBr.inscricaoestadual('37265082-1', 'ce')).to.be.true;
      expect(validateBr.inscricaoestadual('37265082-0', 'ce')).to.be.false;
    });
    it('Distrito Federal', () => {
      expect(validateBr.inscricaoestadual('0716738700135', 'df')).to.be.true;
      expect(validateBr.inscricaoestadual('0816738700107', 'df')).to.be.true;
      expect(validateBr.inscricaoestadual('0916738700135', 'df')).to.be.false;
      expect(validateBr.inscricaoestadual('0616738700135', 'df')).to.be.false;
      expect(validateBr.inscricaoestadual('07574259001-32', 'df')).to.be.true;
      expect(validateBr.inscricaoestadual('08167387001-07', 'df')).to.be.true;
      expect(validateBr.inscricaoestadual('07574259001-30', 'df')).to.be.false;
      expect(validateBr.inscricaoestadual('06000001123-55', 'df')).to.be.false;
    });
    it('Espírito Santo', () => {
      expect(validateBr.inscricaoestadual('309772710', 'es')).to.be.true;
      expect(validateBr.inscricaoestadual('85904869-1', 'es')).to.be.true;
      expect(validateBr.inscricaoestadual('85904869-0', 'es')).to.be.false;
    });
    it('Goiás', () => {
      expect(validateBr.inscricaoestadual('110790650', 'go')).to.be.true;
      expect(validateBr.inscricaoestadual('10.395.974-2', 'go')).to.be.true;
      expect(validateBr.inscricaoestadual('10.395.974-0', 'go')).to.be.false;
      expect(validateBr.inscricaoestadual('20.024.521-0', 'go')).to.be.true;
      expect(validateBr.inscricaoestadual('20.124.321-4', 'go')).to.be.false;
    });
    it('Maranhão', () => {
      expect(validateBr.inscricaoestadual('126405328', 'ma')).to.be.true;
      expect(validateBr.inscricaoestadual('12237083-0', 'ma')).to.be.true;
      expect(validateBr.inscricaoestadual('12237083-1', 'ma')).to.be.false;
    });
    it('Mato Grosso', () => {
      expect(validateBr.inscricaoestadual('22195854536', 'mt')).to.be.true;
      expect(validateBr.inscricaoestadual('9412812487-1', 'mt')).to.be.true;
      expect(validateBr.inscricaoestadual('9412812487-0', 'mt')).to.be.false;
    });
    it('Mato Grosso do Sul', () => {
      expect(validateBr.inscricaoestadual('283514256', 'ms')).to.be.true;
      expect(validateBr.inscricaoestadual('28209221-8', 'ms')).to.be.true;
      expect(validateBr.inscricaoestadual('28209221-0', 'ms')).to.be.false;
    });
    it('Minas Gerais', () => {
      expect(validateBr.inscricaoestadual('0317464219508', 'mg')).to.be.true;
      expect(validateBr.inscricaoestadual('863.165.909/7859', 'mg')).to.be.true;
      expect(validateBr.inscricaoestadual('863.165.909/7850', 'mg')).to.be.false;
    });
    it('Pará', () => {
      expect(validateBr.inscricaoestadual('150462360', 'pa')).to.be.true;
      expect(validateBr.inscricaoestadual('15-150482-2', 'pa')).to.be.true;
      expect(validateBr.inscricaoestadual('15-150482-0', 'pa')).to.be.false;
      expect(validateBr.inscricaoestadual('75-000001-5', 'pa')).to.be.true;
    });
    it('Paraíba', () => {
      expect(validateBr.inscricaoestadual('719171326', 'pb')).to.be.true;
      expect(validateBr.inscricaoestadual('64133311-0', 'pb')).to.be.true;
      expect(validateBr.inscricaoestadual('64133311-1', 'pb')).to.be.false;
    });
    it('Paraná', () => {
      expect(validateBr.inscricaoestadual('1596278880', 'pr')).to.be.true;
      expect(validateBr.inscricaoestadual('331.02095-88', 'pr')).to.be.true;
      expect(validateBr.inscricaoestadual('331.02095-80', 'pr')).to.be.false;
    });
    it('Pernambuco', () => {
      expect(validateBr.inscricaoestadual('753924617', 'pe')).to.be.true;
      expect(validateBr.inscricaoestadual('0630612-87', 'pe')).to.be.true;
      expect(validateBr.inscricaoestadual('0630612-80', 'pe')).to.be.false;
    });
    it('Piauí', () => {
      expect(validateBr.inscricaoestadual('337433240', 'pi')).to.be.true;
      expect(validateBr.inscricaoestadual('53457519-6', 'pi')).to.be.true;
      expect(validateBr.inscricaoestadual('53457519-0', 'pi')).to.be.false;
    });
    it('Rio de Janeiro', () => {
      expect(validateBr.inscricaoestadual('73287022', 'rj')).to.be.true;
      expect(validateBr.inscricaoestadual('19.593.95-9', 'rj')).to.be.true;
      expect(validateBr.inscricaoestadual('19.593.95-0', 'rj')).to.be.false;
    });
    it('Rio Grande do Norte', () => {
      expect(validateBr.inscricaoestadual('208953124', 'rn')).to.be.true;
      expect(validateBr.inscricaoestadual('20.569.316-4', 'rn')).to.be.true;
      expect(validateBr.inscricaoestadual('20.569.316-0', 'rn')).to.be.false;
    });
    it('Rio Grande do Sul', () => {
      expect(validateBr.inscricaoestadual('3233314614', 'rs')).to.be.true;
      expect(validateBr.inscricaoestadual('019/3701847', 'rs')).to.be.true;
      expect(validateBr.inscricaoestadual('019/3701840', 'rs')).to.be.false;
    });
    it('Rondônia', () => {
      expect(validateBr.inscricaoestadual('09843902728133', 'ro')).to.be.true;
      expect(validateBr.inscricaoestadual('1559902320570-1', 'ro')).to.be.true;
      expect(validateBr.inscricaoestadual('1559902320570-0', 'ro')).to.be.false;
    });
    it('Roraima', () => {
      expect(validateBr.inscricaoestadual('241618508', 'rr')).to.be.true;
      expect(validateBr.inscricaoestadual('24080604-2', 'rr')).to.be.true;
      expect(validateBr.inscricaoestadual('24080604-0', 'rr')).to.be.false;
    });
    it('Santa Catarina', () => {
      expect(validateBr.inscricaoestadual('956029990', 'sc')).to.be.true;
      expect(validateBr.inscricaoestadual('814.862.420', 'sc')).to.be.true;
      expect(validateBr.inscricaoestadual('814.862.421', 'sc')).to.be.false;
    });
    it('São Paulo', () => {
      expect(validateBr.inscricaoestadual('226805188210', 'sp')).to.be.true;
      expect(validateBr.inscricaoestadual('323.255.276.630', 'sp')).to.be.true;
      expect(validateBr.inscricaoestadual('323.255.276.631', 'sp')).to.be.false;
    });
    it('Sergipe', () => {
      expect(validateBr.inscricaoestadual('585565350', 'se')).to.be.true;
      expect(validateBr.inscricaoestadual('61846587-1', 'se')).to.be.true;
      expect(validateBr.inscricaoestadual('61846587-0', 'se')).to.be.false;
    });
    it('Tocantins', () => {
      expect(validateBr.inscricaoestadual('27036505735', 'to')).to.be.true;
      expect(validateBr.inscricaoestadual('8103233399-3', 'to')).to.be.true;
      expect(validateBr.inscricaoestadual('8103233399-0', 'to')).to.be.false;
    });
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

  describe('Porcentagem', () => {
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

  describe('PIS/PASEP', () => {
    it('Pass when valid', () => {
      expect(validateBr.pispasep('648.60185.98-9')).to.be.true;
    });
    it('Error when not valid', () => {
      expect(validateBr.pispasep('648.60185.98-2')).to.be.false;
      expect(validateBr.pispasep('1234')).to.be.false;
    });
  });

  describe('PLACA', () => {
    it('Legado BR', () => {
      expect(validateBr.placa('ABC1234')).to.be.true;
      expect(validateBr.placa('ABCD1234')).to.be.false;
      expect(validateBr.placa('ACD12345')).to.be.false;
      expect(validateBr.placa('SAW0002')).to.be.false;
      expect(validateBr.placa('1234')).to.be.false;
    });
    it('Mercosul BR', () => {
      expect(validateBr.placa('ABC1D23')).to.be.true;
      expect(validateBr.placa('ABC 1D23')).to.be.true;
      expect(validateBr.placa('A1B23DE')).to.be.false;
      expect(validateBr.placa('AB123DE')).to.be.false;
    });
    it('Mercosul AR', () => {
      expect(validateBr.placa('AB 123 CD', true)).to.be.true;
      expect(validateBr.placa('A12 3BCD', true)).to.be.true;
      expect(validateBr.placa('A12 3BCDD', true)).to.be.false;
      expect(validateBr.placa('AA12 3BCD', true)).to.be.false;
    });
    it('Mercosul BO', () => {
      expect(validateBr.placa('AB 12345', true)).to.be.true;
      expect(validateBr.placa('AB 123456', true)).to.be.false;
      expect(validateBr.placa('AAB 12345', true)).to.be.false;
    });
    it('Mercosul PY', () => {
      expect(validateBr.placa('ABCD 123', true)).to.be.true;
      expect(validateBr.placa('123 ABCD', true)).to.be.true;
      expect(validateBr.placa('123 ABCDD', true)).to.be.false;
      expect(validateBr.placa('1123 ABCD', true)).to.be.false;
    });
    it('Mercosul UY', () => {
      expect(validateBr.placa('ABC 1234', true)).to.be.true;
      expect(validateBr.placa('ABC 12344', true)).to.be.false;
      expect(validateBr.placa('AABC 1234', true)).to.be.false;
    });
    it('Mercosul Invalid', () => {
      expect(validateBr.placa('A1BC234', true)).to.be.false;
      expect(validateBr.placa('A1B2C34', true)).to.be.false;
      expect(validateBr.placa('A1B23C4', true)).to.be.false;
      expect(validateBr.placa('AB123C4', true)).to.be.false;
      expect(validateBr.placa('AAB123C4', true)).to.be.false;
    });
  });

  // it('PROCESSO', () => {
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

    expect(validateBr.telefone('(47) 3500-3500')).to.be.true;
    expect(validateBr.telefone('(61) 93500-3500')).to.be.true;
    expect(validateBr.telefone('(61) 9350-3500')).to.be.true;
    expect(validateBr.telefone('(90) 0057-1600')).to.be.false;
    expect(validateBr.telefone('1234')).to.be.false;
  });

  it('Time', () => {
    expect(validateBr.time('12:34')).to.be.true;
    expect(validateBr.time('1234')).to.be.false;
    expect(validateBr.time('23:61')).to.be.false;
    expect(validateBr.time('2361')).to.be.false;
  });

  describe('TITULO', () => {
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
