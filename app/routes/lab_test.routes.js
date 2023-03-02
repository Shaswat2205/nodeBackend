const lab_test = require("../controllers/lab_test.controller")

module.exports = app => {
    const router = require("express").Router();
    router.post("/",lab_test.create);
    app.use("api/lab_test",router);
};