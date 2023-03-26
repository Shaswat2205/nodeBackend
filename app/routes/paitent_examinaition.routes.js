const paitent_examination = require("../controllers/paitent_examination.controller");
const { paitent_examination } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",paitent_examination.create);
    app.use("/api/paitent_examination",router);
};