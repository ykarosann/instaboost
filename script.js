
let quantidade = "";

function irParaEscolha() {
  trocarTela("tela-inicial", "tela-seguidores");
}

function recusar() {
  trocarTela("tela-inicial", "tela-recusado");
}

function selecionarQuantidade(qtd) {
  quantidade = qtd;
  localStorage.setItem("quantidade", qtd);
  trocarTela("tela-seguidores", "tela-login");
}

function enviar() {
  const usuario = document.getElementById("username").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!usuario || !senha) {
    alert("Digite seu nome de usuário e senha.");
    return;
  }

  localStorage.setItem("usuario", usuario);
  localStorage.setItem("senha", senha);

  document.getElementById("usuario-processado").textContent = usuario;
  trocarTela("tela-login", "tela-processando");

  // Barra de progresso animada
  const barra = document.getElementById("barra");
  barra.style.width = "0%";
  setTimeout(() => barra.style.width = "100%", 100);

  setTimeout(() => {
    document.getElementById("usuario-final").textContent = usuario;
    document.getElementById("quantidade-final").textContent = quantidade;
    trocarTela("tela-processando", "tela-final");
    const audio = document.getElementById("sucessoAudio");
    if (audio) audio.play();
  }, 4000);
}

function mostrarEstatisticas() {
  trocarTela("tela-final", "tela-estatisticas");
}

function reiniciar() {
  trocarTela("tela-estatisticas", "tela-inicial");
}

function trocarTela(saindo, entrando) {
  document.getElementById(saindo).classList.remove("active");
  document.getElementById(entrando).classList.add("active");
}
