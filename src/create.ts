import { modulo11, getAllDigits } from "./utils";

export function create_cpf(strCPF: string) {
    strCPF = strCPF.replace(/[^\d]+/g, '');
    if (strCPF === '00000000000') {
        return false;
    }

    const restos = [
        modulo11(strCPF, 9, 11),
        modulo11(strCPF, 10, 12)
    ];

    return restos;
}


export function create_cnpj(cnpj: string) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') {
        return false;
    }

    if (cnpj.length !== 14) {
        return false;
    }

    // Elimina CNPJs invalidos conhecidos
    if (cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') {
        return false;
    }

    // Valida DVs
    let tamanho: number = cnpj.length - 2
    let numeros: any = cnpj.substring(0, tamanho);
    let soma: any = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }

    }
    const resultados = [0, 0];
    resultados[0] = soma % 11 < 2 ? 0 : 11 - soma % 11;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultados[1] = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return resultados;
}


export function create_creditcard(number) {

    // if (number.length > 18) { alert("Erro. A rotina não abrange cartões\ncom mais de 18 dígitos (fora o DV).\nIntroduza 18 dígitos, no máximo."); }

    number = "00000000000000000" + number;
    number = number.slice(number.length - 18);

    let ccredDig1 = number.slice(17); let b1 = eval(ccredDig1);
    let ccredDig2 = number.slice(16, 17); let b2 = eval(ccredDig2);
    let ccredDig3 = number.slice(15, 16); let b3 = eval(ccredDig3);
    let ccredDig4 = number.slice(14, 15); let b4 = eval(ccredDig4);
    let ccredDig5 = number.slice(13, 14); let b5 = eval(ccredDig5);
    let ccredDig6 = number.slice(12, 13); let b6 = eval(ccredDig6);
    let ccredDig7 = number.slice(11, 12); let b7 = eval(ccredDig7);
    let ccredDig8 = number.slice(10, 11); let b8 = eval(ccredDig8);
    let ccredDig9 = number.slice(9, 10); let b9 = eval(ccredDig9);
    let ccredDig10 = number.slice(8, 9); let b10 = eval(ccredDig10);
    let ccredDig11 = number.slice(7, 8); let b11 = eval(ccredDig11);
    let ccredDig12 = number.slice(6, 7); let b12 = eval(ccredDig12);
    let ccredDig13 = number.slice(5, 6); let b13 = eval(ccredDig13);
    let ccredDig14 = number.slice(4, 5); let b14 = eval(ccredDig14);
    let ccredDig15 = number.slice(3, 4); let b15 = eval(ccredDig15);
    let ccredDig16 = number.slice(2, 3); let b16 = eval(ccredDig16);
    let ccredDig17 = number.slice(1, 2); let b17 = eval(ccredDig17);
    let ccredDig18 = number.slice(0, 1); let b18 = eval(ccredDig18);


    let ci17 = b1 * 2; if (ci17 > 9) { ci17 = ci17 - 9; }
    let ci1516 = b3 * 2; if (ci1516 > 9) { ci1516 = ci1516 - 9; }
    let ci1314 = b5 * 2; if (ci1314 > 9) { ci1314 = ci1314 - 9; }
    let ci1112 = b7 * 2; if (ci1112 > 9) { ci1112 = ci1112 - 9; }
    let ci910 = b9 * 2; if (ci910 > 9) { ci910 = ci910 - 9; }
    let ci78 = b11 * 2; if (ci78 > 9) { ci78 = ci78 - 9; }
    let ci56 = b13 * 2; if (ci56 > 9) { ci56 = ci56 - 9; }
    let ci34 = b15 * 2; if (ci34 > 9) { ci34 = ci34 - 9; }
    let ci12 = b17 * 2; if (ci12 > 9) { ci12 = ci12 - 9; }
    let ci1617 = b2;
    let ci1415 = b4;
    let ci1213 = b6;
    let ci1011 = b8;
    let ci89 = b10;
    let ci67 = b12;
    let ci45 = b14;
    let ci23 = b16;
    let ci01 = b18;

    let ccredDig = (ci1617 + ci1415 + ci1213 + ci1011 + ci89 + ci67 + ci45 + ci23 + ci01 + ci17 + ci1516 + ci1314 + ci1112 + ci910 + ci78 + ci56 + ci34 + ci12) % 10;
    ccredDig = 10 - ccredDig; if (ccredDig == 10) { ccredDig = 0; }

    return ccredDig;
}

export function create_renavam(renavam: string) {
    let dig1 = 0;
    while (renavam.length < 11) {
        renavam = '0' + renavam;
    }

    dig1 = (renavam.charCodeAt(0) - 48) * 3 + (renavam.charCodeAt(1) - 48) * 2 + (renavam.charCodeAt(2) - 48) * 9 + (renavam.charCodeAt(3) - 48) * 8 +
        (renavam.charCodeAt(4) - 48) * 7 + (renavam.charCodeAt(5) - 48) * 6 + (renavam.charCodeAt(6) - 48) * 5 +
        (renavam.charCodeAt(7) - 48) * 4 + (renavam.charCodeAt(8) - 48) * 3 + (renavam.charCodeAt(9) - 48) * 2;
    dig1 = dig1 * 10;
    let resto = (dig1 % 11);
    if (resto === 10) {
        return 0;
    } else {
        return resto;
    }
}



export function create_ect(number) {

    number = "0000000" + number;
    number = number.slice(number.length - 8);

    let regEctDig1 = number.slice(7);
    let b1 = eval(regEctDig1);
    let regEctDig2 = number.slice(6, 7);
    let b2 = eval(regEctDig2);
    let regEctDig3 = number.slice(5, 6);
    let b3 = eval(regEctDig3);
    let regEctDig4 = number.slice(4, 5);
    let b4 = eval(regEctDig4);
    let regEctDig5 = number.slice(3, 4);
    let b5 = eval(regEctDig5);
    let regEctDig6 = number.slice(2, 3);
    let b6 = eval(regEctDig6);
    let regEctDig7 = number.slice(1, 2);
    let b7 = eval(regEctDig7);
    let regEctDig8 = number.slice(0, 1);
    let b8 = eval(regEctDig8);

    let regEctDig = (b1 * 7 + b2 * 9 + b3 * 5 + b4 * 3 + b5 * 2 + b6 * 4 + b7 * 6 + b8 * 8) % 11;
    regEctDig = 11 - regEctDig;
    if (regEctDig == 11) { regEctDig = 5; }
    if (regEctDig == 10) { regEctDig = 0; }
    return regEctDig;
}

/**
 * 
 * Font: http://ghiorzi.org/index.htm
 * @param number 
 */
export function create_processo(number) {

    number = "00000000000000000" + number;
    number = number.slice(number.length - 18);

    let procDig1 = number.slice(0, 1); let b1 = eval(procDig1); b1 = b1 * 10000000000;
    let procDig2 = number.slice(1, 2); let b2 = eval(procDig2); b2 = b2 * 1000000000;
    let procDig3 = number.slice(2, 3); let b3 = eval(procDig3); b3 = b3 * 100000000;
    let procDig4 = number.slice(3, 4); let b4 = eval(procDig4); b4 = b4 * 10000000;
    let procDig5 = number.slice(4, 5); let b5 = eval(procDig5); b5 = b5 * 1000000;
    let procDig6 = number.slice(5, 6); let b6 = eval(procDig6); b6 = b6 * 100000;
    let procDig7 = number.slice(6, 7); let b7 = eval(procDig7); b7 = b7 * 10000;
    let procDig8 = number.slice(7, 8); let b8 = eval(procDig8); b8 = b8 * 1000;
    let procDig9 = number.slice(8, 9); let b9 = eval(procDig9); b9 = b9 * 100;
    let procDig10 = number.slice(9, 10); let b10 = eval(procDig10); b10 = b10 * 10;
    let procDig11 = number.slice(10, 11); let b11 = eval(procDig11);

    const proc1a11 = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11;
    const resto1 = proc1a11 % 97;

    let procDig12 = number.slice(11, 12); let b12 = eval(procDig12); b12 = b12 * 1000000;
    let procDig13 = number.slice(12, 13); let b13 = eval(procDig13); b13 = b13 * 100000;
    let procDig14 = number.slice(13, 14); let b14 = eval(procDig14); b14 = b14 * 10000;
    let procDig15 = number.slice(14, 15); let b15 = eval(procDig15); b15 = b15 * 1000;
    let procDig16 = number.slice(15, 16); let b16 = eval(procDig16); b16 = b16 * 100;
    let procDig17 = number.slice(16, 17); let b17 = eval(procDig17); b17 = b17 * 10;
    let procDig18 = number.slice(17); let b18 = eval(procDig18);

    const proc12a18 = b12 + b13 + b14 + b15 + b16 + b17 + b18;
    const resto2 = (resto1 * 10000000 * 100 + proc12a18 * 100) % 97;

    let procJudDV: any = 98 - resto2;

    if (procJudDV < 10) {
        procJudDV = "0" + procJudDV;
    }

    let procJudCompl = b1 / 10000 + b2 / 10000 + b3 / 10000 + b4 / 10000 + b5 / 10000 + b6 / 10000 + b7 / 10000 + "-" + procJudDV + "." + b8 / 1000 + b9 / 100 + b10 / 10 + b11 + "." + b12 / 1000000 + "." + b13 / 100000 + b14 / 10000 + "." + b15 / 1000 + b16 / 100 + b17 / 10 + b18;

    procJudCompl = "000000" + procJudCompl;
    return procJudCompl.slice(procJudCompl.length - 25);
}


export function create_titulo_atual(titulo: string) {
    const tit = titulo;
    let dig1 = 0;
    let dig2 = 0;
    const tam = tit.length;
    const estado = tit.substr(tam - 4, 2);
    titulo = tit.substr(0, tam - 2);
    titulo = '000000000000' + titulo;
    titulo = titulo.substr(titulo.length - 11, titulo.length - 1);
    const exce = (estado === '01') || (estado === '02');
    dig1 = (titulo.charCodeAt(0) - 48) * 2 + (titulo.charCodeAt(1) - 48) * 9 + (titulo.charCodeAt(2) - 48) * 8 +
        (titulo.charCodeAt(3) - 48) * 7 + (titulo.charCodeAt(4) - 48) * 6 + (titulo.charCodeAt(5) - 48) * 5 +
        (titulo.charCodeAt(6) - 48) * 4 + (titulo.charCodeAt(7) - 48) * 3 + (titulo.charCodeAt(8) - 48) * 2;
    let resto = (dig1 % 11);
    if (resto === 0) {
        if (exce) {
            dig1 = 1;
        } else {
            dig1 = 0;
        }
    } else {
        if (resto === 1) {
            dig1 = 0;
        } else {
            dig1 = 11 - resto;
        }
    }
    dig2 = (titulo.charCodeAt(9) - 48) * 4 + (titulo.charCodeAt(10) - 48) * 3 + dig1 * 2;
    resto = (dig2 % 11);
    if (resto === 0) {
        if (exce) {
            dig2 = 1;
        } else {
            dig2 = 0;
        }
    } else {
        if (resto === 1) {
            dig2 = 0;
        } else {
            dig2 = 11 - resto;
        }
    }
    return dig1.toString() +  dig2.toString();
}



export function create_titulo(titNum) {
    titNum = getAllDigits(titNum);

    if (titNum.length > 11) { 
        titNum = titNum.substr(0,11);
    }

    titNum = "00000000" + titNum;
    titNum = titNum.slice(titNum.length - 11);

    let a1 = parseInt(titNum.slice(10)); 
    let a2 = parseInt(titNum.slice(9, 10));
    let a3 = parseInt(titNum.slice(8, 9)); 
    let a4 = parseInt(titNum.slice(7, 8)); 
    let a5 = parseInt(titNum.slice(6, 7)); 
    let a6 = parseInt(titNum.slice(5, 6)); 
    let a7 = parseInt(titNum.slice(4, 5)); 
    let a8 = parseInt(titNum.slice(3, 4)); 
    let a9 = parseInt(titNum.slice(2, 3)); 
    let a10 = parseInt(titNum.slice(1, 2)); 
    let a11 = parseInt(titNum.slice(0, 1)); 

    if (a2 * 10 + a1 == 0 || a2 * 10 + a1 > 28) { 
        throw new Error("Esse nº é suspeito, porque a identificação da \nUF (últimos 2 dígitos) deve estar entre 01 e 28."); 
    }

    let titExcecao1 = 0;
    let titExcecao2 = 0;

    let titPriDig = (a3 * 9 + a4 * 8 + a5 * 7 + a6 * 6 + a7 * 5 + a8 * 4 + a9 * 3 + a10 * 2 + a11 * 9) % 11;
    if (titPriDig == 0) { titExcecao1 = 1; }
    if (titPriDig == 10) { titPriDig = 0; }
    if ((a2 * 10 + a1 == 1 || a2 * 10 + a1 == 2) && (titExcecao1 == 1)) { titPriDig = 1; }

    let titSegDig = (titPriDig * 9 + a1 * 8 + a2 * 7) % 11;
    if (titSegDig == 0) { titExcecao2 = 1; }
    if (titSegDig == 10) { titSegDig = 0; }
    if ((a2 * 10 + a1 == 1 || a2 * 10 + a1 == 2) && (titExcecao2 == 1)) { titSegDig = 1; }

    let titDV: any = titPriDig * 10 + titSegDig;
    if (titDV == 0) { titDV = "00"; }
    if (titDV > 0 && titDV < 10) { titDV = "0" + titDV; }

    return titDV.toString();
}