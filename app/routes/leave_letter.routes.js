const leave_letter = require("../controllers/leave_letter.controller");
const { leave_letter } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",leave_letter.create);
    app.use("/api/leave_letter",router);
};