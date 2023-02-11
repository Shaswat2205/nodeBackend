module.exports = (sequelize, Sequelize)=>{
    const outside_medicine = sequelize.define("outside_medicine",{
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        patient_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        appointment_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        stock: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        med_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        anupana: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        doseage: {
            type: Sequelize.STRING(50),
            allowNull:false
        },
        qty: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        food: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        date: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
    },
        {
            freezeTableName: true
        });

    return outside_medicine;
};
