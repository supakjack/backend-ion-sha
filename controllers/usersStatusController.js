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
