function mostrarMensagem() {
    const mensagem = document.getElementById('mensagem-secreta');
    mensagem.textContent = "Você é a melhor mãe do mundo! Te amo com todo meu coração! 💖";
    mensagem.style.display = "block";
  }
  
  // Cria corações que sobem da parte inferior
  function criarCoracoes() {
    const container = document.getElementById("hearts-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");
  
    // posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";
  
    // tamanho aleatório
    const size = Math.floor(Math.random() * 10) + 10; // 10px - 20px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.backgroundColor = "rgba(255, 0, 127, 0.7)";
  
    // delay e velocidade variados
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  
    container.appendChild(heart);
  
    // remover após animação
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  // criar coração a cada 300ms
  setInterval(criarCoracoes, 300);
  function mostrarMensagem() {
    const mensagem = document.getElementById('mensagem-secreta');
    mensagem.textContent = "Você é a melhor mãe do mundo! Te amo com todo meu coração! 💖";
    mensagem.style.display = "block";
  }
  
  function criarCoracoes() {
    const rodape = document.getElementById("rodape");
    const rect = rodape.getBoundingClientRect();
  
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.textContent = "💖";
  
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = `${Math.floor(Math.random() * 20) + 10}px`;
    heart.style.top = (window.scrollY + rect.top) + "px";
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  setInterval(criarCoracoes, 300);
  
