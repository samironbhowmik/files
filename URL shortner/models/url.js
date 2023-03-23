const mongoose = require("mongoose");

const UrlSchema = mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
}
);

const urlModel = mongoose.model("urlModel", UrlSchema )
module.exports = urlModel;