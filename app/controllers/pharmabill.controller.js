const {condition} = require("sequelize");
const db = require("../models");
const pharmabill = db.pharmabill;
const Op = db.Sequelize.Op;

exports.create=(req,res)=>{
    const{
        id,
        patientbill,
        patientid,
        appointmentid,
        doctorname,
        date,
        medicine,
        batch,
        available_qty,
        exp_date,
        unit,
        quantity,
        price,
        total_amt,
        grand_amt,
        type,
        anupana,
        dose,
        food,
    } = req.body

    const data1 = {
        id,
        patientbill,
        patientid,
        appointmentid,
        doctorname,
        date,
        medicine,
        batch,
        available_qty,
        exp_date,
        unit,
        quantity,
        price,
        total_amt,
        grand_amt,
        type,
        anupana,
        dose,
        food,
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

        exports.deleteRecord = async (req, res) => {
            try {
              const { id } = req.body;
              await Record.findByIdAndDelete(id);
              res.status(201).json({
                message: "record deleted in pharma bill"
              });
            } catch (error) {
              console.error(error);
              res.status(500).json({ error: 'Internal server error while deleting in pharma bill' });
            }
          };
exports.createDiscount = (req,res)=>{
    const{
        discount_amt,
    } = req.body

    const data2 = {
        discount_amt,
    };
    return pharmabill.createDiscount(data2)
        .then(async data =>{
            data = data.get({plain:true});

            return res.status(201).json({
                code:200,
                message: "discount added in bill",
                data
            });
        })
        .catch(err=>{
            console.error(`Error while adding discount in bill :: ${err}`);
            return res.status(500).json({message:`Internal server error while adding discount in pharma bill`});
        })
}
exports.addValues = async (req, res) => {
    try {
      const { id } = req.body;
      const bill = await pharmabill.find({ _id: { $in: id } });
      if (bill.length === 0) {
        return res.status(404).json({ error: 'ID not found' });
      }
      const totalValue = bill.reduce((sum, bill) => sum + bill.grand_amt, 0);
      res.json({ totalValue });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error at pharma bill' });
    }
  };

              
