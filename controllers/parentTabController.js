// ParentTab.js
const sql = require('../db');

exports.addParentTab = (req, res, next) => {
  sql.query(
    `INSERT INTO parent_tab (   pat_job,
                                pat_phone,
                                pat_salary,
                                pat_type_id,
                                pat_app_id,
                                pat_pro_id  )
            values (?,?,?,?,?,?)`,
    [
      req.body.pat_job,
      req.body.pat_phone,
      req.body.pat_salary,
      req.body.pat_type_id,
      req.body.pat_app_id,
      req.body.pat_pro_id
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

exports.getAllParentTab = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM parent_tab`,
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

exports.getAtParentTab = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM parent_tab
            WHERE pat_id = ?`,
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

exports.delAtParentTab = (req, res, next) => {
  sql.query(
    `DELETE
            FROM parent_tab
            WHERE pat_id = ?`,
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

exports.updateParentTab = (req, res, next) => {
  sql.query(
    `UPDATE parent_tab 
      SET pat_job = ?,
          pat_phone = ?,
          pat_salary = ?,
          pat_type_id = ?,
          pat_app_id = ?,
          pat_pro_id =?  
      WHERE pat_id = ?`,
    [
      req.body.pat_job,
      req.body.pat_phone,
      req.body.pat_salary,
      req.body.pat_type_id,
      req.body.pat_app_id,
      req.body.pat_pro_id,
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
