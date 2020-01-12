const sql = require('../db');

exports.addEducationLevels = (req, res, next) => {
  sql.query(
    `INSERT INTO education_levels (edl_name, edl_sub_name)
            values (?,?)`,
    [req.body.edl_name, req.body.edl_sub_name],
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

exports.getAllEducationLevels = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM education_levels`,
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

exports.getAtEducationLevels = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM education_levels
            WHERE edl_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select At error');
        res.json(err);
      } else {
        console.log('select At complete');
        res.json(query);
      }
    }
  );
};

exports.delAtEducationLevels = (req, res, next) => {
  sql.query(
    `DELETE
            FROM education_levels
            WHERE edl_id = ?`,
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

exports.getEducationLevelsGroup = (req, res, next) => {
  sql.query(
    `SELECT DISTINCT
        edl.edl_id ,
        edl.edl_name 
      FROM register AS reg
      INNER JOIN years AS yrs ON reg.reg_yrs_id = yrs.yrs_id
      INNER JOIN education_levels AS edl ON reg.reg_edl_id = edl.edl_id
      INNER JOIN courses AS crs ON reg.reg_crs_id = crs.crs_id
      INNER JOIN terms AS tem ON reg.reg_tem_id = tem.tem_id
      INNER JOIN classes AS cls ON reg.reg_cls_id = cls.cls_id
      INNER JOIN register_status AS rgs ON reg_sta_id = rgs.rgs_id
      INNER JOIN applications AS app ON reg.reg_id = app.app_reg_id
      WHERE reg.reg_use = 'y' AND app.app_sta_id = 4`,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select DISTINCT edl.edl_name error');
        res.json(err);
      } else {
        console.log('select DISTINCT edl.edl_name complete');
        res.json(query);
      }
    }
  );
};

exports.updateEducationLevels = (req, res, next) => {
  sql.query(
    `UPDATE education_levels 
      SET edl_name = ?,
          edl_sub_name =?,
          edl_use =?,
      WHERE edl_id = ? `,
    [req.body.edl_name, req.body.edl_sub_name, req.body.edl_use, req.params.id],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('UPDATE error');
        res.json(err);
      } else {
        console.log('UPDATE complete');
        res.json(query);
      }
    }
  );
};
