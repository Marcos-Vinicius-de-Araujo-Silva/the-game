var frase = "bem-vindo ao game!"

async function typeWriter(text, speed) {
    const outputElement = document.getElementsByTagName('p')[0];
    for (let i = 0; i < text.length; i++) {
      outputElement.textContent += text[i];
      await sleep(speed);
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function runTypewriter() {
    await typeWriter(frase, 50);
    // Adicione mais chamadas a typeWriter conforme necessário

    // Exemplo adicional:
    // await sleep(1000); // Espera por 1 segundo
    // await typeWriter("Outra parte da resposta.", 50);
  }

  runTypewriter();