const sql = require('../db');

exports.addRegister = (req, res, next) => {
  sql.query(
    `INSERT INTO register ( reg_code,
                            reg_start,
                            reg_end,
                            reg_round,
                            reg_max,
                            reg_now,
                            reg_sta_id,
                            reg_yrs_id,
                            reg_tem_id,
                            reg_cls_id,
                            reg_crs_id,
                            reg_edl_id  )
            values (?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      req.body.reg_code,
      req.body.reg_start,
      req.body.reg_end,
      req.body.reg_round,
      req.body.reg_max,
      req.body.reg_now,
      req.body.reg_sta_id,
      req.body.reg_yrs_id,
      req.body.reg_tem_id,
      req.body.reg_cls_id,
      req.body.reg_crs_id,
      req.body.reg_edl_id
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

exports.addCountRegById = (req, res, next) => {
  sql.query(
    `UPDATE register AS reg
        SET reg.reg_now = reg.reg_now + 1
      WHERE reg_id = ?`,req.body.reg_id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('addCountRegById error');
        res.json(err);
      } else {
        console.log('addCountRegById complete');
        res.json(query);
      }
    }
  );
};

exports.getAllRegister = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM register`,
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

exports.getBarReport = (req, res, next) => {
  sql.query(
    `SELECT 
		SUM(reg.reg_max) AS max ,
            SUM(reg.reg_now) AS now ,
            crs.crs_th_name AS label
    FROM register AS reg
    INNER JOIN courses AS crs ON reg.reg_cls_id = crs.crs_id
    GROUP BY label`,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getBarReport error');
        res.json(err);
      } else {
        console.log('getBarReport complete');
        res.json(query);
      }
    }
  );
};

exports.getAtRegister = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM register
            WHERE reg_id = ?`,
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

exports.delAtRegister = (req, res, next) => {
  sql.query(
    `DELETE
            FROM register
            WHERE reg_id = ?`,
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

exports.updateRegister = (req, res, next) => {
  sql.query(
    `UPDATE register 
      SET reg_code = ?,
          reg_start = ?,
          reg_end = ?,
          reg_round = ?,
          reg_max = ?,
          reg_now = ?,
          reg_sta_id = ?,
          reg_yrs_id = ?,
          reg_tem_id = ?,
          reg_cls_id = ?,
          reg_crs_id = ?,
          reg_edl_id = ?,
          reg_use = ?
      WHERE reg_id = ?`,
    [
      req.body.reg_code,
      req.body.reg_start,
      req.body.reg_end,
      req.body.reg_round,
      req.body.reg_max,
      req.body.reg_now,
      req.body.reg_sta_id,
      req.body.reg_yrs_id,
      req.body.reg_tem_id,
      req.body.reg_cls_id,
      req.body.reg_crs_id,
      req.body.reg_edl_id,
      req.body.reg_use,
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
