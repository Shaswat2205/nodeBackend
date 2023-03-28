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
    return doctor.create(data3)
    .then(async data => {
        data = data.get({ plain: true });

        return res.status(201).json({
            code: 200,
            message: "doctor added successfully",
            data
        });
    })
    .catch(err => {
        console.error(`Error Creating doctor :: ${err}`);
        return res.status(500).json({ message: 'Internal Server Error emp' });
    });
};