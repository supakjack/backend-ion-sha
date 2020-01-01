const sql = require('../db');

exports.addTerms = (req, res, next) => {
  sql.query(
    `INSERT INTO terms (tem_name)
            values (?)`,
    req.body.tem_name,
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

exports.getAllTerms = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM terms`,
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
