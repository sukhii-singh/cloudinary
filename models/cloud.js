const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema(
    {
        name: { type: String },
        mid: { type: String },
    },
    { timeStamps: true }
);

const Upload = mongoose.model("Upload", uploadSchema)
module.exports = Upload;