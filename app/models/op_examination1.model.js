module.exports = (sequelize, Sequelize) => {
    const op_examination1 = sequelize.define("op_examination1", {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
            },
            appointmentid: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            date: {
            type: Sequelize.DATE,
            allowNull: false
            },
            complaints1: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            complaints2: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            complaints3: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            complaints4: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            nadi: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            mala: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            mutra: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            jiva: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            sparsh: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            shabda: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            drik: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            akriti: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            rs: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            lungs: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            others: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            cvs: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            bp: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            heart: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            tenderness: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            palpation_abdomen: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            organomegaly: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            palpation_others: {
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
            roga: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
            },
            dept_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
            },
            diagnosis: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            provisional_diagnosis: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            history: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            auscultation_abdomen: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            temp: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            saturation: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            height: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            weight: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            bmi: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            purcassion: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            others_exam: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            orbit_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            orbit_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            eye_lids_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            eye_lids_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            palpebral_conjunctiva_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            palpebral_conjunctiva_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            bulbar_conjunctiva_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            bulbar_conjunctiva_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            sclera_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            sclera_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            anterior_chamber_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            anterior_chamber_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            iris_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            iris_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pupill_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pupill_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            lens_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            lens_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            lacrimal_apparatus_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            lacrimal_apparatus_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            slit_lamp_examination_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            slit_lamp_examination_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            fundoscopy_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            fundoscopy_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            others_eye_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            others_eye_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            right_eye_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            right_eye_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            left_eye_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            left_eye_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            both_eyes_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            both_eyes_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            w_right_eye_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            w_right_eye_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            w_left_eye_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            w_left_eye_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            w_both_eyes_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            w_both_eyes_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pin_right_eye_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pin_right_eye_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pin_left_eye_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pin_left_eye_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            refraction_right_eye_lens: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            refraction_right_eye_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            refraction_right_eye_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            refraction_left_eye_lens: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            refraction_left_eye_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            refraction_left_eye_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            refraction_both_eye_lens: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            refraction_both_eye_d: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            refraction_both_eye_n: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            notes_eyes: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            eye_img_1: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            eye_img_2: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pinna_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pinna_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            eac_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            eac_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            tm_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            tm_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            others_ear_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            others_ear_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            rinne_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            rinne_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            weber_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            weber_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            abc_r: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            abc_l: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            interpretation: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            notes_ears: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            ear_img_1: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            ear_img_2: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            external_nose: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            anterior_rhinoscopy: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            posterior_rhinoscopy: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pns: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            other_nose: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            notes_nose: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            nose_img_1: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            nose_img_2: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            tongue: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            teeth: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            gums: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            oral_mucosa: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            tonsils: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            post_pharyngeal_wall: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            notes_oral: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            tongue_img_1: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            tongue_img_2: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            scalp: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            hair: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            scalp_img_1: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            scalp_img_2: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            neck: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            neck_img_1: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            neck_img_2: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            saama: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            agni_pariksha: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            kosta_pariksha: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            purva: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            others_panchakarma: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pradhan: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            paschat: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            visit_notes: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            prakriti: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            viriti: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            sara: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            samhanana: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pramana: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            satmya: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            satwa: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            ahara_shakti: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            vyayama_shakti: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            vaya: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            antenatal: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            natal: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            post_natal: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            breast_exam: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            milk_exam: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            bhara: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            deergya: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            parinaha: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            paranaha: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            skin: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            ear: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            k_neck: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            chest: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            extremities: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            genitalia: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            head: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            eyes: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            mouth: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            trunk: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            abdomen: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            back_spine: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            umbilicus: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            scalp_hair: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            cartillage: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            lanugo_hairs: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            breast_nodules: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            external_genitalia: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            sole_creases: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            posture: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            poplitial_angle: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            arm_recoil: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            square_window: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            scarf_sign: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            heel_ear: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            moros_reflex: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            rooting_reflex: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            sucking_reflex: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            glabellar_tap: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            immunization_history: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            sroto_pariksha: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            shishu_paricharya: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            n_antenatal: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            n_natal: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            n_post_natal: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            n_breast_exam: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            n_milk_exam: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            a_height: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            a_weight: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            head_circumference: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            chest_circumference: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            mid_arm_circumference: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            crown_rump: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            gross: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            fine: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            scoial: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            speech: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            hearing: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            vision: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            a_immunization_history: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            built: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            neutrition: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            skull_shape: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            fontamels: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            face: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            nose: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            ears: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            p_mouth: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            p_face: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            p_skin: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            chest_examination: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            adbomen_examination: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            limb: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            lower_limb: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            spine_back: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            genitalia_examination: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            hetu: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            nidra: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            kosta: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            jatara_agani: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            mala_pravrutti: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            mutra_pravrutti: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            artava_pravrutti: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            prakopa: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            vruddi: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            kshaya: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pradosaja_vikara: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            sroto_drushti: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            lips: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            st_teeth: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            st_tongue: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            st_tonsils: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            shape: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            respiration: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            st_umbilicus: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            hernial: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            blood_vessels: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            strial: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            p_tenderness: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            p_rigidity: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            l_size: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            l_tender: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            l_margin: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            l_consistency: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            s_size: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            s_tender: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            s_margin: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            s_consistency: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            swelling: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            r_tender: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            fluid: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            dullness: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            s_dullness: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            a_sounds: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            rubs: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            aus_others: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            i_position: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            i_color: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            i_punction: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            i_size: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            i_shape: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_pulsation: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_tenderness: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_mobility: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_shape: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_surface: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_edge: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_consistancy: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_depth: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_indentation: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_fluctutaion: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_temprature: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_size: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pal_transillumination: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            bleeding: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pain: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            burning: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            feeling: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            itching: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            excoriation: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            skin_tags: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            e_haemorrhoids: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            fissure: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            e_bleeding: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            fistual: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            reetal: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            i_haemorrhoids: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_lmp: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_edd: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_pog: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            main_comp: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            associated_comp: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            htn: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            diabetes: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            nephritis: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            vd: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            rickets: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            heart_disease: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            hepatitis: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            tb: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            aids: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            surgeries: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            epilepsy: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_ahara: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_agni: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_koshta: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_nidra: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            smoking: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
            },
            tobaco: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
            },
            alcohol: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
            },
            none: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
            },
            pt_others: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
            },
            nature_of_work: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            menstrual_cycle: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_days: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_gravida: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_para: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_live: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_abortion: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_death: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_obs_history: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            resp_system: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            cordio_system: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_cns: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            digestive_system: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_abdomen: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            linea_nigra: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            striae: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            surgical_scar: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_ahara: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_agni: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_koshta: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_nidra: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_smoking: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_tobaco: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_alcohol: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_none: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_others: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_nature_of_work: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_htn: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_diabetes: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_astama: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_bleeding: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_anomalies: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_history: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_menarche: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_menupause: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_menstrual: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_duration: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_days: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_gravida: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_para: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_live: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_abortion: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_death: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_deliviries: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_pevents: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_devents: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_immune: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_brest: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_pa: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_speculum: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pt_g_pv: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            other_others: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            result: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            look: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            periferal: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pallor: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            cyanonis: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            icturus: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            clubbing: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            lymp: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            oedema: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            pigmentation: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            wasting: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            deformities: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            general_abdomen: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            ascultation: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            inespection: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            palpation: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            grbs: {
            type: Sequelize.STRING(100),
            allowNull: false
            },
            ecg
    }, {
        freezeTableName: true
    });

    return op_examination1;
};
