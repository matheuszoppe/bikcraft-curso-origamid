/// Ativar links menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
  const url = window.location.href;  //  so location é mesma coisa que window.location
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink)

// Ativar itens orçamento
const parametros = new URLSearchParams(location.search);  

function ativarProduro(parametro){
  const elemento = document.getElementById(parametro)
  if(elemento){
    elemento.checked = true
  }
}

parametros.forEach(ativarProduro)

/// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event){
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  resposta.classList.toggle('ativa')
  const ativa = resposta.classList.contains('ativa')
  pergunta.setAtribute('aria-expanded', ativa)
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

///galeria de bicicleta
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const midia = window.matchMedia("(min-width: 1000px)").matches;
  if (midia) galeriaContainer.prepend(img); //joga a imagen clicada para cima no html
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)

//// Animação
if(window.SimpleAnime){
  new SimpleAnime();
}


// console.log(links)