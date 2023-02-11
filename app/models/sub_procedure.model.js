module.exports = (sequelize, Sequelize) => {
    const sub_procedure = sequelize.define("sub_procedure", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        roga_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        procedure_id:{
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
    }, {
        freezeTableName: true
    });

    return sub_procedure;
};
