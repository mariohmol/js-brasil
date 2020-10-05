import * as utils from './src/utils';
export { validateBr } from './src/validate';
import faker from './src/faker';
import * as mask from './src/mask';
import { MASKS } from './src/mask';
import { PLACAS_RANGE } from './src/placa';
import { ESTADOS } from './src/estados';
import { BigObject } from './src/interfaces';

export const utilsBr = {
  ...utils,
  MASKS,
  PLACAS_RANGE,
  ESTADOS
};

export const maskBr: BigObject<Function> = mask.maskBr;
export const fakerBr: BigObject<Function> = faker;