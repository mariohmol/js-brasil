import * as utils from './src/utils';
export { validateBr } from './src/validate';
import * as faker from './src/faker';
import * as mask from './src/mask';
import { MASKS } from './src/mask';
import { PLACAS_RANGE } from './src/placa';
import { ESTADOS } from './src/estados';

export const utilsBr = {
  ...utils,
  MASKS,
  PLACAS_RANGE,
  ESTADOS
};

export const maskBr = mask.maskBr;
export const fakerBr = faker.fakerBr;