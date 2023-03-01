module.exports = (sequelize, Sequelize) => {
    const lab_test = sequelize.define("lab_test", {
        testid: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        testname: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    },{
        freezeTableName: true
    });

    return lab_test;
};
