document.addEventListener("DOMContentLoaded", function () {
  let num1Input = document.getElementById("num1");
  let num2Input = document.getElementById("num2");
  let resultadoInput = document.getElementById("resultado");

  function mostrarResultado(resultado) {
    resultadoInput.value = resultado;
  }

  function suma() {
    console.log("Función suma ejecutada");
    let num1 = parseFloat(num1Input.value.trim());
    let num2 = parseFloat(num2Input.value.trim());
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingrese números válidos");
      return;
    }
    let resultado = num1 + num2;
    mostrarResultado(resultado);
  }

  function resta() {
    console.log("Función resta ejecutada");
    let num1 = parseFloat(num1Input.value.trim());
    let num2 = parseFloat(num2Input.value.trim());
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingrese números válidos");
      return;
    }
    let resultado = num1 - num2;
    mostrarResultado(resultado);
  }

  function multiplicacion() {
    console.log("Función multiplicacion ejecutada");
    let num1 = parseFloat(num1Input.value.trim());
    let num2 = parseFloat(num2Input.value.trim());
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingrese números válidos");
      return;
    }
    let resultado = num1 * num2;
    mostrarResultado(resultado);
  }

  function division() {
    console.log("Función division ejecutada");
    let num1 = parseFloat(num1Input.value.trim());
    let num2 = parseFloat(num2Input.value.trim());
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingrese números válidos");
      return;
    }
    if (num2 === 0) {
      alert("No se puede dividir entre cero");
      return;
    }
    let resultado = num1 / num2;
    mostrarResultado(resultado);
  }

  function potencia() {
    console.log("Función potencia ejecutada");
    let num1 = parseFloat(num1Input.value.trim());
    let num2 = parseFloat(num2Input.value.trim());
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingrese números válidos");
      return;
    }
    let resultado = Math.pow(num1, num2);
    mostrarResultado(resultado);
  }

  function raizCuadrada() {
    console.log("Función raizCuadrada ejecutada");
    let num2 = parseFloat(num2Input.value.trim());
    if (isNaN(num2)) {
      alert("Ingrese un número válido");
      return;
    }
    let resultado = Math.sqrt(num2);
    mostrarResultado(resultado);
  }

  function valorAbsoluto() {
    console.log("Función valorAbsoluto ejecutada");
    let num2 = parseFloat(num2Input.value.trim());
    if (isNaN(num2)) {
      alert("Ingrese un número válido");
      return;
    }
    let resultado = Math.abs(num2);
    mostrarResultado(resultado);
  }

  function numeroAleatorio() {
    console.log("Función numeroAleatorio ejecutada");
    let num1 = parseFloat(num1Input.value.trim());
    let num2 = parseFloat(num2Input.value.trim());
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingrese números válidos");
      return;
    }
    let resultado = Math.random() * (num2 - num1) + num1;
    mostrarResultado(resultado);
  }

  function round() {
    console.log("Función round ejecutada");
    let resultado = parseFloat(resultadoInput.value.trim());
    if (isNaN(resultado)) {
      alert("Ingrese un número válido");
      return;
    }
    resultado = Math.round(resultado);
    mostrarResultado(resultado);
  }

  function floor() {
    console.log("Función floor ejecutada");
    let resultado = parseFloat(resultadoInput.value.trim());
    if (isNaN(resultado)) {
      alert("Ingrese un número válido");
      return;
    }
    resultado = Math.floor(resultado);
    mostrarResultado(resultado);
  }

  function ceil() {
    console.log("Función ceil ejecutada");
    let resultado = parseFloat(resultadoInput.value.trim());
    if (isNaN(resultado)) {
      alert("Ingrese un número válido");
      return;
    }
    resultado = Math.ceil(resultado);
    mostrarResultado(resultado);
  }

  // Agregar eventos a los botones
  document.querySelectorAll(".boton").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto
      switch (this.id) {
        case "suma":
          suma();
          break;
        case "resta":
          resta();
          break;
        case "multiplicacion":
          multiplicacion();
          break;
        case "division":
          division();
          break;
        case "potencia":
          potencia();
          break;
        case "raizCuadrada":
          raizCuadrada();
          break;
        case "valorAbsoluto":
          valorAbsoluto();
          break;
        case "numeroAleatorio":
          numeroAleatorio();
          break;
        case "round":
          round();
          break;
        case "floor":
          floor();
          break;
        case "ceil":
          ceil();
          break;
      }
    });
  });
});
