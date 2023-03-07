const procedure = require("../controllers/procedure.controller")

module.exports = app => {
    const router = require("express").Router();
    router.post("/",procedure.create);
    app.use("/api/procedure",router);
};