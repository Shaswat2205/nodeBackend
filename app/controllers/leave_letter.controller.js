const { condition } = require("sequelize");
const db = require("../models");
const leave_letter = db.leave_letter;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        id,
        name,
        paitent_name,
        exam_date,
        diagnosis,
        fdate,
        tdate,
        created_by,
        created_date
    } = req.body

    const data1 = {
        id,
        name,
        paitent_name,
        exam_date,
        diagnosis,
        fdate,
        tdate,
        created_by,
        created_date
    };

    // Save Address in the database
    return leave_letter.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "leave_letter added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating leave_letter :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};





