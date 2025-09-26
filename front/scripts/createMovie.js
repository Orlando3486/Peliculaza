const axios = require("axios");
const { getContenedor } = require("../modals/contenedorCards");
const { Activity, Repository } = require("../modals/activityModels");
const { convertirEnHTML } = require("../modals/cardBuilder");

function createMovies() {
  const form = document.getElementById("formulario");
  const input1 = document.getElementById("titulo-form");
  const input2 = document.getElementById("director-form");
  const boton = document.getElementById("boton-form");
  const reset = document.getElementById("resetear");

  if (!form || !input1 || !input2 || !boton || !reset) return;

  input1.addEventListener("input", () => {
    input1.value = input1.value.replace(/[^a-zA-ZÀ-ſ\s]/g, "");
  });

  input2.addEventListener("input", () => {
    input2.value = input2.value.replace(/[^a-zA-ZÀ-ſ\s]/g, "");
  });

  document.querySelectorAll('input[name="rating"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      console.log(`Valor seleccionado: ${radio.value}`);
    });
  });

  const repositorio = new Repository();

  const agregarActividadesDOM = () => {
    const contenedor = getContenedor();
    if (!contenedor) return;
    contenedor.innerHTML = "";
    repositorio.getAllActivities().forEach((actividad) => {
      const tarjeta = convertirEnHTML(actividad);
      contenedor.appendChild(tarjeta);
    });
  };

  const handleSubmitClic = (event) => {
    event.preventDefault();

    const titulo = document.getElementById("titulo-form");
    const añoPelicula = document.getElementById("año");
    const director = document.getElementById("director-form");
    const duracion1 = document.getElementById("duracion-horas");
    const duracion2 = document.getElementById("duracion-minutos");
    const urlPelicula = document.getElementById("url-form");

    const generoSeleccionado = Array.from(
      document.querySelectorAll('#check-genero input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    const puntuacionSeleccionada = document.querySelector(
      'input[name="rating"]:checked'
    )?.value;

    if (
      !titulo.value ||
      !añoPelicula.value ||
      !director.value ||
      !duracion1.value ||
      !duracion2.value ||
      generoSeleccionado.length === 0 ||
      !puntuacionSeleccionada ||
      !urlPelicula.value
    ) {
      return alert("Faltan datos para crear la actividad");
    }

    const movie = {
      title: titulo.value,
      year: añoPelicula.value,
      director: director.value,
      duration: `${duracion1.value}h ${duracion2.value}min`,
      genre: generoSeleccionado,
      rate: puntuacionSeleccionada,
      poster: urlPelicula.value,
    };

    axios
      .post("http://localhost:3001/movies/", movie)
      .then((res) => {
        if (res.status === 201) {
          const nuevaPeli = res.data;
          const duracionStr = nuevaPeli.duration || "";
          const partesDuracion = duracionStr.includes("h")
            ? duracionStr.split("h")
            : ["0", "0min"];

          const horas = partesDuracion[0].trim();
          const minutos = partesDuracion[1]?.replace("min", "").trim() || "0";

          repositorio.createActivity(
            nuevaPeli._id,
            nuevaPeli.title,
            nuevaPeli.year,
            nuevaPeli.director,
            horas,
            minutos,
            Array.isArray(nuevaPeli.genre)
              ? nuevaPeli.genre.join(", ")
              : "Sin género",
            nuevaPeli.rate,
            nuevaPeli.poster
          );

          agregarActividadesDOM();
          alert("Película creada con éxito");
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error al crear la película");
      });
  };

  reset.addEventListener("click", () => form.reset());
  form.addEventListener("submit", handleSubmitClic);
}

module.exports = { createMovies };
