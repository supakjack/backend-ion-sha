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

exports.getAtParentStaTab = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM parent_sta_tab
            WHERE pst_id = ?`,req.params.id,
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

exports.delAtParentStaTab = (req, res, next) => {
  sql.query(
    `DELETE 
            FROM parent_sta_tab
            WHERE pst_id = ?`,req.params.id,
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

exports.updateParentStaTab = (req, res, next) => {
  sql.query(
    `UPDATE parent_sta_tab 
      SET pst_salary = ?,
          pst_name = ?,
          pst_phone = ?,
          pst_rela = ?,
          pst_pf_id = ?,
          pst_type_id = ?,
          pst_app_id = ?  
      WHERE pst_id = ?`,
    [
      req.body.pst_salary,
      req.body.pst_name,
      req.body.pst_phone,
      req.body.pst_rela,
      req.body.pst_pf_id,
      req.body.pst_type_id,
      req.body.pst_app_id,
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
