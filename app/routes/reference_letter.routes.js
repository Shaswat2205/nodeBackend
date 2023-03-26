const refrence_letter = require("../controllers/refrence_letter.controller");
const { refrence_letter } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",refrence_letter.create);
    app.use("/api/refrence_letter",router);
};