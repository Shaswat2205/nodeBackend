module.exports = (sequelize, Sequelize) => {
    const reference_letter = sequelize.define("reference_letter", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        doctor: {
            type: Sequelize.STRING(150),
            allowNull: false
        },
        patient: {
            type: Sequelize.STRING(150),
            allowNull: false
        },
        exam_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        diagnosis: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        days: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        created_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        created_by: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        freezeTableName: true
    });

    return reference_letter;
};
