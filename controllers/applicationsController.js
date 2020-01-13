// applicationsController.js
const sql = require('../db');

exports.updateAppPass = (req, res, next) => {
  sql.query(
    `UPDATE applications 
      SET   app_sta_id = ? 
      WHERE app_id = ?`,
    [req.body.app_sta_id, req.params.id],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('update updateAppPass error');
        res.json(err);
      } else {
        console.log('update updateAppPass complete');
        res.json(query);
      }
    }
  );
};

exports.updateAppFail = (req, res, next) => {
  sql.query(
    `UPDATE applications 
      SET   app_sta_id = ? 
      WHERE app_id = ?`,
    [req.body.app_sta_id, req.params.id],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('updateAppFail error');
        res.json(err);
      } else {
        console.log('updateAppFail complete');
        res.json(query);
      }
    }
  );
};

exports.updateAppCancel = (req, res, next) => {
  sql.query(
    `UPDATE applications 
      SET   app_sta_id = ? 
      WHERE app_id = ?`,
    [req.body.app_sta_id, req.params.id],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('updateAppCancel error');
        res.json(err);
      } else {
        console.log('updateAppCancel complete');
        res.json(query);
      }
    }
  );
};

exports.addApplications = (req, res, next) => {
  sql.query(
    `INSERT INTO applications ( app_code,
                            app_sta_id,
                            app_usr_id,
                            app_pro_id,
                            app_reg_id  )
            values (?,?,?,?,?)`,
    [
      req.body.app_code,
      req.body.app_sta_id,
      req.body.app_usr_id,
      req.body.app_pro_id,
      req.body.app_reg_id
    ],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('insert error');
        res.json(err);
      } else {
        console.log('insert complete');
        res.json(query);
      }
    }
  );
};

exports.getAllApplications = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM applications`,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select all error');
        res.json(err);
      } else {
        console.log('select all complete');
        res.json(query);
      }
    }
  );
};

exports.getAtApplications = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM applications
            WHERE app_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select at error');
        res.json(err);
      } else {
        console.log('select at complete');
        res.json(query);
      }
    }
  );
};

exports.getAtApplicationsTab1 = (req, res, next) => {
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
          nation_stt.nation_id AS pro_stt_nation_id,
          blood_stt.blood_name AS pro_stt_blood,
          blood_stt.blood_id AS pro_stt_blood_id,
          pf_stt.pf_name AS pro_stt_prefix,
          pf_stt.pf_id AS pro_stt_prefix_id,
          pv_stt.pv_name AS pro_stt_pv,
          pv_stt.pv_id AS pro_stt_pv_id,
          reli_stt.reli_name AS pro_stt_reli,
          reli_stt.reli_id AS pro_stt_reli_id
      FROM ion_sha.applications AS app
      INNER JOIN ion_sha.applications_status AS aps ON app.app_sta_id = aps.aps_id
      INNER JOIN ion_sha.student_tab AS stt ON app.app_id = stt.stt_app_id
      INNER JOIN ion_sha.profiles AS pro_stt ON stt.stt_pro_id = pro_stt.pro_id
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
      WHERE app.app_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select getAtApplicationsTab1 error');
        res.json(err);
      } else {
        console.log('select getAtApplicationsTab1 complete');
        res.json(query);
      }
    }
  );
};

exports.delAtApplications = (req, res, next) => {
  sql.query(
    `DELETE
            FROM applications
            WHERE app_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select del error');
        res.json(err);
      } else {
        console.log('select del complete');
        res.json(query);
      }
    }
  );
};

exports.getLastId = (req, res, next) => {
  sql.query(
    `SELECT MAX(app_id) AS last_id
        FROM applications AS app 
        INNER JOIN users AS usr
        WHERE usr.usr_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select last_id error');
        res.json(err);
      } else {
        console.log('select last_id complete');
        res.json(query);
      }
    }
  );
};

exports.updateApplications = (req, res, next) => {
  sql.query(
    `UPDATE applications 
      SET   app_code = ? ,
            app_update_date = ? ,
            app_sta_id = ? ,
            app_usr_id = ? ,
            app_pro_id = ? ,
            app_reg_id = ?  
      WHERE app_id = ?`,
    [
      req.body.app_code,
      req.body.app_update_date,
      req.body.app_sta_id,
      req.body.app_usr_id,
      req.body.app_pro_id,
      req.body.app_reg_id,
      req.params.id
    ],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('update error');
        res.json(err);
      } else {
        console.log('update complete');
        res.json(query);
      }
    }
  );
};
