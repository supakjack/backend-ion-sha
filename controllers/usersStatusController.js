const sql = require('../db');

exports.addStatus = (req, res, next) => {
  sql.query(
    `INSERT INTO users_status (uss_name)
            values (?)`,
    req.body.uss_name,
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

exports.getAllStatus = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM users_status`,
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

exports.getAtStatus = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM users_status
            WHERE uss_id =?`,
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

exports.delAtStatus = (req, res, next) => {
  sql.query(
    `DELETE
            FROM users_status
            WHERE uss_id =?`,
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

exports.updateStatus = (req, res, next) => {
  sql.query(
    `UPDATE users_status 
      SET uss_name = ? ,
          uss_use = ?
      WHERE uss_id = ?`,
    [req.body.uss_name, req.body.uss_use, req.params.id],
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
