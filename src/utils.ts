export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

export function isArray(value: any) {
  return (Array.isArray && Array.isArray(value)) || value instanceof Array
}

export function isString(value: any) {
  return typeof value === 'string' || value instanceof String
}

export function isNumber(value: any) {
  return typeof value === 'number' && !isNaN(value); // && value.length === undefined
}

export function isNil(value: any) {
  return typeof value === 'undefined' || value === null
}

const strCaretTrap = '[]'
export function processCaretTraps(mask: any) {
  const indexes = []

  let indexOfCaretTrap: number
  while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) { // eslint-disable-line
    indexes.push(indexOfCaretTrap)

    mask.splice(indexOfCaretTrap, 1)
  }

  return { maskWithoutCaretTraps: mask, indexes }
}

export const modulo11 = (string: string, size: number, mod: number) => {
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

/**
 * 
 * @param input 
 * ^ - Match line start
  (\d) - match first digit and capture it in back reference #1 i.e. \1
  (?!..) is a negative lookahead
  (?!\1+$) means disallow the match if first digit is followed by same digit (captured group) till end.
  \d{11}$ match next 11 digit followed by line end
 */
export function allNumbersAreSame(inputValue: string) {
  const input: string | void = getAllDigits(inputValue);
  if (typeof input === 'string') {
    const reg = new RegExp('^(\\d)(?!\\1+$)\\d{' + ((<string>input).length - 1) + '}$');
    return reg.test(input);
  }
  return false;
}

export function getAllDigits(input: string) {
  const match = input.match(/\d/g);
  if(match){
    return match.join("");
  }
  return;
}

export function currencyToNumber(input){
  input = input.replace(/ /g,'');
  if(input.indexOf('$')!==-1){
    const vals = input.split('$');
    input = vals[1];
  }
  
  input = input.replace('%','');
  input = input.replace(/\./g,'').replace(',','.');
  
  return parseFloat(input);
}