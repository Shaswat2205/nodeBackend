const { condition} = require("sequelize");
const db = require("../models");
const department = db.department;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const {
        departmentid,
        departmentname,
        description,
        status
    } = req.body
    const data2 = {
        departmentid,
        departmentname,
        description,
        status
    };
    //save address
    return department.create(data2)
        .then(async data => {
            data = data.get({plain: true});

            return res.status(201).json({
                code:200,

            });
        })
    }
    //retreiving addresss
    exports.findAll = (req, res) => {
        const limit = Math.min(parseInt(req.query.limit || 10), 10);
        const condition = {}
        if(req.query.department) {
            //condition.
        }
    };
