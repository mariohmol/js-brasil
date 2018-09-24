export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

export function isArray(value) {
  return (Array.isArray && Array.isArray(value)) || value instanceof Array
}

export function isString(value) {
  return typeof value === 'string' || value instanceof String
}

export function isNumber(value: any) {
  return typeof value === 'number' && !isNaN(value); // && value.length === undefined
}

export function isNil(value) {
  return typeof value === 'undefined' || value === null
}

const strCaretTrap = '[]'
export function processCaretTraps(mask) {
  const indexes = []

  let indexOfCaretTrap
  while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) { // eslint-disable-line
    indexes.push(indexOfCaretTrap)

    mask.splice(indexOfCaretTrap, 1)
  }

  return { maskWithoutCaretTraps: mask, indexes }
}

export const modulo11 = (string, size, mod)=>{
  let soma = 0;
  for (let i = 1; i <= size; i++) {
    // tslint:disable-next-line:radix
    soma = soma + parseInt(string.substring(i - 1, i)) * (mod - i);
  }
  let resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }
  return resto;
}