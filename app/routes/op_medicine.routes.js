const lp_medicine = require("../controllers/op_medicine.controller");
const { op_medicine } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",op_medicine.create);
    app.use("/api/op_medicine",router);
};