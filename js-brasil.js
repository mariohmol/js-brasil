(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jsbrasil = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAMES = exports.getAstro = exports.TIPOS_SANGUINEOS = exports.CEP_ESTADO = exports.TELEFONE_ESTADO = exports.EMPRESAS_NOMES = exports.EMPRESAS_TIPOS = exports.SOBRENOMES = exports.NOMES_MASCULINOS = exports.NOMES_FEMININOS = void 0;
exports.NOMES_FEMININOS = ['MARIA', 'ANA', 'FRANCISCA', 'ANTONIA', 'ADRIANA', 'JULIANA', 'MARCIA', 'FERNANDA', 'PATRICIA', 'ALINE'];
exports.NOMES_MASCULINOS = ['JOSE', 'JOAO', 'ANTONIO', 'FRANCISCO', 'CARLOS', 'PAULO', 'PEDRO', 'LUCAS', 'LUIZ', 'MARCOS'];
exports.SOBRENOMES = ['ALMEIDA', 'ALVES', 'ANDRADE', 'BARBOSA', 'BARROS', 'BATISTA', 'BORGES', 'CAMPOS', 'CARDOSO', 'CARVALHO', 'CASTRO',
    'COSTA', 'DIAS', 'DUARTE', 'FREITAS', 'FERNANDES', 'FERREIRA', 'GARCIA', 'GOMES', 'GONÇALVES', 'LIMA', 'LOPES', 'MACHADO', 'MARQUES', 'MARTINS', 'MEDEIROS',
    'MELO', 'MENDES', 'MIRANDA', 'MONTEIRO', 'MORAES', 'MOREIRA', 'MOURA', 'NASCIMENTO', 'NUNES', 'OLIVEIRA', 'PEREIRA', 'RAMOS', 'REIS', 'RIBEIRO', 'ROCHA',
    'SANTANA', 'SANTOS', 'SILVA', 'SOARES', 'SOUZA', 'TEIXEIRA', 'VIEIRA'];
exports.EMPRESAS_TIPOS = ['Pizzaria', 'Mecânica', 'Laboratórios', 'Contabilidade', 'Padaria', 'Pastelaria'];
exports.EMPRESAS_NOMES = ['do Barão', 'União', 'Teixeira', 'Nova Era', 'Genuíno', 'Autêntica', 'Lux'];
exports.TELEFONE_ESTADO = {
    'ac': 68, 'al': 82, 'ap': 96, 'am': 92, 'ba': 71, 'ce': 88, 'df': 61, 'es': 27, 'go': 62,
    'ma': 98, 'mt': 65, 'ms': 84, 'mg': 31, 'pr': 41, 'pb': 83, 'pa': 91, 'pe': 81, 'pi': 86, 'rj': 21, 'rn': 84, 'rs': 51, 'ro': 69,
    'rr': 95, 'sc': 48, 'se': 79, 'sp': 11, 'to': 63
};
exports.CEP_ESTADO = {
    ac: [[69900000, 69999999]],
    al: [[57000000, 57999999]],
    am: [[69000000, 69299999], [69400000, 69899999]],
    ap: [[68900000, 68999999]],
    ba: [[40000000, 48999999]],
    ce: [[60000000, 63999999]],
    df: [[70000000, 72799999], [73000000, 73699999]],
    es: [[29000000, 29999999]],
    go: [[72800000, 72999999], [73700000, 76799999]],
    ma: [[65000000, 65999999]],
    mg: [[30000000, 39999999]],
    ms: [[79000000, 79999999]],
    mt: [[78000000, 78899999]],
    pa: [[66000000, 68899999]],
    pb: [[58000000, 58999999]],
    pe: [[50000000, 56999999]],
    pi: [[64000000, 64999999]],
    pr: [[80000000, 87999999]],
    rj: [[20000000, 28999999]],
    rn: [[59000000, 59999999]],
    ro: [[76800000, 76999999]],
    rr: [[69300000, 69399999]],
    rs: [[90000000, 99999999]],
    sc: [[88000000, 89999999]],
    se: [[49000000, 49999999]],
    sp: [[1000000, 19999999]],
    to: [[77000000, 77999999]]
};
exports.TIPOS_SANGUINEOS = ['O+', 'A+', 'B+', 'AB+', ' O−', ' A−', ' B−', 'AB−'];
function getAstro(data) {
    var month, day;
    if (typeof data === 'string') {
        day = parseInt(data.split('/')[0]);
        month = parseInt(data.split('/')[1]);
    }
    else {
        day = data.getDate() + 1;
        month = data.getMonth() + 1;
    }
    if (month < 1 || month > 12) {
        throw new Error("Mes inválido : " + month);
    }
    if (day < 1 || day > 32) {
        throw new Error("Dia inválido : " + day);
    }
    if ((month == 1 && day < 20) || (month == 12 && day >= 22)) {
        return 'Capricórnio';
    }
    else if ((month == 2 && day < 19) || (month == 1 && day >= 20)) {
        return 'Aquários';
    }
    else if ((month == 3 && day < 21) || (month == 2 && day >= 19)) {
        return 'Peixes';
    }
    else if ((month == 4 && day < 20) || (month == 3 && day >= 21)) {
        return 'Aries';
    }
    else if ((month == 5 && day < 21) || (month == 4 && day >= 20)) {
        return 'Touro';
    }
    else if ((month == 6 && day < 22) || (month == 5 && day >= 21)) {
        return 'Gêmeos';
    }
    else if ((month == 7 && day < 23) || (month == 6 && day >= 22)) {
        return 'Cancer';
    }
    else if ((month == 8 && day < 23) || (month == 7 && day >= 23)) {
        return 'Leao';
    }
    else if ((month == 9 && day < 23) || (month == 8 && day >= 23)) {
        return 'Virgo';
    }
    else if ((month == 10 && day < 24) || (month == 9 && day >= 22)) {
        return 'Libra';
    }
    else if ((month == 11 && day < 22) || (month == 10 && day >= 24)) {
        return 'Escorpião';
    }
    else if ((month == 12 && day < 22) || (month == 11 && day >= 22)) {
        return 'Sagitário';
    }
    throw new Error("Signo não encontrado : " + day + '/' + month);
}
exports.getAstro = getAstro;
exports.NAMES = [
    'Aaron',
    'Abel',
    'Abelardo',
    'Abelino',
    'Abiel',
    'Abiezer',
    'Abílio',
    'Abner',
    'Abraão',
    'Acácio',
    'Adailton',
    'Adair',
    'Adalberto',
    'Adalgiso',
    'Adalício',
    'Adalmir',
    'Adalto',
    'Adam',
    'Adamastor',
    'Adamor',
    'Adão',
    'Adeci',
    'Adeildo',
    'Adelair',
    'Adélcio',
    'Adelino',
    'Adélio',
    'Adelson',
    'Ademar',
    'Ademilson',
    'Ademir',
    'Aderbal',
    'Adérito',
    'Adilson',
    'Admilson',
    'Adolfo',
    'Adonai',
    'Adonis',
    'Adónis',
    'Adrian',
    'Adriano',
    'Adriel',
    'Aécio',
    'Afonso',
    'Afrânio',
    'Agenor',
    'Ageo',
    'Agipino',
    'Agnaldo',
    'Agnelo',
    'Agostinho',
    'Aguinaldo',
    'Ailton',
    'Aires',
    'Airton',
    'Aitor',
    'Alair',
    'Alaôr',
    'Alarico',
    'Albano',
    'Albertino',
    'Albino',
    'Alcides',
    'Alcindo',
    'Aldair',
    'Aldemir',
    'Aldenor',
    'Aldo',
    'Alejandro',
    'Alessandro',
    'Alex',
    'Alexandrino',
    'Alexandro',
    'Aléxio',
    'Alfredo',
    'Alípio',
    'Alírio',
    'Alison',
    'Allan',
    'Almerindo',
    'Almir',
    'Aloísio',
    'Alonzo',
    'Altino',
    'Aluísio',
    'Alvantino',
    'Alvino',
    'Amadeo',
    'Amândio',
    'Amarildo',
    'Amauri',
    'Amaury',
    'Ambrósio',
    'Américo',
    'Amílcar',
    'Amilton',
    'Amir',
    'Ananias',
    'Andersen',
    'Anderson',
    'Ândreo',
    'Andrés',
    'Anésio',
    'Angélico',
    'Ângelo',
    'Aníbal',
    'Anísio',
    'Anselmo',
    'Antenor',
    'Antero',
    'Anthony',
    'Apollo',
    'Apolo',
    'Aprígio',
    'Aquiles',
    'Arcanjo',
    'Aristeu',
    'Aristides',
    'Armando',
    'Armindo',
    'Arnaldo',
    'Arthur',
    'Arturo',
    'Ary',
    'Asher',
    'Assis',
    'Ataíde',
    'Athos',
    'Átila',
    'Atlas',
    'Aureliano',
    'Aurelino',
    'Aurélio',
    'Aurino',
    'Ayrton',
    'Balbino',
    'Balduíno',
    'Baltasar',
    'Baltazar',
    'Barnabé',
    'Bartolomeu',
    'Basileu',
    'Basílio',
    'Batista',
    'Belarmino',
    'Belchior',
    'Belisário',
    'Belmiro',
    'Bendito',
    'Benedito',
    'Benito',
    'Benjamin',
    'Beto',
    'Bill',
    'Boanerges',
    'Bob',
    'Bonifácio',
    'Bóris',
    'Bosco',
    'Brandon',
    'Bruce',
    'Bryan',
    'Byron',
    'Cacildo',
    'Cadú',
    'Cael',
    'Caíco',
    'Caíque',
    'Calazan',
    'Calisto',
    'Calixto',
    'Calvin',
    'Camilo',
    'Cândido',
    'Canuto',
    'Casimiro',
    'Cassiano',
    'Cássio',
    'Castiel',
    'Cauã',
    'Cauê',
    'Celestino',
    'Celso',
    'César',
    'Charles',
    'Christian',
    'Christian',
    'Christopher',
    'Cirilo',
    'Ciro',
    'Cláudio',
    'Claus',
    'Clayton',
    'Clementino',
    'Clodomiro',
    'Clovis',
    'Clóvis',
    'Conrad',
    'Constantin',
    'Constantino',
    'Cosme',
    'Cristiano',
    'Cristóvão',
    'Cursino',
    'Custódio',
    'Dácio',
    'Dagoberto',
    'Dalmo',
    'Dalton',
    'Danilo',
    'Dante',
    'Dárcio',
    'Darius',
    'Deivid',
    'Delfino',
    'Delmar',
    'Demétrio',
    'Denis',
    'Denzel',
    'Derik',
    'Didier',
    'Dimas',
    'Dinis',
    'Diniz',
    'Dino',
    'Diógenes',
    'Dionísio',
    'Djalma',
    'Dom',
    'Domênico',
    'Dominic',
    'Donatello',
    'Donatílio',
    'Donato',
    'Donizete',
    'Douglas',
    'Douglas',
    'Durval',
    'Dylan',
    'Ed',
    'Éder',
    'Ederson',
    'Edivaldo',
    'Edmilson',
    'Edmir',
    'Edson',
    'Eliezer',
    'Élio',
    'Eliseo',
    'Eliseu',
    'Elísio',
    'Élton',
    'Emanuel',
    'Emaús',
    'Emerson',
    'Emílio',
    'Ênio',
    'Enrico',
    'Enrique',
    'Erasmo',
    'Erasmus',
    'Eriberto',
    'Erik',
    'Ernesto',
    'Esdras',
    'Eugénio',
    'Eurico',
    'Evaldo',
    'Evandro',
    'Evelásio',
    'Expedito',
    'Ezekiel',
    'Fabiano',
    'Faustino',
    'Fausto',
    'Felipe',
    'Felisberto',
    'Felismino',
    'Félix',
    'Ferdinand',
    'Ferdinando',
    'Fernando',
    'Fernão',
    'Firmino',
    'Flávio',
    'Florêncio',
    'Florentino',
    'Floriano',
    'Fortunato',
    'Francesco',
    'Francis',
    'Franco',
    'Frank',
    'Franklin',
    'Gael',
    'Galdino',
    'Galeno',
    'Galileu',
    'Gastão',
    'Gaudêncio',
    'Genaro',
    'Genésio',
    'Geovani',
    'Geraldo',
    'Germano',
    'Gerson',
    'Giancarlos',
    'Giani',
    'Gianluca',
    'Gilberto',
    'Gilmar',
    'Gilmar',
    'Gilson',
    'Giuseppe',
    'Glauco',
    'Golias',
    'Graciano',
    'Gregório',
    'Gualter',
    'Guarani',
    'Gumersindo',
    'Guy',
    'Haroldo',
    'Hélder',
    'Hélio',
    'Henry',
    'Herbert',
    'Hermano',
    'Hernâni',
    'Horácio',
    'Humberto',
    'Ike',
    'Irineu',
    'Isaías',
    'Isidoro',
    'Israel',
    'Ítalo',
    'Itamar',
    'Ivaldo',
    'Ivandro',
    'Ivanildo',
    'Jacinto',
    'Jack',
    'Jackson',
    'Jader',
    'Jadiel',
    'Jadir',
    'Jair',
    'Jairo',
    'Jamal',
    'Jamil',
    'Jandir',
    'Janilson',
    'Januário',
    'Jarbas',
    'Jason',
    'Jason',
    'Javier',
    'Jean',
    'Jefferson',
    'Jeremias',
    'Jessé',
    'Jessie',
    'Jessiel',
    'Jesualdo',
    'Jesus',
    'Joab',
    'Joelson',
    'Jofre',
    'Johnny',
    'Johnson',
    'Jonas',
    'Jonatã',
    'Josélio',
    'Joshua',
    'Josias',
    'Josué',
    'Juan',
    'Juliano',
    'Julião',
    'Júlio',
    'Júnior',
    'Jurandir',
    'Juvenal',
    'Kaique',
    'Kauã',
    'Kauan',
    'Kawan',
    'Kelvin',
    'Kennedy',
    'Klaus',
    'Kleber',
    'Lael',
    'Laerte',
    'Laertes',
    'Lauro',
    'Leon',
    'Leôncio',
    'Leonel',
    'Leónidas',
    'Leopoldo',
    'Lineu',
    'Lionel',
    'Lisandro',
    'Lívio',
    'Logan',
    'Luã',
    'Luan',
    'Luca',
    'Luciano',
    'Lúcio',
    'Luigi',
    'Luiz',
    'Lukas',
    'Luzio',
    'Macário',
    'Magnus',
    'Malvino',
    'Manassés',
    'Manoel',
    'Maomé',
    'Márcio',
    'Marcos',
    'Marcus',
    'Marley',
    'Marlon',
    'Martin',
    'Martinho',
    'Marvin',
    'Matheo',
    'Matheus',
    'Mathias',
    'Mathieu',
    'Maurílio',
    'Max',
    'Maximiliano',
    'Maxwell',
    'Mélvin',
    'Messias',
    'Micael',
    'Michael',
    'Michel',
    'Milo',
    'Milton',
    'Mizael',
    'Moacir',
    'Mohamed',
    'Nataniel',
    'Nazário',
    'Neil',
    'Nereu',
    'Nestor',
    'Newton',
    'Ney',
    'Nicola',
    'Nicolas',
    'Nildemar',
    'Nilo',
    'Nilson',
    'Nilton',
    'Nivaldo',
    'Nonato',
    'Norberto',
    'Norildo',
    'Norimar',
    'Odemar',
    'Odilson',
    'Odin',
    'Odorico',
    'Olin',
    'Omar',
    'Omer',
    'Onofre',
    'Orestes',
    'Orlandino',
    'Orlando',
    'Osias',
    'Osman',
    'Osmar',
    'Osório',
    'Osvaldo',
    'Otacílio',
    'Otávio',
    'Otto',
    'Ozael',
    'Pablo',
    'Paco',
    'Paolo',
    'Pascoal',
    'Patrício',
    'Patrick',
    'Paulino',
    'Pepe',
    'Percival',
    'Péricles',
    'Pierre',
    'Porfírio',
    'Querubim',
    'Quintino',
    'Radamés',
    'Rafaelo',
    'Raí',
    'Raimundo',
    'Ralf',
    'Ralph',
    'Ramiro',
    'Ramon',
    'Ramón',
    'Raoni',
    'Raphael',
    'Reginaldo',
    'Régis',
    'Reimão',
    'Reinaldo',
    'Renan',
    'Renato',
    'Renê',
    'Rivaldo',
    'Roberto',
    'Robson',
    'Rodney',
    'Rodolfo',
    'Roger',
    'Rogério',
    'Roland',
    'Rolando',
    'Romão',
    'Romário',
    'Romeo',
    'Rômulo',
    'Ronald',
    'Ronaldo',
    'Roni',
    'Rosendo',
    'Rúbens',
    'Rudesindo',
    'Rudolfo',
    'Ruy',
    'Ryan',
    'Sansão',
    'Saúl',
    'Saulo',
    'Sávio',
    'Selton',
    'Sertório',
    'Severino',
    'Sidney',
    'Silas',
    'Sílvio',
    'Simplício',
    'Sinésio',
    'Stefan',
    'Stefano',
    'Stenio',
    'Steve',
    'Steven',
    'Sydney',
    'Taciano',
    'Tadeu',
    'Tales',
    'Tamires',
    'Tâmiris',
    'Tarcísio',
    'Tarik',
    'Tarsício',
    'Telmo',
    'Tenório',
    'Teo',
    'Teobaldo',
    'Teodemiro',
    'Thales',
    'Theo',
    'Thiago',
    'Thomas',
    'Thomaz',
    'Tibúrcio',
    'Ticiano',
    'Tierry',
    'Timóteo',
    'Tito',
    'Tom',
    'Tomaz',
    'Tristão',
    'Troy',
    'Túlio',
    'Ubirajara',
    'Ubiratã',
    'Urbano',
    'Uriel',
    'Valdemar',
    'Valentino',
    'Vanderlei',
    'Vasco',
    'Venâncio',
    'Veríssimo',
    'Vicenzo',
    'Victor',
    'Vílmar',
    'Vilson',
    'Vinícius',
    'Virgílio',
    'Vital',
    'Vítor',
    'Vladimir',
    'Wagner',
    'Waldir',
    'Waldo',
    'Wallace',
    'Walter',
    'Washington',
    'Watson',
    'Webster',
    'Weller',
    'Wellington',
    'Wendel',
    'Wesley',
    'Will',
    'William',
    'Wilson',
];

},{}],2:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakerBr = exports.maskBr = exports.utilsBr = exports.validateBr = void 0;
var utils = require("./src/utils");
var validate_1 = require("./src/validate");
Object.defineProperty(exports, "validateBr", { enumerable: true, get: function () { return validate_1.validateBr; } });
var faker_1 = require("./src/faker");
var mask = require("./src/mask");
var mask_1 = require("./src/mask");
var placa_1 = require("./src/placa");
var estados_1 = require("./src/estados");
exports.utilsBr = __assign(__assign({}, utils), { MASKS: mask_1.MASKS,
    MASKSIE: mask_1.MASKSIE,
    PLACAS_RANGE: placa_1.PLACAS_RANGE,
    ESTADOS: estados_1.ESTADOS });
exports.maskBr = mask.maskBr;
exports.fakerBr = faker_1.default;

},{"./src/estados":4,"./src/faker":5,"./src/mask":11,"./src/placa":13,"./src/utils":15,"./src/validate":16}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_titulo = exports.create_titulo_atual = exports.create_processo = exports.create_renavam = exports.create_pispasep = exports.create_ect = exports.create_cartaocredito = exports.create_cpf = exports.create_cns = exports.create_cnpj = exports.create_cnh = exports.create_cnh_mod11 = exports.create_certidao = exports.create_aih = void 0;
var utils_1 = require("./utils");
/**
 *
 * @param uf - UF do número da guia. Ex: 35(SP), 81(PE)
 * @param ano - ANO do número da guia. Ex: 2018, 2019
 * @param tipo - TIPO da guia. Aih = 1, APAC = 2
 */
function create_aih(value) {
    value = utils_1.getAllDigits(value.toString());
    if (value.length > 12) {
        value = value.toString().substr(0, value.length - 1);
    }
    var cod = parseInt(value);
    var calc = Math.ceil(cod - (cod / 11));
    var digito = calc.toString().substr(-1);
    return digito;
}
exports.create_aih = create_aih;
function create_certidao(value) {
    if (value.length > 30) {
        value = value.substring(0, value.length - 2);
    }
    var b1 = parseInt(value.slice(29));
    var b2 = parseInt(value.slice(28, 29));
    var b3 = parseInt(value.slice(27, 28));
    var b4 = parseInt(value.slice(26, 27));
    var b5 = parseInt(value.slice(25, 26));
    var b6 = parseInt(value.slice(24, 25));
    var b7 = parseInt(value.slice(23, 24));
    var b8 = parseInt(value.slice(22, 23));
    var b9 = parseInt(value.slice(21, 22));
    var b10 = parseInt(value.slice(20, 21));
    var b11 = parseInt(value.slice(19, 20));
    var b12 = parseInt(value.slice(18, 19));
    var b13 = parseInt(value.slice(17, 18));
    var b14 = parseInt(value.slice(16, 17));
    var b15 = parseInt(value.slice(15, 16));
    var b16 = parseInt(value.slice(14, 15));
    var b17 = parseInt(value.slice(13, 14));
    var b18 = parseInt(value.slice(12, 13));
    var b19 = parseInt(value.slice(11, 12));
    var b20 = parseInt(value.slice(10, 11));
    var b21 = parseInt(value.slice(9, 10));
    var b22 = parseInt(value.slice(8, 9));
    var b23 = parseInt(value.slice(7, 8));
    var b24 = parseInt(value.slice(6, 7));
    var b25 = parseInt(value.slice(5, 6));
    var b26 = parseInt(value.slice(4, 5));
    var b27 = parseInt(value.slice(3, 4));
    var b28 = parseInt(value.slice(2, 3));
    var b29 = parseInt(value.slice(1, 2));
    var b30 = parseInt(value.slice(0, 1));
    var certPriDig = (b1 * 9 + b2 * 8 + b3 * 7 + b4 * 6 + b5 * 5 + b6 * 4 + b7 * 3 + b8 * 2 + b9 * 1 + b10 * 0 + b11 * 10 + b12 * 9 + b13 * 8 + b14 * 7 + b15 * 6 + b16 * 5 + b17 * 4 + b18 * 3 + b19 * 2 + b20 * 1 + b21 * 0 + b22 * 10 + b23 * 9 + b24 * 8 + b25 * 7 + b26 * 6 + b27 * 5 + b28 * 4 + b29 * 3 + b30 * 2) % 11;
    if (certPriDig == 10) {
        certPriDig = 1;
    }
    var certSegDig = (certPriDig * 9 + b1 * 8 + b2 * 7 + b3 * 6 + b4 * 5 + b5 * 4 + b6 * 3 + b7 * 2 + b8 * 1 + b9 * 0 + b10 * 10 + b11 * 9 + b12 * 8 + b13 * 7 + b14 * 6 + b15 * 5 + b16 * 4 + b17 * 3 + b18 * 2 + b19 * 1 + b20 * 0 + b21 * 10 + b22 * 9 + b23 * 8 + b24 * 7 + b25 * 6 + b26 * 5 + b27 * 4 + b28 * 3 + b29 * 2 + b30 * 1) % 11;
    if (certSegDig == 10) {
        certSegDig = 1;
    }
    var certDV = certPriDig * 10 + certSegDig;
    if (certDV == 0) {
        certDV = "00";
    }
    if (certDV > 0 && certDV < 10) {
        certDV = "0" + certDV;
    }
    return certDV.toString();
}
exports.create_certidao = create_certidao;
/**
 * TODO: Not working with mod11 function
 * @param strCNH
 * @returns
 */
function create_cnh_mod11(strCNH) {
    strCNH = strCNH.replace(/[^\d]+/g, '');
    if (strCNH === '00000000000') {
        return false;
    }
    var v1 = utils_1.modulo11(strCNH, 9, 11);
    var v2 = utils_1.modulo11(strCNH, 10, 11);
    if (v1 < 1)
        v1 = 0;
    if (v2 < 1)
        v2 = 0;
    console.warn(strCNH, v1, v2);
    return '' + v1 + v2;
}
exports.create_cnh_mod11 = create_cnh_mod11;
function create_cnh(value) {
    value = value.replace(/[^\d]+/g, '');
    if (value.length != 11 || value === '0') {
        return false;
    }
    var s1, s2;
    for (var c = s1 = s2 = 0, p = 9; c < 9; c++, p--) {
        s1 += parseInt(value[c]) * p;
        s2 += parseInt(value[c]) * (10 - p);
    }
    var dv1 = s1 % 11;
    dv1 = (dv1 > 9 ? 0 : dv1);
    var dv2 = s2 % 11 - (dv1 > 9 ? 2 : 0);
    var check = dv2 < 0 ? dv2 + 11 : dv2 > 9 ? 0 : dv2;
    return "" + dv1 + check;
}
exports.create_cnh = create_cnh;
function create_cnpj(cnpj) {
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
    var soma = 0;
    var pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    var resultados = [0, 0];
    resultados[0] = soma % 11 < 2 ? 0 : 11 - soma % 11;
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
    resultados[1] = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return resultados;
}
exports.create_cnpj = create_cnpj;
function create_cns(number) {
    number = utils_1.getAllDigits(number);
    var somaInicial = 0;
    for (var i = 0; i < number.length - 1; i++) {
        somaInicial += parseInt(number[i]) * (15 - i);
    }
    var soma = somaInicial;
    var rest = 0;
    while (soma % 11 !== 0) {
        rest++;
        soma = somaInicial + (rest * 1);
    }
    return number.substr(-2, 1) + rest;
}
exports.create_cns = create_cns;
function create_cpf(strCPF) {
    strCPF = strCPF.replace(/[^\d]+/g, '');
    if (strCPF === '00000000000') {
        return false;
    }
    var restos = [
        utils_1.modulo11(strCPF, 9, 11),
        utils_1.modulo11(strCPF, 10, 12)
    ];
    return restos;
}
exports.create_cpf = create_cpf;
function create_cartaocredito(number) {
    // if (number.length > 18) { alert("Erro. A rotina não abrange cartões\ncom mais de 18 dígitos (fora o DV).\nIntroduza 18 dígitos, no máximo."); }
    number = "00000000000000000" + number;
    number = number.slice(number.length - 18);
    var b1 = parseInt(number.slice(17));
    var b2 = parseInt(number.slice(16, 17));
    var b3 = parseInt(number.slice(15, 16));
    var b4 = parseInt(number.slice(14, 15));
    var b5 = parseInt(number.slice(13, 14));
    var b6 = parseInt(number.slice(12, 13));
    var b7 = parseInt(number.slice(11, 12));
    var b8 = parseInt(number.slice(10, 11));
    var b9 = parseInt(number.slice(9, 10));
    var b10 = parseInt(number.slice(8, 9));
    var b11 = parseInt(number.slice(7, 8));
    var b12 = parseInt(number.slice(6, 7));
    var b13 = parseInt(number.slice(5, 6));
    var b14 = parseInt(number.slice(4, 5));
    var b15 = parseInt(number.slice(3, 4));
    var b16 = parseInt(number.slice(2, 3));
    var b17 = parseInt(number.slice(1, 2));
    var b18 = parseInt(number.slice(0, 1));
    var ci17 = b1 * 2;
    if (ci17 > 9) {
        ci17 = ci17 - 9;
    }
    var ci1516 = b3 * 2;
    if (ci1516 > 9) {
        ci1516 = ci1516 - 9;
    }
    var ci1314 = b5 * 2;
    if (ci1314 > 9) {
        ci1314 = ci1314 - 9;
    }
    var ci1112 = b7 * 2;
    if (ci1112 > 9) {
        ci1112 = ci1112 - 9;
    }
    var ci910 = b9 * 2;
    if (ci910 > 9) {
        ci910 = ci910 - 9;
    }
    var ci78 = b11 * 2;
    if (ci78 > 9) {
        ci78 = ci78 - 9;
    }
    var ci56 = b13 * 2;
    if (ci56 > 9) {
        ci56 = ci56 - 9;
    }
    var ci34 = b15 * 2;
    if (ci34 > 9) {
        ci34 = ci34 - 9;
    }
    var ci12 = b17 * 2;
    if (ci12 > 9) {
        ci12 = ci12 - 9;
    }
    var ci1617 = b2;
    var ci1415 = b4;
    var ci1213 = b6;
    var ci1011 = b8;
    var ci89 = b10;
    var ci67 = b12;
    var ci45 = b14;
    var ci23 = b16;
    var ci01 = b18;
    var ccredDig = (ci1617 + ci1415 + ci1213 + ci1011 + ci89 + ci67 + ci45 + ci23 + ci01 + ci17 + ci1516 + ci1314 + ci1112 + ci910 + ci78 + ci56 + ci34 + ci12) % 10;
    ccredDig = 10 - ccredDig;
    if (ccredDig == 10) {
        ccredDig = 0;
    }
    return ccredDig;
}
exports.create_cartaocredito = create_cartaocredito;
function create_ect(number) {
    number = utils_1.getAllDigits(number);
    number = "0000000" + number;
    number = number.slice(number.length - 8);
    var b1 = parseInt(number.slice(7));
    var b2 = parseInt(number.slice(6, 7));
    var b3 = parseInt(number.slice(5, 6));
    var b4 = parseInt(number.slice(4, 5));
    var b5 = parseInt(number.slice(3, 4));
    var b6 = parseInt(number.slice(2, 3));
    var b7 = parseInt(number.slice(1, 2));
    var b8 = parseInt(number.slice(0, 1));
    var regEctDig = (b1 * 7 + b2 * 9 + b3 * 5 + b4 * 3 + b5 * 2 + b6 * 4 + b7 * 6 + b8 * 8) % 11;
    regEctDig = 11 - regEctDig;
    if (regEctDig == 11) {
        regEctDig = 5;
    }
    if (regEctDig == 10) {
        regEctDig = 0;
    }
    return regEctDig;
}
exports.create_ect = create_ect;
function create_pispasep(number) {
    number = utils_1.getAllDigits(number);
    var nis = utils_1.fillString(number, 11, '0');
    var d;
    var p = 2, c = 9;
    for (d = 0; c >= 0; c--, (p < 9) ? p++ : p = 2) {
        d += parseInt(nis[c]) * p;
    }
    var digit = (((10 * d) % 11) % 10);
    return digit;
}
exports.create_pispasep = create_pispasep;
function create_renavam(renavam) {
    var dig1 = 0;
    while (renavam.length < 11) {
        renavam = '0' + renavam;
    }
    dig1 = (renavam.charCodeAt(0) - 48) * 3 + (renavam.charCodeAt(1) - 48) * 2 + (renavam.charCodeAt(2) - 48) * 9 + (renavam.charCodeAt(3) - 48) * 8 +
        (renavam.charCodeAt(4) - 48) * 7 + (renavam.charCodeAt(5) - 48) * 6 + (renavam.charCodeAt(6) - 48) * 5 +
        (renavam.charCodeAt(7) - 48) * 4 + (renavam.charCodeAt(8) - 48) * 3 + (renavam.charCodeAt(9) - 48) * 2;
    dig1 = dig1 * 10;
    var resto = (dig1 % 11);
    if (resto === 10) {
        return 0;
    }
    else {
        return resto;
    }
}
exports.create_renavam = create_renavam;
/**
 *
 * Font: http://ghiorzi.org/index.htm
 * @param number
 */
function create_processo(number) {
    number = utils_1.getAllDigits(number);
    number = "00000000000000000" + number;
    number = number.slice(number.length - 18);
    var b1 = parseInt(number.slice(0, 1)) * 10000000000;
    var b2 = parseInt(number.slice(1, 2)) * 1000000000;
    var b3 = parseInt(number.slice(2, 3)) * 100000000;
    var b4 = parseInt(number.slice(3, 4)) * 10000000;
    var b5 = parseInt(number.slice(4, 5)) * 1000000;
    var b6 = parseInt(number.slice(5, 6)) * 100000;
    var b7 = parseInt(number.slice(6, 7)) * 10000;
    var b8 = parseInt(number.slice(7, 8)) * 1000;
    var b9 = parseInt(number.slice(8, 9)) * 100;
    var b10 = parseInt(number.slice(9, 10)) * 10;
    var b11 = parseInt(number.slice(10, 11));
    var proc1a11 = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11;
    var resto1 = proc1a11 % 97;
    var b12 = parseInt(number.slice(11, 12)) * 1000000;
    var b13 = parseInt(number.slice(12, 13)) * 100000;
    var b14 = parseInt(number.slice(13, 14)) * 10000;
    var b15 = parseInt(number.slice(14, 15)) * 1000;
    var b16 = parseInt(number.slice(15, 16)) * 100;
    var b17 = parseInt(number.slice(16, 17)) * 10;
    var b18 = parseInt(number.slice(17));
    var proc12a18 = b12 + b13 + b14 + b15 + b16 + b17 + b18;
    var resto2 = (resto1 * 10000000 * 100 + proc12a18 * 100) % 97;
    var procJudDV = 98 - resto2;
    if (procJudDV < 10) {
        procJudDV = "0" + procJudDV;
    }
    var procJudCompl = b1 / 10000 + b2 / 10000 + b3 / 10000 + b4 / 10000 + b5 / 10000 + b6 / 10000 + b7 / 10000 + "-" + procJudDV + "." + b8 / 1000 + b9 / 100 + b10 / 10 + b11 + "." + b12 / 1000000 + "." + b13 / 100000 + b14 / 10000 + "." + b15 / 1000 + b16 / 100 + b17 / 10 + b18;
    procJudCompl = "000000" + procJudCompl;
    var result = procJudCompl.slice(procJudCompl.length - 25);
    return result;
}
exports.create_processo = create_processo;
function create_titulo_atual(titulo) {
    var tit = titulo;
    var dig1 = 0;
    var dig2 = 0;
    var tam = tit.length;
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
    return dig1.toString() + dig2.toString();
}
exports.create_titulo_atual = create_titulo_atual;
function create_titulo(titNum) {
    titNum = utils_1.getAllDigits(titNum);
    if (titNum.length > 11) {
        titNum = titNum.substr(0, 11);
    }
    titNum = "00000000" + titNum;
    titNum = titNum.slice(titNum.length - 11);
    var a1 = parseInt(titNum.slice(10));
    var a2 = parseInt(titNum.slice(9, 10));
    var a3 = parseInt(titNum.slice(8, 9));
    var a4 = parseInt(titNum.slice(7, 8));
    var a5 = parseInt(titNum.slice(6, 7));
    var a6 = parseInt(titNum.slice(5, 6));
    var a7 = parseInt(titNum.slice(4, 5));
    var a8 = parseInt(titNum.slice(3, 4));
    var a9 = parseInt(titNum.slice(2, 3));
    var a10 = parseInt(titNum.slice(1, 2));
    var a11 = parseInt(titNum.slice(0, 1));
    if (a2 * 10 + a1 == 0 || a2 * 10 + a1 > 28) {
        throw new Error("Esse nº é suspeito, porque a identificação da \nUF (últimos 2 dígitos) deve estar entre 01 e 28.");
    }
    var titExcecao1 = 0;
    var titExcecao2 = 0;
    var titPriDig = (a3 * 9 + a4 * 8 + a5 * 7 + a6 * 6 + a7 * 5 + a8 * 4 + a9 * 3 + a10 * 2 + a11 * 9) % 11;
    if (titPriDig == 0) {
        titExcecao1 = 1;
    }
    if (titPriDig == 10) {
        titPriDig = 0;
    }
    if ((a2 * 10 + a1 == 1 || a2 * 10 + a1 == 2) && (titExcecao1 == 1)) {
        titPriDig = 1;
    }
    var titSegDig = (titPriDig * 9 + a1 * 8 + a2 * 7) % 11;
    if (titSegDig == 0) {
        titExcecao2 = 1;
    }
    if (titSegDig == 10) {
        titSegDig = 0;
    }
    if ((a2 * 10 + a1 == 1 || a2 * 10 + a1 == 2) && (titExcecao2 == 1)) {
        titSegDig = 1;
    }
    var titDV = titPriDig * 10 + titSegDig;
    if (titDV == 0) {
        titDV = "00";
    }
    if (titDV > 0 && titDV < 10) {
        titDV = "0" + titDV;
    }
    return titDV.toString();
}
exports.create_titulo = create_titulo;

},{"./utils":15}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESTADOS = exports.ESTADOS_SIGLA = void 0;
exports.ESTADOS_SIGLA = ['ac', 'al', 'am', 'ap', 'ba', 'ce', 'df', 'es', 'go', 'ma',
    'mg', 'ms', 'mt', 'pa', 'pb', 'pe', 'pi', 'pr', 'rj', 'rn', 'ro', 'rr', 'rs',
    'sc', 'se', 'sp', 'to'
];
exports.ESTADOS = [
    { name: 'Acre', shortname: 'AC', slug: 'acre' },
    { name: 'Alagoas', shortname: 'AL', slug: 'alagoas' },
    { name: 'Amapá', shortname: 'AP', slug: 'amapa' },
    { name: 'Amazonas', shortname: 'AM', slug: 'amazonas' },
    { name: 'Bahia', shortname: 'BA', slug: 'bahia' },
    { name: 'Ceará', shortname: 'CE', slug: 'ceara' },
    { name: 'Distrito Federal', shortname: 'DF', slug: 'distrito-federal' },
    { name: 'Espírito Santo', shortname: 'ES', slug: 'espirito-santo' },
    { name: 'Goiás', shortname: 'GO', slug: 'goias' },
    { name: 'Maranhão', shortname: 'MA', slug: 'maranhao' },
    { name: 'Mato Grosso', shortname: 'MT', slug: 'mato-grosso' },
    { name: 'Mato Grosso do Sul', shortname: 'MS', slug: 'mato-grosso-do-sul' },
    { name: 'Minas Gerais', shortname: 'MG', slug: 'minas-gerais' },
    { name: 'Pará', shortname: 'PA', slug: 'para' },
    { name: 'Paraíba', shortname: 'PB', slug: 'paraiba' },
    { name: 'Paraná', shortname: 'PR', slug: 'parana' },
    { name: 'Pernambuco', shortname: 'PE', slug: 'pernambuco' },
    { name: 'Piauí', shortname: 'PI', slug: 'piaui' },
    { name: 'Rio de Janeiro', shortname: 'RJ', slug: 'rio-de-janeiro' },
    { name: 'Rio Grande do Norte', shortname: 'RN', slug: 'rio-grande-do-norte' },
    { name: 'Rio Grande do Sul', shortname: 'RS', slug: 'rio-grande-do-sul' },
    { name: 'Rondônia', shortname: 'RO', slug: 'rondonia' },
    { name: 'Roraima', shortname: 'RR', slug: 'roraima' },
    { name: 'Santa Catarina', shortname: 'SC', slug: 'santa-catarina' },
    { name: 'São Paulo', shortname: 'SP', slug: 'sao-paulo' },
    { name: 'Sergipe', shortname: 'SE', slug: 'sergipe' },
    { name: 'Tocantins', shortname: 'TO', slug: 'tocantins' }
];

},{}],5:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var mask_1 = require("./mask");
var validate_1 = require("./validate");
var randexp_1 = require("randexp");
var placa_1 = require("./placa");
var inscricaoestadual_1 = require("./inscricaoestadual");
var create_1 = require("./create");
var utils_1 = require("./utils");
var veiculos_1 = require("./veiculos");
var name_1 = require("./name");
var pessoas_1 = require("../addons/pessoas");
var create_2 = require("./iptu/create");
// import cnaes from '../addons/cnaes';
function aih(uf, ano, tipo, seq) {
    if (uf === void 0) { uf = 35; }
    if (ano === void 0) { ano = 19; }
    if (tipo === void 0) { tipo = 1; }
    if (seq === void 0) { seq = null; }
    if (!seq) {
        seq = utils_1.randomNumber(1000000, 9999999); // new Random().Next(1, 9999999).ToString().PadLeft(7, '0');
    }
    var cod = parseInt("" + uf + ano + tipo + seq);
    var digito = create_1.create_aih(cod);
    var result = "" + cod + digito;
    return result;
}
function celular(options) {
    if (options === void 0) { options = {}; }
    return telefone(__assign(__assign({}, options), { celular: true }));
}
function cep(options) {
    if (options === void 0) { options = {}; }
    if (!options.estado) {
        options.estado = utils_1.randomEstadoSigla();
    }
    var range = pessoas_1.CEP_ESTADO[options.estado];
    var cepNumber = utils_1.randomNumber(range[0][0], range[0][1]);
    var cep;
    if (cepNumber < 10000000) {
        cep = '0' + cepNumber.toString();
    }
    else {
        cep = cepNumber.toString();
    }
    var mask = cep.slice(0, cep.length - 3) + '-' + cep.slice(cep.length - 3, cep.length);
    return mask;
}
function cepState(state) {
    return randexp_1.randexp(validate_1.CEPRange[state]);
}
function certidao() {
    var value = utils_1.makeGenericFaker(mask_1.MASKS['certidao'])();
    var certidao = utils_1.getAllDigits(value);
    var check = create_1.create_certidao(certidao);
    return certidao.substr(0, certidao.length - 2) + check;
}
function chassi() {
    var chassi = utils_1.makeGenericFaker(mask_1.MASKS['chassi'])();
    chassi = chassi.replace(/i|I|o|O|q|Q/g, 'A');
    return chassi;
}
function cid() {
    // let chassi = makeGenericFaker(MASKS['chassi'])();
    // chassi = chassi.replace(/i|I|o|O|q|Q/g, 'A');
    // return chassi;
}
var cnae = utils_1.makeGenericFaker(mask_1.MASKS['cnae']);
function cnh() {
    var cnh = utils_1.makeGenericFaker(mask_1.MASKS['cnh'])();
    var nodigits = cnh;
    var check = create_1.create_cnh(nodigits);
    return cnh.substr(0, cnh.length - 2) + check;
}
function cnpj() {
    var cnpj = utils_1.makeGenericFaker(mask_1.MASKS['cnpj'])();
    cnpj = cnpj.replace(/[^\d]+/g, '');
    var restos = create_1.create_cnpj(cnpj) || [0, 1];
    cnpj = cnpj.substr(0, cnpj.length - 2) + restos[0] + restos[0];
    restos = create_1.create_cnpj(cnpj) || [0, 1];
    return cnpj.substr(0, cnpj.length - 1) + restos[1];
}
function cns() {
    var cns;
    do {
        cns = utils_1.makeGenericFaker(mask_1.MASKS['cns'])();
        cns = utils_1.getAllDigits(cns);
        var primeiroDigito = parseInt(cns[0]);
        if (primeiroDigito < 3) {
            var cnsDigits = cns.split('');
            cnsDigits[cnsDigits.length - 2] = '0';
            cnsDigits[cnsDigits.length - 3] = '0';
            cnsDigits[cnsDigits.length - 4] = '0';
            cns = cnsDigits.join();
        }
        var digito = create_1.create_cns(cns);
        cns = cns.substr(0, cns.length - 2) + digito;
    } while (!validate_1.validate_cns(cns));
    return cns;
}
var contabanco = utils_1.makeGenericFaker(mask_1.MASKS['contabanco']);
function cpf() {
    var cpf_fake = utils_1.makeGenericFaker(mask_1.MASKS['cpf'])();
    var restos = create_1.create_cpf(cpf_fake);
    if (!restos) {
        throw new Error('Could not create cpf on faker cpf');
    }
    cpf_fake = cpf_fake.substr(0, cpf_fake.length - 2) + restos[0] + restos[1];
    restos = create_1.create_cpf(cpf_fake);
    if (!restos) {
        throw new Error('Could not create cpf on faker cpf');
    }
    cpf_fake = cpf_fake.substr(0, cpf_fake.length - 2) + restos[0] + restos[1];
    return cpf_fake;
}
var cpfcnpj = utils_1.makeGenericFaker(mask_1.MASKS['cpfcnpj']);
var cartaocredito = utils_1.makeGenericFaker(mask_1.MASKS['cartaocredito']);
function currency() {
    var x = Math.random() * 10000;
    var final = x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    if (final[final.length - 3] === '.') {
        final = final.replace(/\./g, '#');
        final = final.replace(/\,/g, '.');
        final = final.replace(/\#/g, ',');
    }
    return final;
}
function currencyNumber() {
    var x = Math.random() * 10000;
    return parseFloat(x.toFixed(2));
}
function data(config) {
    if (config === void 0) { config = {}; }
    var date = new Date();
    if (config.dias) {
        date.setDate(date.getDate() + config.dias);
    }
    if (config.meses) {
        date.setMonth(date.getMonth() + config.meses);
    }
    if (config.idadeMin && config.idadeMax) {
        config.anos = -utils_1.randomNumber(config.idadeMin, config.idadeMax);
    }
    if (config.anos) {
        date.setFullYear(date.getFullYear() + config.anos);
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    var day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    return day + "/" + month + "/" + date.getFullYear();
}
function ect() {
    var ect = utils_1.makeGenericFaker(mask_1.MASKS['ect'])();
    var dv = create_1.create_ect(ect.substr(0, ect.length - 1));
    return ect.substr(0, ect.length - 1) + dv;
}
function email(options) {
    if (options === void 0) { options = {}; }
    var nome = utils_1.randArray(pessoas_1.NOMES_MASCULINOS);
    if (options.nome) {
        nome = options.nome;
    }
    nome = utils_1.slugify(nome);
    var empresa = nome;
    if (options.empresa) {
        empresa = options.empresa;
    }
    return nome + '@' + site({ nome: empresa, url: '' });
}
function empresa(options) {
    if (options === void 0) { options = {}; }
    if (!options.estado) {
        options.estado = utils_1.randomEstadoSigla();
    }
    var enderecoVal = endereco(options);
    var inscricaoestadualVal = inscricaoestadual(enderecoVal.estadoSigla);
    var dataAbertura = data({
        idadeMin: 4,
        idadeMax: 20
    });
    var fundador1 = pessoa(options);
    var fundador2 = pessoa(options);
    var fundadores = [
        fundador1,
        fundador2
    ];
    var nome = utils_1.randArray(pessoas_1.EMPRESAS_TIPOS) + ' ' + utils_1.randArray(pessoas_1.EMPRESAS_NOMES);
    // const site = faker.site();
    var emailVal = email({
        nome: 'contato',
        empresa: nome
    });
    return {
        nome: nome,
        email: emailVal,
        inscricaoestadual: inscricaoestadualVal,
        fundadores: fundadores,
        cnpj: cnpj(),
        endereco: enderecoVal,
        telefone: telefone({
            estado: enderecoVal.estadoSigla
        }),
        celular: celular({
            estado: enderecoVal.estadoSigla
        }),
        dataAbertura: dataAbertura
    };
}
function endereco(options) {
    if (options === void 0) { options = {}; }
    if (!options.estado) {
        options.estado = utils_1.randomEstadoSigla();
    }
    var estadoFound = name_1.LOCALIZACAO_ESTADOS.find(function (e) { return e.uf.toLowerCase() === options.estado; }) || name_1.LOCALIZACAO_ESTADOS[0];
    var cidades = name_1.LOCALIZACAO_CIDADES.filter(function (c) { return c[1] === estadoFound.nome; });
    var cidade = utils_1.randArray(cidades);
    var estado = cidade[1].toLowerCase();
    estado = name_1.LOCALIZACAO_ESTADOS.find(function (e) { return e.nome.toLowerCase() === estado.toLowerCase(); });
    return {
        cep: cep(),
        logradouro: utils_1.randArray(name_1.LOCALIZACAO_RUAS),
        complemento: utils_1.randArray(name_1.LOCALIZACAO_COMPLEMENTOS) + ' ' + number({ min: 1, max: 10, decimals: 0 }),
        numero: number({ min: 1, decimals: 0 }),
        bairro: utils_1.randArray(name_1.LOCALIZACAO_BAIRROS),
        cidade: cidade[0],
        estado: cidade[1],
        estadoSigla: estado.uf
    };
}
var inscricaoestadual = function (estadoInput) {
    var estado = estadoInput.toLowerCase();
    if (!mask_1.MASKSIE) {
        return;
    }
    var funcIE = utils_1.getSpecialProperty(mask_1.MASKSIE, estado);
    var val = utils_1.makeGenericFaker(funcIE)();
    val = val.match(/\d/g).join('');
    var newval = inscricaoestadual_1.generateInscricaoEstadual[estado](val);
    return newval;
};
function iptu(estado, cidade) {
    return create_2.faker_iptu(estado, cidade);
}
function number(options) {
    if (options === void 0) { options = {}; }
    if (!options.max) {
        options.max = 10000;
    }
    if (options.min === undefined) {
        options.min = 0;
    }
    if (options.decimals === undefined) {
        options.decimals = 2;
    }
    var x = (Math.random() * options.max) + options.min;
    if (options.decimals === 0) {
        return Math.floor(x);
    }
    return parseFloat(x.toFixed(options.decimals));
}
var porcentagem = utils_1.makeGenericFaker(mask_1.MASKS['porcentagem']);
function pessoa(options) {
    if (options === void 0) { options = {}; }
    if (!options.estado) {
        options.estado = utils_1.randomEstadoSigla();
    }
    var dataNascimento = data({
        idadeMin: 18,
        idadeMax: 40
    });
    var altura = '1.' + utils_1.randomNumber(35, 90);
    var peso = utils_1.randomNumber(50, 120);
    var signo = pessoas_1.getAstro(dataNascimento);
    var tipoSanguineo = utils_1.randArray(pessoas_1.TIPOS_SANGUINEOS);
    var sobrenomePai = utils_1.randArray(pessoas_1.SOBRENOMES);
    var sobrenomeMae = utils_1.randArray(pessoas_1.SOBRENOMES);
    var nome = utils_1.randArray(pessoas_1.NOMES_MASCULINOS) + ' ' + sobrenomeMae + ' ' + sobrenomePai;
    var mae = utils_1.randArray(pessoas_1.NOMES_FEMININOS) + ' ' + sobrenomeMae + ' ' + sobrenomePai;
    var pai = utils_1.randArray(pessoas_1.NOMES_MASCULINOS) + ' ' + utils_1.randArray(pessoas_1.SOBRENOMES) + ' ' + sobrenomePai;
    return {
        nome: nome,
        mae: mae,
        pai: pai,
        site: site(),
        email: email(),
        senha: senha(),
        rg: rg(options),
        cpf: cpf(),
        telefone: telefone(options),
        celular: celular(options),
        dataNascimento: dataNascimento,
        endereco: endereco(options),
        usuario: usuario(nome),
        signo: signo, tipoSanguineo: tipoSanguineo, altura: altura, peso: peso
    };
}
function pispasep() {
    var pis = utils_1.makeGenericFaker(mask_1.MASKS['pispasep'])();
    var digit = create_1.create_pispasep(pis);
    var values = pis.split('');
    values[values.length - 1] = digit;
    return values;
}
function placa() {
    var placa;
    do {
        placa = utils_1.makeGenericFaker(mask_1.MASKS['placa'])();
    } while (!placa_1.validate_placa(placa));
    return placa;
}
var processo = utils_1.makeGenericFaker(mask_1.MASKS['processo']);
function renavam() {
    var renavam = utils_1.makeGenericFaker(mask_1.MASKS['renavam'])();
    var dv = create_1.create_renavam(renavam);
    return renavam.substr(0, renavam.length - 1) + dv;
}
function rg(options) {
    if (options === void 0) { options = {}; }
    if (!options.estado) {
        options.estado = utils_1.randomEstadoSigla();
    }
    var estado = options.estado.split('');
    var makeRg = utils_1.makeGenericFaker(mask_1.MASKS['rg'], {
        0: function () { return estado[0]; },
        1: function () { return estado[1]; }
    });
    return makeRg();
}
function senha(options) {
    if (options === void 0) { options = {}; }
    if (!options.size) {
        options.size = 8;
    }
    var pass = [
        utils_1.randomLetter().toLowerCase(),
        utils_1.randomLetter().toUpperCase(),
        utils_1.randomNumber(0, 9),
        utils_1.randArray(['!', '@', '#', '$', '%', '^', '&', '*'])
    ];
    var i = 4;
    for (i = 4; i <= options.size; i++) {
        var newchar = utils_1.randArray([
            utils_1.randomLetter().toLowerCase(),
            utils_1.randomLetter().toUpperCase(),
            utils_1.randomNumber(0, 9),
            utils_1.randArray(['!', '@', '#', '$', '%', '^', '&', '*'])
        ]);
        pass.push(newchar);
    }
    return pass.join('');
}
function site(options) {
    if (options === void 0) { options = {}; }
    var nome = utils_1.randArray(pessoas_1.EMPRESAS_TIPOS) + ' ' + utils_1.randArray(pessoas_1.EMPRESAS_NOMES);
    var dominio = '.com.br';
    var url = utils_1.randArray(['http://', 'https://']);
    if (options.nome) {
        nome = options.nome;
    }
    if (options.dominio) {
        dominio = options.dominio;
    }
    if (options.url !== undefined) {
        url = options.url;
    }
    nome = utils_1.slugify(nome);
    return url + nome + dominio;
}
var sped = utils_1.makeGenericFaker(mask_1.MASKS['sped']);
function telefone(options) {
    if (options === void 0) { options = {}; }
    var telefone = utils_1.makeGenericFaker(mask_1.MASKS['telefone'])();
    if (options.estado) {
        var telefones = telefone.toString().split('');
        var ddd = pessoas_1.TELEFONE_ESTADO[options.estado.toLowerCase()].toString();
        telefones[1] = ddd[0];
        telefones[2] = ddd[1];
        telefone = telefones.join('');
    }
    if (options.celular) {
        var telefones = telefone.toString().split('');
        telefones[5] = '9';
        telefone = telefones.join('');
    }
    return telefone;
}
var time = utils_1.makeGenericFaker(mask_1.MASKS['time']);
function titulo() {
    var titulo;
    do {
        titulo = utils_1.makeGenericFaker(mask_1.MASKS['titulo'])();
        var number_1 = titulo.substr(0, titulo.length - 2);
        if (number_1.substr(-2) === '29') {
            var numbers = number_1.split();
            numbers[numbers.length - 1] = '8';
            number_1 = numbers.join();
        }
        try {
            var dig = create_1.create_titulo(number_1);
            titulo = number_1 + dig[0] + dig[1];
        }
        catch (e) {
        }
    } while (!validate_1.validate_titulo(titulo));
    return titulo;
}
function veiculo() {
    var veiculo = utils_1.randArray(veiculos_1.VEICULOS);
    return {
        placa: placa(),
        chassi: chassi(),
        marca: veiculo.marca,
        modelo: veiculo.modelo,
        categoria: utils_1.randArray(veiculos_1.VEICULOS_CATEGORIAS),
        especie: utils_1.randArray(veiculos_1.VEICULOS_ESPECIES),
        restricao: utils_1.randArray(veiculos_1.VEICULOS_RESTRICOES),
        tipo: utils_1.randArray(veiculos_1.VEICULOS_TIPOS),
        carroceria: utils_1.randArray(veiculos_1.VEICULOS_CARROCERIAS),
        combustivel: utils_1.randArray(veiculos_1.VEICULOS_COMBUSTIVEIS),
        cor: utils_1.randArray(utils_1.CORES)
    };
}
function usuario(nome) {
    if (!nome) {
        var sobrenomePai = utils_1.randArray(pessoas_1.SOBRENOMES);
        nome = utils_1.randArray(pessoas_1.NOMES_MASCULINOS) + ' ' + sobrenomePai;
    }
    return utils_1.slugify(nome);
}
exports.default = {
    aih: aih,
    cartaocredito: cartaocredito,
    celular: celular,
    cep: cep,
    cepState: cepState,
    certidao: certidao,
    chassi: chassi,
    cid: cid,
    cnae: cnae,
    cnh: cnh,
    cnpj: cnpj,
    cns: cns,
    contabanco: contabanco,
    cpf: cpf,
    cpfcnpj: cpfcnpj,
    currency: currency,
    currencyNumber: currencyNumber,
    data: data,
    ect: ect,
    email: email,
    empresa: empresa,
    endereco: endereco,
    inscricaoestadual: inscricaoestadual,
    iptu: iptu,
    number: number,
    pessoa: pessoa,
    pispasep: pispasep,
    placa: placa,
    porcentagem: porcentagem,
    processo: processo,
    renavam: renavam,
    rg: rg,
    senha: senha,
    site: site,
    sped: sped,
    telefone: telefone,
    time: time,
    titulo: titulo,
    veiculo: veiculo,
    usuario: usuario,
};

},{"../addons/pessoas":1,"./create":3,"./inscricaoestadual":6,"./iptu/create":7,"./mask":11,"./name":12,"./placa":13,"./utils":15,"./validate":16,"./veiculos":17,"randexp":19}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MASKSIE = exports.validate_inscricaoestadual = exports.generateInscricaoEstadual = void 0;
var utils_1 = require("./utils");
/**
 * BASED ON https://github.com/gammasoft/ie/
 */
exports.generateInscricaoEstadual = {
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
        var resto = 11 - mod(base);
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
        if (naoComecaCom(valor, '07') && naoComecaCom(valor, '08')) {
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
        return valor === exports.generateInscricaoEstadual.ac(valor);
    },
    am: function (valor) {
        return valor === exports.generateInscricaoEstadual.am(valor);
    },
    al: function (valor) {
        return valor === exports.generateInscricaoEstadual.al(valor);
    },
    ap: function (valor) {
        return valor === exports.generateInscricaoEstadual.ap(valor);
    },
    ba: function (valor) {
        return valor === exports.generateInscricaoEstadual.ba(valor);
    },
    ce: function (valor) {
        return valor === exports.generateInscricaoEstadual.ce(valor);
    },
    df: function (valor) {
        return valor === exports.generateInscricaoEstadual.df(valor);
    },
    es: function (valor) {
        return valor === exports.generateInscricaoEstadual.es(valor);
    },
    go: function (valor) {
        return valor === exports.generateInscricaoEstadual.go(valor);
    },
    ma: function (valor) {
        return valor === exports.generateInscricaoEstadual.ma(valor);
    },
    mg: function (valor) {
        return valor === exports.generateInscricaoEstadual.mg(valor);
    },
    ms: function (valor) {
        return valor === exports.generateInscricaoEstadual.ms(valor);
    },
    mt: function (valor) {
        return valor === exports.generateInscricaoEstadual.mt(valor);
    },
    pa: function (valor) {
        return valor === exports.generateInscricaoEstadual.pa(valor);
    },
    pb: function (valor) {
        return valor === exports.generateInscricaoEstadual.pb(valor);
    },
    pe: function (valor) {
        return valor === exports.generateInscricaoEstadual.pe(valor);
    },
    pi: function (valor) {
        return valor === exports.generateInscricaoEstadual.pi(valor);
    },
    pr: function (valor) {
        return valor === exports.generateInscricaoEstadual.pr(valor);
    },
    rj: function (valor) {
        return valor === exports.generateInscricaoEstadual.rj(valor);
    },
    rn: function (valor) {
        return valor === exports.generateInscricaoEstadual.rn(valor);
    },
    ro: function (valor) {
        return valor === exports.generateInscricaoEstadual.ro(valor);
    },
    rr: function (valor) {
        return valor === exports.generateInscricaoEstadual.rr(valor);
    },
    rs: function (valor) {
        return valor === exports.generateInscricaoEstadual.rs(valor);
    },
    sc: function (valor) {
        return valor === exports.generateInscricaoEstadual.sc(valor);
    },
    se: function (valor) {
        return valor === exports.generateInscricaoEstadual.se(valor);
    },
    sp: function (valor) {
        return valor === exports.generateInscricaoEstadual.sp(valor);
    },
    to: function (valor) {
        return valor === exports.generateInscricaoEstadual.to(valor);
    },
};
function validate_inscricaoestadual(ie, estado) {
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
        var retorno_1 = true;
        ie.forEach(function (i) {
            if (!validate_inscricaoestadual(i, estado)) {
                retorno_1 = false;
            }
        });
        return retorno_1;
    }
    if (typeof ie !== 'string') {
        return new Error('ie deve ser string ou array de strings');
    }
    if (!utils_1.allNumbersAreSame(ie)) {
        return new Error('ie com todos dígitos iguais');
    }
    if (ie.match(/^ISENTO$/i)) {
        return true;
    }
    ie = ie.replace(/[\.|\-|\/|\s]/g, '');
    if (estado === '') {
        if (lookup(ie)) {
            return true;
        }
        else {
            return false;
        }
    }
    if (/^\d+$/.test(ie) || estado === 'sp' || funcoes[estado]) {
        return funcoes[estado](ie);
    }
    return false;
}
exports.validate_inscricaoestadual = validate_inscricaoestadual;
exports.MASKSIE = {
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
        textMaskFunction: function mask(userInput) {
            var numberLength = getSizeNumbers(userInput);
            if (!userInput || numberLength > 8) {
                return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
            }
            else {
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
        textMaskFunction: function mask(userInput) {
            var numberLength = getSizeNumbers(userInput);
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
function getSizeNumbers(userInput) {
    var numbers = userInput.match(/\d/g);
    var numberLength = 0;
    if (numbers) {
        numberLength = numbers.join('').length;
    }
    return numberLength;
}
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
function calculoTrivialGenerate(valor, base, validarTamanho) {
    if (base === void 0) { base = null; }
    if (validarTamanho === void 0) { validarTamanho = false; }
    if (!validarTamanho && tamanhoNaoE(valor)) {
        return false;
    }
    if (eIndefinido(base)) {
        base = primeiros(valor);
    }
    if (!base) {
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

},{"./utils":15}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPTUCREATE = exports.faker_iptu = exports.create_iptu_sp = exports.create_iptu_ctba = void 0;
var utils_1 = require("../utils");
var mask_1 = require("./mask");
function create_iptu_ctba(number) {
    number = utils_1.getAllDigits(number);
    var a1 = parseInt(number.slice(10));
    var a2 = parseInt(number.slice(9, 10));
    var a3 = parseInt(number.slice(8, 9));
    var a4 = parseInt(number.slice(7, 8));
    var a5 = parseInt(number.slice(6, 7));
    var a6 = parseInt(number.slice(5, 6));
    var a7 = parseInt(number.slice(4, 5));
    var a8 = parseInt(number.slice(3, 4));
    var a9 = parseInt(number.slice(2, 3));
    var a10 = parseInt(number.slice(1, 2));
    var a11 = parseInt(number.slice(0, 1));
    var iptuctbaDV = 10 - ((a1 * 2 + a2 * 3 + a3 * 4 + a4 * 7 + a5 * 8 + a6 * 9 + a7 * 2 + a8 * 3 + a9 * 4 + a10 * 7 + a11 * 8) % 10);
    if (iptuctbaDV == 10) {
        iptuctbaDV = 0;
    }
    return iptuctbaDV;
}
exports.create_iptu_ctba = create_iptu_ctba;
function create_iptu_sp(number) {
    var a1 = parseInt(number.slice(9));
    var a2 = parseInt(number.slice(8, 9));
    var a3 = parseInt(number.slice(7, 8));
    var a4 = parseInt(number.slice(6, 7));
    var a5 = parseInt(number.slice(5, 6));
    var a6 = parseInt(number.slice(4, 5));
    var a7 = parseInt(number.slice(3, 4));
    var a8 = parseInt(number.slice(2, 3));
    var a9 = parseInt(number.slice(1, 2));
    var a10 = parseInt(number.slice(0, 1));
    var iptuspDV = (a1 * 9 + a2 * 8 + a3 * 7 + a4 * 6 + a5 * 5 + a6 * 4 + a7 * 3 + a8 * 2 + a9 + a10 * 10) % 11;
    if (iptuspDV == 10) {
        iptuspDV = 1;
    }
    return iptuspDV;
}
exports.create_iptu_sp = create_iptu_sp;
exports.faker_iptu = function (estado, cidade) {
    if (!mask_1.IPTUMASKS[estado] || !mask_1.IPTUMASKS[estado][cidade]) {
        return;
    }
    var iptu = utils_1.makeGenericFaker(mask_1.IPTUMASKS[estado][cidade])();
    if (exports.IPTUCREATE[estado] && exports.IPTUCREATE[estado][cidade]) {
        var dv = exports.IPTUCREATE[estado][cidade](iptu);
        var values = iptu.split('');
        values[values.length - 1] = dv;
        iptu = values.join('');
    }
    return iptu;
};
exports.IPTUCREATE = {
    'sao-paulo': {
        'sao-paulo': create_iptu_sp,
    },
    'parana': {
        'curitiba': create_iptu_ctba
    }
};

},{"../utils":15,"./mask":9}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_iptu = exports.mask_iptu = exports.create_iptu = void 0;
var validate_1 = require("./validate");
var mask_1 = require("./mask");
var utils_1 = require("../utils");
var create_1 = require("./create");
exports.create_iptu = function (number, estado, cidade) {
    if (!create_1.IPTUCREATE[estado] || !create_1.IPTUCREATE[estado][cidade]) {
        return true;
    }
    number = utils_1.getAllDigits(number);
    return create_1.IPTUCREATE[estado][cidade](number);
};
exports.mask_iptu = function (number, estado, cidade) {
    if (!mask_1.IPTUMASKS[estado] || !mask_1.IPTUMASKS[estado][cidade]) {
        return number;
    }
    return mask_1.IPTUMASKS[estado][cidade];
};
exports.validate_iptu = function (number, estado, cidade) {
    if (!validate_1.IPTUVALIDATE[estado] || !validate_1.IPTUVALIDATE[estado][cidade]) {
        return true;
    }
    number = utils_1.getAllDigits(number);
    return validate_1.IPTUVALIDATE[estado][cidade](number);
};

},{"../utils":15,"./create":7,"./mask":9,"./validate":10}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPTUMASKS = void 0;
exports.IPTUMASKS = {
    'minas-gerais': {
        'belo-horizonte': {
            text: '000.000.000.000.0',
            textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/]
        },
        'contagem': {
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

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPTUVALIDATE = exports.validate_iptu_sp = exports.validate_iptu_contagem = exports.validate_iptu_ctba = void 0;
var utils_1 = require("../utils");
var create_1 = require("./create");
var validateRemoveDigito = function (number, max) {
    number = utils_1.getAllDigits(number.toString());
    if (number.length > max) {
        return false;
    }
    else if (number.length === max) {
        number = number.slice(0, -1);
    }
    return number;
};
function validate_iptu_ctba(value) {
    var number = validateRemoveDigito(value, 12);
    if (!number) {
        return false;
    }
    var dv = create_1.IPTUCREATE['parana']['curitiba'](number);
    return parseInt(value[value.length - 1]) === dv;
}
exports.validate_iptu_ctba = validate_iptu_ctba;
/**
 * Índice Cadastral, ou inscrição imobiliária,  é o número de identificação do imóvel no cadastro da Prefeitura de Contagem.
 * O índice é composto por 12 (doze) ou 13 (treze) números, sendo: 2 (dois) para a zona fiscal;
 * 3 (três) ou 4 (quatro) para a quadra fiscal; 4 (quatro) para o lote fiscal; e 3 (três) para a unidade.
 */
function validate_iptu_contagem(number) {
    number = validateRemoveDigito(number, 12);
    if (!number) {
        return false;
    }
    return true;
}
exports.validate_iptu_contagem = validate_iptu_contagem;
function validate_iptu_sp(value) {
    var number = validateRemoveDigito(value, 12);
    if (!number) {
        return false;
    }
    var dv = create_1.IPTUCREATE['sao-paulo']['sao-paulo'](number);
    return parseInt(value[value.length - 1]) === dv;
}
exports.validate_iptu_sp = validate_iptu_sp;
// export function validate_iptu(iptu: string) {
//   let iptuClean = iptu.replace(/\./g, '');
//   iptuClean = iptuClean.replace(/-/g, '');
//   const exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
//   const expClean = /[a-z]{2}\d{8}/;
//   const state = iptu.substr(0, 2).toUpperCase();
//   if (!exp.test(iptu) && !expClean.test(iptuClean) && !(state in CEPRange)) {
//     return false;
//   }
//   if (IPTU[state]) {
//     const validateState = IPTU[state];
//     return validateState(iptu);
//   }
//   return true;
// }
exports.IPTUVALIDATE = {
    'sao-paulo': {
        'sao-paulo': validate_iptu_sp,
    },
    'minas-gerais': {
        'contagem': validate_iptu_contagem,
    },
    'parana': {
        'curitiba': validate_iptu_ctba
    }
};

},{"../utils":15,"./create":7}],11:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMaskToPlaceholder = exports.conformToMask = exports.strFunction = exports.placeholderChar = exports.maskBr = exports.MASKS = exports.MASKSIE = void 0;
var utils_1 = require("./utils");
var inscricaoestadual_1 = require("./inscricaoestadual");
Object.defineProperty(exports, "MASKSIE", { enumerable: true, get: function () { return inscricaoestadual_1.MASKSIE; } });
var createNumberMask_1 = require("text-mask-addons/dist/createNumberMask");
var iptu_1 = require("./iptu/iptu");
var inscricaoestadual_2 = require("./inscricaoestadual");
var maskNumber = {
    decimalLimit: 2,
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ',',
    allowDecimal: true,
    integerLimit: 17,
    prefix: '',
    suffix: ''
};
exports.MASKS = {
    aih: {
        text: '000000000000-0',
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
        text: '000000.00.00.0000.0.00000.000.0000000-00',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, '.',
            /\d/, /\d/, /\d/, /\d/, '.', /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.',
            /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    chassi: {
        text: 'AAA AAAAAA AA AA0000',
        textMask: [/[1-9]/, /\w/, /\w/, ' ', /\w/, /\w/, /\w/, /\w/, /\w/, /\w/, ' ', /\w/, /\w/, ' ', /\w/, /\w/, /\d/, /\d/, /\d/, /\d/]
    },
    cid: {
        textMask: false
    },
    cnae: {
        text: '0000-0/00',
        textMask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, '/', /\d/, /\d/]
    },
    cnh: {
        text: '000000000-00',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
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
        textMask: createNumberMask_1.default(__assign(__assign({}, maskNumber), { prefix: 'R$ ', allowNegative: true }))
    },
    data: {
        text: '00/00/0000',
        textMask: [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-2]/, /[0-9]/, /\d/, /\d/]
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
        textMask: createNumberMask_1.default(maskNumber)
    },
    porcentagem: {
        text: '00,00%',
        textMask: createNumberMask_1.default(__assign(__assign({}, maskNumber), { suffix: '%' }))
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
        textMaskFunction: function mask(userInput) {
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (!userInput || numberLength < 9) {
                return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
            }
            else {
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
        textMaskFunction: function mask(userInput) {
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (!userInput || numberLength > 10) {
                return ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
            else {
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
        numberToString: function (n) {
            if (!n || typeof n === 'string') {
                return n;
            }
            return (n.toString()).replace('.', ',');
        },
        textMask: false
    }
};
var makeGeneric = function (key) {
    return function (value) {
        if (!value) {
            return '';
        }
        var mask = exports.MASKS[key].textMask;
        var textMaskFunction = exports.MASKS[key].textMaskFunction;
        if (typeof textMaskFunction === 'function') {
            mask = textMaskFunction(value);
        }
        return conformToMask(value, mask, { guide: false }).conformedValue;
    };
};
exports.maskBr = {
    aih: makeGeneric('aih'),
    celular: makeGeneric('celular'),
    cep: makeGeneric('cep'),
    certidao: makeGeneric('certidao'),
    chassi: makeGeneric('chassi'),
    cnae: makeGeneric('cnae'),
    cnh: makeGeneric('cnh'),
    cnpj: makeGeneric('cnpj'),
    cns: makeGeneric('cns'),
    contabanco: makeGeneric('contabanco'),
    cpf: makeGeneric('cpf'),
    cpfcnpj: makeGeneric('cpfcnpj'),
    cartaocredito: makeGeneric('cartaocredito'),
    currency: function (currencyValueInput, decimalsFormat) {
        if (decimalsFormat === void 0) { decimalsFormat = 2; }
        return formatNumber(exports.MASKS.currency, currencyValueInput, decimalsFormat);
    },
    data: makeGeneric('data'),
    ect: makeGeneric('ect'),
    endereco: makeGeneric('endereco'),
    inscricaoestadual: function (inscricaoestadualValue, estado) {
        var ie = inscricaoestadual_2.MASKSIE;
        var ieState = ie[estado];
        if (!inscricaoestadualValue || !estado || !ieState ||
            !ieState.textMask) {
            return '';
        }
        var mask = ieState.textMask;
        var textMaskFunction = ieState.textMaskFunction;
        if (typeof textMaskFunction === 'function') {
            mask = textMaskFunction(inscricaoestadualValue);
        }
        return conformToMask(inscricaoestadualValue, mask, { guide: false }).conformedValue;
    },
    iptu: function (iptuValue, estado, cidade) {
        var mask = iptu_1.mask_iptu(iptuValue, estado, cidade);
        if (!mask || typeof mask === 'string') {
            return '';
        }
        return conformToMask(iptuValue, mask.textMask, { guide: false }).conformedValue;
    },
    number: function (numberValue, decimalsFormat) {
        if (decimalsFormat === void 0) { decimalsFormat = 2; }
        return formatNumber(exports.MASKS.number, numberValue, decimalsFormat);
    },
    porcentagem: function (porcentagemValue, decimalsFormat) {
        if (decimalsFormat === void 0) { decimalsFormat = 2; }
        return formatNumber(exports.MASKS.porcentagem, porcentagemValue, decimalsFormat);
    },
    pispasep: makeGeneric('pispasep'),
    placa: makeGeneric('placa'),
    processo: makeGeneric('processo'),
    renavam: makeGeneric('renavam'),
    rg: makeGeneric('rg'),
    sped: makeGeneric('sped'),
    telefone: makeGeneric('telefone'),
    time: makeGeneric('time'),
    titulo: makeGeneric('titulo')
};
/**
 * FROM TEXT-MASK
 */
exports.placeholderChar = '_';
exports.strFunction = 'function';
var defaultPlaceholderChar = exports.placeholderChar;
var emptyArray = [];
var emptyString = '';
function conformToMask(rawValue, mask, config) {
    if (rawValue === void 0) { rawValue = emptyString; }
    if (mask === void 0) { mask = emptyArray; }
    if (config === void 0) { config = {}; }
    if (!utils_1.isArray(mask)) {
        // If someone passes a function as the mask property, we should call the
        // function to get the mask array - Normally this is handled by the
        // `createTextMaskInputElement:update` function - this allows mask functions
        // to be used directly with `conformToMask`
        if (typeof rawValue === 'number') {
            rawValue = rawValue.toString();
        }
        if (typeof mask === exports.strFunction) {
            // call the mask function to get the mask array
            mask = mask(rawValue, config);
            // mask functions can setup caret traps to have some control over how the caret moves. We need to process
            // the mask for any caret traps. `processCaretTraps` will remove the caret traps from the mask
            mask = utils_1.processCaretTraps(mask).maskWithoutCaretTraps;
        }
        else {
            throw new Error('Text-mask:conformToMask; The mask property must be an array.');
        }
    }
    // These configurations tell us how to conform the mask
    var guide = config.guide || true;
    var previousConformedValue = config.previousConformedValue || emptyString;
    var placeholder = convertMaskToPlaceholder(mask, exports.placeholderChar);
    var currentCaretPosition = config.currentCaretPosition;
    var keepCharPositions = config.keepCharPositions;
    // The configs below indicate that the user wants the algorithm to work in *no guide* mode
    var suppressGuide = guide === false && previousConformedValue !== undefined;
    // Calculate lengths once for performance
    var rawValueLength = rawValue.length;
    var previousConformedValueLength = previousConformedValue.length;
    var placeholderLength = placeholder.length;
    var maskLength = mask.length;
    // This tells us the number of edited characters and the direction in which they were edited (+/-)
    var editDistance = rawValueLength - previousConformedValueLength;
    // In *no guide* mode, we need to know if the user is trying to add a character or not
    var isAddition = editDistance > 0;
    // Tells us the index of the first change. For (438) 394-4938 to (38) 394-4938, that would be 1
    var indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0);
    // We're also gonna need the index of last change, which we can derive as follows...
    var indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);
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
        var compensatingPlaceholderChars = emptyString;
        // For every character that was deleted from a placeholder position, we add a placeholder char
        for (var i = indexOfFirstChange; i < indexOfLastChange; i++) {
            if (placeholder[i] === exports.placeholderChar) {
                compensatingPlaceholderChars += exports.placeholderChar;
            }
        }
        // Now we trick our algorithm by modifying the raw value to make it contain additional placeholder characters
        // That way when the we start laying the characters again on the mask, it will keep the non-deleted characters
        // in their positions.
        rawValue = (rawValue.slice(0, indexOfFirstChange) +
            compensatingPlaceholderChars +
            rawValue.slice(indexOfFirstChange, rawValueLength));
    }
    // Convert `rawValue` string to an array, and mark characters based on whether they are newly added or have
    // existed in the previous conformed value. Identifying new and old characters is needed for `conformToMask`
    // to work if it is configured to keep character positions.
    var rawValueArr = rawValue
        .split(emptyString)
        .map(function (char, i) { return ({ char: char, isNew: i >= indexOfFirstChange && i < indexOfLastChange }); });
    // The loop below removes masking characters from user input. For example, for mask
    // `00 (111)`, the placeholder would be `00 (___)`. If user input is `00 (234)`, the loop below
    // would remove all characters but `234` from the `rawValueArr`. The rest of the algorithm
    // then would lay `234` on top of the available placeholder positions in the mask.
    for (var i = rawValueLength - 1; i >= 0; i--) {
        var char = rawValueArr[i].char;
        if (char !== exports.placeholderChar) {
            var shouldOffset = i >= indexOfFirstChange && previousConformedValueLength === maskLength;
            if (char === placeholder[(shouldOffset) ? i - editDistance : i]) {
                rawValueArr.splice(i, 1);
            }
        }
    }
    // This is the variable that we will be filling with characters as we figure them out
    // in the algorithm below
    var conformedValue = emptyString;
    var someCharsRejected = false;
    // Ok, so first we loop through the placeholder looking for placeholder characters to fill up.
    placeholderLoop: for (var i = 0; i < placeholderLength; i++) {
        var charInPlaceholder = placeholder[i];
        // We see one. Let's find out what we can put in it.
        if (charInPlaceholder === exports.placeholderChar) {
            // But before that, do we actually have any user characters that need a place?
            if (rawValueArr.length > 0) {
                // We will keep chipping away at user input until either we run out of characters
                // or we find at least one character that we can map.
                while (rawValueArr.length > 0) {
                    // Let's retrieve the first user character in the queue of characters we have left
                    var shift = rawValueArr.shift();
                    var rawValueChar = '', isNew = false;
                    if (shift) {
                        rawValueChar = shift.char;
                        isNew = shift.isNew;
                    }
                    // If the character we got from the user input is a placeholder character (which happens
                    // regularly because user input could be something like (540) 90_-____, which includes
                    // a bunch of `_` which are placeholder characters) and we are not in *no guide* mode,
                    // then we map this placeholder character to the current spot in the placeholder
                    if (rawValueChar === exports.placeholderChar && suppressGuide !== true) {
                        conformedValue += exports.placeholderChar;
                        // And we go to find the next placeholder character that needs filling
                        continue placeholderLoop;
                        // Else if, the character we got from the user input is not a placeholder, let's see
                        // if the current position in the mask can accept it.
                    }
                    else if (mask[i].test(rawValueChar)) {
                        // we map the character differently based on whether we are keeping character positions or not.
                        // If any of the conditions below are met, we simply map the raw value character to the
                        // placeholder position.
                        if (keepCharPositions !== true ||
                            isNew === false ||
                            previousConformedValue === emptyString ||
                            guide === false ||
                            !isAddition) {
                            conformedValue += rawValueChar;
                        }
                        else {
                            // We enter this block of code if we are trying to keep character positions and none of the conditions
                            // above is met. In this case, we need to see if there's an available spot for the raw value character
                            // to be mapped to. If we couldn't find a spot, we will discard the character.
                            //
                            // For example, for mask `1111`, previous conformed value `_2__`, raw value `942_2__`. We can map the
                            // `9`, to the first available placeholder position, but then, there are no more spots available for the
                            // `4` and `2`. So, we discard them and end up with a conformed value of `92__`.
                            var rawValueArrLength = rawValueArr.length;
                            var indexOfNextAvailablePlaceholderChar = null;
                            // Let's loop through the remaining raw value characters. We are looking for either a suitable spot, ie,
                            // a placeholder character or a non-suitable spot, ie, a non-placeholder character that is not new.
                            // If we see a suitable spot first, we store its position and exit the loop. If we see a non-suitable
                            // spot first, we exit the loop and our `indexOfNextAvailablePlaceholderChar` will stay as `null`.
                            for (var i_1 = 0; i_1 < rawValueArrLength; i_1++) {
                                var charData = rawValueArr[i_1];
                                if (charData.char !== exports.placeholderChar && charData.isNew === false) {
                                    break;
                                }
                                if (charData.char === exports.placeholderChar) {
                                    indexOfNextAvailablePlaceholderChar = i_1;
                                    break;
                                }
                            }
                            // If `indexOfNextAvailablePlaceholderChar` is not `null`, that means the character is not blocked.
                            // We can map it. And to keep the character positions, we remove the placeholder character
                            // from the remaining characters
                            if (indexOfNextAvailablePlaceholderChar !== null) {
                                conformedValue += rawValueChar;
                                rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1);
                                // If `indexOfNextAvailablePlaceholderChar` is `null`, that means the character is blocked. We have to
                                // discard it.
                            }
                            else {
                                i--;
                            }
                        }
                        // Since we've mapped this placeholder position. We move on to the next one.
                        continue placeholderLoop;
                    }
                    else {
                        someCharsRejected = true;
                    }
                }
            }
            // We reach this point when we've mapped all the user input characters to placeholder
            // positions in the mask. In *guide* mode, we append the left over characters in the
            // placeholder to the `conformedString`, but in *no guide* mode, we don't wanna do that.
            //
            // That is, for mask `(111)` and user input `2`, we want to return `(2`, not `(2__)`.
            if (suppressGuide === false) {
                conformedValue += placeholder.substr(i, placeholderLength);
            }
            // And we break
            break;
            // Else, the charInPlaceholder is not a placeholderChar. That is, we cannot fill it
            // with user input. So we just map it to the final output
        }
        else {
            conformedValue += charInPlaceholder;
        }
    }
    // The following logic is needed to deal with the case of deletion in *no guide* mode.
    //
    // Consider the silly mask `(111) /// 1`. What if user tries to delete the last placeholder
    // position? Something like `(589) /// `. We want to conform that to `(589`. Not `(589) /// `.
    // That's why the logic below finds the last filled placeholder character, and removes everything
    // from that point on.
    if (suppressGuide && isAddition === false) {
        var indexOfLastFilledPlaceholderChar = null;
        // Find the last filled placeholder position and substring from there
        for (var i = 0; i < conformedValue.length; i++) {
            if (placeholder[i] === exports.placeholderChar) {
                indexOfLastFilledPlaceholderChar = i;
            }
        }
        if (indexOfLastFilledPlaceholderChar !== null) {
            // We substring from the beginning until the position after the last filled placeholder char.
            conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1);
        }
        else {
            // If we couldn't find `indexOfLastFilledPlaceholderChar` that means the user deleted
            // the first character in the mask. So we return an empty string.
            conformedValue = emptyString;
        }
    }
    return { conformedValue: conformedValue, meta: { someCharsRejected: someCharsRejected } };
}
exports.conformToMask = conformToMask;
function convertMaskToPlaceholder(mask, placeholderChar) {
    if (mask === void 0) { mask = emptyArray; }
    if (placeholderChar === void 0) { placeholderChar = defaultPlaceholderChar; }
    if (!utils_1.isArray(mask)) {
        throw new Error('Text-mask:convertMaskToPlaceholder; The mask property must be an array.');
    }
    if (mask.indexOf(placeholderChar) !== -1) {
        throw new Error('Placeholder character must not be used as part of the mask. Please specify a character ' +
            'that is not present in your mask as your placeholder character.\n\n' +
            ("The placeholder character that was received is: " + JSON.stringify(placeholderChar) + "\n\n") +
            ("The mask that was received is: " + JSON.stringify(mask)));
    }
    return mask.map(function (char) {
        return (char instanceof RegExp) ? placeholderChar : char;
    }).join('');
}
exports.convertMaskToPlaceholder = convertMaskToPlaceholder;
/**
 * Due to a bug on textmask, the requireDecimal its not working, so this function solves this problem
 * @param maskType
 * @param numberValue
 * @param decimalsFormat
 * @returns
 */
function formatNumber(maskType, numberValue, decimalsFormat) {
    if (decimalsFormat === void 0) { decimalsFormat = 2; }
    if (!numberValue && numberValue !== 0) {
        return '';
    }
    if (!numberValue.split) {
        numberValue += '';
        numberValue = numberValue.replace('.', ',');
    }
    var vals = numberValue.split(',');
    if (!maskType.textMask || typeof maskType.textMask !== 'function') {
        return '';
    }
    var mask = maskType.textMask(vals[0]);
    var decimals = '';
    if (decimalsFormat == undefined) {
        decimals = vals.length > 1 ? ',' + vals[1] : '';
    }
    else {
        decimals = vals.length > 1 ? (vals[1] < 10 ? vals[1].toString() + '0' : vals[1].toString()) : '00';
        if (decimals.length > decimalsFormat) {
            decimals = decimals.substring(0, decimalsFormat);
        }
    }
    var conformedValue = conformToMask(numberValue, mask, { guide: false }).conformedValue;
    var suffix = '';
    if (conformedValue.indexOf('%') >= 0) {
        conformedValue = conformedValue.replace('%', '');
        suffix = '%';
    }
    return conformedValue + (decimalsFormat > 0 ? ',' + decimals : '') + suffix;
}

},{"./inscricaoestadual":6,"./iptu/iptu":8,"./utils":15,"text-mask-addons/dist/createNumberMask":25}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCALIZACAO_CIDADES = exports.LOCALIZACAO_ESTADOS = exports.LOCALIZACAO_BAIRROS = exports.LOCALIZACAO_COMPLEMENTOS = exports.LOCALIZACAO_LOGRADOUROS = exports.LOCALIZACAO_RUAS = void 0;
exports.LOCALIZACAO_RUAS = ['Dois', 'Um', 'Principal', 'São José', 'Onze', 'São Paulo', 'Doze', 'Treze',
    'Santo Antônio', 'Brasil', 'A', 'São Pedro', 'Quinze', 'São João',
    'Quatorze', 'São Francisco', 'Sete de Setembro', 'Dezesseis', 'Quinze de Novembro',
    'Tiradentes', 'Dezessete', 'Vinte', 'Bahia', 'Amazonas', 'Dezoito', 'São Sebastião', 'Paraná', 'Bela Vista', 'Santa Luzia', 'São Jorge',
    'Castro Alves', 'Duque de Caxias', 'Projetada', 'Rui Barbosa', 'Santa Catarina', 'Minas Gerais', 'Santos Dumont',
    'Espírito Santo', 'Vinte e Um', 'Vinte e Dois', 'da Paz', 'Treze de Maio', 'Rio de Janeiro',
    'Goiás', 'Ceará', 'Belo Horizonte', 'das Flores', 'Sergipe', 'Vitória', 'José Bonifácio',
    'Pernambuco', 'Piauí', 'Vinte e Três', 'Mato Grosso', 'Santa Maria', 'Dom Pedro II',
    'Primeiro de Maio', 'Pará', 'Maranhão', 'Alagoas', 'Boa Vista', 'São Luiz', 'Vinte e Quatro', 'Paraíba', 'Santa Rita'];
exports.LOCALIZACAO_LOGRADOUROS = ['Avenida', 'Rua', 'Marginal'];
exports.LOCALIZACAO_COMPLEMENTOS = ["Apartamento", 'Aeroporto', 'Anexo', "Andar", "Bloco", "Conjunto", 'Cobertura', "Casa", 'Fazenda', 'Fundos', 'Galeria', "Galp\u00E3o", "Lote", "Loja", "Port\u00E3o", "Quadra", "Sala", "Sobreloja", 'Subsolo', 'Terreo'];
exports.LOCALIZACAO_BAIRROS = ['Centro', 'Bela Vista', 'São José', 'Santo Antônio', 'São Francisco', 'Vila Nova',
    'Boa Vista', 'Industrial', 'São Cristóvão', 'Planalto'];
exports.LOCALIZACAO_ESTADOS = [
    { "nome": "Acre", "uf": "AC" },
    { "nome": "Alagoas", "uf": "AL" },
    { "nome": "Amapá", "uf": "AP" },
    { "nome": "Amazonas", "uf": "AM" },
    { "nome": "Bahia", "uf": "BA" },
    { "nome": "Ceará", "uf": "CE" },
    { "nome": "Distrito Federal", "uf": "DF" },
    { "nome": "Espírito Santo", "uf": "ES" },
    { "nome": "Goiás", "uf": "GO" },
    { "nome": "Maranhão", "uf": "MA" },
    { "nome": "Mato Grosso", "uf": "MT" },
    { "nome": "Mato Grosso do Sul", "uf": "MS" },
    { "nome": "Minas Gerais", "uf": "MG" },
    { "nome": "Pará", "uf": "PA" },
    { "nome": "Paraíba", "uf": "PB" },
    { "nome": "Paraná", "uf": "PR" },
    { "nome": "Pernambuco", "uf": "PE" },
    { "nome": "Piauí", "uf": "PI" },
    { "nome": "Rio de Janeiro", "uf": "RJ" },
    { "nome": "Rio Grande do Norte", "uf": "RN" },
    { "nome": "Rio Grande do Sul", "uf": "RS" },
    { "nome": "Rondônia", "uf": "RO" },
    { "nome": "Roraima", "uf": "RR" },
    { "nome": "Santa Catarina", "uf": "SC" },
    { "nome": "São Paulo", "uf": "SP" },
    { "nome": "Sergipe", "uf": "SE" },
    { "nome": "Tocantins", "uf": "TO" }
];
exports.LOCALIZACAO_CIDADES = [
    ['São Paulo', 'São Paulo'],
    ['Rio de Janeiro', 'Rio de Janeiro'],
    ['Brasília', 'Distrito Federal'],
    ['Salvador', 'Bahia'],
    ['Fortaleza', 'Ceará'],
    ['Belo Horizonte', 'Minas Gerais'],
    ['Manaus', 'Amazonas'],
    ['Curitiba', 'Paraná'],
    ['Recife', 'Pernambuco'],
    ['Goiânia', 'Goiás'],
    ['Belém', 'Pará'],
    ['Porto Alegre', 'Rio Grande do Sul'],
    ['Guarulhos', 'São Paulo'],
    ['Campinas', 'São Paulo'],
    ['São Luís', 'Maranhão'],
    ['São Gonçalo', 'Rio de Janeiro'],
    ['Maceió', 'Alagoas'],
    ['Duque de Caxias', 'Rio de Janeiro'],
    ['Cuiabá', 'Mato Grosso'],
    ['Campo Grande', 'Mato Grosso do Sul'],
    ['Natal', 'Rio Grande do Norte'],
    ['Teresina', 'Piauí'],
    ['São Bernardo do Campo', 'São Paulo'],
    ['Nova Iguaçu', 'Rio de Janeiro'],
    ['João Pessoa', 'Paraíba'],
    ['São José dos Campos', 'São Paulo'],
    ['Santo André', 'São Paulo'],
    ['Ribeirão Preto', 'São Paulo'],
    ['Jaboatão dos Guararapes', 'Pernambuco'],
    ['Osasco', 'São Paulo'],
    ['Uberlândia', 'Minas Gerais'],
    ['Sorocaba', 'São Paulo'],
    ['Contagem', 'Minas Gerais'],
    ['Aracaju', 'Sergipe'],
    ['Feira de Santana', 'Bahia'],
    ['Cuiabá', 'Mato Grosso'],
    ['Joinville', 'Santa Catarina'],
    ['Aparecida de Goiânia', 'Goiás'],
    ['Londrina', 'Paraná'],
    ['Juiz de Fora', 'Minas Gerais'],
    ['Ananindeua', 'Pará'],
    ['Porto Velho', 'Rondônia'],
    ['Serra', 'Espírito Santo'],
    ['Niterói', 'Rio de Janeiro'],
    ['Belford Roxo', 'Rio de Janeiro'],
    ['Caxias do Sul', 'Rio Grande do Sul'],
    ['Campos dos Goytacazes Campos dos Goytacazes', 'Rio de Janeiro'],
    ['Macapá', 'Amapá'],
    ['Florianópolis', 'Santa Catarina'],
    ['Vila Velha', 'Espírito Santo'],
    ['Mauá', 'São Paulo'],
    ['São João de Meriti', 'Rio de Janeiro'],
    ['São José do Rio Preto', 'São Paulo'],
    ['Mogi das Cruzes', 'São Paulo'],
    ['Betim', 'Minas Gerais'],
    ['Santos', 'São Paulo'],
    ['Diadema', 'São Paulo'],
    ['Maringá', 'Paraná'],
    ['Jundiaí', 'São Paulo'],
    ['Campina Grande', 'Paraíba'],
    ['Montes Claros', 'Minas Gerais'],
    ['Rio Branco', 'Acre'],
    ['Piracicaba', 'São Paulo'],
    ['Carapicuíba', 'São Paulo'],
    ['Boa Vista', 'Roraima'],
    ['Olinda', 'Pernambuco'],
    ['Anápolis', 'Goiás'],
    ['Cariacica', 'Espírito Santo'],
    ['Bauru', 'São Paulo'],
    ['Itaquaquecetuba', 'São Paulo'],
    ['São Vicente', 'São Paulo'],
    ['Vitória', 'Espírito Santo'],
    ['Caucaia', 'Ceará'],
    ['Caruaru', 'Pernambuco'],
    ['Blumenau', 'Santa Catarina'],
    ['Franca', 'São Paulo'],
    ['Ponta Grossa', 'Paraná'],
    ['Petrolina', 'Pernambuco'],
    ['Canoas', 'Rio Grande do Sul'],
    ['Pelotas', 'Rio Grande do Sul'],
    ['Vitória da Conquista', 'Bahia'],
    ['Ribeirão das Neves', 'Minas Gerais'],
    ['Uberaba', 'Minas Gerais'],
    ['Paulista', 'Pernambuco'],
    ['Cascavel', 'Paraná'],
    ['Praia Grande', 'São Paulo'],
    ['São José dos Pinhais', 'Paraná'],
    ['Guarujá', 'São Paulo'],
    ['Taubaté', 'São Paulo'],
    ['Petrópolis', 'Rio de Janeiro'],
    ['Limeira', 'São Paulo'],
    ['Santarém', 'Pará'],
    ['Camaçari', 'Bahia'],
    ['Palmas', 'Tocantins'],
    ['Suzano', 'São Paulo'],
    ['Mossoró', 'Rio Grande do Norte'],
    ['Taboão da Serra', 'São Paulo'],
    ['Várzea Grande', 'Mato Grosso'],
    ['Sumaré', 'São Paulo'],
    ['Santa Maria', 'Rio Grande do Sul'],
    ['Gravataí', 'Rio Grande do Sul'],
    ['Governador Valadares', 'Minas Gerais'],
    ['Marabá', 'Pará'],
    ['Juazeiro do Norte', 'Ceará'],
    ['Barueri', 'São Paulo'],
    ['Embu das Artes', 'São Paulo'],
    ['Volta Redonda', 'Rio de Janeiro'],
    ['Ipatinga', 'Minas Gerais'],
    ['Parnamirim', 'Rio Grande do Norte'],
    ['Imperatriz', 'Maranhão'],
    ['Foz do Iguaçu', 'Paraná'],
    ['Macaé', 'Rio de Janeiro'],
    ['Viamão', 'Rio Grande do Sul'],
    ['São Carlos', 'São Paulo'],
    ['Indaiatuba', 'São Paulo'],
    ['Cotia', 'São Paulo'],
    ['Novo Hamburgo', 'Rio Grande do Sul'],
    ['São José', 'Santa Catarina'],
    ['Magé', 'Rio de Janeiro'],
    ['Colombo', 'Paraná'],
    ['Itaboraí', 'Rio de Janeiro'],
    ['Sete Lagoas', 'Minas Gerais'],
    ['Americana', 'São Paulo'],
    ['Marília', 'São Paulo'],
    ['Divinópolis', 'Minas Gerais'],
    ['Itapevi', 'São Paulo'],
    ['São Leopoldo', 'Rio Grande do Sul'],
    ['Araraquara', 'São Paulo'],
    ['Rio Verde', 'Goiás'],
    ['Jacareí', 'São Paulo'],
    ['Rondonópolis', 'Mato Grosso'],
    ['Arapiraca', 'Alagoas'],
    ['Hortolândia', 'São Paulo'],
    ['Presidente Prudente', 'São Paulo'],
    ['Maracanaú', 'Ceará'],
    ['Dourados', 'Mato Grosso do Sul'],
    ['Chapecó Chapecó', 'Santa Catarina'],
    ['Cabo Frio', 'Rio de Janeiro'],
    ['Itajaí', 'Santa Catarina'],
    ['Santa Luzia', 'Minas Gerais'],
    ['Juazeiro', 'Bahia'],
    ['Criciúma', 'Santa Catarina'],
    ['Itabuna', 'Bahia'],
    ['Águas Lindas de Goiás', 'Goiás'],
    ['Rio Grande', 'Rio Grande do Sul'],
    ['Alvorada', 'Rio Grande do Sul'],
    ['Cachoeiro de Itapemirim', 'Espírito Santo'],
    ['Sobral', 'Ceará'],
    ['Luziânia', 'Goiás'],
    ['Parauapebas', 'Pará'],
    ['Cabo de Santo Agostinho', 'Pernambuco'],
    ['Rio Claro', 'São Paulo'],
    ['Angra dos Reis', 'Rio de Janeiro'],
    ['Passo Fundo', 'Rio Grande do Sul'],
    ['Castanhal', 'Pará'],
    ['Lauro de Freitas', 'Bahia'],
    ['Araçatuba', 'São Paulo'],
    ['Ferraz de Vasconcelos', 'São Paulo'],
    ['Santa Bárbara do Oeste', 'São Paulo'],
    ['Nova Friburgo', 'Rio de Janeiro'],
    ['Barra Mansa', 'Rio de Janeiro'],
    ['Nossa Senhora do Socorro', 'Sergipe'],
    ['Teresópolis', 'Rio de Janeiro'],
    ['Guarapuava', 'Paraná'],
    ['Araguaína', 'Tocantins'],
    ['Ibirité', 'Minas Gerais'],
    ['Jaraguá do Sul', 'Santa Catarina'],
    ['São José de Ribamar', 'Maranhão'],
    ['Mesquita', 'Rio de Janeiro'],
    ['Francisco Morato', 'São Paulo'],
    ['Itapecerica da Serra', 'São Paulo'],
    ['Itu', 'São Paulo'],
    ['Linhares', 'Espírito Santo'],
    ['Palhoça', 'Santa Catarina'],
    ['Timon', 'Maranhão'],
    ['Bragança Paulista', 'São Paulo'],
    ['Valparaíso de Goiás', 'Goiás'],
    ['Pindamonhangaba', 'São Paulo'],
    ['Poços de Caldas', 'Minas Gerais'],
    ['Caxias', 'Maranhão'],
    ['Itapetininga', 'São Paulo'],
    ['Nilópolis', 'Rio de Janeiro'],
    ['Ilhéus', 'Bahia'],
    ['Maricá', 'Rio de Janeiro'],
    ['São Caetano do Sul', 'São Paulo'],
    ['Teixeira de Freitas', 'Bahia'],
    ['Camaragibe', 'Pernambuco'],
    ['Abaetetuba', 'Pará'],
    ['Lages', 'Santa Catarina'],
    ['Jequié', 'Bahia'],
    ['Barreiras', 'Bahia'],
    ['Paranaguá', 'Paraná'],
    ['Franco da Rocha', 'São Paulo'],
    ['Parnaíba', 'Piauí'],
    ['Patos de Minas', 'Minas Gerais'],
    ['Mogi Guaçu', 'São Paulo'],
    ['Alagoinhas', 'Bahia'],
    ['Pouso Alegre', 'Minas Gerais'],
    ['Rio das Ostras', 'Rio de Janeiro'],
    ['Queimados', 'Rio de Janeiro'],
    ['Jaú', 'São Paulo'],
    ['Porto Seguro', 'Bahia'],
    ['Botucatu', 'São Paulo'],
    ['Araucária', 'Paraná'],
    ['Sinop', 'Mato Grosso'],
    ['Atibaia', 'São Paulo'],
    ['Balneário Camboriú', 'Santa Catarina'],
    ['Sapucaia do Sul', 'Rio Grande do Sul'],
    ['Toledo', 'Paraná'],
    ['Teófilo Otoni', 'Minas Gerais'],
    ['Garanhuns', 'Pernambuco'],
    ['Santana de Parnaíba', 'São Paulo'],
    ['Vitória de Santo Antão', 'Pernambuco'],
    ['Cametá', 'Pará'],
    ['Barbacena', 'Minas Gerais'],
    ['Santa Rita', 'Paraíba'],
    ['Sabará', 'Minas Gerais'],
    ['Varginha', 'Minas Gerais'],
    ['Apucarana', 'Paraná'],
    ['Brusque', 'Santa Catarina'],
    ['Simões Filho', 'Bahia'],
    ['Araras', 'São Paulo'],
    ['Itaguaí', 'Rio de Janeiro'],
    ['Araruama', 'Rio de Janeiro'],
    ['Pinhais', 'Paraná'],
    ['Crato', 'Ceará'],
    ['Campo Largo', 'Paraná'],
    ['Marituba', 'Pará'],
    ['Resende', 'Rio de Janeiro'],
    ['Cubatão', 'São Paulo'],
    ['São Mateus', 'Espírito Santo'],
    ['Santa Cruz do Sul', 'Rio Grande do Sul'],
    ['Cachoeirinha', 'Rio Grande do Sul'],
    ['Itapipoca', 'Ceará'],
    ['Valinhos', 'São Paulo'],
    ['Maranguape', 'Ceará'],
    ['Ji-Paraná', 'Rondônia'],
    ['Conselheiro Lafaiete', 'Minas Gerais'],
    ['São Félix do Xingu', 'Pará'],
    ['Bragança', 'Pará'],
    ['Vespasiano', 'Minas Gerais'],
    ['Trindade', 'Goiás'],
    ['Uruguaiana', 'Rio Grande do Sul'],
    ['Sertãozinho', 'São Paulo'],
    ['Jandira', 'São Paulo'],
    ['Guarapari', 'Espírito Santo'],
    ['Barcarena', 'Pará'],
    ['Birigui', 'São Paulo'],
    ['Ribeirão Pires', 'São Paulo'],
    ['Arapongas', 'Paraná'],
    ['Codó', 'Maranhão'],
    ['Colatina', 'Espírito Santo'],
    ['Votorantim', 'São Paulo'],
    ['Paço do Lumiar', 'Maranhão'],
    ['Barretos', 'São Paulo'],
    ['Catanduva', 'São Paulo'],
    ['Várzea Paulista', 'São Paulo'],
    ['Guaratinguetá', 'São Paulo'],
    ['Tatuí', 'São Paulo'],
    ['Formosa', 'Goiás'],
    ['Caraguatatuba', 'São Paulo'],
    ['Três Lagoas', 'Mato Grosso do Sul'],
    ['Santana', 'Amapá'],
    ['Bagé', 'Rio Grande do Sul'],
    ['Itatiba', 'São Paulo'],
    ['Bento Gonçalves', 'Rio Grande do Sul'],
    ['Itabira', 'Minas Gerais'],
    ['Salto', 'São Paulo'],
    ['Almirante Tamandaré', 'Paraná'],
    ['Paulo Afonso', 'Bahia'],
    ['Poá', 'São Paulo'],
    ['Araguari', 'Minas Gerais'],
    ['Igarassu', 'Pernambuco'],
    ['Novo Gama', 'Goiás'],
    ['Ubá', 'Minas Gerais'],
    ['Senador Canedo', 'Goiás'],
    ['Passos', 'Minas Gerais'],
    ['Altamira', 'Pará'],
    ['Parintins', 'Amazonas'],
    ['Tucuruí', 'Pará'],
    ['Ourinhos', 'São Paulo'],
    ['Eunápolis', 'Bahia'],
    ['São Lourenço da Mata', 'Pernambuco'],
    ['Paragominas', 'Pará'],
    ['Piraquara', 'Paraná'],
    ['Açailândia', 'Maranhão'],
    ['Umuarama', 'Paraná'],
    ['Corumbá', 'Mato Grosso do Sul'],
    ['Coronel Fabriciano', 'Minas Gerais'],
    ['Paulínia', 'São Paulo'],
    ['Catalão', 'Goiás'],
    ['Muriaé', 'Minas Gerais'],
    ['Santa Cruz do Capibaribe', 'Pernambuco'],
    ['Ariquemes', 'Rondônia'],
    ['Patos', 'Paraíba'],
    ['Cambé', 'Paraná'],
    ['Tailândia', 'Pará'],
    ['Araxá', 'Minas Gerais'],
    ['Erechim', 'Rio Grande do Sul'],
    ['Tubarão', 'Santa Catarina'],
    ['Bacabal', 'Maranhão'],
    ['Japeri', 'Rio de Janeiro'],
    ['Itumbiara', 'Goiás'],
    ['Ituiutaba', 'Minas Gerais'],
    ['São Pedro da Aldeia', 'Rio de Janeiro'],
    ['Lagarto', 'Sergipe'],
    ['Assis', 'São Paulo'],
    ['Lavras', 'Minas Gerais'],
    ['Tangará da Serra', 'Mato Grosso'],
    ['Leme', 'São Paulo'],
    ['Itaperuna', 'Rio de Janeiro'],
    ['Breves', 'Pará'],
    ['Nova Serrana', 'Minas Gerais'],
    ['Iguatu', 'Ceará'],
    ['São Gonçalo do Amarante', 'Rio Grande do Norte'],
    ['Itanhaém', 'São Paulo'],
    ['Santo Antônio de Jesus', 'Bahia'],
    ['Caieiras', 'São Paulo'],
    ['Itacoatiara', 'Amazonas'],
    ['Itaituba', 'Pará'],
    ['Aracruz', 'Espírito Santo'],
    ['Jataí', 'Goiás'],
    ['Barra do Piraí', 'Rio de Janeiro'],
    ['Fazenda Rio Grande', 'Paraná'],
    ['Mairiporã', 'São Paulo']
];

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_placa = exports.PLACAS_INVALID = exports.PLACAS_RANGE = void 0;
exports.PLACAS_RANGE = [
    { start: 'AAA0001', end: 'BEZ9999', state: '', desc: 'Paraná]] (PR)', since: '02/1990' },
    { start: 'BFA0001', end: 'GKI9999', state: '', desc: 'São Paulo (estado)|São Paulo]] (SP)', since: '10/1991' },
    { start: 'GKJ0001', end: 'HOK9999', state: '', desc: 'Minas Gerais]] (MG)', since: '09/1991' },
    { start: 'HOL0001', end: 'HQE9999', state: '', desc: 'Maranhão]] (MA)', since: '01/1992' },
    { start: 'HQF0001', end: 'HTW9999', state: '', desc: 'Mato Grosso do Sul]] (MS)', since: '03/1992' },
    { start: 'HTX0001', end: 'HZA9999', state: '', desc: 'Ceará]] (CE)', since: '10/1992' },
    { start: 'HZB0001', end: 'IAP9999', state: '', desc: 'Sergipe]] (SE)', since: '09/1993' },
    { start: 'IAQ0001', end: 'JDO9999', state: '', desc: 'Rio Grande do Sul]] (RS)', since: '03/1992' },
    { start: 'JDP0001', end: 'JKR9999', state: '', desc: 'Distrito Federal (Brasil)|Distrito Federal]] (DF)', since: '04/1994' },
    { start: 'JKS0001', end: 'JSZ9999', state: '', desc: 'Bahia]] (BA)', since: '08/1993' },
    { start: 'JTA0001', end: 'JWE9999', state: '', desc: 'Pará]] (PA)', since: '07/1993' },
    { start: 'JWF0001', end: 'JXY9999', state: '', desc: 'Amazonas]] (AM)', since: '09/1993' },
    { start: 'JXZ0001', end: 'KAU9999', state: '', desc: 'Mato Grosso]] (MT)', since: '09/1993' },
    { start: 'KAV0001', end: 'KFC9999', state: '', desc: 'Goiás]] (GO)', since: '05/1994' },
    { start: 'KFD0001', end: 'KME9999', state: '', desc: 'Pernambuco]] (PE) ', since: '08/1994' },
    { start: 'KMF0001', end: 'LVE9999', state: '', desc: 'Rio de Janeiro (estado)|Rio de Janeiro]] (RJ)', since: '05/1994' },
    { start: 'LVF0001', end: 'LWQ9999', state: '', desc: 'Piauí]] (PI)', since: '04/1996' },
    { start: 'LWR0001', end: 'MMM9999', state: '', desc: 'Santa Catarina]] (SC)', since: '06/1996' },
    { start: 'MMN0001', end: 'MOW9999', state: '', desc: 'Paraíba]] (PB)', since: '07/1996' },
    { start: 'MOX0001', end: 'MTZ9999', state: '', desc: 'Espírito Santo (estado)|Espírito Santo]] (ES)', since: '12/1995' },
    { start: 'MUA0001', end: 'MVK9999', state: '', desc: 'Alagoas]] (AL)', since: '08/1996' },
    { start: 'MVL0001', end: 'MXG9999', state: '', desc: 'Tocantins]] (TO)', since: '11/1996' },
    { start: 'MXH0001', end: 'MZM9999', state: '', desc: 'Rio Grande do Norte]] (RN)', since: '06/1998' },
    { start: 'MZN0001', end: 'NAG9999', state: '', desc: 'Acre]] (AC)', since: '06/1998' },
    { start: 'NAH0001', end: 'NBA9999', state: '', desc: 'Roraima]] (RR)', since: '07/1998' },
    { start: 'NBB0001', end: 'NEH9999', state: '', desc: 'Rondônia]] (RO)', since: '07/1998' },
    { start: 'NEI0001', end: 'NFB9999', state: '', desc: 'Amapá]] (AP)', since: '09/1998' },
    { start: 'NFC0001', end: 'NGZ9999', state: '', desc: 'Goiás]] (GO) 2ª sequência', since: '08/2003' },
    { start: 'NHA0001', end: 'NHT9999', state: '', desc: 'Maranhão]] (MA) 2ª sequência', since: '12/2006' },
    { start: 'NHU0001', end: 'NIX9999', state: '', desc: 'Piauí]] (PI) 2ª sequência', since: '05/2007' },
    { start: 'NIY0001', end: 'NJW9999', state: '', desc: 'Mato Grosso]] (MT) 2ª sequência', since: '10/2007' },
    { start: 'NJX0001', end: 'NLU9999', state: '', desc: 'Goiás]] (GO) 3ª sequência', since: '11/2007' },
    { start: 'NLV0001', end: 'NMO9999', state: '', desc: 'Alagoas]] (AL) 2ª sequência', since: '01/2008' },
    { start: 'NMP0001', end: 'NNI9999', state: '', desc: 'Maranhão]] (MA) 3ª sequência', since: '05/2008' },
    { start: 'NNJ0001', end: 'NOH9999', state: '', desc: 'Rio Grande do Norte]] (RN) 2ª sequência', since: '07/2008' },
    { start: 'NOI0001', end: 'NPB9999', state: '', desc: 'Amazonas]] (AM) 2ª sequência', since: '07/2008' },
    { start: 'NPC0001', end: 'NPQ9999', state: '', desc: 'Mato Grosso]] (MT) 3ª sequência', since: '09/2008' },
    { start: 'NPR0001', end: 'NQK9999', state: '', desc: 'Paraíba]] (PB) 2ª sequência', since: '11/2008' },
    { start: 'NQL0001', end: 'NRE9999', state: '', desc: 'Ceará]] (CE) 2ª sequência', since: '12/2008' },
    { start: 'NRF0001', end: 'NSD9999', state: '', desc: 'Mato Grosso do Sul]] (MS) 2ª sequência', since: '11/2009' },
    { start: 'NSE0001', end: 'NTC9999', state: '', desc: 'Pará]] (PA) 2ª sequência', since: '11/2009' },
    { start: 'NTD0001', end: 'NTW9999', state: '', desc: 'Bahia]] (BA) 2ª sequência', since: '02/2010' },
    { start: 'NTX0001', end: 'NUG9999', state: '', desc: 'Mato Grosso]] (MT) 4ª sequência', since: '03/2010' },
    { start: 'NUH0001', end: 'NUL9999', state: '', desc: 'Roraima]] (RR) 2ª sequência', since: '06/2010' },
    { start: 'NUM0001', end: 'NVF9999', state: '', desc: 'Ceará]] (CE) 3ª sequência', since: '06/2010' },
    { start: 'NVG0001', end: 'NVN9999', state: '', desc: 'Sergipe]] (SE) 2ª sequência', since: '03/2010' },
    { start: 'NVO0001', end: 'NWR9999', state: '', desc: 'Goiás]] (GO) 4ª sequência', since: '03/2010' },
    { start: 'NWS0001', end: 'NXQ9999', state: '', desc: 'Maranhão]] (MA) 4ª sequência', since: '07/2010' },
    { start: 'NXR0001', end: 'NXT9999', state: '', desc: 'Acre]] (AC) 2ª sequência', since: '05/2011' },
    { start: 'NXU0001', end: 'NXW9999', state: '', desc: 'Pernambuco]] (PE) 2ª sequência', since: '07/2010' },
    { start: 'NXX0001', end: 'NYG9999', state: '', desc: 'Minas Gerais]] (MG) 2ª sequência', since: '10/2011' },
    { start: 'NYH0001', end: 'NZZ9999', state: '', desc: 'Bahia]] (BA) 3ª sequência', since: '10/2010' },
    { start: 'OAA0001', end: 'OAO9999', state: '', desc: 'Amazonas]] (AM) 3ª sequência', since: '12/2010' },
    { start: 'OAP0001', end: 'OBS9999', state: '', desc: 'Mato Grosso]] (MT) 5ª sequência', since: '05/2011' },
    { start: 'OBT0001', end: 'OCA9999', state: '', desc: 'Pará]] (PA) 3ª sequência', since: '07/2011' },
    { start: 'OCB0001', end: 'OCU9999', state: '', desc: 'Ceará]] (CE) 4ª sequência', since: '02/2011' },
    { start: 'OCV0001', end: 'ODT9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 2ª sequênci', since: '05/2011' },
    { start: 'ODU0001', end: 'OEI9999', state: '', desc: 'Piauí]] (PI) 3ª sequência', since: '09/2011' },
    { start: 'OEJ0001', end: 'OES9999', state: '', desc: 'Sergipe]] (SE) 3ª sequência', since: '08/2011' },
    { start: 'OET0001', end: 'OFH9999', state: '', desc: 'Paraíba]] (PB) 3ª sequência', since: '04/2011' },
    { start: 'OFI0001', end: 'OFW9999', state: '', desc: 'Pará]] (PA) 4ª sequência', since: '03/2011' },
    { start: 'OFX0001', end: 'OGG9999', state: '', desc: 'Paraíba]] (PB) 4ª sequência', since: '06/2011' },
    { start: 'OGH0001', end: 'OHA9999', state: '', desc: 'Goiás]] (GO) 5ª sequência', since: '04/2011' },
    { start: 'OHB0001', end: 'OHK9999', state: '', desc: 'Alagoas]] (AL) 3ª sequência', since: '09/2011' },
    { start: 'OHL0001', end: 'OHW9999', state: '', desc: 'Rondônia]] (RO) 2ª sequência', since: '11/2011' },
    { start: 'OHX0001', end: 'OIQ9999', state: '', desc: 'Ceará]] (CE) 5ª sequência', since: '12/2011' },
    { start: 'OIR0001', end: 'OJQ9999', state: '', desc: 'Maranhão]] (MA) 5ª sequência', since: '01/2012' },
    { start: 'OJR0001', end: 'OKC9999', state: '', desc: 'Rio Grande do Norte]] (RN) 3ª sequência', since: '04/2012' },
    { start: 'OKD0001', end: 'OKH9999', state: '', desc: 'Santa Catarina]] (SC) 2ª sequência', since: '02/2014' },
    { start: 'OKI0001', end: 'OLG9999', state: '', desc: 'Bahia]] (BA) 4ª sequência', since: '10/2011' },
    { start: 'OLH0001', end: 'OLN9999', state: '', desc: 'Tocantins]] (TO) 2ª sequência', since: '02/2012' },
    { start: 'OLO0001', end: 'OMH9999', state: '', desc: 'Minas Gerais]] (MG) 3ª sequência', since: '03/2012' },
    { start: 'OMI0001', end: 'OOF9999', state: '', desc: 'Goiás]] (GO) 6ª sequência', since: '04/2012' },
    { start: 'OOG0001', end: 'OOU9999', state: '', desc: 'Mato Grosso do Sul]] (MS) 3ª sequência', since: '02/2012' },
    { start: 'OOV0001', end: 'ORC9999', state: '', desc: 'Minas Gerais]] (MG) 4ª sequência', since: '06/2012' },
    { start: 'ORD0001', end: 'ORM9999', state: '', desc: 'Alagoas]] (AL) 4ªsequência', since: '01/2012' },
    { start: 'ORN0001', end: 'OSV9999', state: '', desc: 'Ceará]] (CE) 6ª sequência', since: '07/2012' },
    { start: 'OSW0001', end: 'OTZ9999', state: '', desc: 'Pará]] (PA) 5ª sequência', since: '08/2012' },
    { start: 'OUA0001', end: 'OUE9999', state: '', desc: 'Piauí]] (PI) 4ª sequência', since: '11/2012' },
    { start: 'OUF0001', end: 'OVD9999', state: '', desc: 'Bahia]] (BA) 5ª sequência', since: '12/2012' },
    { start: 'OVE0001', end: 'OVF9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 3ª sequênci', since: '12/2012' },
    { start: 'OVG0001', end: 'OVG9999', state: '', desc: 'Acre]] (AC) 3ª sequência', since: '05/2013' },
    { start: 'OVH0001', end: 'OVL9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 4ª sequênci', since: '07/2013' },
    { start: 'OVM0001', end: 'OVV9999', state: '', desc: 'Distrito Federal]] (DF) 2ª sequência', since: '11/2013' },
    { start: 'OVW0001', end: 'OVY9999', state: '', desc: 'Piauí]] (PI) 5ª sequência', since: '10/2013' },
    { start: 'OVZ0001', end: 'OWG9999', state: '', desc: 'Rio Grande do Norte]] (RN) 4ª sequência', since: '06/2013' },
    { start: 'OWH0001', end: 'OXK9999', state: '', desc: 'Minas Gerais]] (MG) 5ª sequência', since: '10/2013' },
    { start: 'OXL0001', end: 'OXL9999', state: '', desc: 'Rondônia]] (RO) 3ª sequência', since: '11/2013' },
    { start: 'OXM0001', end: 'OXM9999', state: '', desc: 'Amazonas]] (AM) 4ª sequência', since: '11/2013' },
    { start: 'OXN0001', end: 'OXN9999', state: '', desc: 'Alagoas]] (AL) 5ª sequência', since: '11/2013' },
    { start: 'OXO0001', end: 'OXO9999', state: '', desc: 'Paraíba]] (PB) 5ª sequência', since: '11/2013' },
    { start: 'OXP0001', end: 'OXP9999', state: '', desc: 'Acre]] (AC) 4ª sequência', since: '12/2013' },
    { start: 'OXQ0001', end: 'OXZ9999', state: '', desc: 'Maranhão]] (MA) 6ª sequência', since: '04/2014' },
    { start: 'OYA0001', end: 'OYC9999', state: '', desc: 'Tocantins]] (TO) 3ª sequência', since: '11/2013' },
    { start: 'OYD0001', end: 'OYK9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 5ª sequênci', since: '12/2013' },
    { start: 'OYL0001', end: 'OYZ9999', state: '', desc: 'Pernambuco]] (PE) 6ª sequência', since: '02/2014' },
    { start: 'OZA0001', end: 'OZA9999', state: '', desc: 'Ceará]] (CE) 7ª sequência', since: '01/2014' },
    { start: 'OZB0001', end: 'OZB9999', state: '', desc: 'Sergipe]] (SE) 4ª sequência', since: '01/2014' },
    { start: 'OZC0001', end: 'OZV9999', state: '', desc: 'Bahia]] (BA) 6ª sequência', since: '03/2014' },
    { start: 'OZW0001', end: 'PBZ9999', state: '', desc: 'Distrito Federal]] (DF) 3ª sequência', since: '05/2014' },
    { start: 'PCA0001', end: 'PED9999', state: '', desc: 'Pernambuco]] (PE) 7ª sequência', since: '12/2014' },
    { start: 'PEE0001', end: 'PFQ9999', state: '', desc: 'Pernambuco]] (PE) 3ª sequência', since: '09/2010' },
    { start: 'PFR0001', end: 'PGK9999', state: '', desc: 'Pernambuco]] (PE) 4ª sequência', since: '07/2012' },
    { start: 'PGL0001', end: 'PGU9999', state: '', desc: 'Pernambuco]] (PE) 5ª sequência', since: '10/2013' },
    { start: 'PGV0001', end: 'PGZ9999', state: '', desc: 'Pernambuco]] (PE) 8ª sequência', since: '12/2014' },
    { start: 'PHA0001', end: 'PHZ9999', state: '', desc: 'Amazonas]] (AM) 5ª sequência', since: '06/2014' },
    { start: 'PIA0001', end: 'PIZ9999', state: '', desc: 'Piauí]] (PI) 6ª sequência', since: '06/2014' },
    { start: 'PJA0001', end: 'PLZ9999', state: '', desc: 'Bahia]] (BA) 7ª sequência', since: '10/2014' },
    { start: 'PMA0001', end: 'POZ9999', state: '', desc: 'Ceará]] (CE) 8ª sequência', since: '06/2014' },
    { start: 'PPA0001', end: 'PPZ9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 6ª sequênci', since: '08/2014' },
    { start: 'PQA0001', end: 'PRZ9999', state: '', desc: 'Goiás]] (GO) 7ª sequência', since: '03/2015' },
    { start: 'PSA0001', end: 'PTZ9999', state: '', desc: 'Maranhão]] (MA) 7ª sequência', since: '12/2014' },
    { start: 'PUA0001', end: 'PZZ9999', state: '', desc: 'Minas Gerais]] (MG) 6ª sequência', since: '05/2014' },
    { start: 'QAA0001', end: 'QAZ9999', state: '', desc: 'Mato Grosso do Sul]] (MS) 4ª sequência', since: '12/2014' },
    { start: 'QBA0001', end: 'QCZ9999', state: '', desc: 'Mato Grosso]] (MT) 6ª sequência', since: '05/2014' },
    { start: 'QDA0001', end: 'QEZ9999', state: '', desc: 'Pará]] (PA) 6ª sequência', since: '10/2014' },
    { start: 'QFA0001', end: 'QFZ9999', state: '', desc: 'Paraíba]] (PB) 6ª sequência', since: '05/2014' },
    { start: 'QGA0001', end: 'QGZ9999', state: '', desc: 'Rio Grande do Norte]] (RN) 5ª sequência', since: '09/2014' },
    { start: 'QHA0001', end: 'QJZ9999', state: '', desc: 'Santa Catarina]] (SC) 3ª sequência', since: '05/2014' },
    { start: 'QKA0001', end: 'QKM9999', state: '', desc: 'Tocantins]] (TO) 4ª sequência', since: '11/2014' },
    { start: 'QKN0001', end: 'QKZ9999', state: '', desc: 'Sergipe]] (SE) 5ª sequência', since: '06/2014' },
    { start: 'QLA0001', end: 'QLM9999', state: '', desc: 'Alagoas]] (AL) 6ª sequência', since: '09/2015' },
    { start: 'QLN0001', end: 'QLT9999', state: '', desc: 'Amapá]] (AP) 2ª sequência', since: '01/2015' },
    { start: 'QLU0001', end: 'QLZ9999', state: '', desc: 'Acre]] (AC) 5ª sequência', since: '08/2014' },
    { start: 'QMA0001', end: 'QMP9999', state: '', desc: 'Sergipe]] (SE) 6ª sequência', since: '03/2017' },
    { start: 'QMQ0001', end: 'QQZ9999', state: '', desc: 'Minas Gerais]] (MG) 7ª sequência ', since: '07/2017' },
    { start: 'QRA0001', end: 'QRA9999', state: '', desc: 'Rondônia]] (RO) 4ª sequência', since: '11/2017' },
    { start: 'QRB0001', end: 'QRZ9999', state: '', desc: 'Espírito Santo (estado)|Espírito Santo]] (ES) 7ª sequência', since: '05/2018' },
    { start: 'QSA0001', end: 'QSZ9999', state: '', desc: 'Paraíba]] (PB) 7ª sequência', since: '04/2018' },
    { start: 'QTA0001', end: 'QTB9999', state: '', desc: 'Rondônia]] (RO) 5ª sequência', since: '08/2018' },
    { start: 'QTC0001', end: 'RIN9999', state: '', desc: 'quên', since: 'inidas ' },
    { start: 'RIO0001', end: 'RIO9999', state: '', desc: 'Rio de Janeiro (estado)|Rio de Janeiro]] (RJ) 2ª sequência ', since: '9/2018}' },
    { start: 'RLA0001', end: 'SAU9999', state: '', desc: 'equên', since: 'inidas ' },
    { start: 'SAV0001', end: 'SAV9999', state: '', desc: 'ão Paulo (estado)|São Paulo]] (SP) 2º sequência', since: '09/2009' },
];
exports.PLACAS_INVALID = { start: 'SAW0001', end: 'ZZZ9999' }; // || Sequências ainda não definidas
function validate_placa(placa, incluiMercosul) {
    var placaClean = placa.toString()
        .replace(/-/g, '')
        .replace(/ /g, '')
        .toUpperCase();
    var regex = {
        legadoBR: /^[A-Z]{3}[0-9]{4}$/,
        mercosulBR: /^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/,
        mercosulAR: /^[A-Z]{2}[0-9]{3}[A-Z]{2}$|^[A-Z]{1}[0-9]{3}[A-Z]{3}$/,
        mercosulBO: /^[A-Z]{2}[0-9]{5}$/,
        mercosulPY: /^[A-Z]{4}[0-9]{3}$|^[0-9]{3}[A-Z]{4}$/,
        mercosulUY: /^[A-Z]{3}[0-9]{4}$/,
    };
    var isLegadoBRInvalid = placaClean >= exports.PLACAS_INVALID.start && placaClean <= exports.PLACAS_INVALID.end;
    if ((regex.legadoBR.test(placaClean) && !isLegadoBRInvalid)
        || (regex.mercosulBR.test(placaClean))
        || (incluiMercosul && ((regex.mercosulAR.test(placaClean))
            || (regex.mercosulBO.test(placaClean))
            || (regex.mercosulPY.test(placaClean))
            || (regex.mercosulUY.test(placaClean))))) {
        return true;
    }
    return false;
}
exports.validate_placa = validate_placa;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rg_rj = exports.rg_sp = void 0;
function rg_sp(number) {
    // if(number.length>8){alert("Erro. Não existe RG SP\ncom mais de 8 dígitos.");}
    number = "0000000" + number;
    number = number.slice(number.length - 8);
    var b1 = parseInt(number.slice(7));
    var b2 = parseInt(number.slice(6, 7));
    var b3 = parseInt(number.slice(5, 6));
    var b4 = parseInt(number.slice(4, 5));
    var b5 = parseInt(number.slice(3, 4));
    var b6 = parseInt(number.slice(2, 3));
    var b7 = parseInt(number.slice(1, 2));
    var b8 = parseInt(number.slice(0, 1));
    var cispDig = (b1 * 2 + b2 * 3 + b3 * 4 + b4 * 5 + b5 * 6 + b6 * 7 + b7 * 8 + b8 * 9) % 11;
    if (cispDig == 10) {
        cispDig = "X";
    }
    return cispDig;
}
exports.rg_sp = rg_sp;
function rg_rj(number) {
    // if(number.length>8){alert("Erro. Não existe RG-RJ/MaSP-MG\ncom mais de 8 dígitos.");}
    number = "0000000" + number;
    number = number.slice(number.length - 8);
    var b1 = parseInt(number.slice(7));
    var b2 = parseInt(number.slice(6, 7));
    var b3 = parseInt(number.slice(5, 6));
    var b4 = parseInt(number.slice(4, 5));
    var b5 = parseInt(number.slice(3, 4));
    var b6 = parseInt(number.slice(2, 3));
    var b7 = parseInt(number.slice(1, 2));
    var b8 = parseInt(number.slice(0, 1));
    var ci7 = b1 * 2;
    if (ci7 > 9) {
        ci7 = ci7 - 9;
    }
    var ci56 = b3 * 2;
    if (ci56 > 9) {
        ci56 = ci56 - 9;
    }
    var ci34 = b5 * 2;
    if (ci34 > 9) {
        ci34 = ci34 - 9;
    }
    var ci12 = b7 * 2;
    if (ci12 > 9) {
        ci12 = ci12 - 9;
    }
    var ci67 = b2;
    var ci45 = b4;
    var ci23 = b6;
    var ci01 = b8;
    var cirjDig = (ci7 + ci56 + ci34 + ci12 + ci67 + ci45 + ci23 + ci01) % 10;
    cirjDig = 10 - cirjDig;
    if (cirjDig == 10) {
        cirjDig = 0;
    }
    return cirjDig;
}
exports.rg_rj = rg_rj;
var RG = {
    sp: rg_sp,
    rj: rg_rj
};
exports.default = RG;

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGenericFaker = exports.getSpecialProperty = exports.CORES = exports.randomEstadoSigla = exports.randomLetterOrNumber = exports.randomLetter = exports.randomNumber = exports.rand = exports.randArray = exports.fillString = exports.slugify = exports.numberToCurrency = exports.currencyToNumber = exports.getAllWords = exports.getAllDigits = exports.allNumbersAreSame = exports.modulo11 = exports.processCaretTraps = exports.isNil = exports.isNumber = exports.isString = exports.isArray = exports.isPresent = void 0;
var estados_1 = require("./estados");
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function isArray(value) {
    return (Array.isArray && Array.isArray(value)) || value instanceof Array;
}
exports.isArray = isArray;
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
exports.isString = isString;
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value); // && value.length === undefined
}
exports.isNumber = isNumber;
function isNil(value) {
    return typeof value === 'undefined' || value === null;
}
exports.isNil = isNil;
var strCaretTrap = '[]';
function processCaretTraps(mask) {
    var indexes = [];
    var indexOfCaretTrap;
    while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) { // eslint-disable-line
        indexes.push(indexOfCaretTrap);
        mask.splice(indexOfCaretTrap, 1);
    }
    return { maskWithoutCaretTraps: mask, indexes: indexes };
}
exports.processCaretTraps = processCaretTraps;
exports.modulo11 = function (string, size, mod) {
    var soma = 0;
    for (var i = 1; i <= size; i++) {
        // tslint:disable-next-line:radix
        soma = soma + parseInt(string.substring(i - 1, i)) * (mod - i);
    }
    var resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    return resto;
};
/**
 *
 * @param input
 * ^ - Match line start
  (\d) - match first digit and capture it in back reference #1 i.e. \1
  (?!..) is a negative lookahead
  (?!\1+$) means disallow the match if first digit is followed by same digit (captured group) till end.
  \d{11}$ match next 11 digit followed by line end
 */
function allNumbersAreSame(inputValue) {
    var input = getAllDigits(inputValue);
    if (typeof input === 'string') {
        var reg = new RegExp('^(\\d)(?!\\1+$)\\d{' + (input.length - 1) + '}$');
        return reg.test(input);
    }
    return false;
}
exports.allNumbersAreSame = allNumbersAreSame;
function getAllDigits(input) {
    if (!input.match) {
        input = input.toString();
    }
    var match = input.match(/\d/g);
    if (match) {
        return match.join("");
    }
    return '';
}
exports.getAllDigits = getAllDigits;
function getAllWords(input) {
    var match = input.match(/\w/g);
    if (match) {
        return match.join("");
    }
    return '';
}
exports.getAllWords = getAllWords;
function currencyToNumber(input) {
    if (typeof input === 'number') {
        return input;
    }
    input = input.replace(/ /g, '');
    if (input.indexOf('$') !== -1) {
        var vals = input.split('$');
        input = vals[1];
    }
    input = input.replace('%', '');
    input = input.replace(/\./g, '').replace(',', '.');
    return parseFloat(input);
}
exports.currencyToNumber = currencyToNumber;
function numberToCurrency(value) {
    return ' R$ ' + value.toFixed(2).replace('.', ',') + ' ';
}
exports.numberToCurrency = numberToCurrency;
;
function slugify(value) {
    return value.toString().toLowerCase()
        .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a') // Special Characters #1
        .replace(/[èÈéÉêÊëË]+/g, 'e') // Special Characters #2
        .replace(/[ìÌíÍîÎïÏ]+/g, 'i') // Special Characters #3
        .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o') // Special Characters #4
        .replace(/[ùÙúÚûÛüÜ]+/g, 'u') // Special Characters #5
        .replace(/[ýÝÿŸ]+/g, 'y') // Special Characters #6
        .replace(/[ñÑ]+/g, 'n') // Special Characters #7
        .replace(/[çÇ]+/g, 'c') // Special Characters #8
        .replace(/[ß]+/g, 'ss') // Special Characters #9
        .replace(/[Ææ]+/g, 'ae') // Special Characters #10
        .replace(/[Øøœ]+/g, 'oe') // Special Characters #11
        .replace(/[%]+/g, 'pct') // Special Characters #12
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}
exports.slugify = slugify;
;
/**
 *
 * @param string  ex. 12345
 * @param size   11
 * @param fill   0
 *
 * Returns: 00000012345
 */
function fillString(string, size, fill) {
    if (string.length < size) {
        var dif = size - string.length;
        for (var i = 0; i < dif; i++) {
            string = fill + string;
        }
    }
    return string;
}
exports.fillString = fillString;
function randArray(array) {
    var index = randomNumber(0, array.length);
    return array[index];
}
exports.randArray = randArray;
function rand(length) {
    var ranges = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ranges[_i - 1] = arguments[_i];
    }
    var str = ""; // the string (initialized to "")
    while (length--) { // repeat this length of times
        var ind = Math.floor(Math.random() * ranges.length); // get a random range from the ranges object
        var min = ranges[ind][0].charCodeAt(0), // get the minimum char code allowed for this range
        max = ranges[ind][1].charCodeAt(0); // get the maximum char code allowed for this range
        var c = Math.floor(Math.random() * (max - min + 1)) + min; // get a random char code between min and max
        str += String.fromCharCode(c); // convert it back into a character and append it to the string str
    }
    return str; // return str
}
exports.rand = rand;
function randomNumber(begin, end) {
    var dif = end - begin;
    var number = Math.floor(Math.random() * dif) + begin;
    return number;
}
exports.randomNumber = randomNumber;
function randomLetter(size, onlyCapitals) {
    if (size === void 0) { size = 1; }
    if (onlyCapitals === void 0) { onlyCapitals = false; }
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (onlyCapitals == false) {
        possible += "abcdefghijklmnopqrstuvwxyz";
    }
    possible = possible.split('');
    for (var i = 0; i < size; i++) {
        var pos = Math.floor(Math.random() * possible.length);
        text += possible[pos];
    }
    return text;
}
exports.randomLetter = randomLetter;
function randomLetterOrNumber(size, onlyCapitals) {
    if (size === void 0) { size = 1; }
    if (onlyCapitals === void 0) { onlyCapitals = false; }
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (onlyCapitals == false) {
        possible += "abcdefghijklmnopqrstuvwxyz0123456789";
    }
    possible = possible.split('');
    for (var i = 0; i < size; i++) {
        var pos = Math.floor(Math.random() * possible.length);
        text += possible[pos];
    }
    return text;
}
exports.randomLetterOrNumber = randomLetterOrNumber;
exports.randomEstadoSigla = function () {
    var total = estados_1.ESTADOS_SIGLA.length;
    return estados_1.ESTADOS_SIGLA[Math.floor(Math.random() * total)];
};
exports.CORES = ["AMARELO", "AZUL", "BEGE", "BRANCA", "CINZA", "DOURADA", "GRENA", "LARANJA", "MARROM", "PRATA",
    "PRETA", "ROSA", "ROXA", "VERDE", "VERMELHA", "FANTASIA"];
function getSpecialProperty(model, key) {
    return model[key];
}
exports.getSpecialProperty = getSpecialProperty;
/**
 *
 */
exports.makeGenericFaker = function (val, options) {
    if (options === void 0) { options = null; }
    return function () {
        if (!val.textMask || !val.textMask.map) {
            return '';
        }
        var newData = val.textMask.map(function (c, index) {
            if (options && options[index]) {
                return options[index]();
            }
            c = c.toString();
            if (c === /\d/.toString()) {
                return Math.floor(Math.random() * 10).toString();
            }
            else if (c === /[A-Za-z]/.toString()) {
                return randomLetter(1).toString();
            }
            else if (c === /\w/.toString()) {
                return randomLetterOrNumber(1).toString();
            }
            else if (c.indexOf('/[') === 0) { // /[1-9]/ ou /[5-9]/
                c = c.replace('/[', '').replace(']/', '');
                if (c.indexOf('-') > 0) {
                    c = c.split('-');
                    if (parseInt(c[1])) {
                        var mult = c[1] - c[0];
                        var plus = parseInt(c[0]);
                        return (Math.floor(Math.random() * mult) + plus).toString();
                    }
                    else {
                        return rand(1, [c[0], c[1]]);
                    }
                }
                else if (c.indexOf('|') > 0) {
                    c = c.split('|');
                    var index_1 = Math.floor(Math.random() * c.length);
                    return c[index_1];
                }
            }
            else {
                return c;
            }
        });
        return newData.join('');
    };
};

},{"./estados":4}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBr = exports.validate_titulo = exports.validate_time = exports.validate_telefone = exports.validate_sped = exports.validate_rg = exports.validate_renavam = exports.validate_pispasep = exports.validate_processo = exports.validate_porcentagem = exports.validate_number = exports.validate_ect = exports.validate_currency = exports.creditCardValidator = exports.validate_cartaocredito = exports.validate_cns = exports.validate_cpf = exports.validate_cnpj = exports.validate_cnh = exports.validate_chassi = exports.validate_certidao = exports.cep_ranges = exports.validate_cep = exports.CEPRange = exports.validate_celular = exports.validate_aih = void 0;
var utils_1 = require("./utils");
var inscricaoestadual_1 = require("./inscricaoestadual");
var placa_1 = require("./placa");
var create_1 = require("./create");
var rg_1 = require("./rg");
var iptu_1 = require("./iptu/iptu");
function validate_aih(aih) {
    var aihClean = aih.replace(/[^\d]+/g, '');
    var dvOriginal = aihClean.substr(-1);
    var dv = create_1.create_aih(aihClean);
    return dvOriginal === dv;
}
exports.validate_aih = validate_aih;
function validate_celular(cel) {
    var celClean = cel.replace(/[^\d]+/g, '');
    celClean = celClean.replace(/_/g, '');
    if (celClean.length !== 11) {
        return false;
    }
    if (celClean[0] == 0 || celClean[2] < 5) {
        return false;
    }
    return true;
}
exports.validate_celular = validate_celular;
exports.CEPRange = {
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
function validate_cep(cep) {
    var cepClean = cep.replace(/[^\d]+/g, '');
    var exp = /\d{2}\.\d{3}\-\d{3}/;
    if (!exp.test(cep) && cepClean.length !== 8) {
        return false;
    }
    return true;
}
exports.validate_cep = validate_cep;
function cep_ranges(cep) {
    cep = (cep.toString()).replace(/[^\d]+/g, '');
    cep = parseInt(cep, 10);
    var cepString = cep.toString();
    var found;
    for (var estado in exports.CEPRange) {
        var v = exports.CEPRange[estado];
        var r = new RegExp(v).test(cepString);
        if (r) {
            found = r;
            return true;
        }
    }
    if (!found) {
        return false;
    }
    return true;
}
exports.cep_ranges = cep_ranges;
function validate_certidao(value) {
    var certidao = utils_1.getAllDigits(value);
    var format = /[0-9]{32}/;
    if (!format.test(certidao)) {
        return false;
    }
    var dvOriginal = certidao.substr(-2);
    var dv = create_1.create_certidao(certidao);
    return dv === dvOriginal;
}
exports.validate_certidao = validate_certidao;
/**
 *
 * @param chassi
 */
function validate_chassi(chassi) {
    // 1 - Possuir o número "0" (ZERO) como 1º dígito.
    var zeroNoPrimeiroDigito = /^0/;
    if (zeroNoPrimeiroDigito.test(chassi)) {
        return false;
    }
    // 2 - Possuir espaço no chassi
    chassi = utils_1.getAllWords(chassi); // espacoNoChassi
    // 3 - Se, a partir do 4º dígito, houver uma repetição consecutiva, por mais de seis vezes, do mesmo dígito 
    // (alfabético ou numérico). Exemplos: 9BW11111119452687 e 9BWZZZ5268AAAAAAA.
    var repeticaoMaisDe6Vezes = /^.{4,}([0-9A-Z])\1{5,}/;
    if (repeticaoMaisDe6Vezes.test(chassi)) {
        return false;
    }
    // 4 - Apresente os caracteres "i", "I", "o", "O", "q", "Q".
    var caracteresiIoOqQ = /[iIoOqQ]/;
    if (caracteresiIoOqQ.test(chassi)) {
        return false;
    }
    // 5 - Os quatro últimos caracteres devem ser obrigatoriamente numéricos
    var ultimos4Numericos = /[0-9]{4}$/;
    if (!ultimos4Numericos.test(chassi)) {
        return false;
    }
    // 6 - Se possuir número de dígitos diferente de 17 (alfanuméricos). 
    if (chassi.length > 17) {
        return false;
    }
    return true;
}
exports.validate_chassi = validate_chassi;
function validate_cnae(number) {
    return true;
}
function validate_cnh(value) {
    value = value.replace(/[^\d]/g, '');
    var char1 = value.charAt(0);
    if (value.length !== 11) {
        return false;
    }
    var check = create_1.create_cnh(value);
    return value.substr(-2) == check;
}
exports.validate_cnh = validate_cnh;
function validate_cnpj(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    var tamanho = cnpj.length - 2;
    var digitos = cnpj.substring(tamanho);
    var resultados = create_1.create_cnpj(cnpj);
    if (!resultados ||
        resultados[0] !== parseInt(digitos.charAt(0), 10) ||
        resultados[1] !== parseInt(digitos.charAt(1), 10)) {
        return false;
    }
    return true;
}
exports.validate_cnpj = validate_cnpj;
function validate_contabanco(number) {
    return true;
}
// http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
function validate_cpf(strCPF) {
    strCPF = strCPF.replace(/[^\d]+/g, '');
    if (strCPF.length !== 11) {
        return false;
    }
    //verifica se todos os numeros sao iguais
    var expIguais = /^(?!.*(\d)\1{10}).*$/;
    if (!strCPF.match(expIguais)) {
        return false;
    }
    // valida digito verificados
    var restos = create_1.create_cpf(strCPF);
    if (!restos ||
        restos[0] !== parseInt(strCPF.substring(9, 10), 10) ||
        restos[1] !== parseInt(strCPF.substring(10, 11), 10)) {
        return false;
    }
    return true;
}
exports.validate_cpf = validate_cpf;
function validate_cpfcnpj(number) {
    return validate_cpf(number) || validate_cnpj(number);
}
function validate_cns(value) {
    var cns = utils_1.getAllDigits(value);
    var definitivo = /[1-2][0-9]{10}00[0-1][0-9]/; // começam com 1 ou 2
    var provisorio = /[7-9][0-9]{14}/; // começam com 7,8 ou 9
    if (!definitivo.test(cns) && !provisorio.test(cns)) {
        return false;
    }
    var soma = 0;
    for (var i = 0; i < cns.length; i++) {
        soma += parseInt(cns[i]) * (15 - i);
    }
    return soma % 11 == 0;
}
exports.validate_cns = validate_cns;
function validate_cartaocredito(input) {
    var value;
    if (typeof input == 'string') {
        value = utils_1.getAllDigits(input);
    }
    else {
        value = input.toString();
    }
    var number = value.slice(0, 16);
    var mes = parseInt(value.slice(16, 18));
    var ano = parseInt(value.slice(18, 20));
    var cvv = value.slice(20, 23);
    var d = new Date();
    var anoAtual = (d.getFullYear() - 2000);
    if (ano && ano < anoAtual) {
        return false;
    }
    if (mes && mes < d.getMonth() + 1 && ano === anoAtual) {
        return false;
    }
    if (cvv) {
        var validcvv = validate_cvv(cvv);
        if (validcvv.isValid === false) {
            return false;
        }
    }
    var found;
    Object.keys(exports.creditCardValidator).forEach(function (key) {
        if (exports.creditCardValidator[key].test(number)) {
            found = key;
        }
    });
    return !!found;
}
exports.validate_cartaocredito = validate_cartaocredito;
function validate_cvv(value, maxLength) {
    if (maxLength === void 0) { maxLength = 3; }
    maxLength = maxLength instanceof Array ? maxLength : [maxLength];
    if (typeof value !== 'string') {
        return { isValid: false, isPotentiallyValid: false };
    }
    if (!/^\d*$/.test(value)) {
        return { isValid: false, isPotentiallyValid: false };
    }
    var i = 0;
    var max = value.length;
    for (; i < maxLength.length; i++) {
        if (max === maxLength[i]) {
            return { isValid: true, isPotentiallyValid: true };
        }
    }
    if (value.length < Math.min.apply(null, maxLength)) {
        return { isValid: false, isPotentiallyValid: true };
    }
    var maximum = maxLength;
    var i = 0;
    for (; i < maxLength.length; i++) {
        maximum = maxLength[i] > maximum ? maxLength[i] : maximum;
    }
    if (value.length > maximum) {
        return { isValid: false, isPotentiallyValid: false };
    }
    return { isValid: true, isPotentiallyValid: true };
}
/**
 *     A hash of valid CC abbreviations and regular expressions
    mc: Mastercard
    ec: Eurocard
    vi: Visa
    ax: American Express
    dc: Diners Club
    bl: Carte Blanch
    di: Discover
    jcb: JCB
    er: Enroute
*/
exports.creditCardValidator = {
    'mc': /5[1-5][0-9]{14}/,
    'ec': /5[1-5][0-9]{14}/,
    'vi': /4(?:[0-9]{12}|[0-9]{15})/,
    'ax': /3[47][0-9]{13}/,
    'dc': /3(?:0[0-5][0-9]{11}|[68][0-9]{12})/,
    'bl': /3(?:0[0-5][0-9]{11}|[68][0-9]{12})/,
    'di': /6011[0-9]{12}/,
    'jcb': /(?:3[0-9]{15}|(2131|1800)[0-9]{11})/,
    'er': /2(?:014|149)[0-9]{11}/
};
function validate_currency(currency) {
    if (typeof currency === 'number') {
        return true;
    }
    var regex = /^(R\$|R\$ )?(-)?(?!0(\.)?00)\d{1,3}((\.)?\d{3})*(,\d\d)?$/g;
    return regex.test(currency);
}
exports.validate_currency = validate_currency;
function validate_data(value) {
    if (!value) {
        return false;
    }
    var values = value.split('/');
    if (values.length !== 3) {
        return false;
    }
    if (parseInt(values[0]) > 31 || parseInt(values[1]) > 12 || parseInt(values[2]) < 1000) {
        return false;
    }
    return true;
}
function validate_ect(number) {
    number = utils_1.getAllDigits(number);
    if (number.length > 9) {
        return false;
    }
    var nodigit = number.substr(0, number.length - 1);
    var dg = create_1.create_ect(nodigit);
    if (parseInt(number[number.length - 1]) === dg) {
        return true;
    }
    return false;
}
exports.validate_ect = validate_ect;
function validate_email(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validate_endereco(number) {
    return true;
}
function validate_number(number) {
    if (number.split(',').length > 2) {
        return false;
    }
    var regexDecimal = /^\d+(?:\.\d{0,2})$/;
    var regex = /^[0-9]{0,10}[,]{1,1}[0-9]{0,4}/;
    var regexNumero = /^[0-9]{0,10}/;
    return regexDecimal.test(number) || regex.test(number) || regexNumero.test(number);
}
exports.validate_number = validate_number;
function validate_porcentagem(porcentagem) {
    porcentagem = porcentagem.split('%')[0];
    return validate_number(porcentagem);
}
exports.validate_porcentagem = validate_porcentagem;
function validate_processo(processo) {
    var processoClean = processo.replace(/\./g, '');
    processoClean = processoClean.replace(/\-/g, '');
    // const exp = /\d{7}\-\d{2}\.\d{4}\.\w{3}\.\d{4}/;
    // const expClean = /\d{13}\w{3}\d{4}/;
    // if (!exp.test(processo) && !expClean.test(processoClean)) {
    //   return false;
    // }
    var processoValidado = create_1.create_processo(processo);
    if (parseInt(processoClean) !== parseInt(utils_1.getAllDigits(processoValidado))) {
        return false;
    }
    return true;
}
exports.validate_processo = validate_processo;
function validate_pispasep(number) {
    number = utils_1.getAllDigits(number);
    var nis = utils_1.fillString(number, 11, '0');
    var regex = /\d{11}/; // /^\d{3}\.\d{5}\.\d{2}\-\d{1}$/;
    if (!regex.test(nis)) {
        return false;
    }
    var digit = create_1.create_pispasep(number);
    return nis[10].toString() == digit.toString();
}
exports.validate_pispasep = validate_pispasep;
function validate_renavam(renavam) {
    var renavamClean = renavam.replace(/\./g, '');
    renavamClean = renavamClean.replace(/\-/g, '');
    var dv = create_1.create_renavam(renavam);
    var tam = renavam.length;
    var digitos = renavam.substr(tam - 1, 1);
    if (digitos.charCodeAt(0) - 48 === dv) {
        return true;
    }
    else {
        return false;
    }
}
exports.validate_renavam = validate_renavam;
function validate_rg(rg) {
    var rgClean = rg.replace(/\./g, '');
    rgClean = rgClean.replace(/-/g, '');
    var exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
    var expClean = /[a-z]{2}\d{8}/;
    var state = rg.substr(0, 2).toUpperCase();
    if (!exp.test(rg) && !expClean.test(rgClean) && !(state in exports.CEPRange)) {
        return false;
    }
    var validateState = rg_1.default[state];
    if (validateState) {
        return validateState(rg);
    }
    return true;
}
exports.validate_rg = validate_rg;
function validate_senha(value, options) {
    if (options === void 0) { options = {}; }
    var finalregex = '^';
    //   ^	The password string will start this way
    // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    if (options.lowercase !== false) {
        finalregex = finalregex + '(?=.*[a-z])';
    }
    // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    if (options.uppercase !== false) {
        finalregex = finalregex + '(?=.*[A-Z])';
    }
    // (?=.*[0-9])	The string must contain at least 1 numeric character
    if (options.numeric !== false) {
        finalregex = finalregex + '(?=.*[0-9])';
    }
    // (?=.*[!@#\$%\^&\*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    if (options.numeric !== false) {
        finalregex = finalregex + '(?=.*[!@#\\$%\\^&\\*])';
    }
    // (?=.{8,})	The string must be eight characters or longer
    if (!options.size) {
        options.size = 8;
    }
    finalregex = finalregex + ("(?=.{" + options.size + ",})");
    var regex = new RegExp(finalregex);
    return regex.test(value);
}
function validate_site(value) {
    var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/g;
    return re.test(String(value).toLowerCase());
}
function validate_sped(sped) {
}
exports.validate_sped = validate_sped;
function validate_telefone(tel) {
    var telClean = tel.replace(/[^\d]+/g, '');
    tel = tel.replace(/_/g, '');
    if (!(telClean.length === 10 || telClean.length === 11)) {
        return false;
    }
    if (telClean[0] == 0 || telClean[2] == 0) {
        return false;
    }
    return true;
}
exports.validate_telefone = validate_telefone;
function validate_time(time, options) {
    if (options === void 0) { options = {}; }
    var value = time.toString();
    if (options.diario) {
        var expression = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
        return expression.test(value);
    }
    else {
        var expression = /^([0-9]?[0-9]):([0-5][0-9])(:[0-5][0-9])?$/;
        return expression.test(value);
    }
}
exports.validate_time = validate_time;
function validate_titulo(titulo) {
    if (!titulo) {
        return false;
    }
    var tituloClean = titulo.replace(/\./g, '');
    var exp = /\d{4}\.\d{4}\.\d{4}/;
    var expClean = /\d{4}\d{4}\d{4}/;
    if (!exp.test(tituloClean) && !expClean.test(tituloClean)) {
        return false;
    }
    var tam = tituloClean.length;
    var dig;
    try {
        dig = create_1.create_titulo_atual(tituloClean);
        // const noDv = tituloClean.substr(0, tam - 2);
        // dig = create_titulo(noDv);
    }
    catch (e) {
        return false;
    }
    var digitos = tituloClean.substr(tam - 2, 2);
    if (digitos === dig) {
        return true;
    }
    else {
        return false;
    }
}
exports.validate_titulo = validate_titulo;
function validate_username(value) {
    var re = /^[a-z0-9_-]{3,16}$/igm;
    return re.test(String(value).toLowerCase());
}
exports.validateBr = {
    aih: validate_aih,
    cartaocredito: validate_cartaocredito,
    celular: validate_celular,
    cep: validate_cep,
    certidao: validate_certidao,
    chassi: validate_chassi,
    cnae: validate_cnae,
    cnh: validate_cnh,
    cnpj: validate_cnpj,
    cns: validate_cns,
    contabanco: validate_contabanco,
    cpf: validate_cpf,
    cpfcnpj: validate_cpfcnpj,
    currency: validate_currency,
    data: validate_data,
    ect: validate_ect,
    email: validate_email,
    endereco: validate_endereco,
    inscricaoestadual: inscricaoestadual_1.validate_inscricaoestadual,
    iptu: iptu_1.validate_iptu,
    number: validate_number,
    porcentagem: validate_porcentagem,
    pispasep: validate_pispasep,
    placa: placa_1.validate_placa,
    processo: validate_processo,
    renavam: validate_renavam,
    rg: validate_rg,
    senha: validate_senha,
    site: validate_site,
    sped: validate_sped,
    telefone: validate_telefone,
    time: validate_time,
    titulo: validate_titulo,
    username: validate_username
};

},{"./create":3,"./inscricaoestadual":6,"./iptu/iptu":8,"./placa":13,"./rg":14,"./utils":15}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VEICULOS = exports.VEICULOS_ESPECIES = exports.VEICULOS_RESTRICOES = exports.VEICULOS_COMBUSTIVEIS = exports.VEICULOS_TIPOS = exports.VEICULOS_CATEGORIAS = exports.VEICULOS_CARROCERIAS = exports.CNH_CATEGORIAS = void 0;
exports.CNH_CATEGORIAS = ["A", "AB", "B", "C", "D", "E", "ACC", "MOTOR-CASA"];
exports.VEICULOS_CARROCERIAS = ["AMBULÂNCIA", "BASCULANTE", "BLINDADA", "BUGGY", "C. FECHADA", "CAB. DUPLA", "CAB. ABERTA",
    "CONVERSÍVEL", "FURGÃO", "JIPE", "TRAILER"];
exports.VEICULOS_CATEGORIAS = ["ALUGUEL", "APRENDIZAGEM", "PARTICULAR"];
exports.VEICULOS_TIPOS = ["AUTOMÓVEL", "CAMINHÃO", "CAMINHONETA", "CARGA / CAM", "CICLOMOTO", "ESP / ÔNIBUS", "MICROÔNIBUS",
    "MISTO / CAM", "MOTOCICLO", "MOTONETA", "ÔNIBUS", "REBOQUE", "TRICICLO", "C. TRATOR"];
exports.VEICULOS_COMBUSTIVEIS = ["ÁLCOOL", "ÁLCOOL / GNC", "DIESEL", "DIESEL / GNC", "ELFONT EX", "ELFONT IN", "GÁS METANO",
    "GASOGÊNIO", "GASOL / GNC", "GASOLINA", "ÁLCOOL / GASOLINA", "ÁLCOOL / GASOL / GNV"];
exports.VEICULOS_RESTRICOES = ["ALIENAÇÃO FIDUCIÁRIA", "ARRENDAMENTO", "RESERVA DE DOMÍNIO", "RESTRIÇÃO JUDICIAL",
    "RESTRIÇÃO POR BENEF. TRIBUTÁRIO", "RESTRIÇÃO POR ROUBO OU FURTO"];
exports.VEICULOS_ESPECIES = ["CARGA", "CORRIDA", "ESPECIAL", "MISTO", "PASSAGEIRO", "TRAÇÃO"];
exports.VEICULOS = [
    { "modelo": "100 2.8 V6", "marca": "Audi" },
    { "modelo": "A3 Sportback 2.0 16V TFSI S-Tronic", "marca": "Audi" },
    { "modelo": "A4 1.8  Aut.", "marca": "Audi" },
    { "modelo": "320iA 2.0 TB M Sport ActiveFlex 16V 4p", "marca": "BMW" },
    { "modelo": "325i", "marca": "BMW" },
    { "modelo": "420i Cabriolet Sport 2.0 TB 184cv 2p", "marca": "BMW" },
    { "modelo": "550iA Limited Sport Edition 4.8 32V", "marca": "BMW" },
    { "modelo": "840Ci", "marca": "BMW" },
    { "modelo": "i3 Rex E Drive Full 170cv Aut.(Elétrico)", "marca": "BMW" },
    { "modelo": "M3 Sedan 4.0 32V", "marca": "BMW" },
    { "modelo": "M4 Cabriolet 3.0 Bi-Turbo 24V 431cv 2p", "marca": "BMW" },
    { "modelo": "M5 3.8/Touring 3.8 24V", "marca": "BMW" },
    { "modelo": "M6 5.0 V10 40V 507cv", "marca": "BMW" },
    { "modelo": "X4 XDRIVE 28i X-Line 2.0 Turbo 245cv Aut", "marca": "BMW" },
    { "modelo": "X4 XDRIVE 35i M-Sport 3.0 TB 306cv Aut.", "marca": "BMW" },
    { "modelo": "X5 3.0 4x4", "marca": "BMW" },
    { "modelo": "Z4 Roadster Sport 3.0 24V 231cv Aut.", "marca": "BMW" },
    { "modelo": "Z8 5.0 V8", "marca": "BMW" },
    { "modelo": "AIRCROSS Exc. ATACA. 1.6 Flex 16V 5p Aut", "marca": "Citroën" },
    { "modelo": "AX GTi", "marca": "Citroën" },
    { "modelo": "C3 XTR 1.6 Flex 16V 5p", "marca": "Citroën" },
    { "modelo": "C4 Tendance 2.0 Flex 16V 5p Aut.", "marca": "Citroën" },
    { "modelo": "DS3 1.6 Turbo 16V 3p Mec.", "marca": "Citroën" },
    { "modelo": "Evasion  GLX 2.0 16V", "marca": "Citroën" },
    { "modelo": "Grand C4 Picasso Intensive 1.6 TB Aut.", "marca": "Citroën" },
    { "modelo": "Jumper 2.3 15/16Lug. TB Diesel", "marca": "Citroën" },
    { "modelo": "Xantia 2.0  16V", "marca": "Citroën" },
    { "modelo": "Xsara Break Exclusive 1.6 16V 5p Aut.", "marca": "Citroën" },
    { "modelo": "ZX Cupê 16V", "marca": "Citroën" },
    { "modelo": "147 C/ CL", "marca": "Fiat" },
    { "modelo": "500 ABARTH MULTIAIR 1.4 TB 16V 3p", "marca": "Fiat" },
    { "modelo": "Bravo ABSOLUTE 1.8 Flex 16V 5p", "marca": "Fiat" },
    { "modelo": "Cinquecento 0.7", "marca": "Fiat" },
    { "modelo": "Coupe 16V", "marca": "Fiat" },
    { "modelo": "Doblo  1.4 mpi Fire Flex  8V 4p", "marca": "Fiat" },
    { "modelo": "Ducato Cargo 2.8 Curto/Longo TB Diesel", "marca": "Fiat" },
    { "modelo": "Duna 1.6ie", "marca": "Fiat" },
    { "modelo": "Elba 1.6i.e/Top/CSL/ 1.6i.e/1.5 2p e 4p", "marca": "Fiat" },
    { "modelo": "Fiorino Pick-Up Working 1.5 mpi / i.e.", "marca": "Fiat" },
    { "modelo": "FREEMONT 2.4 16V 5p Aut.", "marca": "Fiat" },
    { "modelo": "Grand Siena TETRAFUEL 1.4 Evo F. Flex 8V", "marca": "Fiat" },
    { "modelo": "Idea A.Ext./A..Ext.Loc.Dual. 1.8 Flex 5p", "marca": "Fiat" },
    { "modelo": "LINEA T-JET 1.4 16V Turbo 4p", "marca": "Fiat" },
    { "modelo": "Marea City", "marca": "Fiat" },
    { "modelo": "Marea Weekend Turbo 2.0 20V 4p", "marca": "Fiat" },
    { "modelo": "MOBI WAY on 1.0 Fire Flex 5p.", "marca": "Fiat" },
    { "modelo": "Oggi", "marca": "Fiat" },
    { "modelo": "Palio 1.0 Cel. ECON./ITALIA F.Flex 8V 4p", "marca": "Fiat" },
    { "modelo": "Palio 1.5 mpi 8V 2p", "marca": "Fiat" },
    { "modelo": "Palio 1.8R mpi Flex 8V 4p", "marca": "Fiat" },
    { "modelo": "Palio ELX 1.0 Fire/30 Anos F. Flex 8V 4p", "marca": "Fiat" },
    { "modelo": "Palio Week. Adv. Dualogic 1.8 Flex", "marca": "Fiat" },
    { "modelo": "Palio Weekend Trekking 1.8 mpi Flex 8V", "marca": "Fiat" },
    { "modelo": "Premio S 1.5 i.e./ 1.5 / 1.3", "marca": "Fiat" },
    { "modelo": "Punto  ELX 1.4 Fire Flex 8V 5p", "marca": "Fiat" },
    { "modelo": "Siena Stile/Sport MTV 1.6 mpi 16V", "marca": "Fiat" },
    { "modelo": "Siena TETRAFUEL 1.4 mpi Fire Flex 8v 4p", "marca": "Fiat" },
    { "modelo": "Stilo Duologic 1.8 ATTRACTIVE Flex 8V 5p", "marca": "Fiat" },
    { "modelo": "Strada LX 1.6 16V CE", "marca": "Fiat" },
    { "modelo": "Strada Trekking 1.8 mpi Flex 8V CS", "marca": "Fiat" },
    { "modelo": "Strada Working 1.4 mpi Fire Flex 8V CD", "marca": "Fiat" },
    { "modelo": "Tempra Turbo 2.0 i.e. 2p", "marca": "Fiat" },
    { "modelo": "Tipo 1.6 i.e. 2p e 4p", "marca": "Fiat" },
    { "modelo": "Toro Volcano 2.0 16V 4x4 TB Diesel Aut.", "marca": "Fiat" },
    { "modelo": "Uno 1.6 mpi 2p e 4p", "marca": "Fiat" },
    { "modelo": "UNO ECONOMY 1.4 EVO Fire Flex 8V 2p", "marca": "Fiat" },
    { "modelo": "Uno Furgão 1.5/ 1.3", "marca": "Fiat" },
    { "modelo": "Uno Mille/ Mille EX/ Smart 4p", "marca": "Fiat" },
    { "modelo": "UNO SPORTING Dualogic 1.4 EVO Flex 8V 4p", "marca": "Fiat" },
    { "modelo": "UNO WAY XINGU 1.4 EVO F.Flex 8V 5p", "marca": "Fiat" },
    { "modelo": "Del Rey GLX 1.6/1.8 / GL 1.6/1.8 2p e 4p", "marca": "Ford" },
    { "modelo": "EcoSport S 1.6 16V Flex 5p", "marca": "Ford" },
    { "modelo": "EDGE TITANIUM 3.5 V6 24V AWD Aut.", "marca": "Ford" },
    { "modelo": "Escort XR3 2.0i Conversível", "marca": "Ford" },
    { "modelo": "Expedition 5.4 V8", "marca": "Ford" },
    { "modelo": "Explorer XLT 4x4 4.0 V6", "marca": "Ford" },
    { "modelo": "F-1000 XLT/XL Lighting 4.9i", "marca": "Ford" },
    { "modelo": "F-250 XLT 4.2 V6", "marca": "Ford" },
    { "modelo": "Fiesta 1.0 8V Flex/Class 1.0 8V Flex 5p", "marca": "Ford" },
    { "modelo": "Fiesta Sedan TITANIUM 1.6 16V Flex Mec", "marca": "Ford" },
    { "modelo": "Focus TITANIUM 2.0 16V Flex 5p Mec.", "marca": "Ford" },
    { "modelo": "Fusion Titanium HYBRID 2.0 145cv Aut.", "marca": "Ford" },
    { "modelo": "Mondeo CLX 1.8 4p e 5p", "marca": "Ford" },
    { "modelo": "Mustang GT V8 Conversível", "marca": "Ford" },
    { "modelo": "Pampa 4x4 Jeep GL / L 1.6", "marca": "Ford" },
    { "modelo": "Ranger XLT 4.0 4x4 CS", "marca": "Ford" },
    { "modelo": "Ranger XLT Limit./L.Cent. 2.8 CD TB Dies", "marca": "Ford" },
    { "modelo": "Royale Ghia 2.0i 4p / 2.0i / 2.0", "marca": "Ford" },
    { "modelo": "Taurus GL 3.0 V6", "marca": "Ford" },
    { "modelo": "Thunderbird SC 3.8 V6", "marca": "Ford" },
    { "modelo": "TRANSIT Chassi 2.2 TDCI Diesel", "marca": "Ford" },
    { "modelo": "Verona S 2.0i 4p", "marca": "Ford" },
    { "modelo": "Versailles Ghia 2.0i / 2.0 2p e 4p", "marca": "Ford" },
    { "modelo": "AGILE LTZ WI-FI 1.4 8V FlexPower 5p", "marca": "GM - Chevrolet" },
    { "modelo": "Astra Sedan Comfort 1.8 MPFI 8V 4p", "marca": "GM - Chevrolet" },
    { "modelo": "Blazer Jimmy 4.3 V6", "marca": "GM - Chevrolet" },
    { "modelo": "Bonanza S / Luxe 4.0 Diesel Turbo", "marca": "GM - Chevrolet" },
    { "modelo": "Brasinca Blazer CD 4.1", "marca": "GM - Chevrolet" },
    { "modelo": "C-10 2.5/4.1", "marca": "GM - Chevrolet" },
    { "modelo": "Camaro Z-28 Targa/Conv. 5.7", "marca": "GM - Chevrolet" },
    { "modelo": "Caprice 4.3 V8", "marca": "GM - Chevrolet" },
    { "modelo": "CAPTIVA SPORT FWD 3.6 V6 24V 261cv 4x2", "marca": "GM - Chevrolet" },
    { "modelo": "Celta Super 1.0 MPFI 8V FlexPower 5p", "marca": "GM - Chevrolet" },
    { "modelo": "Chevette Junior 1.0", "marca": "GM - Chevrolet" },
    { "modelo": "Chevette L / SL / SL/e / DL / SE 1.6", "marca": "GM - Chevrolet" },
    { "modelo": "Chevy 500 DL / SL / SE/ Furgão 1.6", "marca": "GM - Chevrolet" },
    { "modelo": "Cheynne 4.3 V6", "marca": "GM - Chevrolet" },
    { "modelo": "Classic ADVANTAGE 1.0 VHC FlexPower 4p", "marca": "GM - Chevrolet" },
    { "modelo": "Classic/ Classic LS 1.0 VHC FlexPower 4p", "marca": "GM - Chevrolet" },
    { "modelo": "COBALT LTZ 1.8 8V Econo.Flex 4p Mec.", "marca": "GM - Chevrolet" },
    { "modelo": "Corsa Furgão 1.6 MPFi Powertech 92cv", "marca": "GM - Chevrolet" },
    { "modelo": "Corsa Wind Piquet/ Champ 1.0 MPFI 2p", "marca": "GM - Chevrolet" },
    { "modelo": "Corvette 5.7/ 6.0, 6.2 Conv./Stingray", "marca": "GM - Chevrolet" },
    { "modelo": "Corvette 5.7/ 6.0, 6.2 Targa/Stingray", "marca": "GM - Chevrolet" },
    { "modelo": "CRUZE LTZ 1.8 16V FlexPower 4p Aut.", "marca": "GM - Chevrolet" },
    { "modelo": "D-10 CD Diesel", "marca": "GM - Chevrolet" },
    { "modelo": "Kadett Sport 2.0 MPFI / EFI", "marca": "GM - Chevrolet" },
    { "modelo": "Lumina", "marca": "GM - Chevrolet" },
    { "modelo": "Meriva SS EASYTRONIC 1.8 FlexPower 5p", "marca": "GM - Chevrolet" },
    { "modelo": "MONTANA  Sport 1.8 MPFI FlexPower 8V", "marca": "GM - Chevrolet" },
    { "modelo": "Monza 1.6i/ 1.8i  (restante)", "marca": "GM - Chevrolet" },
    { "modelo": "Monza Class 1.8/ 2.0", "marca": "GM - Chevrolet" },
    { "modelo": "Omega CD 3.8 V6", "marca": "GM - Chevrolet" },
    { "modelo": "ONIX  Lollapalooza 1.0 F.Power 5p Mec.", "marca": "GM - Chevrolet" },
    { "modelo": "Opala Comodoro/ Comod. SLE  4.1 / 2.5", "marca": "GM - Chevrolet" },
    { "modelo": "PRISMA  Sed. Maxx/ LT 1.4 8V ECONOF. 4p", "marca": "GM - Chevrolet" },
    { "modelo": "S10 Blazer  DTi 2.8 4x2 Turbo Diesel", "marca": "GM - Chevrolet" },
    { "modelo": "SONIC HB LT 1.6 16V FlexPower 5p Aut.", "marca": "GM - Chevrolet" },
    { "modelo": "SpaceVan Furgão 2.1 Diesel", "marca": "GM - Chevrolet" },
    { "modelo": "SPIN ACTIV 1.8 8V Econo. Flex 5p Aut.", "marca": "GM - Chevrolet" },
    { "modelo": "Vectra CD 2.0 (modelo antigo)", "marca": "GM - Chevrolet" },
    { "modelo": "Zafira 2.0/ CD 2.0  8V  MPFI 5p Mec.", "marca": "GM - Chevrolet" },
    { "modelo": "Accord Coupe EX", "marca": "Honda" },
    { "modelo": "Civic Hatch DX", "marca": "Honda" },
    { "modelo": "Civic Sed LX 1.8 Aut 4p(s/Acess.Esp.D.F)", "marca": "Honda" },
    { "modelo": "CR-V 2.0 16V Aut.", "marca": "Honda" },
    { "modelo": "HR-V EX 1.8 Flexone 16V 5p Aut.", "marca": "Honda" },
    { "modelo": "Accent GLS 1.5 12/16V Aut.", "marca": "Hyundai" },
    { "modelo": "Coupê FX 2.0 Aut.", "marca": "Hyundai" },
    { "modelo": "Elantra GLS 2.0 16V Aut", "marca": "Hyundai" },
    { "modelo": "HB20 C./C.Plus/C.Style 1.6 Flex 16V Mec.", "marca": "Hyundai" },
    { "modelo": "HB20S  Impress 1.6 Flex 16V Aut.", "marca": "Hyundai" },
    { "modelo": "HB20X Premium 1.6 Flex 16V Aut.", "marca": "Hyundai" },
    { "modelo": "Santa Fé /GLS 3.3 V6 4X4 Tiptronic", "marca": "Hyundai" },
    { "modelo": "Sonata 2.4 16V 182cv 4p Aut.", "marca": "Hyundai" },
    { "modelo": "Tucson 2.0 16V Aut.", "marca": "Hyundai" },
    { "modelo": "Besta EST 2.7 Diesel (10/12lug.)", "marca": "Kia Motors" },
    { "modelo": "Bongo K-2400 2.4 Diesel", "marca": "Kia Motors" },
    { "modelo": "Carnival GS 2.9 TDI 16V 125cv Diesel", "marca": "Kia Motors" },
    { "modelo": "Cerato 1.6 16 V Flex Mec.", "marca": "Kia Motors" },
    { "modelo": "Picanto EX 1.1/ 1.0/ 1.0 Flex Aut", "marca": "Kia Motors" },
    { "modelo": "Sorento 2.4 16V 174cv 4x2 Aut.", "marca": "Kia Motors" },
    { "modelo": "Sportage 2.0 8V TB-IC Diesel", "marca": "Kia Motors" },
    { "modelo": "C-200 Classic/Sport", "marca": "Mercedes-Benz" },
    { "modelo": "Classe A 160 Classic Semi-Aut.", "marca": "Mercedes-Benz" },
    { "modelo": "Classe B 170 1.7 116cv Aut.", "marca": "Mercedes-Benz" },
    { "modelo": "CLK-230 Cabriolet Kompressor", "marca": "Mercedes-Benz" },
    { "modelo": "CLS-63 AMG 6.2 V8 32V 514cv", "marca": "Mercedes-Benz" },
    { "modelo": "GLK 220 CDI 2.2 TB 4X4 170cv Aut. Diesel", "marca": "Mercedes-Benz" },
    { "modelo": "ML-230 4x4", "marca": "Mercedes-Benz" },
    { "modelo": "SL-280 Classic 2.8", "marca": "Mercedes-Benz" },
    { "modelo": "SLK-320 3.2 218cv", "marca": "Mercedes-Benz" },
    { "modelo": "Sprinter 310 Chassi Diesel", "marca": "Mercedes-Benz" },
    { "modelo": "ASX 2.0 16V  4x4 Aut.(By Armura-Blind.)", "marca": "Mitsubishi" },
    { "modelo": "ASX 2.0 16V 160cv Aut.", "marca": "Mitsubishi" },
    { "modelo": "Eclipse GS/ GS Turbo Mec", "marca": "Mitsubishi" },
    { "modelo": "L200 2.5 4x2 CD Turbo Diesel", "marca": "Mitsubishi" },
    { "modelo": "Lancer 2.0 16V 160cv Aut.", "marca": "Mitsubishi" },
    { "modelo": "OUTLANDER 2.0 16V 160cv Aut.", "marca": "Mitsubishi" },
    { "modelo": "Pajero 3.2 4x4 T.I. Dies. 5p Aut", "marca": "Mitsubishi" },
    { "modelo": "Space Wagon GLS 2.0", "marca": "Mitsubishi" },
    { "modelo": "Space Wagon GLS 2.4", "marca": "Mitsubishi" },
    { "modelo": "Space Wagon GLXi 2.4 ( Nova Série )", "marca": "Mitsubishi" },
    { "modelo": "Space Wagon/ Glxi 2.4", "marca": "Mitsubishi" },
    { "modelo": "350Z 3.5 V6 280cv/ 312cv 2p", "marca": "Nissan" },
    { "modelo": "Altima GXE 2.4 16V", "marca": "Nissan" },
    { "modelo": "Altima SE 2.4 16V", "marca": "Nissan" },
    { "modelo": "ALTIMA SL 2.5 16V 4p Aut.", "marca": "Nissan" },
    { "modelo": "AX 6.5D Turbo Diesel", "marca": "Nissan" },
    { "modelo": "D-21 Pick-Up CD 4x2/4x4 2.7 Diesel", "marca": "Nissan" },
    { "modelo": "D-21 Pick-Up CS 4x2/4x4 2.7 Diesel", "marca": "Nissan" },
    { "modelo": "Frontier AX 3.2 CD Diesel", "marca": "Nissan" },
    { "modelo": "Infinit 3.0", "marca": "Nissan" },
    { "modelo": "KICKS Rio 2016 1.6 16V FlexStar 5p Aut.", "marca": "Nissan" },
    { "modelo": "KICKS SL 1.6 16V FlexStar 5p Aut.", "marca": "Nissan" },
    { "modelo": "King-Cab SE 4x4 3.0 V6", "marca": "Nissan" },
    { "modelo": "MARCH 1.0 12V Flex 5p", "marca": "Nissan" },
    { "modelo": "Pathfinder LE 2.5 16V TDI Diesel Aut", "marca": "Nissan" },
    { "modelo": "Sentra 2.0/ 2.0 Flex Fuel 16V Aut.", "marca": "Nissan" },
    { "modelo": "TIIDA S 1.8/1.8 Flex 16V  Mec.", "marca": "Nissan" },
    { "modelo": "VERSA 1.0 12V FlexStart 4p Mec.", "marca": "Nissan" },
    { "modelo": "XTerra XE 4x4 2.8 132cv TB Int. Diesel", "marca": "Nissan" },
    { "modelo": "X-TRAIL GX 2.5 16V 180cv 5p", "marca": "Nissan" },
    { "modelo": "205 CJ Cabriolet", "marca": "Peugeot" },
    { "modelo": "207 Active 1.4 Flex 8V 5p", "marca": "Peugeot" },
    { "modelo": "208 Active 1.2 Flex 12V 5p mec.", "marca": "Peugeot" },
    { "modelo": "306 Cabriolet 1.8/ Mi 16V", "marca": "Peugeot" },
    { "modelo": "307 SW Feline 2.0 16V 5p Aut.", "marca": "Peugeot" },
    { "modelo": "508 THP 1.6 Turbo 16V 4p Aut.", "marca": "Peugeot" },
    { "modelo": "Boxer 2.3 Furg.TB Dies. Curto/Médio", "marca": "Peugeot" },
    { "modelo": "HOGGAR Active 1.4 Flex 8V 2p", "marca": "Peugeot" },
    { "modelo": "Clio Auth. /AIR Hi-Flex 1.6 16V 5p", "marca": "Renault" },
    { "modelo": "DUSTER 1.6 Hi-Flex 16V Mec", "marca": "Renault" },
    { "modelo": "Express 1.6/ RL 1.6", "marca": "Renault" },
    { "modelo": "FLUENCE Sed. Dyn. Plus 2.0 16V FLEX Aut.", "marca": "Renault" },
    { "modelo": "Kangoo Authentique 1.6 16V 95cv", "marca": "Renault" },
    { "modelo": "Laguna Grand Tour Privilège 3.0 V6 210cv", "marca": "Renault" },
    { "modelo": "LOGAN Authentique Hi-Flex 1.0 16V 4p", "marca": "Renault" },
    { "modelo": "Master 2.3 dCi Chassi 16V Diesel", "marca": "Renault" },
    { "modelo": "Megane Grand Tour Dynam. Hi-Flex 1.6 16V", "marca": "Renault" },
    { "modelo": "Megane Sed. Expression 2.0 16V Aut.", "marca": "Renault" },
    { "modelo": "SANDERO Auth. Plus Hi-Power 1.0 16V 5p", "marca": "Renault" },
    { "modelo": "Scénic RXE 2.0 8V", "marca": "Renault" },
    { "modelo": "Twingo Easy 1.2", "marca": "Renault" },
    { "modelo": "Grand Vitara 1.6 16V Aut.", "marca": "Suzuki" },
    { "modelo": "Swift GL", "marca": "Suzuki" },
    { "modelo": "SX4 2.0 16V 145cv 4WD 5p Aut.", "marca": "Suzuki" },
    { "modelo": "Vitara JLX Metal 1.6 8V 2p", "marca": "Suzuki" },
    { "modelo": "Corolla ALTIS 2.0 Flex 16V Aut.", "marca": "Toyota" },
    { "modelo": "Corolla DX/ SW DX 1.6 16V", "marca": "Toyota" },
    { "modelo": "ETIOS 1.3 Flex 16V 5p Mec.", "marca": "Toyota" },
    { "modelo": "Hilux 4x2 2.4 Diesel", "marca": "Toyota" },
    { "modelo": "Land Cruiser 4WD 4.5 24V", "marca": "Toyota" },
    { "modelo": "PRIUS HYBRID 1.8 16V 5p Aut.", "marca": "Toyota" },
    { "modelo": "RAV4 2.0 4x2 16V Aut.", "marca": "Toyota" },
    { "modelo": "Supra", "marca": "Toyota" },
    { "modelo": "T-100 3.4 V6", "marca": "Toyota" },
    { "modelo": "440 Turbo 1.8", "marca": "Volvo" },
    { "modelo": "S80 3.2 238cv Aut.", "marca": "Volvo" },
    { "modelo": "V60 T-5 MOMENTUM 2.0 245cv 5p", "marca": "Volvo" },
    { "modelo": "AMAROK CD2.0 16V/S CD2.0 16V TDI 4x2 Die", "marca": "VW - VolksWagen" },
    { "modelo": "Bora 2.0 8v Comfortline Aut.", "marca": "VW - VolksWagen" },
    { "modelo": "CROSSFOX  1.6 T. Flex 16V 5p", "marca": "VW - VolksWagen" },
    { "modelo": "EOS Cab. 2.0 Turbo FSI Tiptronic", "marca": "VW - VolksWagen" },
    { "modelo": "Eurovan 2.4 Diesel", "marca": "VW - VolksWagen" },
    { "modelo": "Fox 1.0 Mi Total Flex 8V 3p", "marca": "VW - VolksWagen" },
    { "modelo": "Fusca", "marca": "VW - VolksWagen" },
    { "modelo": "Fusca 2.0 TSI 16V Mec.", "marca": "VW - VolksWagen" },
    { "modelo": "Gol (novo) 1.0 Mi Total Flex 8V 2p", "marca": "VW - VolksWagen" },
    { "modelo": "Gol TSi 2000 2p e 4p", "marca": "VW - VolksWagen" },
    { "modelo": "Golf  BLACK EDITON 2.0 Mi T. Flex 8V Tip", "marca": "VW - VolksWagen" },
    { "modelo": "Grand Saveiro Xtreme/Street  1.6/1.8/2.0", "marca": "VW - VolksWagen" },
    { "modelo": "JETTA  GLX III 2.8 VR6", "marca": "VW - VolksWagen" },
    { "modelo": "Kombi Carat", "marca": "VW - VolksWagen" },
    { "modelo": "Logus 1.6 / CLi / CL/ GL", "marca": "VW - VolksWagen" },
    { "modelo": "New Beetle 2.0 Mi Mec./Aut.", "marca": "VW - VolksWagen" },
    { "modelo": "Parati 1.0 Mi FUN/ SunSet 16V 4p", "marca": "VW - VolksWagen" },
    { "modelo": "Passat  L/LS/LSe/GL/GLS/TS/Fla/Vill/Plus", "marca": "VW - VolksWagen" },
    { "modelo": "Passat VR6 2.8", "marca": "VW - VolksWagen" },
    { "modelo": "Pointer 1.8 / CLi", "marca": "VW - VolksWagen" },
    { "modelo": "Polo 1.0 Mi 79cv 16V 5p", "marca": "VW - VolksWagen" },
    { "modelo": "Quantum 1.8 Mi/ 1.8i", "marca": "VW - VolksWagen" },
    { "modelo": "Santana 1.8 Mi", "marca": "VW - VolksWagen" },
    { "modelo": "Saveiro  Trendline 1.6 T.Flex 8V", "marca": "VW - VolksWagen" },
    { "modelo": "SpaceCross I MOTION 1.6 Mi Total Flex 8V", "marca": "VW - VolksWagen" },
    { "modelo": "SPACEFOX  SPORTLINE/HIGHLINE 1.6 T.Flex", "marca": "VW - VolksWagen" },
    { "modelo": "up! black/white/red 1.0 T. Flex 12V 5p", "marca": "VW - VolksWagen" },
    { "modelo": "VOYAGE Trendline 1.0 T.Flex 12V 4p", "marca": "VW - VolksWagen" },
    { "modelo": "145 Elegant 1.7/1.8 16V", "marca": "Alfa Romeo" },
    { "modelo": "145 Elegant 2.0 16V", "marca": "Alfa Romeo" },
    { "modelo": "156 SportWagon 2.5 V6 24V 190cv 4p Aut.", "marca": "Alfa Romeo" },
    { "modelo": "Celer Hatch 1.5 16V Flex 5p", "marca": "CHERY" },
    { "modelo": "Celer Sedan ACT 1.5 16V Flex 5p", "marca": "CHERY" },
    { "modelo": "CIELO 1.6 16V 119cv  5p", "marca": "CHERY" },
    { "modelo": "CIELO Sedan 1.6 16V 119cv  4p", "marca": "CHERY" },
    { "modelo": "Face 1.3 16V/1.3 16v Flex.Mec", "marca": "CHERY" },
    { "modelo": "QQ 1.0 ACT 12V 69cv 5p", "marca": "CHERY" },
    { "modelo": "QQ 1.0 ACT FL 12V 69cv 5p", "marca": "CHERY" },
    { "modelo": "QQ 1.0 Look FL 12V 69cv 5p", "marca": "CHERY" },
    { "modelo": "QQ 1.1/1.0 12V 69cv 5p", "marca": "CHERY" },
    { "modelo": "S-18 1.3 16V Flex Mec. 5p", "marca": "CHERY" },
    { "modelo": "Tiggo 2.0 16V Aut. 5p", "marca": "CHERY" },
    { "modelo": "Tiggo 2.0 16V Mec. 5p", "marca": "CHERY" },
    { "modelo": "Caravan LE  3.3", "marca": "Chrysler" },
    { "modelo": "Grand Caravan LE 3.3 Aut", "marca": "Chrysler" },
    { "modelo": "PT Cruiser Cabrio 2.4 16V 143cv 2p", "marca": "Chrysler" },
    { "modelo": "Dakota 2.5", "marca": "Dodge" },
    { "modelo": "JOURNEY Crossroad 3.6 V6 Aut.", "marca": "Dodge" },
    { "modelo": "Ram 2500 TROPIVAN 5.9 SLT TDI 4x4 Dies.", "marca": "Dodge" },
    { "modelo": "456 GTA", "marca": "Ferrari" },
    { "modelo": "BR-800 (todos)/ Supermini", "marca": "Gurgel" },
    { "modelo": "J2 1.4 16V 5p Mec.", "marca": "JAC" },
    { "modelo": "J2 1.4 JET Flex 16V 5p Mec", "marca": "JAC" },
    { "modelo": "J3 1.4 16V 5p Mec.", "marca": "JAC" },
    { "modelo": "J5 Sedan 1.5 16V 4p Mec.", "marca": "JAC" },
    { "modelo": "J6 2.0 16V 5p Mec.", "marca": "JAC" },
    { "modelo": "T 140 2.8 2p (diesel)", "marca": "JAC" },
    { "modelo": "T5 1.5 JET Flex 16V 5p Mec.", "marca": "JAC" },
    { "modelo": "T6 2.0 JET Flex 5p Mec.", "marca": "JAC" },
    { "modelo": "T8 2.0 16V 5p Mec.", "marca": "JAC" },
    { "modelo": "XJ-8 Executive/ Centenary 4.0", "marca": "Jaguar" },
    { "modelo": "Cherokee Sport 2.5 4x4 Diesel", "marca": "Jeep" },
    { "modelo": "Grand Cherokee Laredo 2.7 I-5 TB Dies.", "marca": "Jeep" },
    { "modelo": "Grand Cherokee SRT8 6.1 V8 16V 432cv Aut", "marca": "Jeep" },
    { "modelo": "Renegade 75 Anos 1.8 4X2 Flex 16V Aut.", "marca": "Jeep" },
    { "modelo": "Renegade1.8 4x2 Flex 16V Mec.", "marca": "Jeep" },
    { "modelo": "Wrangler 4.0/Sport 4.0", "marca": "Jeep" },
    { "modelo": "HURACAN Coupe LP 610-4", "marca": "LAMBORGHINI" },
    { "modelo": "Defender 110 2.4 122cv T.Diesel", "marca": "Land Rover" },
    { "modelo": "Defender 90 TDI Hard Top Diesel", "marca": "Land Rover" },
    { "modelo": "Discovery3 HSE 4.4 V8 4x4 299cv Aut.", "marca": "Land Rover" },
    { "modelo": "Discovery4 HSE 2.7 4x4 TDV6 Diesel Aut.", "marca": "Land Rover" },
    { "modelo": "Range R. EVO DYNAMIQUE BLACK 2.0 Aut. 5p", "marca": "Land Rover" },
    { "modelo": "Range Rover EVOQUE Zanzibar 2.0 Aut. 5p", "marca": "Land Rover" },
    { "modelo": "Range Rover SUPERCHAGED 4.2 V8 396cv", "marca": "Land Rover" },
    { "modelo": "Range Rover Vogue 3.0 TDV6 Diesel Aut.", "marca": "Land Rover" },
    { "modelo": "COOPER PACEMAN S John Works ALL4 1.6 Aut", "marca": "MINI" },
    { "modelo": "COOPER S BAYSWATER 1.6 Aut.", "marca": "MINI" },
    { "modelo": "COOPER S Clubman 1.6 Aut.", "marca": "MINI" },
    { "modelo": "ONE 1.6 Aut.", "marca": "MINI" },
    { "modelo": "Picape BG-Truck CD Turbo Diesel", "marca": "Miura" },
    { "modelo": "Boxster Spyder 3.4 320cv", "marca": "Porsche" },
    { "modelo": "Cayenne S 4.5/4.8", "marca": "Porsche" },
    { "modelo": "Cayman S 3.4", "marca": "Porsche" },
    { "modelo": "Mini Cooper 1.3", "marca": "Rover" },
    { "modelo": "ACTYON 2.3 16V 150cv Aut.", "marca": "SSANGYONG" },
    { "modelo": "Forester 2.0 16v 4x4 Turbo Aut.", "marca": "Subaru" },
    { "modelo": "XV 2.0 16V 4x4 150cv Aut.", "marca": "Subaru" },
    { "modelo": "PANTANAL 3.0 TDI Elet. 4x2 CS Diesel", "marca": "Troller" },
    { "modelo": "RF Esport 4x4 2.0", "marca": "Troller" },
    { "modelo": "T-4 DESERT STORM 4x4 3.0 TB Int Diesel", "marca": "Troller" }
];

},{}],18:[function(require,module,exports){
/* eslint indent: ["warn", 4] */


// Private helper class
class SubRange {
    constructor(low, high) {
        this.low = low;
        this.high = high;
        this.length = 1 + high - low;
    }

    overlaps(range) {
        return !(this.high < range.low || this.low > range.high);
    }

    touches(range) {
        return !(this.high + 1 < range.low || this.low - 1 > range.high);
    }

    // Returns inclusive combination of SubRanges as a SubRange.
    add(range) {
        return new SubRange(
            Math.min(this.low, range.low),
            Math.max(this.high, range.high)
        );
    }

    // Returns subtraction of SubRanges as an array of SubRanges.
    // (There's a case where subtraction divides it in 2)
    subtract(range) {
        if (range.low <= this.low && range.high >= this.high) {
            return [];
        } else if (range.low > this.low && range.high < this.high) {
            return [
                new SubRange(this.low, range.low - 1),
                new SubRange(range.high + 1, this.high)
            ];
        } else if (range.low <= this.low) {
            return [new SubRange(range.high + 1, this.high)];
        } else {
            return [new SubRange(this.low, range.low - 1)];
        }
    }

    toString() {
        return this.low == this.high ?
            this.low.toString() : this.low + '-' + this.high;
    }
}

class DRange {
    constructor(a, b) {
        this.ranges = [];
        this.length = 0;
        if (a != null) this.add(a, b);
    }

    _update_length() {
        this.length = this.ranges.reduce((previous, range) => {
            return previous + range.length;
        }, 0);
    }

    add(a, b) {
        const _add = (subrange) => {
            let i = 0;
            while (i < this.ranges.length && !subrange.touches(this.ranges[i])) {
                i++;
            }
            const newRanges = this.ranges.slice(0, i);
            while (i < this.ranges.length && subrange.touches(this.ranges[i])) {
                subrange = subrange.add(this.ranges[i]);
                i++;
            }
            newRanges.push(subrange);
            this.ranges = newRanges.concat(this.ranges.slice(i));
            this._update_length();
        };

        if (a instanceof DRange) {
            a.ranges.forEach(_add);
        } else {
            if (b == null) b = a;
            _add(new SubRange(a, b));
        }
        return this;
    }

    subtract(a, b) {
        const _subtract = (subrange) => {
            let i = 0;
            while (i < this.ranges.length && !subrange.overlaps(this.ranges[i])) {
                i++;
            }
            let newRanges = this.ranges.slice(0, i);
            while (i < this.ranges.length && subrange.overlaps(this.ranges[i])) {
                newRanges = newRanges.concat(this.ranges[i].subtract(subrange));
                i++;
            }
            this.ranges = newRanges.concat(this.ranges.slice(i));
            this._update_length();
        };

        if (a instanceof DRange) {
            a.ranges.forEach(_subtract);
        } else {
            if (b == null) b = a;
            _subtract(new SubRange(a, b));
        }
        return this;
    }

    intersect(a, b) {
        const newRanges = [];
        const _intersect = (subrange) => {
            let i = 0;
            while (i < this.ranges.length && !subrange.overlaps(this.ranges[i])) {
                i++;
            }
            while (i < this.ranges.length && subrange.overlaps(this.ranges[i])) {
                let low = Math.max(this.ranges[i].low, subrange.low);
                let high = Math.min(this.ranges[i].high, subrange.high);
                newRanges.push(new SubRange(low, high));
                i++;
            }
        };

        if (a instanceof DRange) {
            a.ranges.forEach(_intersect);
        } else {
            if (b == null) b = a;
            _intersect(new SubRange(a, b));
        }
        this.ranges = newRanges;
        this._update_length();
        return this;
    }

    index(index) {
        let i = 0;
        while (i < this.ranges.length && this.ranges[i].length <= index) {
            index -= this.ranges[i].length;
            i++;
        }
        return this.ranges[i].low + index;
    }

    toString() {
        return '[ ' + this.ranges.join(', ') + ' ]';
    }

    clone() {
        return new DRange(this);
    }

    numbers() {
        return this.ranges.reduce((result, subrange) => {
            let i = subrange.low;
            while (i <= subrange.high) {
                result.push(i);
                i++;
            }
            return result;
        }, []);
    }

    subranges() {
        return this.ranges.map((subrange) => ({
            low: subrange.low,
            high: subrange.high,
            length: 1 + subrange.high - subrange.low
        }));
    }
}

module.exports = DRange;

},{}],19:[function(require,module,exports){
const ret    = require('ret');
const DRange = require('drange');
const types  = ret.types;


module.exports = class RandExp {
  /**
   * @constructor
   * @param {RegExp|String} regexp
   * @param {String} m
   */
  constructor(regexp, m) {
    this._setDefaults(regexp);
    if (regexp instanceof RegExp) {
      this.ignoreCase = regexp.ignoreCase;
      this.multiline = regexp.multiline;
      regexp = regexp.source;

    } else if (typeof regexp === 'string') {
      this.ignoreCase = m && m.indexOf('i') !== -1;
      this.multiline = m && m.indexOf('m') !== -1;
    } else {
      throw new Error('Expected a regexp or string');
    }

    this.tokens = ret(regexp);
  }


  /**
   * Checks if some custom properties have been set for this regexp.
   *
   * @param {RandExp} randexp
   * @param {RegExp} regexp
   */
  _setDefaults(regexp) {
    // When a repetitional token has its max set to Infinite,
    // randexp won't actually generate a random amount between min and Infinite
    // instead it will see Infinite as min + 100.
    this.max = regexp.max != null ? regexp.max :
      RandExp.prototype.max != null ? RandExp.prototype.max : 100;

    // This allows expanding to include additional characters
    // for instance: RandExp.defaultRange.add(0, 65535);
    this.defaultRange = regexp.defaultRange ?
      regexp.defaultRange : this.defaultRange.clone();

    if (regexp.randInt) {
      this.randInt = regexp.randInt;
    }
  }


  /**
   * Generates the random string.
   *
   * @return {String}
   */
  gen() {
    return this._gen(this.tokens, []);
  }


  /**
   * Generate random string modeled after given tokens.
   *
   * @param {Object} token
   * @param {Array.<String>} groups
   * @return {String}
   */
  _gen(token, groups) {
    var stack, str, n, i, l;

    switch (token.type) {
      case types.ROOT:
      case types.GROUP:
        // Ignore lookaheads for now.
        if (token.followedBy || token.notFollowedBy) { return ''; }

        // Insert placeholder until group string is generated.
        if (token.remember && token.groupNumber === undefined) {
          token.groupNumber = groups.push(null) - 1;
        }

        stack = token.options ?
          this._randSelect(token.options) : token.stack;

        str = '';
        for (i = 0, l = stack.length; i < l; i++) {
          str += this._gen(stack[i], groups);
        }

        if (token.remember) {
          groups[token.groupNumber] = str;
        }
        return str;

      case types.POSITION:
        // Do nothing for now.
        return '';

      case types.SET:
        var expandedSet = this._expand(token);
        if (!expandedSet.length) { return ''; }
        return String.fromCharCode(this._randSelect(expandedSet));

      case types.REPETITION:
        // Randomly generate number between min and max.
        n = this.randInt(token.min,
          token.max === Infinity ? token.min + this.max : token.max);

        str = '';
        for (i = 0; i < n; i++) {
          str += this._gen(token.value, groups);
        }

        return str;

      case types.REFERENCE:
        return groups[token.value - 1] || '';

      case types.CHAR:
        var code = this.ignoreCase && this._randBool() ?
          this._toOtherCase(token.value) : token.value;
        return String.fromCharCode(code);
    }
  }


  /**
   * If code is alphabetic, converts to other case.
   * If not alphabetic, returns back code.
   *
   * @param {Number} code
   * @return {Number}
   */
  _toOtherCase(code) {
    return code + (97 <= code && code <= 122 ? -32 :
      65 <= code && code <= 90  ?  32 : 0);
  }


  /**
   * Randomly returns a true or false value.
   *
   * @return {Boolean}
   */
  _randBool() {
    return !this.randInt(0, 1);
  }


  /**
   * Randomly selects and returns a value from the array.
   *
   * @param {Array.<Object>} arr
   * @return {Object}
   */
  _randSelect(arr) {
    if (arr instanceof DRange) {
      return arr.index(this.randInt(0, arr.length - 1));
    }
    return arr[this.randInt(0, arr.length - 1)];
  }


  /**
   * expands a token to a DiscontinuousRange of characters which has a
   * length and an index function (for random selecting)
   *
   * @param {Object} token
   * @return {DiscontinuousRange}
   */
  _expand(token) {
    if (token.type === ret.types.CHAR) {
      return new DRange(token.value);
    } else if (token.type === ret.types.RANGE) {
      return new DRange(token.from, token.to);
    } else {
      let drange = new DRange();
      for (let i = 0; i < token.set.length; i++) {
        let subrange = this._expand(token.set[i]);
        drange.add(subrange);
        if (this.ignoreCase) {
          for (let j = 0; j < subrange.length; j++) {
            let code = subrange.index(j);
            let otherCaseCode = this._toOtherCase(code);
            if (code !== otherCaseCode) {
              drange.add(otherCaseCode);
            }
          }
        }
      }
      if (token.not) {
        return this.defaultRange.clone().subtract(drange);
      } else {
        return this.defaultRange.clone().intersect(drange);
      }
    }
  }


  /**
   * Randomly generates and returns a number between a and b (inclusive).
   *
   * @param {Number} a
   * @param {Number} b
   * @return {Number}
   */
  randInt(a, b) {
    return a + Math.floor(Math.random() * (1 + b - a));
  }


  /**
   * Default range of characters to generate from.
   */
  get defaultRange() {
    return this._range = this._range || new DRange(32, 126);
  }

  set defaultRange(range) {
    this._range = range;
  }


  /**
   *
   * Enables use of randexp with a shorter call.
   *
   * @param {RegExp|String| regexp}
   * @param {String} m
   * @return {String}
   */
  static randexp(regexp, m) {
    var randexp;
    if(typeof regexp === 'string') {
      regexp = new RegExp(regexp, m);
    }

    if (regexp._randexp === undefined) {
      randexp = new RandExp(regexp, m);
      regexp._randexp = randexp;
    } else {
      randexp = regexp._randexp;
      randexp._setDefaults(regexp);
    }
    return randexp.gen();
  }


  /**
   * Enables sugary /regexp/.gen syntax.
   */
  static sugar() {
    /* eshint freeze:false */
    RegExp.prototype.gen = function() {
      return RandExp.randexp(this);
    };
  }
};

},{"drange":18,"ret":20}],20:[function(require,module,exports){
const util      = require('./util');
const types     = require('./types');
const sets      = require('./sets');
const positions = require('./positions');


module.exports = (regexpStr) => {
  var i = 0, l, c,
    start = { type: types.ROOT, stack: []},

    // Keep track of last clause/group and stack.
    lastGroup = start,
    last = start.stack,
    groupStack = [];


  var repeatErr = (i) => {
    util.error(regexpStr, `Nothing to repeat at column ${i - 1}`);
  };

  // Decode a few escaped characters.
  var str = util.strToChars(regexpStr);
  l = str.length;

  // Iterate through each character in string.
  while (i < l) {
    c = str[i++];

    switch (c) {
      // Handle escaped characters, inclues a few sets.
      case '\\':
        c = str[i++];

        switch (c) {
          case 'b':
            last.push(positions.wordBoundary());
            break;

          case 'B':
            last.push(positions.nonWordBoundary());
            break;

          case 'w':
            last.push(sets.words());
            break;

          case 'W':
            last.push(sets.notWords());
            break;

          case 'd':
            last.push(sets.ints());
            break;

          case 'D':
            last.push(sets.notInts());
            break;

          case 's':
            last.push(sets.whitespace());
            break;

          case 'S':
            last.push(sets.notWhitespace());
            break;

          default:
            // Check if c is integer.
            // In which case it's a reference.
            if (/\d/.test(c)) {
              last.push({ type: types.REFERENCE, value: parseInt(c, 10) });

            // Escaped character.
            } else {
              last.push({ type: types.CHAR, value: c.charCodeAt(0) });
            }
        }

        break;


      // Positionals.
      case '^':
        last.push(positions.begin());
        break;

      case '$':
        last.push(positions.end());
        break;


      // Handle custom sets.
      case '[':
        // Check if this class is 'anti' i.e. [^abc].
        var not;
        if (str[i] === '^') {
          not = true;
          i++;
        } else {
          not = false;
        }

        // Get all the characters in class.
        var classTokens = util.tokenizeClass(str.slice(i), regexpStr);

        // Increase index by length of class.
        i += classTokens[1];
        last.push({
          type: types.SET,
          set: classTokens[0],
          not,
        });

        break;


      // Class of any character except \n.
      case '.':
        last.push(sets.anyChar());
        break;


      // Push group onto stack.
      case '(':
        // Create group.
        var group = {
          type: types.GROUP,
          stack: [],
          remember: true,
        };

        c = str[i];

        // If if this is a special kind of group.
        if (c === '?') {
          c = str[i + 1];
          i += 2;

          // Match if followed by.
          if (c === '=') {
            group.followedBy = true;

          // Match if not followed by.
          } else if (c === '!') {
            group.notFollowedBy = true;

          } else if (c !== ':') {
            util.error(regexpStr,
              `Invalid group, character '${c}'` +
              ` after '?' at column ${i - 1}`);
          }

          group.remember = false;
        }

        // Insert subgroup into current group stack.
        last.push(group);

        // Remember the current group for when the group closes.
        groupStack.push(lastGroup);

        // Make this new group the current group.
        lastGroup = group;
        last = group.stack;
        break;


      // Pop group out of stack.
      case ')':
        if (groupStack.length === 0) {
          util.error(regexpStr, `Unmatched ) at column ${i - 1}`);
        }
        lastGroup = groupStack.pop();

        // Check if this group has a PIPE.
        // To get back the correct last stack.
        last = lastGroup.options ?
          lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
        break;


      // Use pipe character to give more choices.
      case '|':
        // Create array where options are if this is the first PIPE
        // in this clause.
        if (!lastGroup.options) {
          lastGroup.options = [lastGroup.stack];
          delete lastGroup.stack;
        }

        // Create a new stack and add to options for rest of clause.
        var stack = [];
        lastGroup.options.push(stack);
        last = stack;
        break;


      // Repetition.
      // For every repetition, remove last element from last stack
      // then insert back a RANGE object.
      // This design is chosen because there could be more than
      // one repetition symbols in a regex i.e. `a?+{2,3}`.
      case '{':
        var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)), min, max;
        if (rs !== null) {
          if (last.length === 0) {
            repeatErr(i);
          }
          min = parseInt(rs[1], 10);
          max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
          i += rs[0].length;

          last.push({
            type: types.REPETITION,
            min,
            max,
            value: last.pop(),
          });
        } else {
          last.push({
            type: types.CHAR,
            value: 123,
          });
        }
        break;

      case '?':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: 1,
          value: last.pop(),
        });
        break;

      case '+':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 1,
          max: Infinity,
          value: last.pop(),
        });
        break;

      case '*':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: Infinity,
          value: last.pop(),
        });
        break;


      // Default is a character that is not `\[](){}?+*^$`.
      default:
        last.push({
          type: types.CHAR,
          value: c.charCodeAt(0),
        });
    }

  }

  // Check if any groups have not been closed.
  if (groupStack.length !== 0) {
    util.error(regexpStr, 'Unterminated group');
  }

  return start;
};

module.exports.types = types;

},{"./positions":21,"./sets":22,"./types":23,"./util":24}],21:[function(require,module,exports){
const types = require('./types');
exports.wordBoundary = () => ({ type: types.POSITION, value: 'b' });
exports.nonWordBoundary = () => ({ type: types.POSITION, value: 'B' });
exports.begin = () => ({ type: types.POSITION, value: '^' });
exports.end = () => ({ type: types.POSITION, value: '$' });

},{"./types":23}],22:[function(require,module,exports){
const types = require('./types');

const INTS = () => [{ type: types.RANGE , from: 48, to: 57 }];

const WORDS = () => {
  return [
    { type: types.CHAR, value: 95 },
    { type: types.RANGE, from: 97, to: 122 },
    { type: types.RANGE, from: 65, to: 90 }
  ].concat(INTS());
};

const WHITESPACE = () => {
  return [
    { type: types.CHAR, value: 9 },
    { type: types.CHAR, value: 10 },
    { type: types.CHAR, value: 11 },
    { type: types.CHAR, value: 12 },
    { type: types.CHAR, value: 13 },
    { type: types.CHAR, value: 32 },
    { type: types.CHAR, value: 160 },
    { type: types.CHAR, value: 5760 },
    { type: types.RANGE, from: 8192, to: 8202 },
    { type: types.CHAR, value: 8232 },
    { type: types.CHAR, value: 8233 },
    { type: types.CHAR, value: 8239 },
    { type: types.CHAR, value: 8287 },
    { type: types.CHAR, value: 12288 },
    { type: types.CHAR, value: 65279 }
  ];
};

const NOTANYCHAR = () => {
  return [
    { type: types.CHAR, value: 10 },
    { type: types.CHAR, value: 13 },
    { type: types.CHAR, value: 8232 },
    { type: types.CHAR, value: 8233 },
  ];
};

// Predefined class objects.
exports.words = () => ({ type: types.SET, set: WORDS(), not: false });
exports.notWords = () => ({ type: types.SET, set: WORDS(), not: true });
exports.ints = () => ({ type: types.SET, set: INTS(), not: false });
exports.notInts = () => ({ type: types.SET, set: INTS(), not: true });
exports.whitespace = () => ({ type: types.SET, set: WHITESPACE(), not: false });
exports.notWhitespace = () => ({ type: types.SET, set: WHITESPACE(), not: true });
exports.anyChar = () => ({ type: types.SET, set: NOTANYCHAR(), not: true });

},{"./types":23}],23:[function(require,module,exports){
module.exports = {
  ROOT       : 0,
  GROUP      : 1,
  POSITION   : 2,
  SET        : 3,
  RANGE      : 4,
  REPETITION : 5,
  REFERENCE  : 6,
  CHAR       : 7,
};

},{}],24:[function(require,module,exports){
const types = require('./types');
const sets  = require('./sets');


const CTRL = '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?';
const SLSH = { '0': 0, 't': 9, 'n': 10, 'v': 11, 'f': 12, 'r': 13 };

/**
 * Finds character representations in str and convert all to
 * their respective characters
 *
 * @param {String} str
 * @return {String}
 */
exports.strToChars = function(str) {
  /* jshint maxlen: false */
  var chars_regex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
  str = str.replace(chars_regex, function(s, b, lbs, a16, b16, c8, dctrl, eslsh) {
    if (lbs) {
      return s;
    }

    var code = b ? 8 :
      a16   ? parseInt(a16, 16) :
      b16   ? parseInt(b16, 16) :
      c8    ? parseInt(c8,   8) :
      dctrl ? CTRL.indexOf(dctrl) :
      SLSH[eslsh];

    var c = String.fromCharCode(code);

    // Escape special regex characters.
    if (/[[\]{}^$.|?*+()]/.test(c)) {
      c = '\\' + c;
    }

    return c;
  });

  return str;
};


/**
 * turns class into tokens
 * reads str until it encounters a ] not preceeded by a \
 *
 * @param {String} str
 * @param {String} regexpStr
 * @return {Array.<Array.<Object>, Number>}
 */
exports.tokenizeClass = (str, regexpStr) => {
  /* jshint maxlen: false */
  var tokens = [];
  var regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?([^])/g;
  var rs, c;


  while ((rs = regexp.exec(str)) != null) {
    if (rs[1]) {
      tokens.push(sets.words());

    } else if (rs[2]) {
      tokens.push(sets.ints());

    } else if (rs[3]) {
      tokens.push(sets.whitespace());

    } else if (rs[4]) {
      tokens.push(sets.notWords());

    } else if (rs[5]) {
      tokens.push(sets.notInts());

    } else if (rs[6]) {
      tokens.push(sets.notWhitespace());

    } else if (rs[7]) {
      tokens.push({
        type: types.RANGE,
        from: (rs[8] || rs[9]).charCodeAt(0),
        to: rs[10].charCodeAt(0),
      });

    } else if ((c = rs[12])) {
      tokens.push({
        type: types.CHAR,
        value: c.charCodeAt(0),
      });

    } else {
      return [tokens, regexp.lastIndex];
    }
  }

  exports.error(regexpStr, 'Unterminated character class');
};


/**
 * Shortcut to throw errors.
 *
 * @param {String} regexp
 * @param {String} msg
 */
exports.error = (regexp, msg) => {
  throw new SyntaxError('Invalid regular expression: /' + regexp + '/: ' + msg);
};

},{"./sets":22,"./types":23}],25:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});
},{}]},{},[2])(2)
});
