window.onload = () => {
  makeHeader();
  makeFooter();
  componentCustom();
}

function componentCustom() {
  const dataId = document.querySelector('body').getAttribute('data-id');
  switch (dataId) {
    default:
      generalAction(dataId, '');
      break;
  }
}


function generalAction(dataId, type) {
  const validatedAction = document.querySelector('#validatedAction' + type);
  const generatedAction = document.querySelector('#generatedAction' + type);
  const generatedObjectAction = document.querySelector('#generatedObjectAction' + type);

  if (generatedAction) {
    generatedAction.onclick = () => {
      console.log(`generatedAction.onclick`)
      const generatedInput = document.querySelector('#generated' + type);
      generatedInput.value = jsbrasil.fakerBr[dataId]();
    }
  }


  if(generatedObjectAction){
    generatedObjectAction.onclick = () => {
      console.log(`generatedAction.onclick`)
      const generatedInput = document.querySelector('#generated' + type);
      const data = jsbrasil.fakerBr[dataId]();
      console.log(data);
      for(key in data){
        document.querySelector('#' + key).value = data[key];
      }
    }
  }



  if (validatedAction) {
    validatedAction.onclick = () => {
      console.log(`validatedAction.onclick`)
      const validatedInput = document.querySelector('#validated' + type);
      const masked = jsbrasil.maskBr[dataId] ? jsbrasil.maskBr[dataId](validatedInput.value) : validatedInput.value;
      const validated = jsbrasil.validateBr[dataId](validatedInput.value);

      document.querySelector('#validatedResult' + type).classList.remove('hidden');

      if (validated) {
        document.querySelector('#valicon' + type).innerHTML = 'thumb_up';
        document.querySelector('#valtext' + type).innerHTML = 'Parabéns, ' + masked + ' tem a formatação válida!';
      } else {
        document.querySelector('#valicon' + type).innerHTML = 'thumb_down';
        document.querySelector('#valtext' + type).innerHTML = 'Esta informação NÃO está correta!';
      }
    }
  }

}
function makeHeader() {
  const header = `
  <nav>
    <div class="nav-wrapper container">
      <a href="/" class="brand-logo">
        Gerador Brasileiro
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="cpf.html">cpf</a></li>
        <li><a href="cnpj.html">cnpj</a></li>
        <li><a href="inscricaoestadual.html">inscrição estadual</a></li>
        <li><a href="placa.html">placa</a></li>
        <li><a href="rg.html">rg</a></li>
        <li><a href="renavam.html">renavam</a></li>
        <li><a href="telefone.html">tel</a></li>
        <li><a href="telefone.html">cel</a></li>
        <li><a href="processo.html">processo</a></li>
        <li><a href="titulo.html">titulo</a></li>
      </ul>
    </div>
  </nav>

 `;

  document.querySelector('header').innerHTML = header;


}

function makeFooter() {
  const footer = `
 
  <nav>
    <div class="nav-wrapper container">
      <a href="/" class="brand-logo">
        Quer usar uma API?
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="mailto:mariohmol@gmail.com">Entre em contato conosco</a></li>
      </ul>
    </div>
  </nav>
  <div style="text-align: center; background-color: white; color: black; font-size: 10px;">
    Todas as bibliotecas aqui são fornecidas para ajudar o desenvolvedor e o seu uso é de total responsabilidade de quem o está usando.
  </div>
 `;
  document.querySelector('footer').innerHTML = document.querySelector('footer').innerHTML + footer;
}
