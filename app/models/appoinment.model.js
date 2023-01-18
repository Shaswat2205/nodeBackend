module.exports = (sequelize, Sequelize) => {
    const appoinment = sequelize.define("appointment", {
        appoinmentid: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        patientid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        roomid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        departmentid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        appointmentdate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        appointmenttime: {
            type: Sequelize.TIME,
            allowNull: false
        },
        doctorid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        appointmenttype: {
            type: Sequelize.STRING(25),
            allowNull: false
        },
        app_reason: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        ipd: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        consultancy: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        payment_mode: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        payment: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        reception_time: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        doctor_time: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        doctor_outtime: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        pharma_time: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return appoinment;
};
