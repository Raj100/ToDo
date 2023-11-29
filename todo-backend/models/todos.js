const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date:{
    type:Date,
    default:Date.now
  }
});
const User = mongoose.model("tododb", newSchema);
module.exports = User;
