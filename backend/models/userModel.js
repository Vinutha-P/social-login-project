var mongoose = require("mongoose");
var schema = mongoose.Schema;
var User = new schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    min: 4,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("User", User);
