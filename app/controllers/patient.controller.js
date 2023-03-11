const { condition } = require("sequelize");
const db = require("../models");
const patient = db.patient;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        patientid,
        patientname,
        admission,
        address,
        mobileno,
        city,
        pincode,
        bloodgroup,
        gender,
        status,
        age,
        imp,
        bp,
        grbs,
        spo2,
        hr,
        is_allopathic,
        allopathic_observations
    } = req.body

    const data1 = {
        patientid,
        patientname,
        admission,
        address,
        mobileno,
        city,
        pincode,
        bloodgroup,
        gender,
        status,
        age,
        imp,
        bp,
        grbs,
        spo2,
        hr,
        is_allopathic,
        allopathic_observations
    };

    // Save Address in the database
    return patient.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "patient added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating patient :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};





