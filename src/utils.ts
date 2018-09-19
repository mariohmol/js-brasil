import { IEMASKS } from './inscricaoestadual';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

export const MASKS = {
  cpf: {
    text: '000.000.000-00',
    textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  cnpj: {
    text: '00.000.000/0000-00',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  rg: {
    text: 'AA-00.000.000',
    textMask: [/[A-Za-z]/, /[A-Za-z]/, '-', /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
  },
  telefone: {
    text: '(00) 0000-0000',
    textMask: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    textMaskFunction: function mask(userInput) {
      // const DDD5digits = { '11': 'sp', '11': 'sp'  }
      let ddd;
      const numbers = userInput.match(/\d/g);
      let numberLength = 0;
      if (numbers) {
        numberLength = numbers.join('').length;
      }
      if (userInput.length > 2) {
        const splits = userInput.split('');
        ddd = splits[1] + splits[2];
      }

      if (!userInput || numberLength > 10 ) { // || ddd in DDD5digits
        return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      } else {
        return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      }
    }
  },
  cep: {
    text: '00.000-000',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
  },
  inscricaoestadual: IEMASKS,
  time: {
    text: '00:00',
    textMask: [/\d/, /\d/, ':', /\d/, /\d/]
  },
  currency: {
    text: '0.000,00',
    textMask: createNumberMask({
      decimalLimit: 2,
      thousandsSeparatorSymbol: '.',
      decimalSymbol: ',',
      allowDecimal: true,
      integerLimit: 15,
      prefix: 'R$ ',
      suffix: ''
    })
  },
  percentage: {
    text: '00,00%',
    textMask: createNumberMask({
      decimalLimit: 2,
      thousandsSeparatorSymbol: '.',
      decimalSymbol: ',',
      allowDecimal: true,
      integerLimit: 15,
      prefix: '',
      suffix: '%'
    })
  },
  placa: {
    text: 'AAA-0000',
    textMask: [/[A-Za-z]/, /[A-Za-z]/, /[A-Za-z]/, '-', /\d/, /\d/, /\d/, /\d/]
  },
  titulo: {
    text: '0000.0000.0000',
    textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]
  }
}

export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}