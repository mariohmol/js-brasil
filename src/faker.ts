/**
 * fakerBr — random valid Brazilian document/data generators
 *
 * This module is intentionally NOT imported by src/index.ts so it is never
 * included in the main validator/masking bundle.  Import it explicitly:
 *
 *   import { fakerBr } from 'js-brasil/faker';
 *   // or (without package exports field):
 *   import { fakerBr } from 'js-brasil/dist/faker';
 */

import {
  create_cpf,
  create_cnpj,
  create_renavam,
  create_pispasep,
  create_titulo_atual,
  create_certidao,
} from './create';
import { rg_sp } from './rg';
import { randomNumber, randomLetter, CORES } from './utils';
import {
  LOCALIZACAO_ESTADOS,
  LOCALIZACAO_CIDADES,
  LOCALIZACAO_RUAS,
  LOCALIZACAO_LOGRADOUROS,
  LOCALIZACAO_BAIRROS,
  LOCALIZACAO_COMPLEMENTOS,
} from './name';

// ── internal helpers ──────────────────────────────────────────────────────────

function rndDigits(n: number): string {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join('');
}

function rndLetter(): string {
  return randomLetter(1, true);
}

function pad(n: number, len: number): string {
  let s = String(n);
  while (s.length < len) s = '0' + s;
  return s;
}

function pickFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── document generators ───────────────────────────────────────────────────────

/** Random valid CPF — 11 digits unformatted */
export function cpf(): string {
  let base = rndDigits(9);
  // avoid all-same-digit sequences (rejected by validator)
  while (/^(\d)\1+$/.test(base)) {
    base = rndDigits(9);
  }
  const digs = create_cpf(base + '00') as string;
  return base + digs;
}

/** Random valid CNPJ — 14 digits unformatted */
export function cnpj(): string {
  const base = rndDigits(8) + '0001';  // 8 random + branch 0001 = 12 chars
  // d1 depends on the first 12 digits; d2 depends on the first 13 (base + d1)
  const d1 = (create_cnpj(base + '00') as number[])[0];
  const d2 = (create_cnpj(base + d1 + '0') as number[])[1];
  return base + d1 + d2;
}

/** Random CEP — 8 digits unformatted */
export function cep(): string {
  return rndDigits(8);
}

/** Random valid RG in SP format — 8 digits + check digit (may be 'X') */
export function rg(): string {
  const base = rndDigits(8);
  const dv = rg_sp(base);
  return base + dv;
}

/** Random valid RENAVAM — 11 digits */
export function renavam(): string {
  const base = rndDigits(10) + '0';
  const dv = create_renavam(base) as number;
  return base.slice(0, 10) + dv;
}

/** Random valid PIS/PASEP — 11 digits */
export function pis(): string {
  const base = rndDigits(10) + '0';
  const dv = create_pispasep(base) as number;
  return base.slice(0, 10) + dv;
}

/**
 * Random valid Título Eleitoral — 12 digits
 * Format: [8 sequential][2 state code 01-28][2 check digits]
 */
export function titulo(): string {
  const stateCode = pad(randomNumber(1, 29), 2);  // '01'..'28'
  const seq = rndDigits(8);
  const base = seq + stateCode + '00';  // 12 chars, placeholder DV
  const dv = create_titulo_atual(base) as string;
  return seq + stateCode + dv;
}

/** Random CNH number — 11 digits (check digits are the last 2 as-is) */
export function cnh(): string {
  return rndDigits(11);
}

/** Random valid Certidão — 32 digits */
export function certidao(): string {
  const base = rndDigits(30) + '00';
  const dv = create_certidao(base) as string;
  return base.slice(0, 30) + dv;
}

/**
 * Random valid CNS (Cartão Nacional de Saúde) — 15 digits, provisional format.
 * Starts with 7, 8, or 9 and satisfies the weighted sum % 11 === 0 check.
 */
export function cns(): string {
  while (true) {
    const first = pickFrom(['7', '8', '9']);
    const num = first + rndDigits(14);
    let soma = 0;
    for (let i = 0; i < num.length; i++) {
      soma += parseInt(num[i]) * (15 - i);
    }
    if (soma % 11 === 0) {
      return num;
    }
  }
}

// ── contact / vehicle ─────────────────────────────────────────────────────────

/** Random Brazilian landline — DDD (11-99) + 8 digits */
export function telefone(): string {
  return pad(randomNumber(11, 100), 2) + rndDigits(8);
}

/** Random Brazilian mobile — DDD (11-99) + 9 + 8 digits */
export function celular(): string {
  return pad(randomNumber(11, 100), 2) + '9' + rndDigits(8);
}

/** Random old-format licence plate — AAA0000 */
export function placa(): string {
  return rndLetter() + rndLetter() + rndLetter() + rndDigits(4);
}

/** Random Mercosul-format licence plate — AAA0A00 */
export function placaMercosul(): string {
  return rndLetter() + rndLetter() + rndLetter() + rndDigits(1) + rndLetter() + rndDigits(2);
}

// ── personal / address ────────────────────────────────────────────────────────

/** Random Brazilian first name */
export function nome(): string {
  const nomes = [
    'Ana', 'Maria', 'Juliana', 'Amanda', 'Fernanda', 'Patrícia', 'Camila', 'Aline', 'Bruna', 'Larissa',
    'João', 'José', 'Antonio', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Gabriel', 'Mateus', 'Rafael',
    'Luiz', 'Marcos', 'Rodrigo', 'Eduardo', 'Felipe', 'Diego', 'Bruno', 'Gustavo', 'Leonardo', 'Thiago',
  ];
  return pickFrom(nomes);
}

/** Random Brazilian surname */
export function sobrenome(): string {
  const sobrenomes = [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Lima', 'Pereira', 'Ferreira', 'Costa', 'Rodrigues', 'Alves',
    'Nascimento', 'Carvalho', 'Fernandes', 'Gomes', 'Martins', 'Rocha', 'Ribeiro', 'Almeida', 'Mendes', 'Barros',
    'Araújo', 'Cardoso', 'Moreira', 'Nunes', 'Correia', 'Melo', 'Pinto', 'Teixeira', 'Lopes', 'Cruz',
  ];
  return pickFrom(sobrenomes);
}

/** Random full name (first + last) */
export function nomeCompleto(): string {
  return nome() + ' ' + sobrenome();
}

/** Random email based on a generated name */
export function email(): string {
  const domains = ['gmail.com', 'hotmail.com', 'yahoo.com.br', 'outlook.com', 'uol.com.br'];
  const n = nome().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const s = sobrenome().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return `${n}.${s}${randomNumber(1, 99)}@${pickFrom(domains)}`;
}

/** Random Brazilian state as { nome, uf } */
export function estado(): { nome: string; uf: string } {
  return pickFrom(LOCALIZACAO_ESTADOS);
}

/** Random Brazilian city name */
export function cidade(): string {
  return pickFrom(LOCALIZACAO_CIDADES)[0];
}

/** Random Brazilian vehicle colour */
export function cor(): string {
  return pickFrom(CORES);
}

/** Random Brazilian address object */
export function endereco(): {
  logradouro: string;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
} {
  const cidadeEstado = pickFrom(LOCALIZACAO_CIDADES);
  return {
    logradouro: pickFrom(LOCALIZACAO_LOGRADOUROS),
    rua: pickFrom(LOCALIZACAO_RUAS),
    numero: randomNumber(1, 9999),
    complemento: pickFrom(LOCALIZACAO_COMPLEMENTOS),
    bairro: pickFrom(LOCALIZACAO_BAIRROS),
    cidade: cidadeEstado[0],
    estado: cidadeEstado[1],
    cep: cep(),
  };
}

// ── main export ───────────────────────────────────────────────────────────────

export const fakerBr = {
  cpf,
  cnpj,
  cep,
  rg,
  renavam,
  pis,
  titulo,
  cnh,
  certidao,
  cns,
  telefone,
  celular,
  placa,
  placaMercosul,
  nome,
  sobrenome,
  nomeCompleto,
  email,
  estado,
  cidade,
  cor,
  endereco,
};
