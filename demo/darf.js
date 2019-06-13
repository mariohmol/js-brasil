const DARFTest = {
  nome: 'MARIO DA SILVA',
  cidade: 'BELO HORIZONTE - MG',
  periodo: '01/01/2019',
  cpf: '915.062.303-69',
  codreceita: '5029',
  vencimento: '01/01/2019',
  valorPrincipal: '12,33',
  multa: '0,12',
  juros: '0,01'
}

const generateHTML = (data = DARFTest) => {

  css = genCSS;

  const cardOne = makeCard(data);
  data.via = 2;

  const cardTwo = makeCard(data);

  return `
  <style>
    ${css}
  </style>
  <div class="paginasemquebra">
  
    <div class="container">
      ${cardOne}
    </div>
    <div class="separator1"></div>
    <div class="container">
      ${cardTwo}
    </div>
    <div class="separator1"></div>
  
    <div class="observacaorodape1">DARF emitido em duas vias. Recorte nas linhas tracejadas e efetue o pagamento na rede
      bancária autorizada.</div>
  
    <div class="observacaorodape2">DARF impresso sem código de barras por conter número de referência ou acréscimo de
      multa e/ou juros ou ano do período de apuração e/ou vencimento anterior a 2014 ou posterior a 2023.</div>
  
  </div>`;
}

const yyyymmdd = function (date) {
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [date.getFullYear(),
  (mm > 9 ? '' : '0') + mm,
  (dd > 9 ? '' : '0') + dd
  ].join('');
};

const parseMoney = function(money){
  if(money){
    return parseFloat(money.replace(/\./g, "").replace(/\s/g, "").replace(",", "."));
  }
  return 0;
}
/**
 * 
 * @param {*} nome MARIO SILVA
 * @param {*} cidade BELO HORIZONTE - MG
 * @param {*} periodo 01/01/2019
 * @param {*} cpf 915.062.303-69
 * @param {*} codreceita 5029
 * @param {*} vencimento 01/01/2019
 * @param {*} valorPrincipal 12,33
 * @param {*} multa 0,12
 * @param {*} juros 0,01
 * @param {*} data 12/06/2019 21:38:43
 */
const makeCard = (dados) => {

  // required
  const { nome, cidade, periodo,
    cpf,
    codreceita,
    vencimento,
    valorPrincipal,
    multa,
    juros,
  } = dados;

  const total = (parseMoney(valorPrincipal) + parseMoney(multa) + parseMoney(juros)).toLocaleString(); //  12,46

  //optional
  const numreferencia = dados.numreferencia || '';
  const appversion = dados.appversion || 'brasiljs versão 1.7';
  const data = dados.data || yyyymmdd(new Date()); // 12/06/2019 21:38:43
  const via = dados.via || 1;

  return `<div class="aprovado">Aprovado pela IN/RFB nº 736/07</div>
  <div class="via">${via}ª via</div>
  <div class="darf_left">
    <div><img class="logo_republica" src="./images/brasil.gif" alt="brasil.gif"></div>
    <div class="texto_ministerio1">MINISTÉRIO DA FAZENDA</div>
    <div class="texto_ministerio2">SECRETARIA DA RECEITA FEDERAL DO BRASIL</div>
    <div class="texto_ministerio3_preto">Documento de Arrecadação de Receitas Federais</div>
    <div class="texto_ministerio4_preto">DARF</div>
    <div class="campo01">
      <div class="campo01_left">
        <div class="celula1">&nbsp;01</div>
      </div>
      <div class="campo01_right">
        <div class="celula2">NOME / TELEFONE</div>
        <div class="celula2">${nome} </div>
        <div class="celula2"> </div>
      </div>
    </div>
    <div class="campo_observacao">

      <div>Domicílio tributário informado: ${cidade}</div>
      <div><span class="observacaodestaque">NÃO RECEBER COM RASURAS</span></div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
    <div class="programachamador">${appversion}
    </div>
    <div class="datahora">${data}
    </div>
  </div>
  <div class="darf_right">
    <div class="darf_right_left">
      <div class="celula4">&nbsp;02</div>
      <div class="celula4">&nbsp;03</div>
      <div class="celula4">&nbsp;04</div>
      <div class="celula4">&nbsp;05</div>
      <div class="celula4">&nbsp;06</div>
      <div class="celula4">&nbsp;07</div>
      <div class="celula4">&nbsp;08</div>
      <div class="celula4">&nbsp;09</div>
      <div class="celula4">&nbsp;10</div>
    </div>
    <div class="darf_right_middle">
      <div class="celula5">PERÍODO DE APURAÇÃO</div>
      <div class="celula5">NÚMERO DO CPF OU CNPJ</div>
      <div class="celula5">CÓDIGO DA RECEITA</div>
      <div class="celula5">NÚMERO DE REFERÊNCIA</div>
      <div class="celula5">DATA DE VENCIMENTO</div>
      <div class="celula5">VALOR PRINCIPAL</div>
      <div class="celula5">VALOR DA MULTA</div>
      <div class="celula5">VALOR DOS JUROS E/OU ENCARGOS DL - 1025/69</div>
      <div class="celula5">VALOR TOTAL</div>
    </div>
    <div class="darf_right_right">
      <div class="celula6">${periodo}&nbsp;</div>
      <div class="celula6">${cpf}&nbsp;</div>
      <div class="celula6">${codreceita}&nbsp;</div>
      <div class="celula6">${numreferencia} &nbsp;</div>
      <div class="celula6">${vencimento}&nbsp;</div>
      <div class="celula6">${valorPrincipal}&nbsp;</div>
      <div class="celula6">${multa}&nbsp;</div>
      <div class="celula6">${juros}&nbsp;</div>
      <div class="celula6">${total}&nbsp;</div>
    </div>
    <div class="celula7">&nbsp;11</div>
    <div class="celula8">AUTENTICAÇÃO BANCÁRIA (Somente nas 1ª e 2ª vias)</div>
  </div>`
}

const genCSS = `body {
  background: #FFFFFF;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
}

.paginaquebra {
  left: 5px;
  margin-bottom: 300px;
  top: 0px;
  width: 680px;
}

.paginasemquebra {
  left: 5px;
  margin-bottom: 300px;
  top: 0px;
  width: 680px;
}

.container {
  min-height: 356px;
  left: 0px;
  position: relative;
  top: 15px;
  width: 100%;
}

.separator1,
.separator2 {
  border-top: 1px dashed #000000;
  height: 1px;
  left: 0px;
  padding-bottom: 20px;
  position: relative;
  top: 30px;
  width: 100%;
}

.separator2 {
  height: 180px;
  padding-bottom: 10px;
  top: 15px;
}

.aprovado,
.via,
.programachamador,
.datahora {
  font-size: 8px;
  font-weight: bold;
  position: absolute;
}

.aprovado {
  left: 3px;
  top: 0px;
}

.via {
  right: 3px;
  top: 0px;
}

.programachamador {
  bottom: 3px;
  left: 3px;
}

.datahora {
  bottom: 3px;
  right: 3px;
}

.observacaorodape1 {
  position: relative;
  left: 0px;
  top: 15px;
  padding: 5px;
  width: 670px;
  border: 1px solid #000000;
}

.observacaorodape2 {
  position: relative;
  left: 0px;
  top: 15px;
  padding: 5px;
  width: 670px;
}

.darf_left {
  position: absolute;
  left: 0px;
  top: 15px;
  border: 1px solid #000000;
  height: 341px;
  width: 340px;
}

.darf_right {
  position: absolute;
  top: 15px;
  left: 50%;
  border-top: 1px solid #000000;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  height: 341px;
  width: 340px;
}

.darf_right_left {
  position: absolute;
  top: 0px;
  left: 1px;
  height: 279px;
  width: 8%;
}

.darf_right_middle {
  position: absolute;
  top: 0px;
  left: 8%;
  height: 279px;
  width: 42%;
}

.darf_right_right {
  position: absolute;
  top: 0px;
  left: 50%;
  height: 100%;
  width: 50%;
}

.logo_republica {
  position: absolute;
  left: 5px;
  top: 5px;
  width: 65px;
  height: 76px;
}

.texto_ministerio1 {
  position: absolute;
  left: 77px;
  top: 15px;
  font-size: 16px;
  font-weight: bold;
}

.texto_ministerio2 {
  position: absolute;
  left: 77px;
  top: 40px;
  font-size: 11px;
  font-weight: bold;
  width: 275px;
}

.texto_ministerio3_preto {
  position: absolute;
  left: 77px;
  top: 65px;
  font-size: 10px;
  font-weight: bold;
}

.texto_ministerio3_simples {
  position: absolute;
  left: 10%;
  top: 80px;
  width: 80%;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
}

.texto_ministerio4_preto {
  position: absolute;
  left: 77px;
  top: 100px;
  font-size: 16px;
  font-weight: bold;
}

.texto_ministerio4_simples {
  position: absolute;
  left: 0px;
  top: 125px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

.campo01 {
  position: absolute;
  left: 0px;
  top: 154px;
  height: 50px;
  width: 100%;
  text-align: justify;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
}

.campo01_left {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 8.75%;
  font-size: 14px;
  font-weight: bold;
}

.campo01_right {
  position: absolute;
  top: 2px;
  left: 30px;
  width: 91.25%;
}

.campo_observacao {
  position: absolute;
  font-size: 9px;
  left: 5%;
  top: 207px;
  width: 90%;
  text-align: left;
}

.celula4 {
  height: 31px;
  width: 100%;
  border-bottom: 1px solid #000000;
  font-size: 14px;
  font-weight: bold;
}

.celula5 {
  height: 31px;
  width: 100%;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
}

.celula6 {
  height: 31px;
  width: 100%;
  border-bottom: 1px solid #000000;
  font-size: 14px;
  font-weight: bold;
  text-align: right;
}

.celula7 {
  position: absolute;
  left: 0px;
  top: 289px;
  width: 8.57%;
  font-size: 14px;
  font-weight: bold;
  padding: 2px;
}

.celula8 {
  position: absolute;
  left: 8.57%;
  top: 289px;
  padding: 2px;
}

.observacaodestaque {
  font-size: 12px;
  font-weight: bold;
}

.codigobarras {
  position: relative;
  left: 0px;
  top: 10px;
  height: 76px;
  width: 430px;
}

.codigo {
  position: relative;
  top: 10px;
  height: 15px;
  padding-left: 15px;
  padding-right: 13px;
}

.barras {
  position: absolute;
  left: 5px;
  bottom: 0px;
  height: 50px;
  width: 100%;
}

.erro {
  position: absolute;
  botton: 0px;
  top: 0px;
}

.bf {
  position: relative;
  height: 50px;
  width: 1px;
  border: 0px;
}

.bl {
  position: relative;
  height: 50px;
  width: 3px;
  border: 0px;
}`;