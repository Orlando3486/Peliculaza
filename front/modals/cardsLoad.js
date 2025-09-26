const cardsLoad = (card) => {
  const div = document.createElement("div");
  div.classList.add("tarjetas");

  const img = document.createElement("img");
  img.src = card.poster;
  img.alt = card.title;
  img.classList.add("imagen-tarjeta");

  const titulo = document.createElement("a");
  titulo.href = "#";
  titulo.textContent = "Titulo: " + card.title;
  titulo.classList.add("titulo-tarjeta");

  const p1 = document.createElement("p");
  p1.textContent = "Año: " + card.year;

  const p2 = document.createElement("p");
  p2.textContent = "Director: " + card.director;

  const p3 = document.createElement("p");
  p3.textContent = "Duracion: " + card.duration;

  const p4 = document.createElement("p");
  p4.textContent = "Genero: " + card.genre;

  const p5 = document.createElement("p");
  p5.textContent = "Puntuacion: " + card.rate;

  const detalles = document.createElement("div");
  detalles.classList.add("detalles");
  detalles.append(titulo, p1, p2, p3, p4, p5);

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("btn-eliminar");
  botonEliminar.dataset.id = card._id;

  detalles.appendChild(botonEliminar);

  div.append(img, detalles);

  return div;
};

module.exports = { cardsLoad };
