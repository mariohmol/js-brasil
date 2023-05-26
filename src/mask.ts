import { isArray, processCaretTraps } from './utils';
import { BigObject, MaskType } from './interfaces';
export { MASKSIE } from './inscricaoestadual';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { mask_iptu } from './iptu';
import { MASKSIE } from './inscricaoestadual';

const maskNumber: any = {
  decimalLimit: 2,
  thousandsSeparatorSymbol: '.',
  decimalSymbol: ',',
  allowDecimal: true,
  integerLimit: 17,
  prefix: '',
  suffix: ''
}

export const MASKS: BigObject<MaskType> = {
  aih: {
    text: '000000000000-0', // 351923414312-8
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
  },
  cartaocredito: {
    text: '0000 0000 0000 0000 00/00 000',
    textMask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '0', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]
  },
  celular: {
    text: '(00) 00000-0000',
    textMask: ['(', /[1-9]/, /\d/, ')', ' ', /[5-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  },
  cep: {
    text: '00.000-000',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
  },
  // certidao Certidões de Nascimento, Casamento ou Óbito 
  certidao: {
    text: '000000.00.00.0000.0.00000.000.0000000-00', // 104539.01.55.2013.1.00012.021.0000123-21
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, '.',
      /\d/, /\d/, /\d/, /\d/, '.', /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.',
      /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  chassi: {
    text: 'AAA AAAAAA AA AA0000', // 9BW ZZZ377 VT 004251
    textMask: [/[1-9]/, /\w/, /\w/, ' ', /\w/, /\w/, /\w/, /\w/, /\w/, /\w/, ' ', /\w/, /\w/, ' ', /\w/, /\w/, /\d/, /\d/, /\d/, /\d/]
  },
  cid: {
    textMask: false
  },
  cnae: {
    text: '0000-0/00', // 6821-8/01
    textMask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, '/', /\d/, /\d/]
  },
  cnh: {
    text: '000000000-00', // 123456789-1
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  renachseguranca: {
    text: '00000000000', // 51474546854
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  renachestadual: {
    text: 'AA000000000', // MG597812560
    textMask: [/[A-S]/, /[A-Z]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  cnhespelho: {
    text: '0000000000', // 123456789-1
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  cnpj: {
    text: '00.000.000/0000-00',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  cns: {
    text: '000 0000 0000 00-00',
    textMask: [/[1|2|7|8|9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/]
  },
  contabanco: {
    text: '000 00000-0 00000-0',
    textMask: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-',
      /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
  },
  cpf: {
    text: '000.000.000-00',
    textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  cpfcnpj: {
    text: '0000.0000.0000',
    textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[0-2]/, /[0-9]/, /\d/, /\d/]
  },
  currency: {
    text: '0.000,00',
    textMask: createNumberMask({
      ...maskNumber,
      prefix: 'R$ ',
      allowNegative: true
    })
  },
  data: {
    text: '00/00/0000',
    textMask: [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-2]/, /[0-9]/, /\d/, /\d/]
  },
  date: {
    text: '00/00/0000',
    textMask: [/[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/, '/', /[0-2]/, /[0-9]/, /\d/, /\d/]
  },
  datetime: {
    text: '00/00/0000 00:00',
    textMask: [/[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/, '/', /[0-2]/, /[0-9]/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /[0-5]/, /\d/]
  },
  datahora: {
    text: '00/00/0000 00:00',
    textMask: [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-2]/, /[0-9]/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /[0-5]/, /\d/]
  },
  ect: {
    text: '00000000-0',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
  },
  endereco: {
    text: '0000.0000.0000',
    textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[0-2]/, /[0-9]/, /\d/, /\d/]
  },
  iptu: {
    text: '0000.0000.0000',
    textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[0-2]/, /[0-9]/, /\d/, /\d/]
  },
  number: {
    text: '0.000,00',
    textMask: createNumberMask(maskNumber)
  },
  porcentagem: {
    text: '00,00%',
    textMask: createNumberMask({
      ...maskNumber,
      suffix: '%'
    })
  },
  pispasep: {
    text: '000.00000.00-0',
    textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/]
  },
  placa: {
    text: 'AAA-0000',
    textMask: [/[A-S]/, /[A-Z]/, /[A-Z]/, '-', /\d/, /\d/, /\d/, /\d/]
  },
  processo: {
    text: '0000000-00.0000.AAA.0000',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[A-Za-z]/, /[A-Za-z]/, /[A-Za-z]/, '.', /\d/, /\d/, /\d/, /\d/]
  },
  renavam: {
    text: '0000000000-00',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/],
    textMaskFunction: function mask(userInput: any) {
      const numbers = userInput.match(/\d/g);
      let numberLength = 0;
      if (numbers) {
        numberLength = numbers.join('').length;
      }
      if (!userInput || numberLength < 9) {
        return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
      } else {
        return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
      }
    }
  },
  rg: {
    text: 'AA-00.000.000',
    textMask: [/[A-Za-z]/, /[A-Za-z]/, '-', /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
  },
  sped: {
    text: '0000.0000.0000',
    textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[0-2]/, /[0-9]/, /\d/, /\d/]
  },
  telefone: {
    text: '(00) 00000-0000',
    textMask: ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    textMaskFunction: function mask(userInput: any) {
      const numbers = userInput.match(/\d/g);
      let numberLength = 0;
      if (numbers) {
        numberLength = numbers.join('').length;
      }
      if (!userInput || numberLength > 10) {
        return ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      } else {
        return ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      }
    }
  },
  time: {
    text: '00:00',
    textMask: [/\d/, /\d/, ':', /[0-5]/, /\d/]
  },
  titulo: {
    text: '0000.0000.0000',
    textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[0-2]/, /[0-9]/, /\d/, /\d/]
  },
  utils: {
    numberToString: (n: number) => {
      if (!n || typeof n === 'string') {
        return n;
      }
      return (n.toString()).replace('.', ',');
    },
    textMask: false
  }
}


const makeGeneric = (key: string) => {
  return (value: string) => {
    if (!value) {
      return '';
    }
    let mask = MASKS[key].textMask
    let textMaskFunction = MASKS[key].textMaskFunction
    if (typeof textMaskFunction === 'function') {
      mask = textMaskFunction(value);
    }


    return conformToMask(
      value,
      mask,
      { guide: false }
    ).conformedValue;
  }
}

export const maskBr = {
  aih: makeGeneric('aih'),
  celular: makeGeneric('celular'),
  cep: makeGeneric('cep'),
  certidao: makeGeneric('certidao'),
  chassi: makeGeneric('chassi'),
  cnae: makeGeneric('cnae'),
  cnh: makeGeneric('cnh'),
  renachseguranca: makeGeneric('renachseguranca'),
  renachestadual: makeGeneric('renachestadual'),
  cnhespelho: makeGeneric('cnhespelho'),
  cnpj: makeGeneric('cnpj'),
  cns: makeGeneric('cns'),
  contabanco: makeGeneric('contabanco'),
  cpf: makeGeneric('cpf'),
  cpfcnpj: makeGeneric('cpfcnpj'),
  cartaocredito: makeGeneric('cartaocredito'),
  currency: (currencyValueInput: string | number, decimalsFormat: number = 2) => {
    return formatNumber(MASKS['currency'], currencyValueInput, decimalsFormat);
  },
  data: makeGeneric('data'),
  date: makeGeneric('date'),
  datetime: makeGeneric('datetime'),
  datahora: makeGeneric('datahora'),
  ect: makeGeneric('ect'),
  endereco: makeGeneric('endereco'),
  inscricaoestadual: (inscricaoestadualValue: string, estado: string) => {
    const ie = MASKSIE;
    const ieState = ie[estado]

    if (!inscricaoestadualValue || !estado || !ieState ||
      !ieState.textMask) {
      return '';
    }

    let mask = ieState.textMask;
    let textMaskFunction = ieState.textMaskFunction
    if (typeof textMaskFunction === 'function') {
      mask = textMaskFunction(inscricaoestadualValue);
    }

    return conformToMask(
      inscricaoestadualValue,
      mask,
      { guide: false }
    ).conformedValue;
  },
  iptu: (iptuValue: string, estado: string, cidade: string) => {
    const mask = mask_iptu(iptuValue, estado, cidade);
    if (!mask || typeof mask === 'string') {
      return '';
    }
    return conformToMask(
      iptuValue,
      mask.textMask,
      { guide: false }
    ).conformedValue;
  },
  number: (numberValue: any, decimalsFormat: number = 2) => {
    return formatNumber(MASKS['number'], numberValue, decimalsFormat);
  },
  porcentagem: (porcentagemValue: string, decimalsFormat: number = 2) => {
    return formatNumber(MASKS['porcentagem'], porcentagemValue, decimalsFormat);
  },
  pispasep: makeGeneric('pispasep'),
  placa: makeGeneric('placa'),
  processo: makeGeneric('processo'),
  renavam: makeGeneric('renavam'),
  rg: makeGeneric('rg'),
  sped: makeGeneric('sped'),
  telefone: makeGeneric('telefone'),
  time: (value: string | Date) => {
    if (value instanceof Date) {
      value = value.toTimeString().split(' ')[0]
    }
    return makeGeneric('time')(value)
  },
  titulo: makeGeneric('titulo')
};



/**
 * FROM TEXT-MASK
 */
export const placeholderChar = '_'
export const strFunction = 'function'

const defaultPlaceholderChar = placeholderChar;
const emptyArray: any = []
const emptyString = ''

export function conformToMask(inputValue: String | Date = emptyString, mask = emptyArray, config: any = {}) {
  let rawValue = inputValue.toString();
  if (typeof inputValue === 'number') {
    rawValue = (<number>inputValue).toString();
  }
  if (inputValue instanceof Date) {
    rawValue = (<Date>inputValue).toLocaleString("pt-br")
  }

  if (!isArray(mask)) {
    // If someone passes a function as the mask property, we should call the
    // function to get the mask array - Normally this is handled by the
    // `createTextMaskInputElement:update` function - this allows mask functions
    // to be used directly with `conformToMask`

    if (typeof mask === strFunction) {
      // call the mask function to get the mask array
      mask = mask(inputValue, config)

      // mask functions can setup caret traps to have some control over how the caret moves. We need to process
      // the mask for any caret traps. `processCaretTraps` will remove the caret traps from the mask
      mask = processCaretTraps(mask).maskWithoutCaretTraps
    } else {
      throw new Error(
        'Text-mask:conformToMask; The mask property must be an array.'
      )
    }
  }

  // These configurations tell us how to conform the mask

  const guide = config.guide || true;
  const previousConformedValue = config.previousConformedValue || emptyString;
  const placeholder = convertMaskToPlaceholder(mask, placeholderChar);
  const currentCaretPosition = config.currentCaretPosition;
  const keepCharPositions = config.keepCharPositions;

  // The configs below indicate that the user wants the algorithm to work in *no guide* mode
  const suppressGuide = guide === false && previousConformedValue !== undefined

  // Calculate lengths once for performance
  const rawValueLength = rawValue.length
  const previousConformedValueLength = previousConformedValue.length
  const placeholderLength = placeholder.length
  const maskLength = mask.length

  // This tells us the number of edited characters and the direction in which they were edited (+/-)
  const editDistance = rawValueLength - previousConformedValueLength

  // In *no guide* mode, we need to know if the user is trying to add a character or not
  const isAddition = editDistance > 0

  // Tells us the index of the first change. For (438) 394-4938 to (38) 394-4938, that would be 1
  const indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0)

  // We're also gonna need the index of last change, which we can derive as follows...
  const indexOfLastChange = indexOfFirstChange + Math.abs(editDistance)

  // If `conformToMask` is configured to keep character positions, that is, for mask 111, previous value
  // _2_ and raw value 3_2_, the new conformed value should be 32_, not 3_2 (default behavior). That's in the case of
  // addition. And in the case of deletion, previous value _23, raw value _3, the new conformed string should be
  // __3, not _3_ (default behavior)
  //
  // The next block of logic handles keeping character positions for the case of deletion. (Keeping
  // character positions for the case of addition is further down since it is handled differently.)
  // To do this, we want to compensate for all characters that were deleted
  if (keepCharPositions === true && !isAddition) {
    // We will be storing the new placeholder characters in this variable.
    let compensatingPlaceholderChars = emptyString

    // For every character that was deleted from a placeholder position, we add a placeholder char
    for (let i = indexOfFirstChange; i < indexOfLastChange; i++) {
      if (placeholder[i] === placeholderChar) {
        compensatingPlaceholderChars += placeholderChar
      }
    }

    // Now we trick our algorithm by modifying the raw value to make it contain additional placeholder characters
    // That way when the we start laying the characters again on the mask, it will keep the non-deleted characters
    // in their positions.
    rawValue = (
      rawValue.slice(0, indexOfFirstChange) +
      compensatingPlaceholderChars +
      rawValue.slice(indexOfFirstChange, rawValueLength)
    )
  }

  // Convert `rawValue` string to an array, and mark characters based on whether they are newly added or have
  // existed in the previous conformed value. Identifying new and old characters is needed for `conformToMask`
  // to work if it is configured to keep character positions.
  const rawValueArr = rawValue
    .split(emptyString)
    .map((char, i) => ({ char, isNew: i >= indexOfFirstChange && i < indexOfLastChange }))

  // The loop below removes masking characters from user input. For example, for mask
  // `00 (111)`, the placeholder would be `00 (___)`. If user input is `00 (234)`, the loop below
  // would remove all characters but `234` from the `rawValueArr`. The rest of the algorithm
  // then would lay `234` on top of the available placeholder positions in the mask.
  for (let i = rawValueLength - 1; i >= 0; i--) {
    const { char } = rawValueArr[i]

    if (char !== placeholderChar) {
      const shouldOffset = i >= indexOfFirstChange && previousConformedValueLength === maskLength

      if (char === placeholder[(shouldOffset) ? i - editDistance : i]) {
        rawValueArr.splice(i, 1)
      }
    }
  }

  // This is the variable that we will be filling with characters as we figure them out
  // in the algorithm below
  let conformedValue = emptyString
  let someCharsRejected = false

  // Ok, so first we loop through the placeholder looking for placeholder characters to fill up.
  placeholderLoop: for (let i = 0; i < placeholderLength; i++) {
    const charInPlaceholder = placeholder[i]

    // We see one. Let's find out what we can put in it.
    if (charInPlaceholder === placeholderChar) {
      // But before that, do we actually have any user characters that need a place?
      if (rawValueArr.length > 0) {
        // We will keep chipping away at user input until either we run out of characters
        // or we find at least one character that we can map.
        while (rawValueArr.length > 0) {
          // Let's retrieve the first user character in the queue of characters we have left
          const shift = rawValueArr.shift();
          let rawValueChar: string = '', isNew: boolean = false;
          if (shift) {
            rawValueChar = shift.char;
            isNew = shift.isNew;
          }

          // If the character we got from the user input is a placeholder character (which happens
          // regularly because user input could be something like (540) 90_-____, which includes
          // a bunch of `_` which are placeholder characters) and we are not in *no guide* mode,
          // then we map this placeholder character to the current spot in the placeholder
          if (rawValueChar === placeholderChar && suppressGuide !== true) {
            conformedValue += placeholderChar

            // And we go to find the next placeholder character that needs filling
            continue placeholderLoop

            // Else if, the character we got from the user input is not a placeholder, let's see
            // if the current position in the mask can accept it.
          } else if (mask[i].test(rawValueChar)) {
            // we map the character differently based on whether we are keeping character positions or not.
            // If any of the conditions below are met, we simply map the raw value character to the
            // placeholder position.
            if (
              keepCharPositions !== true ||
              isNew === false ||
              previousConformedValue === emptyString ||
              guide === false ||
              !isAddition
            ) {
              conformedValue += rawValueChar
            } else {
              // We enter this block of code if we are trying to keep character positions and none of the conditions
              // above is met. In this case, we need to see if there's an available spot for the raw value character
              // to be mapped to. If we couldn't find a spot, we will discard the character.
              //
              // For example, for mask `1111`, previous conformed value `_2__`, raw value `942_2__`. We can map the
              // `9`, to the first available placeholder position, but then, there are no more spots available for the
              // `4` and `2`. So, we discard them and end up with a conformed value of `92__`.
              const rawValueArrLength = rawValueArr.length
              let indexOfNextAvailablePlaceholderChar = null

              // Let's loop through the remaining raw value characters. We are looking for either a suitable spot, ie,
              // a placeholder character or a non-suitable spot, ie, a non-placeholder character that is not new.
              // If we see a suitable spot first, we store its position and exit the loop. If we see a non-suitable
              // spot first, we exit the loop and our `indexOfNextAvailablePlaceholderChar` will stay as `null`.
              for (let i = 0; i < rawValueArrLength; i++) {
                const charData = rawValueArr[i]

                if (charData.char !== placeholderChar && charData.isNew === false) {
                  break
                }

                if (charData.char === placeholderChar) {
                  indexOfNextAvailablePlaceholderChar = i
                  break
                }
              }

              // If `indexOfNextAvailablePlaceholderChar` is not `null`, that means the character is not blocked.
              // We can map it. And to keep the character positions, we remove the placeholder character
              // from the remaining characters
              if (indexOfNextAvailablePlaceholderChar !== null) {
                conformedValue += rawValueChar
                rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1)

                // If `indexOfNextAvailablePlaceholderChar` is `null`, that means the character is blocked. We have to
                // discard it.
              } else {
                i--
              }
            }

            // Since we've mapped this placeholder position. We move on to the next one.
            continue placeholderLoop
          } else {
            someCharsRejected = true
          }
        }
      }

      // We reach this point when we've mapped all the user input characters to placeholder
      // positions in the mask. In *guide* mode, we append the left over characters in the
      // placeholder to the `conformedString`, but in *no guide* mode, we don't wanna do that.
      //
      // That is, for mask `(111)` and user input `2`, we want to return `(2`, not `(2__)`.
      if (suppressGuide === false) {
        conformedValue += placeholder.substr(i, placeholderLength)
      }

      // And we break
      break

      // Else, the charInPlaceholder is not a placeholderChar. That is, we cannot fill it
      // with user input. So we just map it to the final output
    } else {
      conformedValue += charInPlaceholder
    }
  }

  // The following logic is needed to deal with the case of deletion in *no guide* mode.
  //
  // Consider the silly mask `(111) /// 1`. What if user tries to delete the last placeholder
  // position? Something like `(589) /// `. We want to conform that to `(589`. Not `(589) /// `.
  // That's why the logic below finds the last filled placeholder character, and removes everything
  // from that point on.
  if (suppressGuide && isAddition === false) {
    let indexOfLastFilledPlaceholderChar = null

    // Find the last filled placeholder position and substring from there
    for (let i = 0; i < conformedValue.length; i++) {
      if (placeholder[i] === placeholderChar) {
        indexOfLastFilledPlaceholderChar = i
      }
    }

    if (indexOfLastFilledPlaceholderChar !== null) {
      // We substring from the beginning until the position after the last filled placeholder char.
      conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1)
    } else {
      // If we couldn't find `indexOfLastFilledPlaceholderChar` that means the user deleted
      // the first character in the mask. So we return an empty string.
      conformedValue = emptyString
    }
  }

  return { conformedValue, meta: { someCharsRejected } }
}


export function convertMaskToPlaceholder(mask = emptyArray, placeholderChar = defaultPlaceholderChar) {
  if (!isArray(mask)) {
    throw new Error(
      'Text-mask:convertMaskToPlaceholder; The mask property must be an array.'
    )
  }

  if (mask.indexOf(placeholderChar) !== -1) {
    throw new Error(
      'Placeholder character must not be used as part of the mask. Please specify a character ' +
      'that is not present in your mask as your placeholder character.\n\n' +
      `The placeholder character that was received is: ${JSON.stringify(placeholderChar)}\n\n` +
      `The mask that was received is: ${JSON.stringify(mask)}`
    )
  }

  return mask.map((char: any) => {
    return (char instanceof RegExp) ? placeholderChar : char
  }).join('')
}

/**
 * Due to a bug on textmask, the requireDecimal its not working, so this function solves this problem
 * @param maskType 
 * @param numberValue 
 * @param decimalsFormat 
 * @returns 
 */
function formatNumber(maskType: any, numberValue: any, decimalsFormat: number = 2) {
  if (!numberValue && numberValue !== 0) {
    return '';
  }

  if (!numberValue.split) {
    numberValue += '';
    numberValue = numberValue.replace('.', ',');
  }

  const vals = numberValue.split(',');

  if (!maskType.textMask || typeof maskType.textMask !== 'function') {
    return '';
  }

  const mask = maskType.textMask(vals[0]);

  let decimals = ''
  if (decimalsFormat == undefined) {
    decimals = vals.length > 1 ? ',' + vals[1] : '';
  } else {
    decimals = vals.length > 1 ? (vals[1] < 10 ? vals[1].toString() + '0' : vals[1].toString()) : '00';
    if (decimals.length > decimalsFormat) {
      decimals = decimals.substring(0, decimalsFormat);
    }
  }

  let conformedValue = conformToMask(
    numberValue,
    mask,
    { guide: false }
  ).conformedValue


  let suffix = ''
  if (conformedValue.indexOf('%') >= 0) {
    conformedValue = conformedValue.replace('%', '')
    suffix = '%'
  }
  return conformedValue + (decimalsFormat > 0 ? ',' + decimals : '') + suffix;
}