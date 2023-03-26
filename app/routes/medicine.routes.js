const medicine = require("../controllers/medicine.controller");
const { medicine } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",medicine.create);
    app.use("/api/medicine",router);
};