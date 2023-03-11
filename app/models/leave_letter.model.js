module.exports = (sequelize, Sequelize) => {
    const leave_letter = sequelize.define("leave_letter", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        paitent_name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        exam_date: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        diagnosis: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        fdate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        tdate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        created_by: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        created_date: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return leave_letter;
};
