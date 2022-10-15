const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");

router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    } catch (error) {
        res.status(404);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.params.id });
        res.send(user);
    } catch (error) {
        res.status(404)
		res.send({ error: "User doesn't exist!" })
    }
});

router.post("/", (req, res) => {
    const user = new UserModel({
        firstName: req.body.firstName,
        email: req.body.email,
        userId: req.body.userId,
    });
    console.log("image", user);
    var mongoose = require('mongoose');
    console.log(mongoose.connection.readyState);
    user.save()
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch((error) => {
        console.log(error);
        res.status({ message: error });
    });
});

module.exports = router;