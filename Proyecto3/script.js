let tiempoRestante = 30;
let cuentaRegresivaInterval;
let respuestas = [];

function startGame() {
  cuentaRegresivaInterval = setInterval(() => {
    tiempoRestante--;
    document.getElementById(
      "cuentaRegresiva"
    ).innerHTML = `Tiempo restante: ${tiempoRestante} segundos`;
    if (tiempoRestante <= 0) {
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  clearInterval(cuentaRegresivaInterval);
  alert("Game Over!");
  let audio = new Audio("gameover.mp3");
  audio.play();
  document.getElementById("finalizar").disabled = true;
  document.getElementById("finalizar").classList.add("disabled");
}

document.getElementById("finalizar").addEventListener("click", () => {
  clearInterval(cuentaRegresivaInterval); // Detenemos la cuenta regresiva
  respuestas = [
    document.getElementById("pregunta1").value,
    document.getElementById("pregunta2").value,
    document.getElementById("pregunta3").value,
    document.getElementById("pregunta4").value,
    document.getElementById("pregunta5").value,
  ];
  let fechaHoy = new Date();
  alert(
    `Respuestas: ${respuestas.join(
      ", "
    )}\nFecha: ${fechaHoy.toLocaleDateString()} ${fechaHoy.toLocaleTimeString()}`
  );
});

document.getElementById("volverIntentar").addEventListener("click", () => {
  location.reload();
});
