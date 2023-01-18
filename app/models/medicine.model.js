module.exports = (sequelize, Sequelize) => {
    const medicine = sequelize.define("medicine", {
        medicineid: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        medicinename: {
            type: Sequelize.STRING(25),
            allowNull: false
        },
        medicinecost: {
            type: Sequelize.FLOAT(10,2),
            allowNull: false
        },
        stock: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        exp_date: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        batch: {
            type: Sequelize.STRING(100),
            allowNull:false
        },
        units: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        cgst: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        sgst: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
        {
            freezeTableName: true
        });

    return medicine;
};