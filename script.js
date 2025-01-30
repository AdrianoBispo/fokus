// Variáveis dos elementos do index.html
const html = document.querySelector('html');
const imagemflutuante = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title')
const iconePlayPause = document.querySelector('.app__card-primary-butto-icon');

// Variáveis dos botões do index.html
const botoesContexto = document.querySelectorAll('.app__card-button');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const startPauseBt = document.getElementById('start-pause');
const botaoPlayPause = document.querySelector('#start-pause span'); 

// Variáveis da música de fundo que pode ser ou não ativada
const ativarMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

// Variáveis dos audios utilizados como efeito sonoro
const audioPlay = new Audio('./sons/play.wav');
const audioPause = new Audio('./sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3');

// Variaveis de controle do cronômetro
const tempoNaTela = document.querySelector('#timer');
let tempoDecorridoEmSegundos = 1500; // 1500 segundos = 25 minutos
let intervaloId = null;

// Evento de clique do botão de foco
focoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 1500; // 1500 segundos = 25 minutos
  alterarContexto('foco');
  focoBt.classList.add('active');
});

// Evento de clique do botão de descanso curto
curtoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 300; // 300 segundos = 5 minutos
  alterarContexto('descanso-curto');
  curtoBt.classList.add('active');
});

// Evento de clique do botão de descanso longo
longoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 900; // 900 segundos = 15 minutos
  alterarContexto('descanso-longo');
  longoBt.classList.add('active');
});

// Função que altera o contexto de foco para descanso curto ou descanso longo
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

// Evento de clique do botão responsável por ativar/desativar música
ativarMusica.addEventListener('change', () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
})

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    audioTempoFinalizado.play(); // áudio executado quando cronômetro finalizar
    alert('Tempo finalizado!'); // A mensagem será exibida quando o cronômetro finalizar
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
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

function mostrarTempo(){
  const tempo = new Date(tempoDecorridoEmSegundos * 1000).toLocaleString('pt-BR', {minute: '2-digit', second: '2-digit'});
  tempoNaTela.textContent = `${tempo}`;
}

mostrarTempo();