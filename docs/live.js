let { fakerBr, validateBr, maskBr } = require('./js-brasil');

let testGeneric = (key) => {
  let val = fakerBr[key]();
  val = val.replace(/[^\d\w]+/g, '');
  let valMask = maskBr[key](val);
  console.info(validateBr[key](valMask));
}


// 'AIH'
let aih = '3519234143128';
console.info(maskBr.aih(aih));
aih = fakerBr.aih();
console.info(validateBr.aih(aih), aih);

// 'cartaocredito - TODO'
let cartaocredito = '12312345121';
// console.info(maskBr.cartaocredito(cartaocredito));
// testGeneric('cartaocredito');

// 'celular'
let celular = '31999915454';
console.info(maskBr.celular(celular));
testGeneric('celular');
celular = fakerBr.celular();
console.info(validateBr.celular(celular), celular);

// 'CEP'
let cep = '30456098';
console.info(maskBr.cep(cep));
testGeneric('cep');
console.info(maskBr.cep('123'));
console.info(fakerBr.cep());
cep = fakerBr.cep();
console.info(validateBr.cep(cep), cep);

// 'Certidão'
let certidao = '10453901552013100012021000012321';
let mask = maskBr.certidao(certidao);
console.info(mask);
certidao = fakerBr.certidao();
console.info(validateBr.certidao(certidao), certidao);


// 'CHASSI'
let chassi = '9BWZZZ377VT004251';
console.info(maskBr.chassi(chassi));
testGeneric('chassi');
chassi = fakerBr.chassi();
console.info(validateBr.chassi(chassi), chassi);


// 'cnae - TODO'
let cnae = '12312345121';
// console.info(maskBr.cnae(cnae));
// testGeneric('cnae');
cnae = fakerBr.cnae();
console.info(validateBr.cnae(cnae), cnae);


// 'CNH'
let cnh = '99739507132';
console.info(maskBr.cnh(cnh));
testGeneric('cnh');
cnh = fakerBr.cnh();
console.info(validateBr.cnh(cnh), cnh);


// 'CNPJ'
let cnpj = '83529443183182';
console.info(maskBr.cnpj(cnpj));
console.info(maskBr.cnpj('123'));
testGeneric('cnpj');
console.info(fakerBr.cnpj());
cnpj = fakerBr.cnpj();
console.info(validateBr.cnpj(cnpj), cnpj);


// 'CNS'
let cns = '755845919762262';
console.info(maskBr.cns(cns));
cns = fakerBr.cns();
console.info(validateBr.cns(cns), cns);



let contabanco = fakerBr.contabanco();
console.info(validateBr.contabanco(contabanco), contabanco);


// 'CPF'
let cpf = '92044202271';
console.info(maskBr.cpf(cpf));
testGeneric('cpf');
console.info(maskBr.cpf('123'));
cpf = fakerBr.cpf();
console.info(validateBr.cpf(cpf), cpf);


// 'cpfcnpj - TODO'
let cpfcnpj = '12312345121';
// console.info(maskBr.cpfcnpj(cpfcnpj));
// testGeneric('cpfcnpj');
cpfcnpj = fakerBr.cpfcnpj();
console.info(validateBr.cpfcnpj(cpfcnpj), cpfcnpj);


// 'DATA'
let data = '01/12/1980';
console.info(maskBr.data(data));
testGeneric('data');
data = fakerBr.data();
console.info(validateBr.data(data), data);
data = fakerBr.data({
  idadeMin: 18,
  idadeMax: 40
});

console.info(validateBr.data(data), data);


// 'ECT'
let ect = '315296490';
console.info(maskBr.ect(ect));
testGeneric('ect');
ect = fakerBr.ect();
console.info(validateBr.ect(ect), ect);



let email = fakerBr.email();
console.info(validateBr.email(email), email);

email = fakerBr.email({
  nome: 'mario mol',
  empresa: 'JS Brasil',
})

console.info(validateBr.email(email), email);



let empresa = fakerBr.empresa();
console.info(empresa);
console.info(validateBr.cnpj(empresa.cnpj));
console.info(validateBr.telefone(empresa.telefone));
console.info(validateBr.telefone(empresa.celular));
console.info(validateBr.email(empresa.email));
console.info(validateBr.data(empresa.dataAbertura));
// console.info(validateBr.inscricaoestadual(empresa.inscricaoestadual, empresa.endereco.estadoSigla));
console.info(empresa.endereco);
console.info(empresa.inscricaoestadual);



let endereco = fakerBr.endereco();
console.info(endereco.cep);
console.info(endereco.logradouro);
console.info(endereco.complemento);
console.info(endereco.numero);
console.info(endereco.bairro);
console.info(endereco.cidade);
console.info(endereco.estado);
console.info(endereco.estadoSigla);



// 'Inscricao estadual'
let estado = 'mg';
console.info(maskBr.inscricaoestadual(estado, '123'));
let inscricaoestadual = fakerBr.inscricaoestadual(estado);
console.info(validateBr.inscricaoestadual(inscricaoestadual, estado));

// console.info(fakerBr.inscricaoestadual());
// let inscricaoestadual = fakerBr.inscricaoestadual();
// console.info(validateBr.inscricaoestadual(inscricaoestadual));



// 'iptu - TODO'
let iptu = '12312345121';
// console.info(maskBr.iptu(iptu));
// testGeneric('iptu');
// let iptu = fakerBr.iptu();
// console.info(validateBr.iptu(iptu));



// 'Moeda'
let currency = 'R$ 5.103,94';
let currencyText = '5.103,94';
let currencyNumber = 5103.94;
let currencyNoDecimals = 'R$ 5.103';
let currencyTextNoDecimals = '5.103';
let currencyNumberNoDecimals = 5103;
let currencyNumberMany = 5103.9423234;
console.info(maskBr.currency(currencyNoDecimals));
console.info(maskBr.currency(currencyTextNoDecimals));
console.info(maskBr.currency(currencyNumberNoDecimals));
console.info(maskBr.currency(currency));
console.info(maskBr.currency(currencyNumber));
console.info(maskBr.currency(currencyText));
console.info(maskBr.currency(currencyNumberMany));
// testGeneric('currency');
// console.info(maskBr.currency('123'));
// console.info(maskBr.currency(123));
console.info(fakerBr.currency());
// let currency = fakerBr.currency();
// console.info(validateBr.currency(currency));
currencyNumber = fakerBr.currencyNumber();
console.info(validateBr.currency(currencyNumber), currencyNumber);


// 'Número'
let number = '1234,10';
console.info(maskBr.number(number));
console.info(maskBr.number(1234.10));
// let number = fakerBr.number();
// console.info(validateBr.number(number));

// console.info(fakerBr.porcentagem());
// let porcentagem = fakerBr.porcentagem();
// console.info(validateBr.porcentagem(porcentagem));


// 'PIS/PASEP'
let pispasep = '12312345121';
console.info(maskBr.pispasep(pispasep));

let pessoa = fakerBr.pessoa();
console.info(pessoa, pessoa.nome);
console.info(pessoa.mae);
console.info(pessoa.pai);
console.info(pessoa.pai);
console.info(pessoa.endereco);

console.info(pessoa.usuario);
console.info(pessoa.senha);
console.info(pessoa.site);
console.info(pessoa.altura);
console.info(pessoa.peso);
console.info(pessoa.signo);
console.info(pessoa.tipoSanguineo);
console.info(validateBr.rg(pessoa.rg));
console.info(validateBr.email(pessoa.email));
console.info(validateBr.cpf(pessoa.cpf));
console.info(validateBr.telefone(pessoa.telefone));
console.info(validateBr.celular(pessoa.celular));
console.info(validateBr.data(pessoa.dataNascimento));



// let pispasep = fakerBr.pispasep();
// console.info(validateBr.pispasep(pispasep));


// 'PLACA'
let placa = 'ABC1234';
console.info(maskBr.placa(placa));
testGeneric('placa');
console.info(maskBr.placa('123'));
console.info(fakerBr.placa());
placa = fakerBr.placa();
console.info(validateBr.placa(placa), placa);

// 'Porcentagem'
let porcentagem = '80';
console.info(maskBr.porcentagem(porcentagem));
console.info(maskBr.porcentagem('65,10'));

// 'Renavam'
testGeneric('renavam');
let renavam = fakerBr.renavam();
console.info(validateBr.renavam(renavam), renavam);


// 'RG MG'
let rg = 'mg11164324';
console.info(maskBr.rg(rg));
testGeneric('rg');
console.info(maskBr.rg('123'));
console.info(fakerBr.rg());
rg = fakerBr.rg();
console.info(validateBr.rg(rg), rg);



let senha = fakerBr.senha();
console.info(validateBr.senha(senha), senha);
senha = fakerBr.senha({
  size: 20
})
console.info(validateBr.senha(senha), senha);



let site = fakerBr.site();
console.info(validateBr.site(site), site);

// 'SPED'
let sped = '313500350012';
console.info(maskBr.sped(sped));
// testGeneric('sped');
console.info(maskBr.sped('123'));
// let sped = fakerBr.sped();
// console.info(validateBr.sped(sped));


// 'Fixo'
let telefone = '3135003500';
console.info(maskBr.telefone(telefone));
console.info(maskBr.telefone('123'));
console.info(fakerBr.telefone());
telefone = fakerBr.telefone();
console.info(validateBr.telefone(telefone), telefone);
// '9 Digito'
telefone = '31988886565';
console.info(maskBr.telefone(telefone));


// 'Time'
let time = fakerBr.time();
console.info(validateBr.time(time));
console.info(validateBr.time('23:61'));
console.info(validateBr.time('33:58', { diario: true }));
// 
// console.info(fakerBr.time());
//   let time = fakerBr.time();
//   console.info(validateBr.time(time));
// 

// 'Titulo'
let titulo = fakerBr.titulo();
console.info(validateBr.titulo(titulo));
testGeneric('titulo');
console.info(maskBr.titulo('123'));
console.info(fakerBr.titulo());
titulo = fakerBr.titulo();
console.info(validateBr.titulo(titulo), titulo);



let veiculo = fakerBr.veiculo();
console.info(veiculo, veiculo.placa);
console.info(veiculo.chassi);
console.info(veiculo.marca);
console.info(veiculo.modelo);
console.info(veiculo.categoria);
console.info(veiculo.especie);
console.info(veiculo.restricao);
console.info(veiculo.tipo);
console.info(veiculo.carroceria);
console.info(veiculo.combustivel);

// 'Others'
// let currency  = fakerBr.currency();
// console.info(validateBr.currency(currency));
// let porcentagem  = fakerBr.porcentagem();
// console.info(validateBr.porcentagem(porcentagem));
// console.info(maskBr.porcentagem('123'));
// console.info(maskBr.time('123'));
// testGeneric('porcentagem');
// testGeneric('time');


