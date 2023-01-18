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
db.appoinment = require("./appoinment.model")(sequelize, Sequelize);
db.department = require("./department.model")(sequelize, Sequelize);
db.doctor = require("./doctor.model")(sequelize, Sequelize);
db.labtest_group = require("./labtest_group.model")(sequelize, Sequelize);
db.lab_report = require("./lab_report.model")(sequelize, Sequelize);
db.lab_test = require("./lab_test.model")(sequelize, Sequelize);
db.medicine = require("./medicine.model")(sequelize, Sequelize);
module.exports = db;
