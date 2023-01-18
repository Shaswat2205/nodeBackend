module.exports = (sequelize, Sequelize) => {
    const doctor = sequelize.define("doctor", {
        doctorid: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        doctorname: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        mobileno: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        departmentid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        loginid: {
            type: Sequelize.STRING(25),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(25),
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        education: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        experience: {
            type: Sequelize.FLOAT(11,1),
            allowNull: false
        },
        consultancy_charge: {
            type: Sequelize.FLOAT(10,2),
            allowNull: false  
        },
        doc_sign: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        designation: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        reg_no: {
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return doctor;
};
