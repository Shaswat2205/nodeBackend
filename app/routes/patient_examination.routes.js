const patient_examination = require("../controllers/patient_examination.controller")

module.exports = app =>{
    const router = require("express").Router();
    router.post("/", patient_examination.create);
    app.use("/api/patient_examination", router);
}