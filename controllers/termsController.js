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

exports.getAtTerms = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM terms
            WHERE tem_id = ?`,
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

exports.delAtTerms = (req, res, next) => {
  sql.query(
    `DELETE
            FROM terms
            WHERE tem_id = ?`,
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

exports.updateTerms = (req, res, next) => {
  sql.query(
    `UPDATE terms 
      SET tem_name = ?,
          tem_use = ?
      WHERE tem_id = ?`,
    [req.body.tem_name, req.body.tem_use, req.params.id],
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
