class Activity {
  constructor(
    _id,
    titulo,
    añoPelicula,
    director,
    duracion1,
    duracion2,
    generoSeleccionado,
    puntuacionSeleccionada,
    urlPelicula
  ) {
    this._id = _id;
    this.titulo = titulo;
    this.añoPelicula = añoPelicula;
    this.director = director;
    this.duracion1 = duracion1;
    this.duracion2 = duracion2;
    this.generoSeleccionado = generoSeleccionado;
    this.puntuacionSeleccionada = puntuacionSeleccionada;
    this.urlPelicula = urlPelicula;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  getAllActivities = () => this.activities;

  createActivity = (
    _id,
    titulo,
    añoPelicula,
    director,
    duracion1,
    duracion2,
    generoSeleccionado,
    puntuacionSeleccionada,
    urlPelicula
  ) => {
    const actividad = new Activity(
      _id,
      titulo,
      añoPelicula,
      director,
      duracion1,
      duracion2,
      generoSeleccionado,
      puntuacionSeleccionada,
      urlPelicula
    );
    this.activities.push(actividad);
    return "Actividad creada con exito";
  };
}

module.exports = { Activity, Repository };
