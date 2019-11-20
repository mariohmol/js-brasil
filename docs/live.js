let { fakerBr, validateBr, maskBr } = require('./js-brasil');

let testGeneric = (key) => {
  let val = fakerBr[key]();
  val = val.replace(/[^\d\w]+/g, '');
  let valMask = maskBr[key](val);
  console.log(validateBr[key](valMask));
}


// 'AIH'
let aih = '3519234143128';
console.log(maskBr.aih(aih));
aih = fakerBr.aih();
console.log(validateBr.aih(aih), aih);

// 'cartaocredito - TODO'
let cartaocredito = '12312345121';
// console.log(maskBr.cartaocredito(cartaocredito));
// testGeneric('cartaocredito');

// 'celular'
let celular = '31999915454';
console.log(maskBr.celular(celular));
testGeneric('celular');
celular = fakerBr.celular();
console.log(validateBr.celular(celular), celular);

// 'CEP'
let cep = '30456098';
console.log(maskBr.cep(cep));
testGeneric('cep');
console.log(maskBr.cep('123'));
console.log(fakerBr.cep());
cep = fakerBr.cep();
console.log(validateBr.cep(cep), cep);

// 'Certidão'
let certidao = '10453901552013100012021000012321';
let mask = maskBr.certidao(certidao);
console.log(mask);
certidao = fakerBr.certidao();
console.log(validateBr.certidao(certidao), certidao);


// 'CHASSI'
let chassi = '9BWZZZ377VT004251';
console.log(maskBr.chassi(chassi));
testGeneric('chassi');
chassi = fakerBr.chassi();
console.log(validateBr.chassi(chassi), chassi);


// 'cnae - TODO'
let cnae = '12312345121';
// console.log(maskBr.cnae(cnae));
// testGeneric('cnae');
cnae = fakerBr.cnae();
console.log(validateBr.cnae(cnae), cnae);


// 'CNH'
let cnh = '99739507132';
console.log(maskBr.cnh(cnh));
testGeneric('cnh');
cnh = fakerBr.cnh();
console.log(validateBr.cnh(cnh), cnh);


// 'CNPJ'
let cnpj = '83529443183182';
console.log(maskBr.cnpj(cnpj));
console.log(maskBr.cnpj('123'));
testGeneric('cnpj');
console.log(fakerBr.cnpj());
cnpj = fakerBr.cnpj();
console.log(validateBr.cnpj(cnpj), cnpj);


// 'CNS'
let cns = '755845919762262';
console.log(maskBr.cns(cns));
cns = fakerBr.cns();
console.log(validateBr.cns(cns), cns);



let contabanco = fakerBr.contabanco();
console.log(validateBr.contabanco(contabanco), contabanco);


// 'CPF'
let cpf = '92044202271';
console.log(maskBr.cpf(cpf));
testGeneric('cpf');
console.log(maskBr.cpf('123'));
cpf = fakerBr.cpf();
console.log(validateBr.cpf(cpf), cpf);


// 'cpfcnpj - TODO'
let cpfcnpj = '12312345121';
// console.log(maskBr.cpfcnpj(cpfcnpj));
// testGeneric('cpfcnpj');
cpfcnpj = fakerBr.cpfcnpj();
console.log(validateBr.cpfcnpj(cpfcnpj), cpfcnpj);


// 'DATA'
let data = '01/12/1980';
console.log(maskBr.data(data));
testGeneric('data');
data = fakerBr.data();
console.log(validateBr.data(data), data);
data = fakerBr.data({
  idadeMin: 18,
  idadeMax: 40
});

console.log(validateBr.data(data), data);


// 'ECT'
let ect = '315296490';
console.log(maskBr.ect(ect));
testGeneric('ect');
ect = fakerBr.ect();
console.log(validateBr.ect(ect), ect);



let email = fakerBr.email();
console.log(validateBr.email(email), email);

email = fakerBr.email({
  nome: 'mario mol',
  empresa: 'JS Brasil',
})

console.log(validateBr.email(email), email);



let empresa = fakerBr.empresa();
console.log(empresa);
console.log(validateBr.cnpj(empresa.cnpj));
console.log(validateBr.telefone(empresa.telefone));
console.log(validateBr.telefone(empresa.celular));
console.log(validateBr.email(empresa.email));
console.log(validateBr.data(empresa.dataAbertura));
// console.log(validateBr.inscricaoestadual(empresa.inscricaoestadual, empresa.endereco.estadoSigla));
console.log(empresa.endereco);
console.log(empresa.inscricaoestadual);



let endereco = fakerBr.endereco();
console.log(endereco.cep);
console.log(endereco.logradouro);
console.log(endereco.complemento);
console.log(endereco.numero);
console.log(endereco.bairro);
console.log(endereco.cidade);
console.log(endereco.estado);
console.log(endereco.estadoSigla);



// 'Inscricao estadual'
let estado = 'mg';
console.log(maskBr.inscricaoestadual(estado, '123'));
let inscricaoestadual = fakerBr.inscricaoestadual(estado);
console.log(validateBr.inscricaoestadual(inscricaoestadual, estado));

// console.log(fakerBr.inscricaoestadual());
// let inscricaoestadual = fakerBr.inscricaoestadual();
// console.log(validateBr.inscricaoestadual(inscricaoestadual));



// 'iptu - TODO'
let iptu = '12312345121';
// console.log(maskBr.iptu(iptu));
// testGeneric('iptu');
// let iptu = fakerBr.iptu();
// console.log(validateBr.iptu(iptu));



// 'Moeda'
let currency = 'R$ 5.103,94';
let currencyText = '5.103,94';
let currencyNumber = 5103.94;
let currencyNoDecimals = 'R$ 5.103';
let currencyTextNoDecimals = '5.103';
let currencyNumberNoDecimals = 5103;
let currencyNumberMany = 5103.9423234;
console.log(maskBr.currency(currencyNoDecimals));
console.log(maskBr.currency(currencyTextNoDecimals));
console.log(maskBr.currency(currencyNumberNoDecimals));
console.log(maskBr.currency(currency));
console.log(maskBr.currency(currencyNumber));
console.log(maskBr.currency(currencyText));
console.log(maskBr.currency(currencyNumberMany));
// testGeneric('currency');
// console.log(maskBr.currency('123'));
// console.log(maskBr.currency(123));
console.log(fakerBr.currency());
// let currency = fakerBr.currency();
// console.log(validateBr.currency(currency));
currencyNumber = fakerBr.currencyNumber();
console.log(validateBr.currency(currencyNumber), currencyNumber);


// 'Número'
let number = '1234,10';
console.log(maskBr.number(number));
console.log(maskBr.number(1234.10));
// let number = fakerBr.number();
// console.log(validateBr.number(number));

// console.log(fakerBr.porcentagem());
// let porcentagem = fakerBr.porcentagem();
// console.log(validateBr.porcentagem(porcentagem));


// 'PIS/PASEP'
let pispasep = '12312345121';
console.log(maskBr.pispasep(pispasep));

let pessoa = fakerBr.pessoa();
console.log(pessoa, pessoa.nome);
console.log(pessoa.mae);
console.log(pessoa.pai);
console.log(pessoa.pai);
console.log(pessoa.endereco);

console.log(pessoa.usuario);
console.log(pessoa.senha);
console.log(pessoa.site);
console.log(pessoa.altura);
console.log(pessoa.peso);
console.log(pessoa.signo);
console.log(pessoa.tipoSanguineo);
console.log(validateBr.rg(pessoa.rg));
console.log(validateBr.email(pessoa.email));
console.log(validateBr.cpf(pessoa.cpf));
console.log(validateBr.telefone(pessoa.telefone));
console.log(validateBr.celular(pessoa.celular));
console.log(validateBr.data(pessoa.dataNascimento));



// let pispasep = fakerBr.pispasep();
// console.log(validateBr.pispasep(pispasep));


// 'PLACA'
let placa = 'ABC1234';
console.log(maskBr.placa(placa));
testGeneric('placa');
console.log(maskBr.placa('123'));
console.log(fakerBr.placa());
placa = fakerBr.placa();
console.log(validateBr.placa(placa), placa);

// 'Porcentagem'
let porcentagem = '80';
console.log(maskBr.porcentagem(porcentagem));
console.log(maskBr.porcentagem('65,10'));

// 'Renavam'
testGeneric('renavam');
let renavam = fakerBr.renavam();
console.log(validateBr.renavam(renavam), renavam);


// 'RG MG'
let rg = 'mg11164324';
console.log(maskBr.rg(rg));
testGeneric('rg');
console.log(maskBr.rg('123'));
console.log(fakerBr.rg());
rg = fakerBr.rg();
console.log(validateBr.rg(rg), rg);



let senha = fakerBr.senha();
console.log(validateBr.senha(senha), senha);
senha = fakerBr.senha({
  size: 20
})
console.log(validateBr.senha(senha), senha);



let site = fakerBr.site();
console.log(validateBr.site(site), site);

// 'SPED'
let sped = '313500350012';
console.log(maskBr.sped(sped));
// testGeneric('sped');
console.log(maskBr.sped('123'));
// let sped = fakerBr.sped();
// console.log(validateBr.sped(sped));


// 'Fixo'
let telefone = '3135003500';
console.log(maskBr.telefone(telefone));
console.log(maskBr.telefone('123'));
console.log(fakerBr.telefone());
telefone = fakerBr.telefone();
console.log(validateBr.telefone(telefone), telefone);
// '9 Digito'
telefone = '31988886565';
console.log(maskBr.telefone(telefone));


// 'Time'
let time = fakerBr.time();
console.log(validateBr.time(time));
console.log(validateBr.time('23:61'));
console.log(validateBr.time('33:58', { diario: true }));
// 
// console.log(fakerBr.time());
//   let time = fakerBr.time();
//   console.log(validateBr.time(time));
// 

// 'Titulo'
let titulo = fakerBr.titulo();
console.log(validateBr.titulo(titulo));
testGeneric('titulo');
console.log(maskBr.titulo('123'));
console.log(fakerBr.titulo());
titulo = fakerBr.titulo();
console.log(validateBr.titulo(titulo), titulo);



let veiculo = fakerBr.veiculo();
console.log(veiculo, veiculo.placa);
console.log(veiculo.chassi);
console.log(veiculo.marca);
console.log(veiculo.modelo);
console.log(veiculo.categoria);
console.log(veiculo.especie);
console.log(veiculo.restricao);
console.log(veiculo.tipo);
console.log(veiculo.carroceria);
console.log(veiculo.combustivel);

// 'Others'
// let currency  = fakerBr.currency();
// console.log(validateBr.currency(currency));
// let porcentagem  = fakerBr.porcentagem();
// console.log(validateBr.porcentagem(porcentagem));
// console.log(maskBr.porcentagem('123'));
// console.log(maskBr.time('123'));
// testGeneric('porcentagem');
// testGeneric('time');


