module.exports = (sequelize, Sequelize) => {
    const op_treatment = sequelize.define("op_treatment", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        paitent_id: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        appointmentid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        procedure: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        sub_procedure: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        medicine: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        days: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        qty: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        total: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        morning: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        afternoon: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        evening: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        night: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        observation: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return op_treatment;
};
