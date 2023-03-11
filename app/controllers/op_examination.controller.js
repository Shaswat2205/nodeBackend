const { condition } = require("sequelize");
const db = require("../models");
const op_examination = db.op_examination;
const Op = db.Sequelize.Op;

// Create and Save a new Data
exports.create = (req, res) => {

    const {
        id,
        paitent_id,
        appoinmentid,
        date,
        history,
        medic_history,
        conplaints1,
        conplaints2,
        conplaints3,
        conplaints4,
        nadi,
        mala,
        mutra,
        jiva,
        sparsh,
        shabda,
        drik,
        akriti,
        rs,
        lungs,
        others,
        cvs,
        bp,
        heart,
        tenderness,
        organomelagy,
        cns,
        power,
        reflexes,
        tone,
        roga,
        dept_id,
        grbs,
        advise,
        note
    } = req.body

    const data1 = {
        id,
        paitent_id,
        appoinmentid,
        date,
        history,
        medic_history,
        conplaints1,
        conplaints2,
        conplaints3,
        conplaints4,
        nadi,
        mala,
        mutra,
        jiva,
        sparsh,
        shabda,
        drik,
        akriti,
        rs,
        lungs,
        others,
        cvs,
        bp,
        heart,
        tenderness,
        organomelagy,
        cns,
        power,
        reflexes,
        tone,
        roga,
        dept_id,
        grbs,
        advise,
        note
    };

    // Save Address in the database
    return op_examination.create(data1)
        .then(async data => {
            data = data.get({ plain: true });

            return res.status(201).json({
                code: 200,
                message: "op_examination added successfully",
                data
            });
        })
        .catch(err => {
            console.error(`Error Creating op_examination :: ${err}`);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
};





