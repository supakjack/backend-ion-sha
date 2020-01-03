const sql = require('../db');

exports.addYears = (req, res, next) => {
  sql.query(
    `INSERT INTO years (yrs_name)
            values (?)`,
    req.body.yrs_name,
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

exports.getAllYears = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM years`,
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

exports.getAtYears = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM years
            WHERE yrs_id = ?`,req.params.id,
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

exports.delAtYears = (req, res, next) => {
  sql.query(
    `DELETE
            FROM years
            WHERE yrs_id = ?`,req.params.id,
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
