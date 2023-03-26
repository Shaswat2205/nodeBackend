const outside_medicine = require("../controllers/outside_medicine.controller");
const { outside_medicine } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",outside_medicine.create);
    app.use("/api/outside_medicine",router);
};