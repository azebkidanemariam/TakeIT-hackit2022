const mongoose = require("mongoose");

// the schema represents how the image object data looks like
const ImageSchema = mongoose.Schema({
    imagePath: {
        required: true,
        type: String
    },
    ownerId: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model("Image", ImageSchema);