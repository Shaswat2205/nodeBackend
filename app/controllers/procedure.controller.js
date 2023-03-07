const {condition} = require("sequelize");
const db = require("../models");
const procedure = db.procedure;
const Op = db.Sequelize.Op;

exports.create=(req,res)=>{
    const{
        id,
        procedure_name,
        status,
    } = req.body

    const data1 = {
        id,
        procedure_name,
        status,
    };

    return procedure.create(data1)
        .then(async data =>{
            data = data.get({plain:true});

            return res.status(201).json({
                code:200,
                message: "procedure added",
                data
            });
        })
        .catch(err=>{
            console.error(`Error while adding a record in bill :: ${err}`);
            return res.status(500).json({message:`Internal server error while adding record in procedure`});
        });
    }

        