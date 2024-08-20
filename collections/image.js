const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  url: {
    type: "String",
    default:
      "https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg",
  },
  public_id: "String",
});
module.exports = mongoose.model("Imag", imageSchema);
