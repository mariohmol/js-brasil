import {
  isPresent, MASKS
} from './src/utils';
import {
  valida_cep, validate_cnpj, validate_cpf, validate_telefone,
  validate_placa, validate_currency, validate_percentage, validate_rg, validate_time, validate_titulo, validate_processo, validate_celular
} from './src/validate';
import { validar } from './src/inscricaoestadual';
import * as faker from './src/faker';
import * as mask from './src/mask';

export const validateBr = {
  cep: valida_cep,
  cnpj: validate_cnpj,
  cpf: validate_cpf,
  currency: validate_currency,
  inscricaoestadual: validar,
  percentage: validate_percentage,
  rg: validate_rg,
  placa: validate_placa,
  telefone: validate_telefone,
  celular: validate_celular,
  time: validate_time,
  titulo: validate_titulo,
  processo: validate_processo
};

export const utilsBr = {
  isPresent,
  MASKS
};

export const maskBr = mask.maskBr;
export const fakerBr = faker.fakerBr;