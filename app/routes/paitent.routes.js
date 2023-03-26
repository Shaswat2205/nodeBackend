const paitent = require("../controllers/paitent.controller");
const { paitent } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",paitent.create);
    app.use("/api/paitent",router);
};