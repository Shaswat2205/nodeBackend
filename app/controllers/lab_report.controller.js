const { condition } = require("sequelize");
const db = require("../models");
const lab_report= db.lab_report;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        id,
        lab_result,
        date,
        test_result,
        patient_id,
        appointmentid,
        paitent_type
    } = req.body

    const data1 = {
        id,
        lab_result,
        date,
        test_result,
        patient_id,
        appointmentid,
        paitent_type
    };

    // Save Address in the database
    return lab_report.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "Lab Report added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating lab_report :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};


