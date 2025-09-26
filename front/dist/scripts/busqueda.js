function buscador() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = document.getElementById("busqueda").value.toLowerCase();

    if (valor.includes("favoritas")) {
      location.href = "#contenedor";
    } else if (valor.includes("crear")) {
      location.href = "./pelicula.html";
    } else if (valor.includes("acerca")) {
      location.href = "./about.html";
    } else if (valor.includes("inicio")) {
      location.href = "./index.html";
    } else if (valor.includes("perfil")) {
      location.href = "./perfil.html";
    } else {
      alert("Sección no encontrada");
    }
  });
}
buscador();

module.exports = {
  buscador,
};
