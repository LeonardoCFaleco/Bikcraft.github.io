//ativar links no menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if(url.includes(href)) {
        link.classList.add('ativo');
    };
};

links.forEach(ativarLink);

//ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarOrcamento(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true
    };   
};

parametros.forEach(ativarOrcamento);

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function mostrarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
};
function expandirPergunta(pergunta) {
    pergunta.addEventListener('click', mostrarPergunta);
};

perguntas.forEach(expandirPergunta);

//galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function trocarImagem (event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if(media){
        galeriaContainer.prepend(img);
    };
};
function destaque (img) {
    img.addEventListener('click', trocarImagem);
};

galeria.forEach(destaque);

//animacao
if(window.SimpleAnime) {
    new SimpleAnime();
};
