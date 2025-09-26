const { Router } = require("express");
const {
  getMoviesController,
  createMovieController,
  deleteMovieController,
} = require("../controllers");
const { movieDataValidation, logger } = require("../middleware/");

const router = Router();

router.get("/movies", getMoviesController);
router.post("/movies", logger, movieDataValidation, createMovieController);
router.delete("/movies/:id", deleteMovieController);

module.exports = {
  router,
};
