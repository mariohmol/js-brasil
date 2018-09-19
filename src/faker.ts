import { MASKS } from './utils';



const generateMasks = () => {
  const fake = {};
  for (const key in MASKS) {
    if (!key) {
      continue;
    }
    const val = MASKS[key];

    // cpf: {
    //   text: '000.000.000-00',
    //   textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    // },

    fake[key] = () => {
      return val.textMask.map(c => {
        if (c === /\d/) {
          return Math.floor(Math.random() * 10)
        } else if (c === /[A-Za-z]/) {
          const num = Math.floor((Math.random() * 57)) + 65;
          return Math.floor(Math.random() * 10)
        } else if (c === /[1-9]/) {
          return Math.floor(Math.random() * 9) + 1;
        } else {
          return c;
        }
      });
    };
  }
};

export const fakerBr = generateMasks();
