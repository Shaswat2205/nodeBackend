module.exports = (sequelize, Sequelize)=>{
    const pharmabill = sequelize.define("pharmabill",{
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        patientname: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        patientid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        appointmentid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        doctorname: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        date: {
            type: Sequelize.STRING(25),
            allowNull: false
        },
        medicine: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        batch: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        available_qty: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        exp_date: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        unit: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        total_amt: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        discount_amt: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        grand_amt: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        anupana: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        dose: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        food: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    },
        {
            freezeTableName: true
        });

    return pharmabill;
};
