const department = require("../controllers/department.controller")
module.exports = app =>{
    const router = require("express").Router()
    //add in the methods accordingly
    module.exports=app =>{
        const router = require("express").Router();
        router.post("/", department.create);
        app.use("/api/patient",router);
    }
}