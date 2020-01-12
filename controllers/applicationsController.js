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
