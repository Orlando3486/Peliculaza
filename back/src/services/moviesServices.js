const { Movie } = require("../models/Movie");

const showMoviesServices = async (req, res) => {
  const movies = await Movie.find();
  return movies;
};

const createMoviesServices = async (movie) => {
  const pelicula = await Movie.create(movie);

  return "Pelicula Agregada con Exito";
};

const deleteMovieService = async (id) => {
  const deletedMovie = await Movie.findByIdAndDelete(id);
  return deletedMovie;
};

module.exports = {
  showMoviesServices,
  createMoviesServices,
  deleteMovieService,
};
