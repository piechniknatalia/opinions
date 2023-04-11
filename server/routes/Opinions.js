const express = require('express');
const router = express.Router();
const { Opinions } = require("../models");

router.get("/", async(req, res ) => {
    const listOfOpinions = await Opinions.findAll();
    res.json(listOfOpinions);
});

router.get('/byproductName/:productName', async (req, res) => {
    const productName = req.params.productName;
    const opinions = await Opinions.findAll({
        where: {
            productName: productName
        }
    });
    res.json(opinions);
});

router.post("/", async(req, res) => {
    const opinion = req.body;
    await Opinions.create(opinion);
    res.json(opinion);
});


module.exports = router;