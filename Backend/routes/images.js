const express = require("express");
const router = express.Router();
const ImageModel = require("../models/image");

router.get("/", async (req, res) => {
    try {
        const images = await ImageModel.find();
        res.send(images);
    } catch (error) {
        res.status(404);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const images = await ImageModel.findOne({ _id: req.params.id });
        res.send(images);
    } catch (error) {
        res.status(404)
		res.send({ error: "Image doesn't exist!" })
    }
});

router.post("/", (req, res) => {
    const image = new ImageModel({
        imagePath: req.body.imagePath,
        ownerId: req.body.ownerId
    });
    console.log("image", image);
    var mongoose = require('mongoose');
    console.log(mongoose.connection.readyState);
    image.save()
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch((error) => {
        console.log(error);
        res.status({ message: error });
    });
});

router.delete("/:id", async (req, res) => {
    try {
        const images = await ImageModel.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch (error) {
        res.status(404)
		res.send({ error: "Image doesn't exist!" })
    }
});



module.exports = router;