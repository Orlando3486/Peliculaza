const convertirEnHTML = (actividad) => {
  const {
    _id,
    titulo,
    añoPelicula,
    director,
    duracion1,
    duracion2,
    generoSeleccionado,
    puntuacionSeleccionada,
    urlPelicula,
  } = actividad;

  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const a = document.createElement("a");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const p6 = document.createElement("p");
  const img = document.createElement("img");
  const botonEliminar = document.createElement("button");

  div.classList.add("tarjetas");
  div2.classList.add("detalles");
  div3.classList.add("divHora");

  a.classList.add("titulo-tarjeta");
  a.href = "#";
  a.innerText = `Titulo: ${titulo}`;

  p.innerText = `Año: ${añoPelicula}`;
  p2.innerText = `Director: ${director}`;
  p3.innerText = `Duracion: ${duracion1} hs `;
  p4.innerText = `${duracion2} min`;
  p5.innerText = `Genero: ${generoSeleccionado}`;
  p6.innerText = `Puntuacion: ${puntuacionSeleccionada}`;

  img.classList.add("imagen-tarjeta");
  img.src = urlPelicula;
  img.alt = titulo;

  div.appendChild(div2);
  div.appendChild(img);
  div2.appendChild(a);
  div2.appendChild(p);
  div2.appendChild(p2);
  div2.appendChild(div3);
  div3.appendChild(p3);
  div3.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);
  div2.appendChild(botonEliminar);

  return div;
};

module.exports = { convertirEnHTML };
