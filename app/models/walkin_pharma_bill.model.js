module.exports = (sequelize, Sequelize) => {
    const walkin_pharma_bill = sequelize.define("walkin_pharma_bill", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        bill_no: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        patient_name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        doctor: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        mob_no: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        date: {
            type: Sequelize.date,
            allowNull: false
        },
        medecine: {
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
            type: Sequelize.date,
            allowNull: false
        },
        unit: {
            type: Sequelize.STRING(255),
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
            type: Sequelize.STRING(20),
            allowNull: false
        },
    }, {
        freezeTableName: true
    });

    return walkin_pharma_bill;
};
