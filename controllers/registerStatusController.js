const sql = require('../db');

exports.addRegisterStatus = (req, res, next) => {
  sql.query(
    `INSERT INTO register_status (rgs_name)
            values (?)`,
    req.body.rgs_name,
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

exports.getAllRegisterStatus = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM register_status`,
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


exports.getAtRegisterStatus = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM register_status
            WHERE rgs_id = ?`,req.params.id,
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

exports.delAtRegisterStatus = (req, res, next) => {
  sql.query(
    `DELETE
            FROM register_status
            WHERE rgs_id = ?`,req.params.id,
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