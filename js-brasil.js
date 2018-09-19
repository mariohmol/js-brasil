(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jsbrasil = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./src/utils");
var validate_1 = require("./src/validate");
var inscricaoestadual_1 = require("./src/inscricaoestadual");
var faker_1 = require("./src/faker");
exports.validateBr = {
    cep: validate_1.valida_cep,
    cnpj: validate_1.validate_cnpj,
    cpf: validate_1.validate_cpf,
    currency: validate_1.validate_currency,
    inscricaoestadual: inscricaoestadual_1.validar,
    percentage: validate_1.validate_percentage,
    rg: validate_1.validate_rg,
    placa: validate_1.validate_placa,
    telefone: validate_1.validate_telefone,
    time: validate_1.validate_time,
    titulo: validate_1.validate_titulo
};
exports.utilsBr = {
    isPresent: utils_1.isPresent,
    MASKS: utils_1.MASKS
};
exports.default = {
    validateBr: exports.validateBr, utilsBr: exports.utilsBr, fakerBr: faker_1.fakerBr
};

},{"./src/faker":2,"./src/inscricaoestadual":3,"./src/utils":4,"./src/validate":5}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var generateMasks = function () {
    var fake = {};
    var _loop_1 = function (key) {
        if (!key) {
            return "continue";
        }
        var val = utils_1.MASKS[key];
        // cpf: {
        //   text: '000.000.000-00',
        //   textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
        // },
        fake[key] = function () {
            return val.textMask.map(function (c) {
                if (c === /\d/) {
                    return Math.floor(Math.random() * 10);
                }
                else if (c === /[A-Za-z]/) {
                    var num = Math.floor((Math.random() * 57)) + 65;
                    return Math.floor(Math.random() * 10);
                }
                else if (c === /[1-9]/) {
                    return Math.floor(Math.random() * 9) + 1;
                }
                else {
                    return c;
                }
            });
        };
    };
    for (var key in utils_1.MASKS) {
        _loop_1(key);
    }
};
exports.fakerBr = generateMasks();

},{"./utils":4}],3:[function(require,module,exports){
"use strict";
/**
 * BASED ON https://github.com/gammasoft/ie/
 */
Object.defineProperty(exports, "__esModule", { value: true });
var funcoesGenerate = {
    ac: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }
        if (naoComecaCom(valor, '01')) {
            return false;
        }
        var base = primeiros(valor, 11);
        var primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        var segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiroDigito));
        return base + primeiroDigito + segundoDigito;
    },
    am: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    al: function (valor) {
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
        var base = primeiros(valor);
        var resto = mod(base) * 10;
        var resT = resto / 11;
        resto = resto - (resT * 11);
        var digito = resto === 10 ? 0 : resto;
        return base + digito;
    },
    ap: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '03')) {
            return false;
        }
        var base = primeiros(valor);
        var p, d;
        if (entre(base, 3000001, 3017000)) {
            p = 5;
            d = 0;
        }
        else if (entre(base, 3017001, 3019022)) {
            p = 9;
            d = 1;
        }
        else {
            p = 0;
            d = 0;
        }
        var resto = mod(p + base, [2, 3, 4, 5, 6, 7, 8, 9, 1]);
        var digito;
        if (resto === 1) {
            digito = 0;
        }
        else if (resto === 0) {
            digito = d;
        }
        else {
            digito = 11 - resto;
        }
        return base + digito;
    },
    ba: function (valor) {
        if (tamanhoNaoE(valor, 8) && tamanhoNaoE(valor)) {
            return false;
        }
        var base = primeiros(valor, valor.length - 2);
        var primeiroDigito, segundoDigito;
        var segundoMultiplicador = serie(2, 7);
        var primeiroMultiplicador = serie(2, 8);
        var primeiroResto, segundoResto;
        var digitoComparacao = valor.substring(0, 1);
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
        }
        else {
            segundoResto = mod(base, segundoMultiplicador);
            segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(segundoResto);
            primeiroResto = mod(base + segundoDigito, primeiroMultiplicador);
            primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(primeiroResto);
        }
        return base + primeiroDigito + segundoDigito;
    },
    ce: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    df: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }
        if (naoComecaCom(valor, '07')) {
            return false;
        }
        var base = primeiros(valor, 11);
        var primeiro = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        var segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro));
        return base + primeiro + segundo;
    },
    es: function (valor) {
        return calculoTrivialGenerate(valor);
    },
    go: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (['10', '11', '15'].indexOf(valor.substring(0, 2)) === -1) {
            return false;
        }
        var base = primeiros(valor);
        if (base === '11094402') {
            return valor.substr(8) === '1' || valor.substr(8) === '0';
        }
        var resto = mod(base);
        var digito;
        if (resto === 0) {
            digito = 0;
        }
        else if (resto === 1) {
            if (entre(base, 10103105, 10119997)) {
                digito = 1;
            }
            else {
                digito = 0;
            }
        }
        else {
            digito = 11 - resto;
        }
        return base + digito;
    },
    ma: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '12')) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    mg: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }
        var base = primeiros(valor, 11);
        var baseComZero = valor.substring(0, 3) + '0' + valor.substring(3, 11);
        var i = 0;
        var produtorioLiteral = baseComZero.split('').reduceRight(function (anterior, atual) {
            if (i > [2, 1].length - 1) {
                i = 0;
            }
            return ([2, 1][i++] * parseInt(atual, 10)).toString() + anterior.toString();
        }, '').split('').reduce(function (anterior, atual) {
            return anterior + parseInt(atual, 10);
        }, 0);
        var primeiro = ((Math.floor(produtorioLiteral / 10) + 1) * 10) - produtorioLiteral;
        if (primeiro === 10) {
            primeiro = 0;
        }
        var segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro, serie(2, 11)));
        return base + primeiro + segundo;
    },
    ms: function (valor) {
        if (naoComecaCom(valor, '28')) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    mt: function (valor) {
        if (tamanhoNaoE(valor, 11) && tamanhoNaoE(valor)) {
            return false;
        }
        var base = tamanhoE(valor, 11) ? valor.substring(0, 10) : primeiros(valor);
        return calculoTrivialGenerate(valor, base, true);
    },
    pa: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '15')) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    pb: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    pe: function (valor) {
        var base = valor.substring(0, valor.length - 2);
        var restoPrimeiro = mod(base);
        var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
        var restoSegundo = mod(base + primeiro);
        var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
        return base + primeiro + segundo;
    },
    pi: function (valor) {
        return calculoTrivialGenerate(valor);
    },
    pr: function (valor) {
        if (tamanhoNaoE(valor, 10)) {
            return false;
        }
        var base = primeiros(valor);
        var restoPrimeiro = mod(base, serie(2, 7));
        var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
        var restoSegundo = mod(base + primeiro, serie(2, 7));
        var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
        return base + primeiro + segundo;
    },
    rj: function (valor) {
        if (tamanhoNaoE(valor, 8)) {
            return false;
        }
        var base = primeiros(valor, 7);
        var digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base, serie(2, 7)));
        return base + digito;
    },
    rn: function (valor) {
        if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 10)) {
            return false;
        }
        if (naoComecaCom(valor, '20')) {
            return false;
        }
        var base = valor.substring(0, valor.length - 1);
        var multiplicadores = serie(2, 9);
        if (tamanhoE(valor, 10)) {
            multiplicadores.push(10);
        }
        var resto = (mod(base, multiplicadores) * 10) % 11;
        var digito = resto === 10 ? 0 : resto;
        return base + digito;
    },
    ro: function (valor) {
        var base, digito, resultadoMod;
        if (tamanhoE(valor, 9)) {
            base = valor.substring(3, 8);
            digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
            return valor === valor.substring(0, 3) + base + digito;
        }
        else if (tamanhoE(valor, 14)) {
            base = primeiros(valor, 13);
            resultadoMod = mod(base);
            digito = resultadoMod <= 1 ? 1 : 11 - resultadoMod;
            return base + digito;
        }
        else {
            return false;
        }
    },
    rr: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '24')) {
            return false;
        }
        var base = primeiros(valor);
        var digito = mod(base, [8, 7, 6, 5, 4, 3, 2, 1], 9);
        return base + digito;
    },
    rs: function (valor) {
        if (tamanhoNaoE(valor, 10)) {
            return false;
        }
        var base = primeiros(valor, 9);
        return calculoTrivialGenerate(valor, base, true);
    },
    sc: function (valor) {
        return calculoTrivialGenerate(valor);
    },
    se: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    sp: function (valor) {
        valor = valor.toUpperCase();
        var segundaBase;
        if (valor.substr(0, 1) === 'P') {
            if (tamanhoNaoE(valor, 13)) {
                return false;
            }
            var base = valor.substring(1, 9);
            segundaBase = valor.substring(10, 13);
            var resto = mod(base, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            var digito = resto.length > 1 ? resto[1] : resto[0];
            return 'P' + base + digito + segundaBase;
        }
        else {
            if (tamanhoNaoE(valor, 12)) {
                return false;
            }
            var primeiraBase = primeiros(valor);
            segundaBase = valor.substring(9, 11);
            var primeiroResto = mod(primeiraBase, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            var primeiro = primeiroResto.length > 1 ? primeiroResto[1] : primeiroResto[0];
            var segundoResto = mod(primeiraBase + primeiro + segundaBase, serie(2, 10)).toString();
            var segundo = segundoResto.length > 1 ? segundoResto[1] : segundoResto[0];
            return primeiraBase + primeiro + segundaBase + segundo;
        }
    },
    to: function (valor) {
        if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 11)) {
            return false;
        }
        var base;
        if (tamanhoE(valor, 11)) {
            if (['01', '02', '03', '99'].indexOf(valor.substring(2, 4)) === -1) {
                return false;
            }
            base = valor.substring(0, 2) + valor.substring(4, 10);
        }
        else {
            base = primeiros(valor);
        }
        var digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        return valor.substring(0, valor.length - 1) + digito;
    },
};
var funcoes = {
    ac: function (valor) {
        return valor === funcoesGenerate.ac(valor);
    },
    am: function (valor) {
        return valor === funcoesGenerate.am(valor);
    },
    al: function (valor) {
        return valor === funcoesGenerate.al(valor);
    },
    ap: function (valor) {
        return valor === funcoesGenerate.ap(valor);
    },
    ba: function (valor) {
        return valor === funcoesGenerate.ba(valor);
    },
    ce: function (valor) {
        return valor === funcoesGenerate.ce(valor);
    },
    es: function (valor) {
        return valor === funcoesGenerate.es(valor);
    },
    go: function (valor) {
        return valor === funcoesGenerate.go(valor);
    },
    ma: function (valor) {
        return valor === funcoesGenerate.ma(valor);
    },
    mg: function (valor) {
        return valor === funcoesGenerate.mg(valor);
    },
    ms: function (valor) {
        return valor === funcoesGenerate.ms(valor);
    },
    mt: function (valor) {
        return valor === funcoesGenerate.mt(valor);
    },
    pa: function (valor) {
        return valor === funcoesGenerate.pa(valor);
    },
    pb: function (valor) {
        return valor === funcoesGenerate.pb(valor);
    },
    pe: function (valor) {
        return valor === funcoesGenerate.pe(valor);
    },
    pi: function (valor) {
        return valor === funcoesGenerate.pi(valor);
    },
    pr: function (valor) {
        return valor === funcoesGenerate.pr(valor);
    },
    rj: function (valor) {
        return valor === funcoesGenerate.rj(valor);
    },
    rn: function (valor) {
        return valor === funcoesGenerate.rn(valor);
    },
    ro: function (valor) {
        return valor === funcoesGenerate.ro(valor);
    },
    rr: function (valor) {
        return valor === funcoesGenerate.rr(valor);
    },
    rs: function (valor) {
        return valor === funcoesGenerate.rs(valor);
    },
    sc: function (valor) {
        return valor === funcoesGenerate.sc(valor);
    },
    se: function (valor) {
        return valor === funcoesGenerate.se(valor);
    },
    sp: function (valor) {
        return valor === funcoesGenerate.sp(valor);
    },
    to: function (valor) {
        return valor === funcoesGenerate.to(valor);
    },
};
function validar(ie, estado) {
    if (eIndefinido(estado) || estado === null) {
        estado = '';
    }
    estado = estado.toLowerCase();
    if (estado !== '' && !(estado in funcoes)) {
        throw new Error('estado não é válido');
    }
    if (eIndefinido(ie)) {
        throw new Error('ie deve ser fornecida');
    }
    if (Array.isArray(ie)) {
        return ie.map(function (i) { return validar(i, estado); });
    }
    if (typeof ie !== 'string') {
        throw new Error('ie deve ser string ou array de strings');
    }
    if (ie.match(/^ISENTO$/i)) {
        return true;
    }
    ie = ie.replace(/[\.|\-|\/|\s]/g, '');
    if (estado === '') {
        return lookup(ie);
    }
    if (/^\d+$/.test(ie) || estado === 'sp') {
        return funcoes[estado](ie);
    }
    return false;
}
exports.validar = validar;
exports.IEMASKS = {
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
        text: '123456-63',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
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
        textMaskFunction: function mask(userInput) {
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (!userInput || numberLength > 9) {
                return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
            }
            else {
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
function eIndefinido(objeto) {
    return typeof objeto === typeof undefined;
}
function tamanhoNaoE(string, tamanho) {
    if (tamanho === void 0) { tamanho = 9; }
    if (eIndefinido(tamanho)) {
        tamanho = 9;
    }
    return string.length !== tamanho;
}
function tamanhoE(string, tamanho) {
    return !tamanhoNaoE(string, tamanho);
}
function serie(de, ate) {
    var resultado = [];
    while (de <= ate) {
        resultado.push(de++);
    }
    return resultado;
}
function primeiros(string, quantidade) {
    if (quantidade === void 0) { quantidade = 8; }
    if (eIndefinido(quantidade)) {
        quantidade = 8;
    }
    return string.substring(0, quantidade);
}
function substracaoPor11SeMaiorQue2CasoContrario0(valor) {
    return valor < 2 ? 0 : 11 - valor;
}
function mod(valor, multiplicadores, divisor) {
    if (multiplicadores === void 0) { multiplicadores = serie(2, 9); }
    if (divisor === void 0) { divisor = 11; }
    if (eIndefinido(divisor)) {
        divisor = 11;
    }
    if (eIndefinido(multiplicadores)) {
        multiplicadores = serie(2, 9);
    }
    var i = 0;
    return valor.split('').reduceRight(function (anterior, atual) {
        if (i > multiplicadores.length - 1) {
            i = 0;
        }
        return (multiplicadores[i++] * parseInt(atual, 10)) + anterior;
    }, 0) % divisor;
}
function calculoTrivial(valor, base, validarTamanho) {
    if (base === void 0) { base = null; }
    if (validarTamanho === void 0) { validarTamanho = null; }
    return valor === calculoTrivialGenerate(valor);
}
function calculoTrivialGenerate(valor, base, validarTamanho) {
    if (base === void 0) { base = null; }
    if (validarTamanho === void 0) { validarTamanho = null; }
    if (!validarTamanho && tamanhoNaoE(valor)) {
        return false;
    }
    if (eIndefinido(base)) {
        base = primeiros(valor);
    }
    var digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
    return base + digito;
}
function naoComecaCom(string, valor) {
    return string.substring(0, valor.length) !== valor;
}
function entre(valor, limiteInferior, limiteSuperior) {
    if (typeof valor === 'string') {
        valor = parseInt(valor, 10);
    }
    return valor >= limiteInferior && valor <= limiteSuperior;
}
function lookup(ie) {
    var resultado = [];
    for (var estado in funcoes) {
        if (funcoes[estado](ie)) {
            resultado.push(estado);
        }
    }
    if (tamanhoE(resultado, 0)) {
        return false;
    }
    else {
        return resultado;
    }
}

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inscricaoestadual_1 = require("./inscricaoestadual");
var createNumberMask_1 = require("text-mask-addons/dist/createNumberMask");
exports.MASKS = {
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
            var ddd;
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (userInput.length > 2) {
                var splits = userInput.split('');
                ddd = splits[1] + splits[2];
            }
            if (!userInput || numberLength > 10) {
                return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
            else {
                return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
        }
    },
    cep: {
        text: '00.000-000',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
    },
    inscricaoestadual: inscricaoestadual_1.IEMASKS,
    time: {
        text: '00:00',
        textMask: [/\d/, /\d/, ':', /\d/, /\d/]
    },
    currency: {
        text: '0.000,00',
        textMask: createNumberMask_1.default({
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
        textMask: createNumberMask_1.default({
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
};
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;

},{"./inscricaoestadual":3,"text-mask-addons/dist/createNumberMask":6}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// http://www.geradorcnpj.com/javascript-validar-cnpj.htm
/*
//if (val.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/) != null) {
*/
function validate_cnpj(cnpj) {
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
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0, tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0), 10)) {
        return false;
    }
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(1), 10)) {
        return false;
    }
    return true;
}
exports.validate_cnpj = validate_cnpj;
// http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
function validate_cpf(strCPF) {
    strCPF = strCPF.replace(/[^\d]+/g, '');
    var soma;
    var resto;
    soma = 0;
    if (strCPF === '00000000000') {
        return false;
    }
    for (var i = 1; i <= 9; i++) {
        // tslint:disable-next-line:radix
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(strCPF.substring(9, 10), 10)) {
        return false;
    }
    soma = 0;
    for (var i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(strCPF.substring(10, 11), 10)) {
        return false;
    }
    return true;
}
exports.validate_cpf = validate_cpf;
var CEPRange = {
    'SP': /^([1][0-9]{3}|[01][0-9]{4})[0-9]{3}$/g,
    'RJ': /^[2][0-8][0-9]{3}[0-9]{3}$/g,
    'MS': /^[7][9][0-9]{3}[0-9]{3}$/g,
    'MG': /^[3][0-9]{4}[0-9]{3}$/g,
    'MT': /^[7][8][8][0-9]{2}[0-9]{3}$/g,
    'AC': /^[6][9]{2}[0-9]{2}[0-9]{3}$/g,
    'AL': /^[5][7][0-9]{3}[0-9]{3}$/g,
    'AM': /^[6][9][0-8][0-9]{2}[0-9]{3}$/g,
    'AP': /^[6][89][9][0-9]{2}[0-9]{3}$/g,
    'BA': /^[4][0-8][0-9]{3}[0-9]{3}$/g,
    'CE': /^[6][0-3][0-9]{3}[0-9]{3}$/g,
    'DF': /^[7][0-3][0-6][0-9]{2}[0-9]{3}$/g,
    'ES': /^[2][9][0-9]{3}[0-9]{3}$/g,
    'GO': /^[7][3-6][7-9][0-9]{2}[0-9]{3}$/g,
    'MA': /^[6][5][0-9]{3}[0-9]{3}$/g,
    'PA': /^[6][6-8][0-8][0-9]{2}[0-9]{3}$/g,
    'PB': /^[5][8][0-9]{3}[0-9]{3}$/g,
    'PE': /^[5][0-6][0-9]{2}[0-9]{3}$/g,
    'PI': /^[6][4][0-9]{3}[0-9]{3}$/g,
    'PR': /^[8][0-7][0-9]{3}[0-9]{3}$/g,
    'RN': /^[5][9][0-9]{3}[0-9]{3}$/g,
    'RO': /^[7][8][9][0-9]{2}[0-9]{3}$/g,
    'RR': /^[6][9][3][0-9]{2}[0-9]{3}$/g,
    'RS': /^[9][0-9]{4}[0-9]{3}$/g,
    'SC': /^[8][89][0-9]{3}[0-9]{3}$/g,
    'SE': /^[4][9][0-9]{3}[0-9]{3}$/g,
    'TO': /^[7][7][0-9]{3}[0-9]{3}$/g,
};
function valida_cep(cep) {
    var cepClean = cep.replace(/[^\d]+/g, '');
    var exp = /\d{2}\.\d{3}\-\d{3}/;
    if (!exp.test(cep) && cepClean.length !== 8) {
        return false;
    }
    return true;
}
exports.valida_cep = valida_cep;
function cep_ranges(cep) {
    cep = cep.replace(/[^\d]+/g, '');
    cep = parseInt(cep, 10);
    var found = Object.keys(CEPRange).find(function (estado) {
        var r = new RegExp(CEPRange[estado]).test(cep);
        if (r) {
            return true;
        }
    });
    if (!found) {
        return false;
    }
    return true;
}
exports.cep_ranges = cep_ranges;
function validate_telefone(tel) {
    var telClean = tel.replace(/[^\d]+/g, '');
    tel = tel.replace(/_/g, '');
    var exp = /\(\d{2}\)\ \d{4}\-\d{4}/;
    var exp5 = /\(\d{2}\)\ \d{5}\-\d{4}/;
    if (!exp.test(tel) && !exp5.test(tel) && !(telClean.length === 10 || telClean.length === 11)) {
        return false;
    }
    return true;
}
exports.validate_telefone = validate_telefone;
function validate_rg(rg) {
    var rgClean = rg.replace(/\./g, '');
    rgClean = rgClean.replace(/-/g, '');
    var exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
    var expClean = /[a-z]{2}\d{8}/;
    var state = rg.substr(0, 2).toUpperCase();
    if (!exp.test(rg) && !expClean.test(rgClean) && !(state in CEPRange)) {
        return false;
    }
    return true;
}
exports.validate_rg = validate_rg;
function validate_time(time) {
    var expression = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
    return expression.test(time.value);
}
exports.validate_time = validate_time;
function validate_currency(currency) {
    var regex = /^\d+(?:\.\d{0,2})$/;
    return regex.test(currency);
}
exports.validate_currency = validate_currency;
function validate_percentage(percentage) {
    var regex = /^\d+(?:\.\d{0,2})$/;
    return regex.test(percentage);
}
exports.validate_percentage = validate_percentage;
function validate_placa(placa) {
    var placaClean = placa.replace(/-/g, '');
    var exp = /[a-z]{3}\-\d{4}/;
    var expClean = /[a-z]{3}\d{4}/;
    var letters = placa.substr(0, 3).toUpperCase();
    if (!exp.test(placa) && !expClean.test(placaClean)) {
        return false;
    }
    return true;
}
exports.validate_placa = validate_placa;
function validate_titulo(titulo) {
    var tituloClean = titulo.replace(/./, '');
    var exp = /\d{4}\.\d{4}\.\d{4}/;
    var expClean = /\d{4}\d{4}\d{4}/;
    if (!exp.test(titulo) && !expClean.test(titulo)) {
        return false;
    }
    return validaTituloVerificador(titulo);
}
exports.validate_titulo = validate_titulo;
function validaTituloVerificador(titulo) {
    var tit = titulo;
    var dig1 = 0;
    var dig2 = 0;
    var tam = tit.length;
    var digitos = tit.substr(tam - 2, 2);
    var estado = tit.substr(tam - 4, 2);
    titulo = tit.substr(0, tam - 2);
    titulo = '000000000000' + titulo;
    titulo = titulo.substr(titulo.length - 11, titulo.length - 1);
    var exce = (estado === '01') || (estado === '02');
    dig1 = (titulo.charCodeAt(0) - 48) * 2 + (titulo.charCodeAt(1) - 48) * 9 + (titulo.charCodeAt(2) - 48) * 8 +
        (titulo.charCodeAt(3) - 48) * 7 + (titulo.charCodeAt(4) - 48) * 6 + (titulo.charCodeAt(5) - 48) * 5 +
        (titulo.charCodeAt(6) - 48) * 4 + (titulo.charCodeAt(7) - 48) * 3 + (titulo.charCodeAt(8) - 48) * 2;
    var resto = (dig1 % 11);
    if (resto === 0) {
        if (exce) {
            dig1 = 1;
        }
        else {
            dig1 = 0;
        }
    }
    else {
        if (resto === 1) {
            dig1 = 0;
        }
        else {
            dig1 = 11 - resto;
        }
    }
    dig2 = (titulo.charCodeAt(9) - 48) * 4 + (titulo.charCodeAt(10) - 48) * 3 + dig1 * 2;
    resto = (dig2 % 11);
    if (resto === 0) {
        if (exce) {
            dig2 = 1;
        }
        else {
            dig2 = 0;
        }
    }
    else {
        if (resto === 1) {
            dig2 = 0;
        }
        else {
            dig2 = 11 - resto;
        }
    }
    if ((digitos.charCodeAt(0) - 48 === dig1) && (digitos.charCodeAt(1) - 48 === dig2)) {
        return true;
    }
    else {
        return false;
    }
}

},{}],6:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});
},{}]},{},[1])(1)
});