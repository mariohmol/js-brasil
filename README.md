# js-brasil

Javascript Validate, Mask, Faker e Utils para Tipos do Brasil: 
Celular, CEP, Certidão, CNH, CNPJ, CNS, CPF, Currency, Date, ECT, EMAIL, Empresa, Endereço, Inscrição Estadual, 
Number, Percentage, Pessoa, PIS/PASEP, Placa de carro, Processo da justiça, RENAVAM , RG , 
Site, Telefone , Time (data/hora), Título de Eleitor , Veículo


[![Build Status](https://travis-ci.org/mariohmol/js-brasil.svg?branch=master)](https://travis-ci.org/mariohmol/js-brasil)


`npm i js-brasil` 

 ou 

`<script src="js-brasil.js"></script>`

Módulos ValidateBR, MaskBR e FakerBR para nodejs ou browser.

Plugins para :

* [Angular](https://github.com/mariohmol/ng-brazil) 
* [React](https://github.com/mariohmol/react-brazil)
* [Vue](https://github.com/mariohmol/vue-brazil)

Veja tudo em ação no Gerador Brasileiro - http://geradorbrasileiro.com/

Ou veja um exemplo de código live: https://jsfiddle.net/mariohmol/qnmxhwrb/6/




# Tipos Suportados

* Cartão de Crédito - http://geradorbrasileiro.com/cartao.html **(TODO #12)**
* Celular - http://geradorbrasileiro.com/celular.html
* CEP - http://geradorbrasileiro.com/cep.html
* Certidão - http://geradorbrasileiro.com/certidao.html
* CID - http://geradorbrasileiro.com/cid.html **(TODO #34)**
* CNAE - http://geradorbrasileiro.com/cnae.html **(TODO #16)**
* CNH - http://geradorbrasileiro.com/cnh.html
* CNPJ - http://geradorbrasileiro.com/cnpj.html
* CNS - http://geradorbrasileiro.com/cns.html
* Conta de Banco - http://geradorbrasileiro.com/contato.html **(TODO #13)**
* CPF - http://geradorbrasileiro.com/cpf.html
* CPF/CNPF - http://geradorbrasileiro.com/cpfcnpj.html **(TODO #15)**
* Currency - http://geradorbrasileiro.com/others.html
* Date - http://geradorbrasileiro.com/data.html
* ECT - http://geradorbrasileiro.com/ect.html
* EMAIL - http://geradorbrasileiro.com/email.html
* Empresa - http://geradorbrasileiro.com/empresa.html
* Endereço - http://geradorbrasileiro.com/endereco.html
* Inscrição Estadual - http://geradorbrasileiro.com/inscricaoestadual.html - Todos os estados do Brasil 
* IPTU - http://geradorbrasileiro.com/iptu.html **(TODO #26)**
* * São Paulo e Curitiba OK
* * Outras capitais (TODO)
* NIT - **(TODO #14)**
* Number - http://geradorbrasileiro.com/others.html
* Percentage - http://geradorbrasileiro.com/others.html
* Pessoa - http://geradorbrasileiro.com/pessoa.html
* PIS/PASEP - http://geradorbrasileiro.com/pis.html
* Placa de carro - http://geradorbrasileiro.com/placa.html
* Processo da justiça - http://geradorbrasileiro.com/processo.html
* RENAVAM  - http://geradorbrasileiro.com/renavam.html
* RG  - http://geradorbrasileiro.com/rg.html
* * SP/RJ - OK
* * Outros estado (TODO)
* Site - http://geradorbrasileiro.com/site.html
* SPED - http://geradorbrasileiro.com/sped.html **(TODO: #24)**
* Telefone  - http://geradorbrasileiro.com/telefone.html
* Time (data/hora) - http://geradorbrasileiro.com/others.html
* Título de Eleitor  - http://geradorbrasileiro.com/titulo.html
* Veículo - http://geradorbrasileiro.com/veiculo.html


# ValidateBR

Verifique se os dados dos seus usuários são válidos

Node:
```js
const { validateBr } = require('js-brasil');
const cpf = validateBr.cpf('123.456.789-00');
```

Typescript:
```ts
import { validateBr } from 'js-brasil';
const cpf = validateBr.cpf('123.456.789-00');
```

Browser:
```html
<script src="js-brasil.js"></script>
<script>
var cpf = jsbrasil.validateBr.cpf('123.456.789-00');
</script>  
```


# MaskBR

Formate seus dados com mascaras de tipos de dados brasileiros

Node:
```js
const { maskBr } = require('js-brasil');
const cpf = maskBr.cpf('12345678900'); 
console.info(cpf) // '123.456.789-00'
```

Typescript:
```ts
import { maskBr } from 'js-brasil';
const cpf = maskBr.cpf('12345678900'); 
console.info(cpf) // '123.456.789-00'
```

Browser:
```html
<script src="js-brasil.js"></script>
<script>
var cpf = jsbrasil.maskBr.cpf('12345678900'); 
console.info(cpf) // '123.456.789-00'
</script>  
```




# FakerBR

Gerador de dados de teste usando tipos de dados brasileiro, similar o fakerjs

Node:
```js
const { fakerBr } = require('js-brasil');
const cep = fakerBr.cep();
```

Typescript:
```ts
import { fakerBr } from 'js-brasil';
const cep = fakerBr.cep();
```

Browser:
```html
<script src="js-brasil.js"></script>
<script>
var cep = jsbrasil.fakerBr.cep();
</script>  
```


# UtilsBR

Métodos úteis para todos apps brasileiros, veja alguns exemplos

```ts
  const currency = utilsBr.currencyToNumber(' R$ 1.234.456,44 ');
  expect(currency).to.be.equal(1234456.44);
  const percent = utilsBr.currencyToNumber(' 1.234.456,44%');
  expect(percent).to.be.equal(1234456.44);
  const percent2 = utilsBr.currencyToNumber(' 12 % ');
  expect(percent2).to.be.equal(12);
```

Node:
```js
const { utilsBr } = require('js-brasil');
const currency = utilsBr.currencyToNumber(' R$ 1.234.456,44 '); // 1234456.44
const percent2 = utilsBr.currencyToNumber(' 12 % '); // 12
```

Typescript:
```ts
import { utilsBr } from 'js-brasil';
const currency = utilsBr.currencyToNumber(' R$ 1.234.456,44 ');
const percent2 = utilsBr.currencyToNumber(' 12 % '); // 12
```

Browser:
```html
<script src="js-brasil.js"></script>
<script>
var currency = jsbrasil.utilsBr.currencyToNumber(' 12 % '); // 12
</script>  
```

# Angular 

Utilize em angular 2 a 8 com: 

* ng-brazil - angular support for brazil apps -  https://github.com/mariohmol/ng-brazil

# React 

Utilize com React: 

* react-brazil - react support for brazil apps -  https://github.com/mariohmol/react-brazil

# API

Quer usar estes métodos através de uma API Web? Entre em contato conosco!


# Contribuir

Para ajudar veja nossa issues e use a seguinte documentação: [Contribuir](CONTRIBUTING.md)