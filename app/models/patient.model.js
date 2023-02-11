module.exports = (sequelize, Sequelize)=>{
    const patient = sequelize.define("patient",{
        patientid: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        patientname: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        admission: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        mobileno: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        city: {
            type: Sequelize.STRING(25),
            allowNull: false
        },
        pincode: {
            type: Sequelize.STRING(20),
            allowNull:false
        },
        bloodgroup: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        imp: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        bp: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        grbs: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        spo2: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        hr: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        is_allopathic: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        allopathic_observations: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
    },
        {
            freezeTableName: true
        });

    return patient;
};
