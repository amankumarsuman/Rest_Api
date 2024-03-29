const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("User", userSchema);
module.exports = product;
