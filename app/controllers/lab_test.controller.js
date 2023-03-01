const { condition } = require("sequelize");
const db = require("../models");
const Lab_test = db.lab_test;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        testid,
        testname,
        price,
        description,
        status,
    } = req.body

    const data1 = {
        testid,
        testname,
        price,
        description,
        status,
    };

    // Save Address in the database
    return Lab_test.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "Lab test added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating new Lab test :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};









