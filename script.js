const html = document.querySelector('html');
const imagemflutuante = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title')
const iconePlayPause = document.querySelector('.app__card-primary-butto-icon');

// Seleciona botões do index.html
const botoesContexto = document.querySelectorAll('.app__card-button');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const startPauseBt = document.getElementById('start-pause');
const botaoPlayPause = document.querySelector('#start-pause span'); 

focoBt.addEventListener('click', () => {
  alterarContexto('foco');
  focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto');
  curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo');
  longoBt.classList.add('active');
});

function alterarContexto(contexto) {
  botoesContexto.forEach(contexto => {
    contexto.classList.remove('active');
  });
  html.setAttribute('data-contexto', contexto);
  imagemflutuante.setAttribute('src', `./imagens/${contexto}.png`);

  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `
        Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
      `;
      break;

    case 'descanso-curto':
      titulo.innerHTML = `
        Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `;
      break;

    case 'descanso-longo':
      titulo.innerHTML = `
        Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `;
      break;
  }
}

// Adiciona música de fundo ao app e permite alternar entre ligar e desligar
const ativarMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

ativarMusica.addEventListener('change', () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
})

let tempoDecorridoEmSegundos = 5; // 5 minutos inicialmente
let intervaloId = null;

const audioPlay = new Audio('./sons/play.wav');
const audioPause = new Audio('./sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3');

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    audioTempoFinalizado.play(); // áudio executado quando cronômetro finalizar
    alert('Tempo finalizado!'); // A mensagem será exibida quando o cronômetro finalizar
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  console.log(`Temporizador: ${tempoDecorridoEmSegundos}`);
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    audioPause.play(); // áudio executado quando cronômetro for pausado
    zerar();
    return;
  }
  audioPlay.play(); // áudio executado quando cronômetro iniciar
  intervaloId = setInterval(contagemRegressiva, 1000);
  botaoPlayPause.textContent = 'Pausar';
  iconePlayPause.setAttribute('src', '/imagens/pause.png');
}

function zerar() {
  clearInterval(intervaloId);
  intervaloId = null;
  botaoPlayPause.textContent = 'Iniciar';
  iconePlayPause.setAttribute('src', '/imagens/play_arrow.png');
}
