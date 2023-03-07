const walkin_pharma_bill = require("../controllers/walkin_pharma_bill.controller")

module.exports = app => {
    const router = require("express").Router();
    router.post("/",walkin_pharma_bill.create);
    app.use("/api/walkin_bill",router);
};