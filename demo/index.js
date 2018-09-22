window.onload = () => {
  makeHeader();

  componentCustom();
}


function componentCustom() {
  const dataId = document.querySelector('body').getAttribute('data-id');
  switch (dataId) {
    default:
      generalAction(dataId);
      break;
  }
}


function generalAction(dataId) {
  const validatedAction = document.querySelector('#validatedAction');
  const generatedAction = document.querySelector('#generatedAction');

  generatedAction.onclick = () => {
    const generatedInput = document.querySelector('#generated');
    generatedInput.value = jsbrasil.fakerBr[dataId]();
  }

  validatedAction.onclick = () => {
    const validatedInput = document.querySelector('#validated');
    const masked = jsbrasil.maskBr[dataId](validatedInput.value);
    const validated = jsbrasil.validateBr[dataId](validatedInput.value);

    document.querySelector('#validatedResult').classList.remove('hidden');

    if (validated) {
      document.querySelector('#valicon').innerHTML = 'thumb_up';
      document.querySelector('#valtext').innerHTML = 'Parabéns, esta informação tem a formatação válida!';
      document.querySelector('#masked').innerHTML = masked;
    } else {
      document.querySelector('#valicon').innerHTML = 'thumb_down';
      document.querySelector('#valtext').innerHTML = 'Esta informação NÃO está correta!';
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
        <li><a href="inscricaostadual.html">inscrição estadual</a></li>
        <li><a href="placa.html">placa</a></li>
        <li><a href="rg.html">rg</a></li>
        
      </ul>
    </div>
  </nav>

 `;

  document.querySelector('header').innerHTML = header;


}
