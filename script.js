const html = document.querySelector('html');
const imagemflutuante = document.querySelector('.app__image');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

focoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'foco');
  imagemflutuante.setAttribute('src', './imagens/foco.png'); 
});

curtoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-curto');
  imagemflutuante.setAttribute('src', './imagens/descanso-curto.png'); 
});

longoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-longo');
  imagemflutuante.setAttribute('src', './imagens/descanso-longo.png'); 
});
