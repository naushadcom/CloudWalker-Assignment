const mongoose = require("mongoose");

const DB = "mongodb+srv://naushaddb:mongodb.com@cluster0.0fe0mzl.mongodb.net/cloud?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
