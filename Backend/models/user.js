const mongoose = require("mongoose");

// the schema represents how the image object data looks like
const UserSchema = mongoose.Schema({
    firstName: String,
    email: String,
    userId: String,
});

module.exports = mongoose.model("User", UserSchema);