const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const GoogleSchema = new Schema(
  {
    name: {type: String, required: true},
    img: {type: String, required: true},
    detailSpec: [Schema.Types.Mixed],
    quickSpec: [Schema.Types.Mixed]
  }
);

module.exports = mongoose.model('googledevices',GoogleSchema);
