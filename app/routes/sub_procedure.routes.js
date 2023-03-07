const sub_procedure = require("../controllers/sub_procedure.controller")

module.exports = app => {
    const router = require("express").Router();
    router.post("/",sub_procedure.create);
    app.use("/api/sub_procedure",router);
};