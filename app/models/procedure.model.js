module.exports = (sequelize, Sequelize) => {
    const procedure = sequelize.define("procedure", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        procedure_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
    }, {
        freezeTableName: true
    });

    return procedure;
};
