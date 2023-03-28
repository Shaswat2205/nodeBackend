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
<<<<<<< HEAD
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
=======
    //update address
    return doctor.update(data3)
        .then(async data => {
            data = data.get({plain: true});

            return res.status(201).json({
                code:200,

            })
        });
    //retreiving addresss
    exports.findAll = (req, res) => {
        const limit = Math.min(parseInt(req.query.limit || 10), 10);
        const condition = {}
        if(req.query.department) {
            //condition.
        }
    }
}
>>>>>>> 3cdbdba6f1c97c71ad2b729f8cbc33aa049eb29a
