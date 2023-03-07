const {condition} = require("sequelize");
const db = require("../models");
const reference_letter = db.reference_letter;
const Op = db.Sequelize.Op;

exports.create=(req,res)=>{
    const{
        id,
        doctor,
        patient,
        exam_date,
        diagnosis,
        days,
        created_date,
        created_by,
    } = req.body

    const data1 = {
        id,
        doctor,
        patient,
        exam_date,
        diagnosis,
        days,
        created_date,
        created_by,
    };

    return pharmabill.create(data1)
        .then(async data =>{
            data = data.get({plain:true});

            return res.status(201).json({
                code:200,
                message: "row added in bill",
                data
            });
        })
        .catch(err=>{
            console.error(`Error while adding a record in bill :: ${err}`);
            return res.status(500).json({message:`Internal server error while adding record in pharma bill`});
        });
    }

        