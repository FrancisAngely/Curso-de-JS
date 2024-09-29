// Definimos el catálogo de películas
const catalogo = {
  comedia: [
    { titulo: "Back to the Future", edadMinima: 0 },
    { titulo: "The Truman Show", edadMinima: 13 },
    { titulo: "The Wolf of Wall Street", edadMinima: 16 },
  ],
  crimen: [
    { titulo: "El secreto de sus ojos", edadMinima: 13 },
    { titulo: "The Godfather", edadMinima: 16 },
  ],
  drama: [
    { titulo: "Casablanca", edadMinima: 0 },
    { titulo: "The Shawshank Redemption", edadMinima: 13 },
    { titulo: "Taxi Driver", edadMinima: 16 },
  ],
  musical: [
    { titulo: "La La Land", edadMinima: 0 },
    { titulo: "Les Miserables", edadMinima: 13 },
    { titulo: "The Rocky Horror Picture Show", edadMinima: 16 },
  ],
};

// Función para recomendar película según edad y género
function recomendarPelicula(edad, genero) {
  const peliculas = catalogo[genero];
  let recomendacion = null;

  // Buscamos la última película que coincida con la edad del espectador
  for (const pelicula of peliculas) {
    if (edad >= pelicula.edadMinima) {
      recomendacion = pelicula.titulo;
    }
  }

  // Si no hay ninguna recomendación
  if (!recomendacion) {
    recomendacion =
      "Lo sentimos, no hay películas disponibles para tu edad en este género.";
  }

  return recomendacion;
}

// Función para manejar el evento de click en los botones de género
function seleccionarGenero(genero) {
  const edad = parseInt(document.getElementById("edad").value);

  // Validamos que la edad sea un número válido
  if (isNaN(edad) || edad < 0) {
    document.getElementById("recomendacion").innerHTML =
      "Por favor, ingresa una edad válida.";
    return;
  }

  const recomendacion = recomendarPelicula(edad, genero);
  document.getElementById(
    "recomendacion"
  ).innerHTML = `Te recomendamos: ${recomendacion}`;
}

// Agregamos event listeners a los botones de género
document
  .getElementById("comedia")
  .addEventListener("click", () => seleccionarGenero("comedia"));
document
  .getElementById("crimen")
  .addEventListener("click", () => seleccionarGenero("crimen"));
document
  .getElementById("drama")
  .addEventListener("click", () => seleccionarGenero("drama"));
document
  .getElementById("musical")
  .addEventListener("click", () => seleccionarGenero("musical"));
