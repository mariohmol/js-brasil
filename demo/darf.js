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
    <div>${logo}</div>
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
const logo = `<img class="logo_republica" src="data:image/gif;base64,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`+
`RSaD155v3mmjW/roXtsvakL222/1y8jmvs67iE5wi+gaI7FdaqpQ3fVXd/yiEx4Yl8E2b5SpyEESibmxAZpgALnpQmcztjpQC53t4JJXIDd2hwvEV6ihfNxEohax72Vzdq1W1WFxWaToNeS6FlvnzgxG3VTldhR1idan1e27dJ2bjHf4uZjCEaIy6Xd0hX0gIZY1YFj697L/4onEJtfwhsu2LeVSp0gzJtzWaRaorRG+0UOlW7RfvLgtNz5G/BVRlKZUcDBV3UFaBxTTpyZviBOrXKC1+m5efvGojVrydcObaWXOo05tJOgrydAwBZUexinq2W9anOpxpXN51dXsl2NZ4NgmuNLRTh7TDjRsWB55SslOrHA5Tc10D/xrxa6/W3mduXleJZoFz3hS3rvxkBf8Lj9i5chb/j9bj+tfL8/5ShmTgo1OJW1PvL6YZLvzikP1WQmqcMgtNJyn9yHqifl6j02PdkmH7drKaXuNzh6btVejNsl96Ig6x69iN6CEaff7X4oV9KhcHT0PjmAuMQbvPvcMDTeuKPrmn/b5/Mak9H3X7iuJs7xFrGflvf/5/kWy1m1MUfdCJmoPo7+fzz//O/t9hHyGBr1J64NC7CN6PlNHMzZ96ZRX+4dGYXZQEqYcpJJvRFJBhUKAb2ZxsHc0BWh2B9WBaNdhUJNzdLZBwqMkDkdfFnh3uDVR+2ZmZcdxv6djZrJqr2V45VdzOhRisdJkulYmLvh30Td7N/h4hxRKM4hLuEFat6ZkgGOAHaRlvDNfhDdbMgUsgAVwjgVtybdpIgZt1dczh9NWptZ9tDeG4ed0RDchmbdTctOEN7dUIqhnK8ZvkiZ5fDVnNqhYcAhnEuUphSZVHBZuxOZQEzZ5wlRGe0VgbKeHYyY3friCwENRWliIxAaE82KJZBhIWqNQPliID2duWiiAlnRy/1soPw2Habh3ZmmEVF2ngYZoS8JlWaQ2VJX4WbX3Mij3SBXGhBmINqrYXo6GUmm1ixnHiYEBhiH1eJFlZMayYMS4jNvFc5d2if5nRKkCc2oSi2YoGlIGOYB4dBd3hJ5laIT3jV54hgXCONoFMKnXWZYzjuZEcMK3hHuobdWFh9c1UhMjjpnYYmGEiYm3eHlTdbYyNljkixcIiwJnkPBzRS7TjmEXT9qYQbLnYd1EhZRHWYbVj0aXErQ1eM3SQETEgCK5icf2KblFbWmnWWiWj1XUJ102hCNjkIQ2j61Yf4zmOjnpVEX4j+TIRn8kXClZNvm4P+BWfzSFjRhIbbHEaf86BF2g8lN19m3VRGuhNVPmx1PamDTuyCmVpZIDKZHOhTPHxjkYmV5zJmcISY6GE1GjyIZamVNs84KiJ1vEOGMWiTomqDYA0l+IZ2jil3ZLw1Lzk1s39JQO9mBK0VPhiCMeeDOTyF8KIobr95V5d1hYeZK75U4e5JA/iS0FWWPkhJZ7Nm1gOXCm6XHw5TrINo23AZOaB4ciuRXwqGRd2F92Q5kc6Yy5+VJ0iWPSw0PxRzQMWG1WtknWd20z45X1xWr80o2x54yKqI5CFI0whEec5CwLiYX3woFfBi9yNZcOQ2Vnk42ANocjOIFKw1l3ZZsCeZQYOXoIJjjhiViVcYf/pymYI4JhKUZk6mFgl3WM2VRl0tSd07lhdal8+5iVbsVjpocpI+lfdQV/CniPnZlMoPlOLOhe22hv+/meS6Zyu3N1f2mb35mg7Badd7dE9CY164SGr/gvSYmOYHhGGql7HZeR8gigvKNEi4WJJQNjdmWSa1mSg9VQeLhgNnmAOkqEOPZrT0aUXYOI71dScwdif9aJLrdZVcJ88xififds7FiPIAhnv2g9+Lg3CQVoUEeYP+iiMzim9Ihfh6ZRymlu4AeQR0ppSqmJm5iadlqd0bV9IAlHFYl84GaXKjh144aOFPY2k3ZMSCecTyRAkfKYMkiESuVy8idrMgeMBSZl2XMaYJT1SpZofNH4qW6iNaO5pL41ilZHIaeadapYqJ65oEDaZmpnorcpaR92qF14keGEncRVfP1Jqwc2YZhlgg1qVWBFPFaxXQZ3eDP6UW5XWNdpQ7cGf+QJQhzqpGqSbECorBsGTbzKXZrpkzuKrTuRg37oPijWrTTaVx1DY78RherGa8WTgE4JcbnobnUYm/Pxq7UiVC6lm8xpnqylnnp6VQmZX5umhN4mZj/piC/ir6FHh3yWXckWSNIpYzR6jeATHau1HUiJReaTjiWZmJbhrj/3f7UYgXH/UkrGmXMH+mEPm62rZS+2+LIX1GUy6nlc6LMtOJLW+ZXVUln+aKqJpp25OKruhJwUClA2yqXjY7GMZEVLOz8Vl2QGal0kpn0VuEVp+WrMpkkXArCX6k1jdEBbK1fzKaypNrA2RV08q2M9KUjiNmTkdovWKKNiJZfIVpnvVnS8aXOoCYG3Y5Qdm5Ti+j2NmofviDlkBJ4pBLBrGbDxhlWWuYNDOVl+C52B+iSRC4+1uGr1ubOBWaRGG6LbOaZ/p04VhrpU22AnunQU0bZ6e3x5m3TWZoVN+rrgZD6qg51aJysit5yZFkR4R4r06bvhRqlWGk3quqnFGERqS0+D1Dzv/zpgC3edJMdOmkSKjxhYo3W5yaoiXLuua6qYbhlc2wctwrqfycuLujhNwOmvSfopbWlpLCSl7Ks48ApzUqRK9lpJL/lkogk7s2u47Oit2gF0NzpKMOVq2JV+RGt3igeAsie8iHaAPRiUUufAvUS6YinB8VcxAXmxHayfJEuXmEu9mEm4y/oqqtS0mUtW+hq6gJemDPtNpZFys/ubfXpN4jSs0ijEBDSFZUGe2zqZR9SUaweaLVhjcdZ1Ldp4zAqfJdWY5VlqLOJ/01FsYzx3dgqKtLuAYUbFV+hwPqzBzZiyUEhI1KF0XMO4alycFnvCyuhJ+vd2int9hZR3JJrHLv88xt/1wBjnUQvMvYzsuDiqtYbMkv5LmMvmiNbbyGLExZLqv74GppNMyUGMyExcyC9Zl8CbjDEcysBnx4YXkKoKvKw8yx15iqZDw7Scy8N2l7rcy+yVn74czGyUesJczE0XnZZpzMqsofrHwq66zMV8gyGKqNAczKAXmf52LMhczRu5zVOlUxYsnEZpNNfLzQoLymQafGDnOOMXkbtszn4KRoKpza3Xcb3Isrkrs/Dsp4zaU+TsR5dlfMR3rsWHx/v8oKGHdZjJeiAYM2840CYWuAcdc9ecFxAt0OFctyCMvwzNthNteiETYfk0mrDHuMNpUdyWMcN3Xx8tMSE9ZCRx7c5kPGpSfI8C2rsF3cwtvbmSWLoMN6iSBGwKfWqcJTLmuNNVmWdvnL7eSZP1FpUKN35HjdRgW3Iw+s9JTCs+ts7nwp7CRtVRJbv5AmCD2aksvSfswkGUqaC7J5pgHdOu178FkpxM3YikfHJdWtLjvND/b32QXjWisliwB2K3TCXFg2bWjXjE3ux9Vtq3rjbWvsbWB/y0vSORcehPaJ2pAtV8wAbO0GcjzDpHeAbEkAW+eEmcHK2XsXzPp83LRgxZGaiLs/hwm1ra//uNJx3baVsyDvhYu8lLQZiKO5NYJLiINYe1gEiWenezsnhvvk2tkdfYjo04uQrTLnaitUt2BhxTDMu03fjVMejZMnOLpbnDqEvTJ9VbJzMpSFmNbEZqp315fFd03Q262DuMe+F1mD3feAlSzJ2rX/WRjKdYiyfLIDfVpYVAgjuJxDuGYTilDPbbJTxXIlS0UQe6EOuyWKppUWbVj9aKb8x5VoRaEyyt//elrb7y0u9LibNI3fqGip1XM7UN4HT6NCjOOiHNWuL54PIaftHNsfILUWmI3Seus2ntx2QGt5BySZDqnEU14DEb4tK4jDa+bkkklepr35wcrxBIpa6NoWa21L63ebZdvla8yfHNc/w4rz74rB/oftTZw+8LjRHMhouraPUViBv8opA2PFXIp05uuCMdimctT5sptP3slgBOgwFKibj8IbJFrue5up6Ne22YrUcumWbd1hAa5jdJUpg3tQ60LyBXUZxKeooOvnBp0OktqwW65bVpsGR9lZ/33Gfc5j1Ou0ruP+y93cGJogFlqF56ukAqrwf+zO98kEzuxNsYY6HL3v+bSZ/ObJOqdqYPxOy8TbaaaKs9N6HP+YPZntNN+Lzx2FnmOJbd2uJ7pqwoTTep1ZX4M+miu2VQzOFZbF/2qz8DujRJxSxVWrFZI5O9S1qOOuSFa9czCvAn5lxUSblZO+tffr1wW4D8Oe86znF812r13clNveKf/skMqpspuNiHy7pV+96J+eywfL/zG+HSXI8IPEMg7jXcvqZ7mfAeCmQy2cnKebd8dH4rnOZ755tj/Ym3Opb1XchY2KW8fm6h6fSVbbYBjMqdnsbArdqB7XbADH3wHncNaK0Q5sXvGaAx+n0Zv/Cr+7VtC6zpe5GKGq3Bm/bpjM5vO7VybkxHh9n/Rybj6+vqhErR8rjKCG3ggL9QHU9Hi/xyQt+Z1Fj2LuzBg//uEf9Iyu74lV/tMANDuqW55hlg+MybyGz4iIuQwHr4nG+vCt6vsfa5j67cta7wEm7X+5q94IzNKr5c0auEm4+S5autHi9xZs+U9/7oIkODhBW31SZ8pntbZVmyrBnCmlzEZnPMmdmMOniWOu3EEJb4iA6tYXWYL8T7UJlASG63pwyUqiWUvG+dVealsMu60s/HfPRv0Y6S+t6rOZ1wc6L1SyxiAAHAgcCBDgwSBJCQoEGGDQcmdLjwoUKJDidKrGjxIEWOFDV+BIlRIciLEBkiPJiyYEGEI0k2zAjTsWRHmjRlkuT4MmLNmS41olwJVGDLjD5XbvT4M6dKnSd5Nv1o8qRMo1SNzgyasirUmE6J1oSKVKpXnl13QnSZ9OdUoCwfat0qUq1PtUe5ljWLs`+
`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" alt="" />`;

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