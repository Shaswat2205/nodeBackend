const {condition} = require("sequelize");
const db = require("../models");
const procedure_medicine = db.procedure_medicine;
const Op = db.Sequelize.Op;

exports.create=(req,res)=>{
    const{
        id,
        procedure,
        medicine,
        status,
    } = req.body

    const data1 = {
        id,
        procedure,
        medicine,
        status,
    };

    return procedure_medicine.create(data1)
        .then(async data =>{
            data = data.get({plain:true});

            return res.status(201).json({
                code:200,
                message: "procedure medicne added",
                data
            });
        })
        .catch(err=>{
            console.error(`Error while adding a record in bill :: ${err}`);
            return res.status(500).json({message:`Internal server error while adding record in procedure`});
        });
    }

        