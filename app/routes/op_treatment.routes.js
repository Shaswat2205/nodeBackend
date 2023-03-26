const op_treatment = require("../controllers/op_treatment.controller");
const { op_treatment } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",op_treatment.create);
    app.use("/api/op_treatment",router);
};