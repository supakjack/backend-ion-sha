// parentStaTabController.js
const sql = require('../db');

exports.addParentStaTab = (req, res, next) => {
  sql.query(
    `INSERT INTO parent_sta_tab ( pst_salary,
                            pst_name,
                            pst_phone,
                            pst_rela,
                            pst_pf_id,
                            pst_type_id,
                            pst_app_id  )
            values (?,?,?,?,?,?,?)`,
    [
      req.body.pst_salary,
      req.body.pst_name,
      req.body.pst_phone,
      req.body.pst_rela,
      req.body.pst_pf_id,
      req.body.pst_type_id,
      req.body.pst_app_id
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

exports.getAllParentStaTab = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM parent_sta_tab`,
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
