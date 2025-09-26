document.addEventListener("DOMContentLoaded", () => {
  const { getContenedor } = require("../modals/contenedorCards");
  const { cardsLoad } = require("../modals/cardsLoad");
  const { createMovies } = require("./createMovie");
  const { buscador } = require("./busqueda");

  const axios = require("axios");
  const contenedor = getContenedor();

  if (contenedor) {
    const obtenerPeliculas = async () => {
      try {
        const response = await axios.get("http://localhost:3001/movies");
        const data = response.data;
        const ArrayHtml = data.map(cardsLoad);
        ArrayHtml.forEach((element) => contenedor.appendChild(element));
      } catch (error) {
        console.error(error.message);
      }
    };

    obtenerPeliculas();
  }
  createMovies();
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-eliminar")) {
      const id = event.target.dataset.id;

      if (confirm("¿Seguro que querés eliminar esta película?")) {
        axios
          .delete(`http://localhost:3001/movies/${id}`)
          .then((res) => {
            if (res.status === 200) {
              alert("Película eliminada con exito");
              event.target.closest(".tarjetas").remove();
            }
          })
          .catch((err) => {
            console.error("Error al eliminar:", err);
            alert("Ocurrió un error al eliminar");
          });
      }
    }
  });
});
