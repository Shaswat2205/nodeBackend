module.exports = (sequelize, Sequelize) => {
    const procedure_medicine = sequelize.define("procedure_medicine", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        procedure: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        medicine: {
            type: Sequelize.STRING(150),
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
    }, {
        freezeTableName: true
    });

    return procedure_medicine;
};
