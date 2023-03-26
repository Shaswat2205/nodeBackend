const procedure_medicine = require("../controllers/procedure_medicine.controller");
const { procedure_medicine } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",procedure_medicine.create);
    app.use("/api/procedure_medicine",router);
};