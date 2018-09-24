# js-brasil

Javascript Utils para Brasil (cpf, cnpj, inscrição estadual,  ...)


[![Build Status](https://travis-ci.org/mariohmol/js-brasil.svg?branch=master)](https://travis-ci.org/mariohmol/js-brasil)


`npm i js-brasil` 

 ou 

`<script src="js-brasil.js"></script>`

Módilos ValidateBR, MaskBR e FakerBR para nodejs ou browser.


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

Gerador de dados de teste usando tipos de dados brasileiro, similar o fakejs

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
* Outros: currency, percentage, time (data/hora) - http://geradorbrasileiro.com/others.html


# Angular 

Utilize em angular 6 com: 

* ng-brazil - angular support for brazil apps -  https://github.com/mariohmol/ng-brazil

