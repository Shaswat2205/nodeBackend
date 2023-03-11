//NOT COMPLETED YET
module.exports = (sequelize, Sequelize) => {
    const op_examination1 = sequelize.define("op_examination1", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        appointmentid: {
            type: Sequelize.STROING(50),
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
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
        palpation_abdomen: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        organomegaly: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        palpation_others: {
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
            type: Sequelize.UNSINGNED.INTEGER,
            allowNull: false
        },
        dept_id: {
            type: Sequelize.UNSIGNED.INTEGER,
            allowNull: false
        },
        diagnosis: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        provisonal_diagnosis: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        history: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        ausculation_abdomen: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        temp: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        saturation: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        height: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        weight: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        bmi: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        purcassion: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        others_exam: {
            type: Sequelize.STRING(50),
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

    return op_examination1;
};
