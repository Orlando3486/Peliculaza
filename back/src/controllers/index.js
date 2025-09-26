const {
  showMoviesServices,
  createMoviesServices,
  deleteMovieService,
} = require("../services/moviesServices");
const Movie = require("../models/Movie");

const getMoviesController = async (req, res) => {
  try {
    const movies = await showMoviesServices();
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({
      message: error,
      data: error,
    });
  }
};

const createMovieController = async (req, res) => {
  try {
    const respuesta = await createMoviesServices(req.body);
    res.status(201).json({
      message: "Ok",
      data: respuesta,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
      data: error,
    });
  }
};

const deleteMovieController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await deleteMovieService(id);

    if (!deletedMovie) {
      return res.status(404).json({ message: "Película no encontrada" });
    }

    res
      .status(200)
      .json({ message: "Película eliminada con éxito", data: deletedMovie });
  } catch (error) {
    console.error("Error al eliminar película:", error);
    res.status(500).json({ message: "Error al eliminar la película" });
  }
};

module.exports = {
  getMoviesController,
  createMovieController,
  deleteMovieController,
};
