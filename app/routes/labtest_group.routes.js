const labtest_group = require("../controllers/labtest_group.controller");
const { labtest_group } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",labtest_group.create);
    app.use("/api/labtest_group",router);
};