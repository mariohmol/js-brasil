import { MASKS, conformToMask } from './utils';

const makeGeneric = (key) => {
  return (value) => {
    if (!value) {
      return '';
    }

    let mask = MASKS[key].textMask
    if (MASKS[key].textMaskFunction) {
      mask = MASKS[key].textMaskFunction(value);
    }
    return conformToMask(
      value,
      mask,
      { guide: false }
    ).conformedValue;
  }
}

export const maskBr = {
  cep: makeGeneric('cep'),
  cpf: makeGeneric('cpf'),
  cnpj: makeGeneric('cnpj'),
  rg: makeGeneric('rg'),
  telefone: makeGeneric('telefone'),
  celular: makeGeneric('celular'),
  inscricaoestadual: (inscricaoestadualValue, estado) => {
    if (!inscricaoestadualValue || !estado || !MASKS.inscricaoestadual[estado] ||
      !MASKS.inscricaoestadual[estado].textMask) {
      return '';
    }
    return conformToMask(
      inscricaoestadualValue,
      MASKS.inscricaoestadual[estado].textMask,
      { guide: false }
    ).conformedValue;
  },
  time: makeGeneric('time'),
  currency: (currencyValue) => {
    if (!currencyValue) {
      return '';
    }
    const vals = currencyValue.split(',');
    const mask = MASKS.currency.textMask(vals[0]);

    return conformToMask(
      currencyValue,
      mask,
      { guide: false }
    ).conformedValue + ',' + vals[1];
  },
  percentage: (percentageValue) => {
    if (!percentageValue) {
      return '';
    }
    const vals = percentageValue.split(',');
    const mask = MASKS.percentage.textMask(vals[0]);

    return conformToMask(
      percentageValue,
      mask,
      { guide: false }
    ).conformedValue + ',' + vals[1];
  },
  placa: makeGeneric('placa'),
  titulo: makeGeneric('titulo'),
  processo: makeGeneric('processo')
};
