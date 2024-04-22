const jogadasDisponiveis = ["pedra", "papel", "tesoura"]
let pontosUsuario = 0
let pontosComputador = 0


function ligar(jogadaDoUsuario) {
    const jogadaAleatoria = Math.floor(Math.random() * 3);
    const jogadaDoComputador = jogadasDisponiveis[jogadaAleatoria];





    if (jogadaDoComputador === jogadaDoUsuario) {
        alert("EMPATE, o computador jogou o mesmo que você")
    } else if (jogadaDoComputador === 'pedra') {
        if (jogadaDoUsuario === "papel") {
            alert("GANHOU, o computador jogou pedra")
            pontosUsuario = pontosUsuario + 1
        } else {
            alert("PERDEU, o computador jogou pedra");
            pontosComputador = pontosComputador + 1
        }
    } else if (jogadaDoComputador === "papel") {
        if (jogadaDoUsuario === "pedra") {
            alert("PERDEU, o computador jogou papel")
            pontosComputador = pontosComputador + 1
        } else {
            alert("GANHOU, o computador jogou papel")
            pontosUsuario = pontosUsuario + 1
        }
    } else {
        if (jogadaDoUsuario === "pedra") {
            alert("GANHOU, o computador jogou tesoura")
            pontosUsuario = pontosUsuario + 1
        } else {
            alert("PERDEU, o computador jogou tesoura")
            pontosComputador = pontosComputador + 1
        }
    }

    document.getElementById("voce").innerHTML = pontosUsuario;
    document.getElementById("maquina").innerHTML = pontosComputador;
}