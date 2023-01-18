module.exports = (sequelize, Sequelize) => {
    const labtest_group = sequelize.define("labtest_group", {
        testid: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        labid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        test_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        normal_range: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
        units: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return labtest_group;
};
