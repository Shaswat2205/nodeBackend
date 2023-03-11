const { condition } = require("sequelize");
const db = require("../models");
const op_medicine = db.op_medicine;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        id,
        patient_id,
        appointmentid,
        date,
        medicine,
        days,
        qty,
        total,
        morning,
        afternoon,
        evening,
        night,
        anupana
    } = req.body

    const data1 = {
        id,
        patient_id,
        appointmentid,
        date,
        medicine,
        days,
        qty,
        total,
        morning,
        afternoon,
        evening,
        night,
        anupana
    };

    // Save Address in the database
    return op_medicine.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "op_medicine added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating op_medicine :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};





