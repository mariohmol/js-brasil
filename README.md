# js-brasil

Javascript Utils para Brasil (cpf, cnpj...)


[![Build Status](https://travis-ci.org/mariohmol/ng-brazil.svg?branch=master)](https://travis-ci.org/mariohmol/ng-brazil)


`npm i js-brasil` 

 ou 

`<script src="js-brasil.js"></script>`

# Validate

Verifique se os dados dos seus usuários são válidos

Javascript:
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


# Faker

Gere dados de teste usando tipos de dados brasileiro, similar o fakejs

Javascript:
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

* cep
* cnpj
* cpf
* currency
* inscricaoestadual - Todos os estados do Brasil
* percentage
* rg
* placa
* telefone
* time
* titulo
