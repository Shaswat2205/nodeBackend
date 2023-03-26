const { condition } = require("sequelize");
const db = require("../models");
const Labtest_group = db.labtest_group;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        testid,
        labid,
        test_name,
        normal_range,
        units
    } = req.body

    const data1 = {
        testid,
        labid,
        test_name,
        normal_range,
        units
    };

    // Save Address in the database
    return Labtest_group.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "labtest_group added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating labtest_group :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};



