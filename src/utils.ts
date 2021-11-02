import { ESTADOS_SIGLA } from './estados';
import { BigObject } from './interfaces';

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

export const modulo11 = (value: string) => {
  let mults: any = []
  let weightVal = 2
  for (let i = 0; i < value.length; i++) {
    // mults = [weightVal, ...mults]
    mults.push(weightVal)
    weightVal++
    if (weightVal > 9) weightVal = 2
  }

  mults = mults.reverse()

  let sum = 0
  for (let i = 0; i < value.length; i++) {
    sum += parseInt(value[i]) * mults[i]
  }
  const digit = (sum *10) % 11
  return digit
}

export const modulo11Custom = (string: string, size: number, maxMult = string.length, by10 = true) => {
  if (!by10) size = 1
  for (let n = 1; n <= size; n++) {
    let soma = 0
    let mult = 2
    for (let i = string.length - 1; i >= 0; i--) {
      soma += (mult * parseInt(string.charAt(i)))
      mult++
      if (mult > maxMult) mult = 2
    }
    let dig
    if (by10) {
      dig = ((soma * 10) % 11) % 10;
    } else {
      dig = soma % 11;
      if (dig == 10) dig = 0;
    }
    string += dig;
  }
  return string.substr(string.length - size, size);
}


export const modulo11a = (string: string, size: number, mod: number) => {
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
  if (!input.match) {
    input = input.toString();
  }
  const match = input.match(/\d/g);
  if (match) {
    return match.join("");
  }
  return '';
}

export function getAllWords(input: string) {
  const match = input.match(/\w/g);
  if (match) {
    return match.join("");
  }
  return '';
}

export function currencyToNumber(input: string | number) {
  if (typeof input === 'number') {
    return input;
  }
  input = input.replace(/ /g, '');
  if (input.indexOf('$') !== -1) {
    const vals = input.split('$');
    input = vals[1];
  }

  // Keeping just numbers . and ,
  input = input.replace(/[^0-9.,]+/, '');

  // eua format
  if (input.indexOf('.') === (input.length - 1) - 2) {
    input = input.replace(/\,/g, '')
  }
  // br format
  else {
    input = input.replace(/\./g, '').replace(',', '.');
  }

  return parseFloat(input);
}

export function numberToCurrency(value: number) {
  return ' R$ ' + value.toFixed(2).replace('.', ',') + ' ';
};

export function slugify(value: string) {

  return value.toString().toLowerCase()
    .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a')       // Special Characters #1
    .replace(/[èÈéÉêÊëË]+/g, 'e')       	// Special Characters #2
    .replace(/[ìÌíÍîÎïÏ]+/g, 'i')       	// Special Characters #3
    .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o')       	// Special Characters #4
    .replace(/[ùÙúÚûÛüÜ]+/g, 'u')       	// Special Characters #5
    .replace(/[ýÝÿŸ]+/g, 'y')       		// Special Characters #6
    .replace(/[ñÑ]+/g, 'n')       			// Special Characters #7
    .replace(/[çÇ]+/g, 'c')       			// Special Characters #8
    .replace(/[ß]+/g, 'ss')       			// Special Characters #9
    .replace(/[Ææ]+/g, 'ae')       			// Special Characters #10
    .replace(/[Øøœ]+/g, 'oe')       		// Special Characters #11
    .replace(/[%]+/g, 'pct')       			// Special Characters #12
    .replace(/\s+/g, '-')           		// Replace spaces with -
    .replace(/[^\w\-]+/g, '')       		// Remove all non-word chars
    .replace(/\-\-+/g, '-')         		// Replace multiple - with single -
    .replace(/^-+/, '')             		// Trim - from start of text
    .replace(/-+$/, '');            		// Trim - from end of text

};
/**
 * 
 * @param string  ex. 12345
 * @param size   11
 * @param fill   0
 * 
 * Returns: 00000012345
 */
export function fillString(string: string, size: number, fill: string) {
  if (string.length < size) {
    const dif = size - string.length;
    for (let i = 0; i < dif; i++) {
      string = fill + string
    }
  }
  return string;
}


export function randArray(array: string | any[]) {
  const index = randomNumber(0, array.length);
  return array[index];
}


export function rand(length: number, ...ranges: any[]) {
  var str = "";                                                       // the string (initialized to "")
  while (length--) {                                                  // repeat this length of times
    var ind = Math.floor(Math.random() * ranges.length);              // get a random range from the ranges object
    var min = ranges[ind][0].charCodeAt(0),                           // get the minimum char code allowed for this range
      max = ranges[ind][1].charCodeAt(0);                             // get the maximum char code allowed for this range
    var c = Math.floor(Math.random() * (max - min + 1)) + min;        // get a random char code between min and max
    str += String.fromCharCode(c);                                    // convert it back into a character and append it to the string str
  }
  return str;                                                         // return str
}

export function randomNumber(begin: number, end: number) {
  const dif = end - begin;
  const number = Math.floor(Math.random() * dif) + begin;
  return number;
}


export function randomLetter(size = 1, onlyCapitals = false) {
  var text = "";
  let possible: any = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (onlyCapitals == false) {
    possible += "abcdefghijklmnopqrstuvwxyz";
  }
  possible = possible.split('');
  for (let i = 0; i < size; i++) {
    const pos = Math.floor(Math.random() * possible.length);
    text += possible[pos];
  }
  return text;
}


export function randomLetterOrNumber(size = 1, onlyCapitals = false) {
  var text = "";
  let possible: any = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (onlyCapitals == false) {
    possible += "abcdefghijklmnopqrstuvwxyz0123456789";
  }
  possible = possible.split('');
  for (let i = 0; i < size; i++) {
    const pos = Math.floor(Math.random() * possible.length);
    text += possible[pos];
  }
  return text;
}

export const randomEstadoSigla = () => {
  const total = ESTADOS_SIGLA.length;
  return ESTADOS_SIGLA[Math.floor(Math.random() * total)];
}

export const CORES = ["AMARELO", "AZUL", "BEGE", "BRANCA", "CINZA", "DOURADA", "GRENA", "LARANJA", "MARROM", "PRATA",
  "PRETA", "ROSA", "ROXA", "VERDE", "VERMELHA", "FANTASIA"];


export function getSpecialProperty<TModel, TKey extends keyof TModel>(
  model: TModel,
  key: TKey
) {
  return model[key];
}

/**
 * 
 */
export const makeGenericFaker = (val: any, options: BigObject<Function> | null = null) => {
  return () => {
    if (!val.textMask || !val.textMask.map) {
      return '';
    }
    const newData = val.textMask.map((c: string | any[], index: number) => {
      if (options && options[index]) {
        return options[index]();
      }
      c = c.toString();
      if (c === /\d/.toString()) {
        return Math.floor(Math.random() * 10).toString()
      } else if (c === /[A-Za-z]/.toString()) {
        return randomLetter(1).toString();
      } else if (c === /\w/.toString()) {
        return randomLetterOrNumber(1).toString();
      } else if (c.indexOf('/[') === 0) { // /[1-9]/ ou /[5-9]/
        c = c.replace('/[', '').replace(']/', '');

        if (c.indexOf('-') > 0) {
          c = c.split('-');
          if (parseInt(c[1])) {
            const mult = c[1] - c[0];
            const plus = parseInt(c[0]);
            return (Math.floor(Math.random() * mult) + plus).toString();
          } else {
            return rand(1, [c[0], c[1]]);
          }
        } else if (c.indexOf('|') > 0) {
          c = c.split('|');
          const index = Math.floor(Math.random() * c.length);
          return c[index];
        }

      } else {
        return c;
      }
    });
    return newData.join('');
  };
}

const utilsBr = {
  isPresent,
  isArray,
  isString,
  isNumber,
  isNil,
  processCaretTraps,
  allNumbersAreSame,
  getAllDigits,
  getAllWords,
  currencyToNumber,
  numberToCurrency,
  slugify,
  fillString,
  randArray,
  rand,
  randomNumber,
  randomLetter,
  randomLetterOrNumber,
  getSpecialProperty
}

export default utilsBr;