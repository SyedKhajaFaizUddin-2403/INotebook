const { default: mongoose } = require("mongoose");

const user23 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
User23 = mongoose.model("User23", user23);
module.exports = User23;
