const {condition} = require("sequelize");
const db = require("../models");
const walkin_pharma_bill = db.walkin_pharma_bill;
const Op = db.Sequelize.Op;

exports.create=(req,res)=>{
    const{
        id,
        bill_no,
        patient_name,
        doctor,
        mob_no,
        date,
        medecine,
        batch,
        available_qty,
        exp_date,
        unit,
        quantity,
        price,
        total_amt,
        discount_amt,
        grand_amt,
        type,
    } = req.body

    const data1 = {
        id,
        bill_no,
        patient_name,
        doctor,
        mob_no,
        date,
        medecine,
        batch,
        available_qty,
        exp_date,
        unit,
        quantity,
        price,
        total_amt,
        discount_amt,
        grand_amt,
        type,
    };

    return walkin_pharma_bill.create(data1)
        .then(async data =>{
            data = data.get({plain:true});

            return res.status(201).json({
                code:200,
                message: "row added in walk in pharma bill",
                data
            });
        })
        .catch(err=>{
            console.error(`Error while adding procedure medicine :: ${err}`);
            return res.status(500).json({message:`Internal server error while adding rwalk in pharma bill`});
        });
    }

        