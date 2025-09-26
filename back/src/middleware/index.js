const movieDataValidation = (req, res, next) => {
  const campos = [
    "title",
    "year",
    "director",
    "duration",
    "genre",
    "rate",
    "poster",
  ];
  const camposFiltrados = campos.filter((campo) => !req.body[campo]);

  if (camposFiltrados.length > 0) {
    return res.status(400).json({
      message: `Falta información para crear la película: ${camposFiltrados.join(
        ", "
      )}`,
    });
  }
  const year = req.body.year.toString();
  if (!/^\d{4}$/.test(year)) {
    return res.status(400).json({
      message: "El campo 'year' debe tener exactamente 4 dígitos",
    });
  }

  const rate = parseFloat(req.body.rate);
  if (isNaN(rate) || rate < 0 || rate > 10) {
    return res.status(400).json({
      message: "El campo 'rate' debe ser un número entre 0 y 10",
    });
  }

  const genre = req.body.genre;
  if (!Array.isArray(genre) || genre.length === 0) {
    return res.status(400).json({
      message: "El campo 'genre' debe ser un array no vacío",
    });
  }

  const duration = req.body.duration.toString();
  const durationRegex = /^(\d{1,2}h)(\s\d{1,2}min)?$/;
  if (!durationRegex.test(duration)) {
    return res.status(400).json({
      message:
        "El campo 'duration' debe tener un formato como '2h 30min' o '1h'",
    });
  }

  const poster = req.body.poster.toString();
  const urlRegex = /^https?:\/\/.+/;
  if (!urlRegex.test(poster)) {
    return res.status(400).json({
      message: "El campo 'poster' debe ser una URL válida (http o https)",
    });
  } else {
    next();
  }
};

// Middleware logger para ver las peticiones en consola
const logger = (req, res, next) => {
  console.log(req);
  next();
};

module.exports = {
  movieDataValidation,
  logger,
};
