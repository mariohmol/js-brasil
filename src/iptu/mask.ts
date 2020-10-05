import { BigObject, MaskType } from '../interfaces';

export const IPTUMASKS: BigObject<BigObject<MaskType>> = {
  'minas-gerais': {
    'belo-horizonte': {
      text: '000.000.000.000.0', //123.456.789.012.3
      textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/]
    },
    'contagem': {
      text: '20.040.040-1',
      textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
      textMaskFunction: function mask(userInput: any) {
        const numbers: any = userInput.match(/\d/g);
        let numberLength = 0;
        if (numbers) {
          numberLength = numbers.join('').length;
        }

        if (!userInput || numberLength > 9) {
          return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        } else {
          return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
        }
      }
    }
  },
  'sao-paulo': {
    'sao-paulo': {
      text: '00000000000-0',
      textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    }
  },
  'parana': {
    'curitiba': {
      text: '00000000000-0',
      textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    }
  }
};
