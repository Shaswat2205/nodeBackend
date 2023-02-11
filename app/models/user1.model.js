module.exports = (sequelize, Sequelize) => {
    const user1 = sequelize.define("user1", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        link2details: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        tblname: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        designation: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        mobile: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        department: {
            type: Sequelize.INTEGER
        },
        role: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        qualification: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        dob: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
    }, {
        freezeTableName: true
    });

    return user1;
};
