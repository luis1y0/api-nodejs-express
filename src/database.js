"use strict";
const mongoose = require("mongoose");
const app = require("./index");

mongoose.Promise = global.Promise;
console.log("===", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("La conexión se hizo correctamente!");

    app.listen(app.get("port"), () => {
      console.log("server on port", app.get("port"));
    });
  })
  .catch(err => {
    console.log(err);
  });
