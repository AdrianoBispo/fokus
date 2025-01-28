const html = document.querySelector('html');
const imagemflutuante = document.querySelector('.app__image');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

focoBt.addEventListener('click', () => {
  alterarContexto('foco');
});

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto');
});

longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo');
});

function alterarContexto(contexto) {
  html.setAttribute('data-contexto', contexto);
  imagemflutuante.setAttribute('src', `./imagens/${contexto}.png`);
}