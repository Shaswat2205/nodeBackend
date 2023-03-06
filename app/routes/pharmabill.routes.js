const lab_test = require("../controllers/pharmabill.controller");
const { pharmabill } = require("../models");

module.exports = app => {
    const router = require("express").Router();
    router.post("/",pharmabill.create);
    router.delete("/deleteRecord", pharmabill.deleteRecord);
    router.post("/discount", pharmabill.createDiscount);
    router.get("/total", pharmabill.addValues);
    app.use("/api/lab_test",router);
};