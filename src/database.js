"use strict";
const mongoose = require("mongoose");
const app = require("./index");

const { mongodb } = require("./keys");

mongoose.Promise = global.Promise;

mongoose
  .connect(mongodb.URI, { useNewUrlParser: true })
  .then(() => {
    console.log("La conexión se hizo correctamente!");

    app.listen(app.get("port"), () => {
      console.log("server on port", app.get("port"));
    });
  })
  .catch(err => {
    console.log(err);
  });
