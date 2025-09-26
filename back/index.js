const { app } = require("./src/server");
const { dbCon } = require("./src/config/dbCon");

dbCon().then(() => {
  app.listen(3001, () => {
    console.log("esta escuchando en el puerto 3001");
  });
});
