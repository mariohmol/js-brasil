import { validateBr } from '../src/index';
import { fakerBr } from '../src/faker';
import { expect } from 'chai';

const RUNS = 20;  // run each generator multiple times to catch edge cases

function times(n: number, fn: () => void) {
  for (let i = 0; i < n; i++) fn();
}

describe('fakerBr', () => {

  it('cpf generates valid CPFs', () => {
    times(RUNS, () => {
      const value = fakerBr.cpf();
      expect(value).to.match(/^\d{11}$/, `not 11 digits: ${value}`);
      expect(validateBr.cpf(value)).to.equal(true, `invalid CPF: ${value}`);
    });
  });

  it('cnpj generates valid CNPJs', () => {
    times(RUNS, () => {
      const value = fakerBr.cnpj();
      expect(value).to.match(/^\d{14}$/, `not 14 digits: ${value}`);
      expect(validateBr.cnpj(value)).to.equal(true, `invalid CNPJ: ${value}`);
    });
  });

  it('cep generates 8-digit strings', () => {
    times(RUNS, () => {
      const value = fakerBr.cep();
      expect(value).to.match(/^\d{8}$/, `not 8 digits: ${value}`);
    });
  });

  it('renavam generates valid RERAVAMs', () => {
    times(RUNS, () => {
      const value = fakerBr.renavam();
      expect(value).to.match(/^\d{11}$/, `not 11 digits: ${value}`);
      expect(validateBr.renavam(value)).to.equal(true, `invalid RENAVAM: ${value}`);
    });
  });

  it('pis generates valid PIS/PASEP numbers', () => {
    times(RUNS, () => {
      const value = fakerBr.pis();
      expect(value).to.match(/^\d{11}$/, `not 11 digits: ${value}`);
      expect(validateBr.pispasep(value)).to.equal(true, `invalid PIS: ${value}`);
    });
  });

  it('titulo generates valid Títulos Eleitorais', () => {
    times(RUNS, () => {
      const value = fakerBr.titulo();
      expect(value).to.match(/^\d{12}$/, `not 12 digits: ${value}`);
      expect(validateBr.titulo(value)).to.equal(true, `invalid Título: ${value}`);
    });
  });

  it('certidao generates valid Certidões', () => {
    times(RUNS, () => {
      const value = fakerBr.certidao();
      expect(value).to.match(/^\d{32}$/, `not 32 digits: ${value}`);
      expect(validateBr.certidao(value)).to.equal(true, `invalid Certidão: ${value}`);
    });
  });

  it('cns generates valid CNS numbers', () => {
    times(RUNS, () => {
      const value = fakerBr.cns();
      expect(value).to.match(/^\d{15}$/, `not 15 digits: ${value}`);
      expect(validateBr.cns(value)).to.equal(true, `invalid CNS: ${value}`);
    });
  });

  it('telefone generates 10-digit strings', () => {
    times(RUNS, () => {
      const value = fakerBr.telefone();
      expect(value).to.match(/^\d{10}$/, `not 10 digits: ${value}`);
    });
  });

  it('celular generates 11-digit strings starting with 9 after DDD', () => {
    times(RUNS, () => {
      const value = fakerBr.celular();
      expect(value).to.match(/^\d{2}9\d{8}$/, `unexpected format: ${value}`);
    });
  });

  it('placa generates AAA0000 format', () => {
    times(RUNS, () => {
      const value = fakerBr.placa();
      expect(value).to.match(/^[A-Z]{3}\d{4}$/, `unexpected format: ${value}`);
    });
  });

  it('placaMercosul generates AAA0A00 format', () => {
    times(RUNS, () => {
      const value = fakerBr.placaMercosul();
      expect(value).to.match(/^[A-Z]{3}\d[A-Z]\d{2}$/, `unexpected format: ${value}`);
    });
  });

  it('nome returns a non-empty string', () => {
    times(RUNS, () => {
      expect(fakerBr.nome()).to.be.a('string').and.not.empty;
    });
  });

  it('sobrenome returns a non-empty string', () => {
    times(RUNS, () => {
      expect(fakerBr.sobrenome()).to.be.a('string').and.not.empty;
    });
  });

  it('nomeCompleto returns two words', () => {
    times(RUNS, () => {
      const value = fakerBr.nomeCompleto();
      expect(value.split(' ').length).to.be.gte(2);
    });
  });

  it('email returns a valid-looking email', () => {
    times(RUNS, () => {
      const value = fakerBr.email();
      expect(value).to.match(/@/, `no @ sign: ${value}`);
    });
  });

  it('estado returns { nome, uf }', () => {
    times(RUNS, () => {
      const value = fakerBr.estado();
      expect(value).to.have.property('nome').that.is.a('string');
      expect(value).to.have.property('uf').that.matches(/^[A-Z]{2}$/);
    });
  });

  it('cidade returns a non-empty string', () => {
    times(RUNS, () => {
      expect(fakerBr.cidade()).to.be.a('string').and.not.empty;
    });
  });

  it('cor returns a known Brazilian vehicle colour', () => {
    const known = ['AMARELO', 'AZUL', 'BEGE', 'BRANCA', 'CINZA', 'DOURADA', 'GRENA', 'LARANJA',
      'MARROM', 'PRATA', 'PRETA', 'ROSA', 'ROXA', 'VERDE', 'VERMELHA', 'FANTASIA'];
    times(RUNS, () => {
      expect(known).to.include(fakerBr.cor());
    });
  });

  it('endereco returns a complete address object', () => {
    times(RUNS, () => {
      const value = fakerBr.endereco();
      expect(value).to.have.all.keys('logradouro', 'rua', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'cep');
      expect(value.cep).to.match(/^\d{8}$/);
      expect(value.numero).to.be.a('number').and.gt(0);
    });
  });

});
