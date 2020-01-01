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
