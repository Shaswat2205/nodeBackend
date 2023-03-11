const { condition } = require("sequelize");
const db = require("../models");
const medicine = db.medicine;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        medicineid,
        medicinename,
        medicinecost,
        stock,
        description,
        exp_date,
        batch,
        unit,
        status,
        cgst,
        sgst

    } = req.body

    const data1 = {
        medicineid,
        medicinename,
        medicinecost,
        stock,
        description,
        exp_date,
        batch,
        unit,
        status,
        cgst,
        sgst
    };

    // Save Address in the database
    return medicine.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "medicine added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating medicine :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};





