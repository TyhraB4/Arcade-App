const mongoose = require("mongoose");

const userSchema = {
    title: String,
    content: String
}

const User =mongoose.model("User", userSchema);

module.exports = User;