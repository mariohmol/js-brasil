"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./src/utils");
var validate_1 = require("./src/validate");
var inscricaoestadual_1 = require("./src/inscricaoestadual");
exports.validate = {
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
exports.utils = {
    isPresent: utils_1.isPresent,
    MASKS: utils_1.MASKS
};
exports.default = {
    validate: exports.validate, utils: exports.utils
};
//# sourceMappingURL=index.js.map