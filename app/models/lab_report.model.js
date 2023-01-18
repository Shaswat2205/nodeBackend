module.exports = (sequelize, Sequelize) => {
    const lab_report = sequelize.define("lab_report", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        lab_result: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        test_result: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        patinet_id: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        appointmentid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        patinet_type: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return lab_report;
};
