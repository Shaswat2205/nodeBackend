const {condition} = require("sequelize");
const db = require("../models");
const sub_procedure = db.sub_procedure;
const Op = db.Sequelize.Op;

exports.create=(req,res)=>{
    const{
        id,
        roga_name,
        procedure_id,
        status,
    } = req.body

    const data1 = {
        id,
        roga_name,
        procedure_id,
        status,
    };

    return sub_procedure.create(data1)
        .then(async data =>{
            data = data.get({plain:true});

            return res.status(201).json({
                code:200,
                message: "sub procedure added",
                data
            });
        })
        .catch(err=>{
            console.error(`Error while adding sub procedure :: ${err}`);
            return res.status(500).json({message:`Internal server error while adding sub procedure`});
        });
    }

        