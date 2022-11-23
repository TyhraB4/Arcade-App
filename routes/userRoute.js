const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.route("/register").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    const newUser = new User({
        name,
        email,
        pass
    });

    newUser.save();
})

router.route("/login").post((req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    const newLogin = new Login
    ({
        email,
        pass
    });

    newLogin.save();
})

router.route("/profile").get((req, res) => {
    User.find()
    .then(foundUser => res.json(foundUser))
})


module.exports = router;
