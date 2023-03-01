const { condition} = require("sequelize");
const db = require("../models");
const doctor = db.doctor;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const {
        doctorid,
        doctorname,
        mobileno,
        departmentid,
        loginid,
        password,
        status,
        education,
        experience,
        consultancy_charge,
        doc_sign,
        designation,
        reg_no
    } = req.body
    const data3 = {
        doctorid,
        doctorname,
        mobileno,
        departmentid,
        loginid,
        password,
        status,
        education,
        experience,
        consultancy_charge,
        doc_sign,
        designation,
        reg_no
    };
    //update address
    return doctor.update(data3)
        .then(async data) => {
            data = data.get({plain: true});

            return res.status(201).json({
                code:200,

            })
        }
    //retreiving addresss
    exports.findAll = (req, res) => {
        const limit = Math.min(parseInt(req.query.limit || 10), 10);
        const condition = {}
        if(req.query.department) {
            condition.
        }
    }
}