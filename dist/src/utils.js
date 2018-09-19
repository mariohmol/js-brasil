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
//# sourceMappingURL=utils.js.map