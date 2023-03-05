module.exports = (sequelize, Sequelize)=>{
    const patient_examination = sequelize.define("patient_examination",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            allowNull: false
        },
        patient_id: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        date: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        general_exam: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        pulse_rate: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        heart_rate: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        respiration_rate: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        temp: {
            type: Sequelize.STRING(20),
            allowNull:false
        },
        blood_pressure: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        nadi: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        mutra: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        mala: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        jivha_upalepita: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        jivha_ragayukta: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        jivha_others: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        jivha_paka: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        jivha_centrally_coated: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        shabda: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        sparsha: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        varna_ruksha: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        varna_snigdha: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        varna_tanu: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        varna_sthula: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        varna_ushna: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        drik_pale: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        drik_conjested: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        drik_kalushita: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        drik_akshimalasrava: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        drik_jalasrava: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        drik_raga: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        akriti: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        prakruti_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        prakruti_assess: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        saara_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        saara_assess: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        smhanana_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        smhanana_assess: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        pramana_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        pramana_assess: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        satmya_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        satmya_asess: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        satwa_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        satwa_assess: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        ahara_shakti_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        ahara_shakti_assess: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        vyayama_shakti_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        vyayama_shakti_assess: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        vayah_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        vayah_assess: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        manah: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        buddhi: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        sanjna: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        jnana: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        bhakti: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        sheela: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        chesta: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        achara: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        smriti: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cvc: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        rs: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        pa: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cns: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        power: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        reflexes: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        tone: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        others: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        gus: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        mss: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        skin: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        storus1: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        storus2: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        storus3: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        dustilakshna1:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        dustilakshna2:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        dustilakshna3:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        local_exam:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        roga_type:{
            type: Sequelize.STRING(100),
            allowNull: false
        }


    },
        {
            freezeTableName: true
        });

    return patient_examination;
};
