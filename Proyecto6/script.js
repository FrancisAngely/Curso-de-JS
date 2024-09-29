let calificaciones = [8, 3, 7, 6, 5];

function mostrarCalificaciones() {
  let lista = "<ul>";
  for (let calificacion of calificaciones) {
    lista += `<li>${calificacion}</li>`;
  }
  lista += "</ul>";
  document.getElementById("calificaciones").innerHTML = lista;
}

function calcularPromedio() {
  let suma = 0;
  for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
  }
  let promedio = suma / calificaciones.length;
  alert(`El promedio es: ${promedio}`);
}

function obtenerNotaMasAlta() {
  let notaMasAlta = 0;
  let i = 0;
  while (i < calificaciones.length) {
    if (calificaciones[i] > notaMasAlta) {
      notaMasAlta = calificaciones[i];
    }
    i++;
  }
  alert(`La nota más alta es: ${notaMasAlta}`);
}

function verificarAplazo() {
  let existeAplazo = false;
  let notaAplazo = 0;
  let i = 0;
  do {
    if (calificaciones[i] < 4) {
      existeAplazo = true;
      notaAplazo = calificaciones[i];
      break;
    }
    i++;
  } while (i < calificaciones.length);
  if (existeAplazo) {
    alert(`La nota del aplazo es: ${notaAplazo}`);
  } else {
    alert("No existe aplazo");
  }
}
