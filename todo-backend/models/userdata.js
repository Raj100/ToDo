const mongoose = require("mongoose");
const Passwords = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const PasswordModel = mongoose.model("usernamepassword", Passwords);

module.exports = PasswordModel;