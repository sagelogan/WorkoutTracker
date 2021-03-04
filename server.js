const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;
const db = require("./models");
const app = express();

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



  try {
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
    { useNewUrlParser: true });
    console.log("Connected successfully to server");
  } catch(err) {
    // Ensures that the client will close when you finish/error
    console.log(err.message);
  }


require("./routes/api-routes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});