const roga = require("../controllers/roga.controller")

module.exports = app => {
    const router = require("express").Router();
    router.post("/",roga.create);
    app.use("/api/roga",router);
};