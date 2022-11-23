const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { use } = require('passport/lib');

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://arcadegame:ARCADE@cluster0.f7ljar3.mongodb.net/arcadeDB")

//require route

app.use("/", require("./routes/userRoute"));

app.listen(5000, function() {
    console.log("express is running on port 5000");
})