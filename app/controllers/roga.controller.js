const { condition } = require("sequelize");
const db = require("../models");
const roga = db.roga;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        id,
        roga_name,
        status,
    } = req.body

    const data1 = {
        id,
        roga_name,
        status,
    };

    // Save Address in the database
    return roga.create(data1)
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
            return res.status(500).json({ message: 'Internal Server Error lab_test' });
        });
};









