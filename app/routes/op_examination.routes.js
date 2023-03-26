const op_examination = require("../controllers/op_examination.controller");
const { op_examination } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",op_examination.create);
    app.use("/api/op_examination",router);
};