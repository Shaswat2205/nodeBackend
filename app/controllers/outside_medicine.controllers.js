const { condition } = require("sequelize");
const db = require("../models");
const outside_medicine = db.outside_medicine;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        id,
        patient_id,
        appointment_id,
        med_name,
        anupana,
        doseage,
        qty,
        food,
        date
    } = req.body

    const data1 = {
        id,
        patient_id,
        appointment_id,
        med_name,
        anupana,
        doseage,
        qty,
        food,
        date
    };

    // Save Address in the database
    return outside_medicine.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "outside_medicine added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating outside_medicine :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};





