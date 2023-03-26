const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DEFAULT_DB, dbConfig.USER, dbConfig.PASS, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.DIALECT,
    pool: {
        max: 8,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: false,
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.data = require("./data.model")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);
db.employee = require("./employee.model")(sequelize, Sequelize);
db.appoinment = require("./appointment.model")(sequelize, Sequelize);
db.department = require("./department.model")(sequelize, Sequelize);
db.doctor = require("./doctor.model")(sequelize, Sequelize);
db.labtest_group = require("./labtest_group.model")(sequelize, Sequelize);
db.lab_report = require("./lab_report.model")(sequelize, Sequelize);
db.leave_letter = require("./leave_letter.model")(sequelize, Sequelize);
db.lab_test = require("./lab_test.model")(sequelize, Sequelize);
db.medicine = require("./medicine.model")(sequelize, Sequelize);
db.op_examination = require("./op_examination.model")(sequelize, Sequelize);
db.op_examination1 = require("./op_examination1.model")(sequelize, Sequelize);
db.op_medicine = require("./op_medicine.model")(sequelize, Sequelize);
db.op_treatment = require("./op_treatment.model")(sequelize, Sequelize);
db.outside_medicine = require("./outside_medicine.model.js")(sequelize, Sequelize);
db.patient_examination = require("./patient_examination.model.js")(sequelize, Sequelize);
db.patient = require("./patient.model.js")(sequelize, Sequelize);
db.pharmabill = require("./pharmabill.model.js")(sequelize, Sequelize);
db.procedure_medicine = require("./procedure.model.js")(sequelize, Sequelize);
db.procedure = require("./procedure.model.js")(sequelize, Sequelize);
db.reference_letter = require("./reference_letter.model.js")(sequelize, Sequelize);
db.roga = require("./roga.model.js")(sequelize, Sequelize);
db.sub_procedure = require("./sub_procedure.model.js")(sequelize, Sequelize);
db.walkin_pharma_bill = require("./walkin_pharma_bill.model.js")(sequelize, Sequelize);

module.exports = db;
