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
//# sourceMappingURL=faker.js.map