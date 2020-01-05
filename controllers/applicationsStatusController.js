// applicationsStatusController.js
const sql = require('../db');

exports.addApplicationsStatus = (req, res, next) => {
  sql.query(
    `INSERT INTO applications_status (aps_name)
            values (?)`,
    req.body.aps_name,
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

exports.getAllApplicationsStatus = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM applications_status`,
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

exports.getAtApplicationsStatus = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM applications_status
            WHERE aps_id = ?`,req.params.id,
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


exports.delAtApplicationsStatus = (req, res, next) => {
  sql.query(
    `DELETE 
            FROM applications_status
            WHERE aps_id = ?`,req.params.id,
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

exports.updateApplicationsStatus = (req, res, next) => {
  sql.query(
    `UPDATE applications_status 
      SET aps_name = ?,
      SET aps_use = ?
      WHERE aps_id = ?`,
    [req.body.aps_name,req.body.aps_use,req.params.id],
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