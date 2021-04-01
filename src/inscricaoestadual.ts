import { allNumbersAreSame } from './utils';
import { BigObject, MaskType } from './interfaces';

/**
 * BASED ON https://github.com/gammasoft/ie/
 */


export const generateInscricaoEstadual: BigObject<Function> = {
  ac: function (valor: any) {
    if (tamanhoNaoE(valor, 13)) {
      return false;
    }

    if (naoComecaCom(valor, '01')) {
      return false;
    }

    const base = primeiros(valor, 11);

    const primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
    const segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiroDigito));

    return base + primeiroDigito + segundoDigito;
  },

  am: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }

    return calculoTrivialGenerate(valor);
  },

  al: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }

    if (naoComecaCom(valor, '24')) {
      return false;
    }

    //
    // Removi a validação do tipo da empresa abaixo
    // devido a ambiguidade entre a especificação do
    // Sintegra (http://www.sintegra.gov.br/Cad_Estados/cad_AL.html) e do
    // site do da Sefaz do Alagoas (http://www.sefaz.al.gov.br/sintegra/cad_AL.asp).
    // Veja o issue #4 - https://github.com/gammasoft/ie/issues/4
    //
    // if('03578'.split('').indexOf(valor.substring(2, 3)) === -1) {
    //     return false;
    // }

    const base: any = primeiros(valor);

    const resto = 11 - mod(base);

    const digito = resto === 10 ? 0 : resto;

    return base + digito;
  },

  ap: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }

    if (naoComecaCom(valor, '03')) {
      return false;
    }

    const base: any = primeiros(valor);

    let p: number, d: number;

    if (entre(base, 3000001, 3017000)) {
      p = 5;
      d = 0;
    } else if (entre(base, 3017001, 3019022)) {
      p = 9;
      d = 1;
    } else {
      p = 0;
      d = 0;
    }

    const resto = mod(p + base, [2, 3, 4, 5, 6, 7, 8, 9, 1]);

    let digito: number;
    if (resto === 1) {
      digito = 0;
    } else if (resto === 0) {
      digito = d;
    } else {
      digito = 11 - resto;
    }

    return base + digito;
  },

  ba: function (valor: any) {
    if (tamanhoNaoE(valor, 8) && tamanhoNaoE(valor)) {
      return false;
    }

    const base: any = primeiros(valor, valor.length - 2);
    let primeiroDigito: number, segundoDigito: number;

    const segundoMultiplicador = serie(2, 7);
    const primeiroMultiplicador = serie(2, 8);

    let primeiroResto: number, segundoResto: number;
    let digitoComparacao = valor.substring(0, 1);

    if (tamanhoE(valor, 9)) {
      segundoMultiplicador.push(8);
      primeiroMultiplicador.push(9);
      digitoComparacao = valor.substring(1, 2);
    }

    if ('0123458'.split('').indexOf(digitoComparacao) !== -1) {
      segundoResto = mod(base, segundoMultiplicador, 10);
      segundoDigito = segundoResto === 0 ? 0 : 10 - segundoResto;

      primeiroResto = mod(base + segundoDigito, primeiroMultiplicador, 10);
      primeiroDigito = primeiroResto === 0 ? 0 : 10 - primeiroResto;
    } else {
      segundoResto = mod(base, segundoMultiplicador);
      segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(segundoResto);

      primeiroResto = mod(base + segundoDigito, primeiroMultiplicador);
      primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(primeiroResto);
    }

    return base + primeiroDigito + segundoDigito;
  },

  ce: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }
    return calculoTrivialGenerate(valor);
  },

  df: function (valor: any) {
    if (tamanhoNaoE(valor, 13)) {
      return false;
    }

    if (naoComecaCom(valor, '07') && naoComecaCom(valor, '08')) {
      return false;
    }
    const base: any = primeiros(valor, 11);

    const primeiro = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
    const segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro));
    return base + primeiro + segundo;
  },

  es: function (valor: any) {
    return calculoTrivialGenerate(valor);
  },
  go: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }

    if (['10', '11', '15'].indexOf(valor.substring(0, 2)) === -1) {
      return false;
    }

    const base: any = primeiros(valor);

    if (base === '11094402') {
      return valor.substr(8) === '1' || valor.substr(8) === '0';
    }

    const resto = mod(base);
    let digito: number;

    if (resto === 0) {
      digito = 0;
    } else if (resto === 1) {
      if (entre(base, 10103105, 10119997)) {
        digito = 1;
      } else {
        digito = 0;
      }
    } else {
      digito = 11 - resto;
    }

    return base + digito;
  },
  ma: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }

    if (naoComecaCom(valor, '12')) {
      return false;
    }

    return calculoTrivialGenerate(valor);
  },

  mg: function (valor: any) {
    if (tamanhoNaoE(valor, 13)) {
      return false;
    }

    const base = primeiros(valor, 11);

    const baseComZero = valor.substring(0, 3) + '0' + valor.substring(3, 11);

    let i = 0;
    const produtorioLiteral = baseComZero.split('').reduceRight(function (anterior, atual) {
      if (i > [2, 1].length - 1) {
        i = 0;
      }

      return ([2, 1][i++] * parseInt(atual, 10)).toString() + anterior.toString();
    }, '').split('').reduce(function (anterior, atual) {
      return anterior + parseInt(atual, 10);
    }, 0);

    let primeiro: any = ((Math.floor(produtorioLiteral / 10) + 1) * 10) - produtorioLiteral;
    if (primeiro === 10) {
      primeiro = 0;
    }

    const segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro, serie(2, 11)));

    return base + primeiro + segundo;
  },

  ms: function (valor: any) {
    if (naoComecaCom(valor, '28')) {
      return false;
    }

    return calculoTrivialGenerate(valor);
  },
  mt: function (valor: any) {
    if (tamanhoNaoE(valor, 11) && tamanhoNaoE(valor)) {
      return false;
    }

    const base = tamanhoE(valor, 11) ? valor.substring(0, 10) : primeiros(valor);
    return calculoTrivialGenerate(valor, base, true);
  },
  pa: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }

    if (naoComecaCom(valor, '15')) {
      return false;
    }

    return calculoTrivialGenerate(valor);
  },

  pb: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }

    return calculoTrivialGenerate(valor);
  },

  pe: function (valor: any) {
    const base: any = valor.substring(0, valor.length - 2);

    const restoPrimeiro = mod(base);
    const primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;

    const restoSegundo = mod(base + primeiro);
    const segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;

    return base + primeiro + segundo;
  },

  pi: function (valor: any) {
    return calculoTrivialGenerate(valor);
  },

  pr: function (valor: any) {
    if (tamanhoNaoE(valor, 10)) {
      return false;
    }

    const base = primeiros(valor);

    const restoPrimeiro = mod(base, serie(2, 7));
    const primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;

    const restoSegundo = mod(base + primeiro, serie(2, 7));
    const segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;

    return base + primeiro + segundo;
  },
  rj: function (valor: any) {
    if (tamanhoNaoE(valor, 8)) {
      return false;
    }

    const base = primeiros(valor, 7);
    const digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base, serie(2, 7)));

    return base + digito;
  },

  rn: function (valor: any) {
    if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 10)) {
      return false;
    }

    if (naoComecaCom(valor, '20')) {
      return false;
    }

    const base = valor.substring(0, valor.length - 1);

    const multiplicadores = serie(2, 9);
    if (tamanhoE(valor, 10)) {
      multiplicadores.push(10);
    }

    const resto = (mod(base, multiplicadores) * 10) % 11;
    const digito = resto === 10 ? 0 : resto;

    return base + digito;
  },
  ro: function (valor: any) {
    let base: any, digito: number, resultadoMod: number;

    if (tamanhoE(valor, 9)) {
      base = valor.substring(3, 8);
      digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));

      return valor === valor.substring(0, 3) + base + digito;
    } else if (tamanhoE(valor, 14)) {
      base = primeiros(valor, 13);
      resultadoMod = mod(base);
      digito = resultadoMod <= 1 ? 1 : 11 - resultadoMod;

      return base + digito;
    } else {
      return false;
    }
  },
  rr: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }

    if (naoComecaCom(valor, '24')) {
      return false;
    }

    const base = primeiros(valor);
    const digito = mod(base, [8, 7, 6, 5, 4, 3, 2, 1], 9);

    return base + digito;
  },

  rs: function (valor: any) {
    if (tamanhoNaoE(valor, 10)) {
      return false;
    }

    const base = primeiros(valor, 9);
    return calculoTrivialGenerate(valor, base, true);
  },

  sc: function (valor: any) {
    return calculoTrivialGenerate(valor);
  },

  se: function (valor: any) {
    if (tamanhoNaoE(valor)) {
      return false;
    }

    return calculoTrivialGenerate(valor);
  },

  sp: function (valor: any) {
    valor = valor.toUpperCase();

    let segundaBase: string;

    if (valor.substr(0, 1) === 'P') {
      if (tamanhoNaoE(valor, 13)) {
        return false;
      }

      const base = valor.substring(1, 9);
      segundaBase = valor.substring(10, 13);
      const resto = mod(base, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
      const digito = resto.length > 1 ? resto[1] : resto[0];

      return 'P' + base + digito + segundaBase;
    } else {
      if (tamanhoNaoE(valor, 12)) {
        return false;
      }

      const primeiraBase = primeiros(valor);
      segundaBase = valor.substring(9, 11);

      const primeiroResto = mod(primeiraBase, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
      const primeiro = primeiroResto.length > 1 ? primeiroResto[1] : primeiroResto[0];

      const segundoResto = mod(primeiraBase + primeiro + segundaBase, serie(2, 10)).toString();
      const segundo = segundoResto.length > 1 ? segundoResto[1] : segundoResto[0];

      return primeiraBase + primeiro + segundaBase + segundo;
    }
  },

  to: function (valor: any) {
    if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 11)) {
      return false;
    }

    let base: any;

    if (tamanhoE(valor, 11)) {
      if (['01', '02', '03', '99'].indexOf(valor.substring(2, 4)) === -1) {
        return false;
      }

      base = valor.substring(0, 2) + valor.substring(4, 10);
    } else {
      base = primeiros(valor);
    }

    const digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));

    return valor.substring(0, valor.length - 1) + digito;
  },
};




const funcoes: BigObject<Function> = {
  ac: function (valor: any) {
    return valor === generateInscricaoEstadual.ac(valor);
  },

  am: function (valor: any) {
    return valor === generateInscricaoEstadual.am(valor);
  },

  al: function (valor: any) {
    return valor === generateInscricaoEstadual.al(valor);
  },

  ap: function (valor: any) {
    return valor === generateInscricaoEstadual.ap(valor);
  },

  ba: function (valor: any) {
    return valor === generateInscricaoEstadual.ba(valor);
  },

  ce: function (valor: any) {
    return valor === generateInscricaoEstadual.ce(valor);
  },

  df: function (valor: any) {
    return valor === generateInscricaoEstadual.df(valor);
  },

  es: function (valor: any) {
    return valor === generateInscricaoEstadual.es(valor);
  },
  go: function (valor: any) {
    return valor === generateInscricaoEstadual.go(valor);
  },
  ma: function (valor: any) {
    return valor === generateInscricaoEstadual.ma(valor);
  },

  mg: function (valor: any) {
    return valor === generateInscricaoEstadual.mg(valor);
  },

  ms: function (valor: any) {
    return valor === generateInscricaoEstadual.ms(valor);
  },
  mt: function (valor: any) {
    return valor === generateInscricaoEstadual.mt(valor);
  },
  pa: function (valor: any) {
    return valor === generateInscricaoEstadual.pa(valor);
  },

  pb: function (valor: any) {
    return valor === generateInscricaoEstadual.pb(valor);
  },

  pe: function (valor: any) {
    return valor === generateInscricaoEstadual.pe(valor);
  },

  pi: function (valor: any) {
    return valor === generateInscricaoEstadual.pi(valor);
  },

  pr: function (valor: any) {
    return valor === generateInscricaoEstadual.pr(valor);
  },
  rj: function (valor: any) {
    return valor === generateInscricaoEstadual.rj(valor);
  },

  rn: function (valor: any) {
    return valor === generateInscricaoEstadual.rn(valor);
  },
  ro: function (valor: any) {
    return valor === generateInscricaoEstadual.ro(valor);
  },
  rr: function (valor: any) {
    return valor === generateInscricaoEstadual.rr(valor);
  },

  rs: function (valor: any) {
    return valor === generateInscricaoEstadual.rs(valor);
  },

  sc: function (valor: any) {
    return valor === generateInscricaoEstadual.sc(valor);
  },

  se: function (valor: any) {
    return valor === generateInscricaoEstadual.se(valor);
  },

  sp: function (valor: string | boolean) {
    return valor === generateInscricaoEstadual.sp(valor);
  },

  to: function (valor: any) {
    return valor === generateInscricaoEstadual.to(valor);
  },
};




export function validate_inscricaoestadual(ie: string | Array<string>, estado: any) {
  if (eIndefinido(estado) || estado === null) {
    estado = '';
  }

  estado = estado.toLowerCase();

  if (estado !== '' && !(estado in funcoes)) {
    return new Error('estado não é válido');
  }

  if (eIndefinido(ie)) {
    return new Error('ie deve ser fornecida');
  }

  if (Array.isArray(ie)) {
    let retorno = true;
    ie.forEach(function (i) {
      if (!validate_inscricaoestadual(i, estado)) {
        retorno = false;
      }
    });
    return retorno;
  }

  if (typeof ie !== 'string') {
    return new Error('ie deve ser string ou array de strings');
  }

  if (!allNumbersAreSame(ie)) {
    return new Error('ie com todos dígitos iguais');
  }

  if (ie.match(/^ISENTO$/i)) {
    return true;
  }

  ie = ie.replace(/[\.|\-|\/|\s]/g, '');

  if (estado === '') {
    if (lookup(ie)) {
      return true;
    } else {
      return false;
    }
  }

  if (/^\d+$/.test(ie) || estado === 'sp' || funcoes[estado]) {
    return funcoes[estado](ie);
  }


  return false;
}

export const MASKSIE: BigObject<MaskType> = {
  ac: {
    text: '01.004.823/001-12',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  al: {
    text: '240000048',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  am: {
    text: '04.145.871-0',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
  },
  ap: {
    text: '240000048',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  ba: {
    text: '1234567-48',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    textMaskFunction: function mask(userInput: any) {
      const numberLength = getSizeNumbers(userInput);
      if (!userInput || numberLength > 8) {
        return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
      } else {
        return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
      }
    }
  },
  ce: {
    text: '06.000001-5',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
  },
  df: {
    text: '06 000001 123-55',
    textMask: [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  es: {
    text: '082.560.67-6',
    textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/]
  },
  go: {
    text: '06.000.001-5',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
  },
  ma: {
    text: '12.104.376-2',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  mg: {
    text: '001.819.263/0048',
    textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  },
  ms: {
    text: '001819263',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  mt: {
    text: '0018192630-1',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
  },
  pa: {
    text: '06-000001-5',
    textMask: [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
  },
  pb: {
    text: '06000001-5',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
  },
  pe: {
    text: '0192310-24',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  pi: {
    text: '19.301.656-7',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
  },
  pr: {
    text: '19301656-78',
    textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  },
  rj: {
    text: '20.040.04-1',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/]
  },
  rn: {
    text: '20.040.040-1',
    textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
    textMaskFunction: function mask(userInput: any) {
      const numberLength = getSizeNumbers(userInput);

      if (!userInput || numberLength > 9) {
        return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
      } else {
        return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
      }
    }
  },
  ro: {
    text: '101.62521-3',
    textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  rr: {
    text: '24006628-1',
    textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  rs: {
    text: '024/0440013',
    textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  sc: {
    text: '271.234.563',
    textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
  },
  se: {
    text: '27123456-3',
    textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
  sp: {
    text: '114.814.878.119',
    textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
  },
  to: {
    text: '11 81 4878119',
    textMask: [/\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  },
};

function getSizeNumbers(userInput: string) {
  const numbers: any = userInput.match(/\d/g);
  let numberLength = 0;
  if (numbers) {
    numberLength = numbers.join('').length;
  }
  return numberLength
}

function eIndefinido(objeto: any) {
  return typeof objeto === typeof undefined;
}

function tamanhoNaoE(string: { length: number; }, tamanho = 9) {
  if (eIndefinido(tamanho)) {
    tamanho = 9;
  }

  return string.length !== tamanho;
}

function tamanhoE(string: any[], tamanho: number) {
  return !tamanhoNaoE(string, tamanho);
}

function serie(de: number, ate: number) {
  const resultado = [];

  while (de <= ate) {
    resultado.push(de++);
  }

  return resultado;
}

function primeiros(string: any, quantidade = 8) {
  if (eIndefinido(quantidade)) {
    quantidade = 8;
  }

  return string.substring(0, quantidade);
}

function substracaoPor11SeMaiorQue2CasoContrario0(valor: number) {
  return valor < 2 ? 0 : 11 - valor;
}

function mod(valor: string, multiplicadores = serie(2, 9), divisor = 11) {
  if (eIndefinido(divisor)) {
    divisor = 11;
  }

  if (eIndefinido(multiplicadores)) {
    multiplicadores = serie(2, 9);
  }

  let i = 0;

  return valor.split('').reduceRight(function (anterior: number, atual: string) {
    if (i > multiplicadores.length - 1) {
      i = 0;
    }

    return (multiplicadores[i++] * parseInt(atual, 10)) + anterior;
  }, 0) % divisor;
}

function calculoTrivialGenerate(valor: any, base: any = null, validarTamanho = false) {
  if (!validarTamanho && tamanhoNaoE(valor)) {
    return false;
  }
  if (eIndefinido(base)) {
    base = primeiros(valor);
  }
  if (!base) {
    base = primeiros(valor);
  }

  const digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));

  return base + digito;
}

function naoComecaCom(string: any, valor: string) {
  return string.substring(0, valor.length) !== valor;
}

function entre(valor: string | number, limiteInferior: number, limiteSuperior: number) {
  if (typeof valor === 'string') {
    valor = parseInt(valor, 10);
  }

  return valor >= limiteInferior && valor <= limiteSuperior;
}


function lookup(ie: any) {
  const resultado = [];

  for (const estado in funcoes) {
    if (funcoes[estado](ie)) {
      resultado.push(estado);
    }
  }

  if (tamanhoE(resultado, 0)) {
    return false;
  } else {
    return resultado;
  }
}

