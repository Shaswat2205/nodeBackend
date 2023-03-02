const { condition } = require("sequelize");
const db = require("../models");
const Appointment = db.appointment;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        appointmentid,
        paintentid,
        roomid,
        departmentid,
        appointmentdate,
        appointmenttime,
        doctorid,
        status,
        appoinmenttype,
        app_reason,
        ipd,
        consultancy,
        payment_mode,
        payment,
        reception_time,
        doctor_time,
        doctor_outtime,
        pharma_time
    } = req.body

    const data1 = {
        appointmentid,
        paintentid,
        roomid,
        departmentid,
        appointmentdate,
        appointmenttime,
        doctorid,
        status,
        appoinmenttype,
        app_reason,
        ipd,
        consultancy,
        payment_mode,
        payment,
        reception_time,
        doctor_time,
        doctor_outtime,
        pharma_time
    };

    // Save Address in the database
    return Appointment.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "Appointment added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating Appointment :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};


// Retrieve all Address from the database.
exports.findAll = (req, res) => {

    const limit = Math.min(parseInt(req.query.limit || 10), 10);

    const condition = {}

    if (req.query.department) {
        condition.department = req.query.department
    }

    if (req.query.nextToken) {
        condition.updatedAt = { [Op.lt]: new Date(req.query.nextToken) };
    }

    return Appointment.findAll({
        where: condition,
        order: [['updatedAt', 'desc']],
        limit: limit,
        raw: true,
    })
        .then(async data => {


            const nextToken = data.length === limit ? data[limit - 1].updatedAt : null;

            return res.status(200).json({ data, nextToken });
        })
        .catch(err => {
            console.error(`Error Getting Addresses :: ${err}`);
            return res.status(500).json({ message: "Internal Server Error" });
        });
};


exports.deleteAll = (req, res) => {


    return Appointment.destroy({
        where: {
            experience: {
                [Op.gte]: 20
            }
        }
    })
        .then(async data => {


            return res.status(200).json({ message: "Appontiment deleted successfully" });
        })
        .catch(err => {
            console.error(`Error deleteing employee :: ${err}`);
            return res.status(500).json({ message: "Internal Server Error" });
        });
};



