const doctor = require("../controllers/doctor.controller");
const { doctor } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",doctor.create);
    app.use("/api/doctor",router);
};