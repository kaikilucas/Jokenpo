const jogadasDisponiveis = ["pedra", "papel", "tesoura"];
let pontosUsuario = 0;
let pontosComputador = 0;

function ligar(jogadaDoUsuario) {
  const jogadaAleatoria = Math.floor(Math.random() * 3);
  const jogadaDoComputador = jogadasDisponiveis[jogadaAleatoria];

  if (jogadaDoUsuario === jogadaDoComputador) {
    alert("EMPATE, o computador jogou o mesmo que você");
  } else {
    switch (jogadaDoUsuario) {
      case "pedra":
        if (jogadaDoComputador === "tesoura") {
          alert("GANHOU, o computador jogou tesoura");
          pontosUsuario++;
        } else {
          alert("PERDEU, o computador jogou papel");
          pontosComputador++;
        }
        break;
      case "papel":
        if (jogadaDoComputador === "pedra") {
          alert("GANHOU, o computador jogou pedra");
          pontosUsuario++;
        } else {
          alert("PERDEU, o computador jogou tesoura");
          pontosComputador++;
        }
        break;
      case "tesoura":
        if (jogadaDoComputador === "papel") {
          alert("GANHOU, o computador jogou papel");
          pontosUsuario++;
        } else {
          alert("PERDEU, o computador jogou pedra");
          pontosComputador++;
        }
        break;
    }
  }

  document.getElementById("voce").innerHTML = pontosUsuario;
  document.getElementById("maquina").innerHTML = pontosComputador;
}
