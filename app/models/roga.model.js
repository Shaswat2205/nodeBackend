module.exports = (sequelize, Sequelize) => {
    const roga = sequelize.define("roga", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        roga_name: {
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

    return roga;
};
