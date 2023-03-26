const lab_report = require("../controllers/lab_report.controller");
const { lab_report } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",lab_report.create);
    app.use("/api/lab_report",router);
};