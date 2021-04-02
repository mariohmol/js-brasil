# CONTRIBUTING

Fork este projeto , clone no seu computador e instale as libs locais:

`npm i`

Installe lib globais:

 `npm i -g onchange browserify http-server`
 
 Você pode executar o `npm run dist` para gerar o js-brasil.js.
 
 Se executar o `npm run demo` para ver a página web de demonstração.
 Esta página é a mesma da http://geradorbrasileiro.com/.
 Para acessar os fonte dessa página veja o diretório `/docs`. O ideal é que toda nova feature esteja representada nessa página, que serve como vitrine das features.
 
 ## Desenvolvimento

 Ao desenvolver novas features ou bug fixes, a ideia é usar através dos testes. 
 Faz uma mudança, cria um teste e verifica se passa. Para isso execute:
 `npm run watch:test`
 
 ## Testes
 
 Todos os testes devem passar e novas features devem vir com testes também, para rodar execute:
 
 `npm run test`
