const { default: mongoose } = require("mongoose");
const notes23 = mongoose.Schema({
  user: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  tag: {
    type: String,
    default: "General",
  },
  createddate: {
    type: Date,
  },
  updateddate:{
    type:Date,
  }
});
const Notes23 = mongoose.model("Notes23", notes23)
module.exports=Notes23
