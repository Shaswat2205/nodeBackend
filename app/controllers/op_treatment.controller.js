const { condition } = require("sequelize");
const db = require("../models");
const op_treatment = db.op_treatment;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        id,
        pid,
        patient_id,
        appointmentid,
        date,
        procedure,
        sub_procedure,
        medicine,
        days,
        qty,
        total,
        morning,
        afternoon,
        evening,
        night,
        observation
    } = req.body

    const data1 = {
        id,
        patient_id,
        appointmentid,
        date,
        procedure,
        sub_procedure,
        medicine,
        days,
        qty,
        total,
        morning,
        afternoon,
        evening,
        night,
        observation
    };

    // Save Address in the database
    return op_treatment.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "op_treatment added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating op_treatment :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};





