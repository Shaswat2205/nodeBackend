module.exports = (sequelize, Sequelize) => {
    const department = sequelize.define("department", {
        departmentid: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        departmentname: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return department;
};
