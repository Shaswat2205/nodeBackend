const appoinment = require("../controllers/appoinment.controller");
const { appoinment } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",appoinment.create);
    app.use("/api/appoinment",router);
};