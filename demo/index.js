window.onload = () => {
  makeHeader();

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
  const validatedAction = document.querySelector('#validatedAction'+type);
  const generatedAction = document.querySelector('#generatedAction'+type);

  generatedAction.onclick = () => {
    console.log(`generatedAction.onclick`)
    const generatedInput = document.querySelector('#generated'+type);
    generatedInput.value = jsbrasil.fakerBr[dataId]();
  }

  validatedAction.onclick = () => {
    console.log(`validatedAction.onclick`)
    const validatedInput = document.querySelector('#validated'+type);
    const masked = jsbrasil.maskBr[dataId](validatedInput.value);
    const validated = jsbrasil.validateBr[dataId](validatedInput.value);

    document.querySelector('#validatedResult'+type).classList.remove('hidden');

    if (validated) {
      document.querySelector('#valicon'+type).innerHTML = 'thumb_up';
      document.querySelector('#valtext'+type).innerHTML = 'Parabéns, '+ masked + ' tem a formatação válida!';
    } else {
      document.querySelector('#valicon'+type).innerHTML = 'thumb_down';
      document.querySelector('#valtext'+type).innerHTML = 'Esta informação NÃO está correta!';
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
