module.exports = (sequelize, Sequelize) => {
    const op_medicine = sequelize.define("op_medicine", {
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
        medicine: {
            type: Sequelize.STRING(11),
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
        anupana: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return op_medicine;
};
