var fra = [
  "Bem-vindo ao jogo!",
  "Esta é a segunda frase.",
  "Adicione quantas frases desejar."
];

/* var fra = [
  "Welcome the game!",
  "This is the second phrase.",
  "Add how many phrases you wish."
];
 */
async function typeWriter(text, speed) {
  const outputElement = document.getElementsByTagName('p')[0];
  for (let i = 0; i < text.length; i++) {
    outputElement.innerHTML += text[i];
    await sleep(speed);
  }
  outputElement.innerHTML += '<br>'; // Adiciona uma quebra de linha ao final de cada frase
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTypewriter(frases) {
  for (let i = 0; i < frases.length; i++) {
    await typeWriter(frases[i], 50);
  }
  creatBottom()
}


function creatBottom(){
const button = document.createElement('button');

// Define o texto do botão
button.textContent = 'Clique em mim';

// Adiciona um manipulador de eventos ao botão (opcional)
button.addEventListener('click', function() {
  alert('Botão clicado!');
});

// Encontra o elemento no qual você deseja anexar o botão (por exemplo, o corpo do documento)
const body = document.getElementById('bottom');

// Anexa o botão ao elemento desejado
body.appendChild(button);
}

runTypewriter(fra);