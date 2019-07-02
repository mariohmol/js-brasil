# js-brasil

Javascript Utils para Brasil (cpf, cnpj, inscrição estadual,  ...)


[![Build Status](https://travis-ci.org/mariohmol/js-brasil.svg?branch=master)](https://travis-ci.org/mariohmol/js-brasil)


`npm i js-brasil` 

 ou 

`<script src="js-brasil.js"></script>`

Módulos ValidateBR, MaskBR e FakerBR para nodejs ou browser.

Plugins para [Angular](https://github.com/mariohmol/ng-brazil) e 
[React](https://github.com/mariohmol/react-brazil)

Veja tudo em ação no Gerador Brasileiro - http://geradorbrasileiro.com/



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
console.log(cpf) // '123.456.789-00'
```

Typescript:
```ts
import { maskBr } from 'js-brasil';
const cpf = maskBr.cpf('12345678900'); 
console.log(cpf) // '123.456.789-00'
```

Browser:
```html
<script src="js-brasil.js"></script>
<script>
var cpf = jsbrasil.maskBr.cpf('12345678900'); 
console.log(cpf) // '123.456.789-00'
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


  it('Utils currencyToNumber Currency', () => {
    const currency = utilsBr.currencyToNumber(' R$ 1.234.456,44 ');
    expect(currency).to.be.equal(1234456.44);
  });
  it('Utils currencyToNumber Percentage', () => {
    const percent = utilsBr.currencyToNumber(' 1.234.456,44%');
    expect(percent).to.be.equal(1234456.44);

    const percent2 = utilsBr.currencyToNumber(' 12 % ');
    expect(percent2).to.be.equal(12);
  });


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



# Tipos Suportados

* CEP - http://geradorbrasileiro.com/cep.html
* CNPJ - http://geradorbrasileiro.com/cnpj.html
* CPF -  - http://geradorbrasileiro.com/cpf.html
* Inscricao Estadual -  - http://geradorbrasileiro.com/inscricaoestadual.html Todos os estados do Brasil
* RG  - http://geradorbrasileiro.com/rg.html
* Placa de carro - http://geradorbrasileiro.com/placa.html
* Telefone  - http://geradorbrasileiro.com/telefone.html
* Celular - http://geradorbrasileiro.com/celular.html
* Título de Eleitor  - http://geradorbrasileiro.com/titulo.html
* Processo da justiça - http://geradorbrasileiro.com/processo.html
* Outros: currency, percentage, time (data/hora), number - http://geradorbrasileiro.com/others.html


# Angular 

Utilize em angular 2 a 7 com: 

* ng-brazil - angular support for brazil apps -  https://github.com/mariohmol/ng-brazil

# React 

Utilize com React: 

* react-brazil - react support for brazil apps -  https://github.com/mariohmol/react-brazil


