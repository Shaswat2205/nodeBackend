const op_examination1 = require("../controllers/op_examination1.controller");
const { op_examination1 } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",op_examination1.create);
    app.use("/api/op_examination1",router);
};