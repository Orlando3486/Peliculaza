const mongoose = require("mongoose");
require("dotenv").config();

const dbCon = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.j33qgcn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`
    );
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error.message);
  }
};

module.exports = {
  dbCon,
};
