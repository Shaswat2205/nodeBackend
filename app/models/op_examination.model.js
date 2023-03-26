module.exports = (sequelize, Sequelize) => {
    const op_examination = sequelize.define("op_examination", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        patient_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        appointmentid: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        history: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        medic_history: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        complaints1: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        complaints2: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        complaints3: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        complaints4: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        nadi: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        mala: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        mutra: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        jiva: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        sparsh: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        shabda: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        drik: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        akriti: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        rs: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        lungs: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        others: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        cvs: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        bp: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        heart: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        tenderness: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        organomegaly: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        cns: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        power: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        reflexes: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        tone: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        roga: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        dept_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
        },
        grbs: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        advise: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        note: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
    }, {
        freezeTableName: true
    });

    return op_examination;
};
