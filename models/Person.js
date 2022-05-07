const { default: mongoose } = require("mongoose");

const Person = mongoose.model("Person", {
  name: String,
  _id: String,
  surname: String,
  born: Date,
});

module.exports = Person;
