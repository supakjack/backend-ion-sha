const sql = require('../../db');

exports.getApp = (req, res, next) => {
  sql.query(
    `SELECT
            app.app_id AS id,
            aps.aps_name AS app_status,
            SUBSTR(reg.reg_start,1,10) AS start,
            SUBSTR(reg.reg_end,1,10) AS end,     
            reg.reg_round AS round,
            reg.reg_max AS max,
            reg.reg_now AS now,
            rgs.rgs_name AS status,
            yrs.yrs_name AS year,
            edl.edl_name AS edu,
            crs.crs_th_name AS cours_th,
            crs.crs_en_name AS cours_en,
            tem.tem_name AS term,
            cls.cls_title AS class_title,
            cls.cls_sub AS class_sub,
            pro_app.pro_id AS pro_app_id,
            pro_app.pro_first_th_name AS pro_app_first_th_name,
            pro_app.pro_last_th_name AS pro_app_last_th_name,
            pro_app.pro_first_en_name AS pro_app_first_en_name,
            pro_app.pro_last_en_name AS pro_app_last_en_name,
            pro_app.pro_id_card AS pro_app_id_card,
            pro_app.pro_race AS pro_app_race,
            pro_app.pro_bod AS pro_app_bod,
            pro_app.pro_last_en_name AS pro_app_last_en_name,
            nation_app.nation_name AS pro_app_nation,
            blood_app.blood_name AS pro_app_blood,
            pf_app.pf_name AS pro_app_prefix,
            pv_app.pv_name AS pro_app_pv,
            reli_app.reli_name AS pro_app_reli,
            pro_stt.pro_id AS pro_stt_id,
            pro_stt.pro_first_th_name AS pro_stt_first_th_name,
            pro_stt.pro_last_th_name AS pro_stt_last_th_name,
            pro_stt.pro_first_en_name AS pro_stt_first_en_name,
            pro_stt.pro_last_en_name AS pro_stt_last_en_name,
            pro_stt.pro_id_card AS pro_stt_id_card,
            pro_stt.pro_race AS pro_stt_race,
            pro_stt.pro_bod AS pro_stt_bod,
            pro_stt.pro_last_en_name AS pro_stt_last_en_name,
            nation_stt.nation_name AS pro_stt_nation,
            blood_stt.blood_name AS pro_stt_blood,
            pf_stt.pf_name AS pro_stt_prefix,
            pv_stt.pv_name AS pro_stt_pv,
            reli_stt.reli_name AS pro_stt_reli
    FROM ion_sha.applications AS app
    INNER JOIN ion_sha.applications_status AS aps ON app.app_sta_id = aps.aps_id
    INNER JOIN ion_sha.student_tab AS stt ON app.app_id = stt.stt_app_id
    INNER JOIN ion_sha.profiles AS pro_stt ON stt.stt_pro_id = pro_stt.pro_id
    INNER JOIN ion_sha.profiles AS pro_app ON app.app_pro_id = pro_app.pro_id
    INNER JOIN ion_sha.users AS usr ON app.app_usr_id = usr.usr_id
    INNER JOIN ion_sha.register AS reg ON app.app_reg_id = reg.reg_id
    INNER JOIN ion_sha.years AS yrs ON reg.reg_yrs_id = yrs.yrs_id
    INNER JOIN ion_sha.education_levels AS edl ON reg.reg_edl_id = edl.edl_id
    INNER JOIN ion_sha.courses AS crs ON reg.reg_crs_id = crs.crs_id
    INNER JOIN ion_sha.terms AS tem ON reg.reg_tem_id = tem.tem_id
    INNER JOIN ion_sha.classes AS cls ON reg.reg_cls_id = cls.cls_id
    INNER JOIN ion_sha.register_status AS rgs ON reg_sta_id = rgs.rgs_id
    INNER JOIN tsp60_hrdb.hr_prefix AS pf_stt ON pro_stt.pro_prefix_id = pf_stt.pf_id
    INNER JOIN tsp60_hrdb.hr_prefix AS pf_app ON pro_app.pro_prefix_id = pf_app.pf_id
    INNER JOIN tsp60_hrdb.hr_nation AS nation_app ON pro_app.pro_nation_id = nation_app.nation_id
    INNER JOIN tsp60_hrdb.hr_nation AS nation_stt ON pro_stt.pro_nation_id = nation_stt.nation_id
    INNER JOIN tsp60_hrdb.hr_province AS pv_app ON pro_app.pro_province_id = pv_app.pv_id
    INNER JOIN tsp60_hrdb.hr_province AS pv_stt ON pro_stt.pro_province_id = pv_stt.pv_id
    INNER JOIN tsp60_hrdb.hr_religion AS reli_app ON pro_app.pro_religion_id = reli_app.reli_id
    INNER JOIN tsp60_hrdb.hr_religion AS reli_stt ON pro_stt.pro_religion_id = reli_stt.reli_id
    INNER JOIN tsp60_hrdb.hr_blood AS blood_app ON pro_app.pro_blood_id = blood_app.blood_id
    INNER JOIN tsp60_hrdb.hr_blood AS blood_stt ON pro_stt.pro_blood_id = blood_stt.blood_id
    WHERE usr.usr_name = ?`,
    req.params.username,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getReg error');
        res.json(err);
      } else {
        console.log('getReg complete');
        res.json(query);
      }
    }
  );
};


exports.getAppReg = (req, res, next) => {
  sql.query(
    `SELECT
            app.app_id AS id,
            aps.aps_name AS app_status,
            aps.aps_id AS status_id,
            SUBSTR(reg.reg_start,1,10) AS start,
            SUBSTR(reg.reg_end,1,10) AS end,     
            reg.reg_round AS round,
            reg.reg_max AS max,
            reg.reg_now AS now,
            yrs.yrs_name AS year,
            edl.edl_name AS edu,
            crs.crs_th_name AS cours_th,
            crs.crs_en_name AS cours_en,
            tem.tem_name AS term,
            cls.cls_title AS class_title,
            cls.cls_sub AS class_sub,
            pro_stt.pro_id AS pro_stt_id,
            pro_stt.pro_first_th_name AS pro_stt_first_th_name,
            pro_stt.pro_last_th_name AS pro_stt_last_th_name,
            pro_stt.pro_first_en_name AS pro_stt_first_en_name,
            pro_stt.pro_last_en_name AS pro_stt_last_en_name,
            pro_stt.pro_id_card AS pro_stt_id_card,
            pro_stt.pro_race AS pro_stt_race,
            pro_stt.pro_bod AS pro_stt_bod,
            pro_stt.pro_last_en_name AS pro_stt_last_en_name,
            nation_stt.nation_name AS pro_stt_nation,
            blood_stt.blood_name AS pro_stt_blood,
            pf_stt.pf_name AS pro_stt_prefix,
            pv_stt.pv_name AS pro_stt_pv,
            reli_stt.reli_name AS pro_stt_reli
    FROM ion_sha.applications AS app
    INNER JOIN ion_sha.applications_status AS aps ON app.app_sta_id = aps.aps_id
    INNER JOIN ion_sha.student_tab AS stt ON app.app_id = stt.stt_app_id
    INNER JOIN ion_sha.profiles AS pro_stt ON stt.stt_pro_id = pro_stt.pro_id
    INNER JOIN ion_sha.users AS usr ON app.app_usr_id = usr.usr_id
    INNER JOIN ion_sha.register AS reg ON app.app_reg_id = reg.reg_id
    INNER JOIN ion_sha.years AS yrs ON reg.reg_yrs_id = yrs.yrs_id
    INNER JOIN ion_sha.education_levels AS edl ON reg.reg_edl_id = edl.edl_id
    INNER JOIN ion_sha.courses AS crs ON reg.reg_crs_id = crs.crs_id
    INNER JOIN ion_sha.terms AS tem ON reg.reg_tem_id = tem.tem_id
    INNER JOIN ion_sha.classes AS cls ON reg.reg_cls_id = cls.cls_id
    INNER JOIN ion_sha.register_status AS rgs ON reg_sta_id = rgs.rgs_id
    INNER JOIN tsp60_hrdb.hr_prefix AS pf_stt ON pro_stt.pro_prefix_id = pf_stt.pf_id
    INNER JOIN tsp60_hrdb.hr_nation AS nation_stt ON pro_stt.pro_nation_id = nation_stt.nation_id
    INNER JOIN tsp60_hrdb.hr_province AS pv_stt ON pro_stt.pro_province_id = pv_stt.pv_id
    INNER JOIN tsp60_hrdb.hr_religion AS reli_stt ON pro_stt.pro_religion_id = reli_stt.reli_id
    INNER JOIN tsp60_hrdb.hr_blood AS blood_stt ON pro_stt.pro_blood_id = blood_stt.blood_id
    WHERE usr.usr_name = ?`,
    req.params.username,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getReg error');
        res.json(err);
      } else {
        console.log('getReg complete');
        res.json(query);
      }
    }
  );
};


exports.getAppByEdl = (req, res, next) => {
  sql.query(
    `SELECT
        app.app_id AS id,
        aps.aps_name AS app_status,
        aps.aps_id AS status_id,   
        pro_stt.pro_id AS pro_stt_id,
        pro_stt.pro_first_th_name AS pro_stt_first_th_name,
        pro_stt.pro_last_th_name AS pro_stt_last_th_name,
        pro_stt.pro_first_en_name AS pro_stt_first_en_name,
        pro_stt.pro_last_en_name AS pro_stt_last_en_name,
        pf_stt.pf_name AS pro_stt_prefix,
        pv_stt.pv_name AS pro_stt_pv
    FROM ion_sha.applications AS app
    INNER JOIN ion_sha.applications_status AS aps ON app.app_sta_id = aps.aps_id
    INNER JOIN ion_sha.student_tab AS stt ON app.app_id = stt.stt_app_id
    INNER JOIN ion_sha.profiles AS pro_stt ON stt.stt_pro_id = pro_stt.pro_id
    INNER JOIN ion_sha.register AS reg ON app.app_reg_id = reg.reg_id
    INNER JOIN ion_sha.education_levels AS edl ON reg.reg_edl_id = edl.edl_id
    INNER JOIN ion_sha.register_status AS rgs ON reg_sta_id = rgs.rgs_id
    INNER JOIN tsp60_hrdb.hr_prefix AS pf_stt ON pro_stt.pro_prefix_id = pf_stt.pf_id
    INNER JOIN tsp60_hrdb.hr_province AS pv_stt ON pro_stt.pro_province_id = pv_stt.pv_id
    WHERE aps.aps_id = 4 AND edl.edl_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getAppByEdl error');
        res.json(err);
      } else {
        console.log('getAppByEdl complete');
        res.json(query);
      }
    }
  );
};

