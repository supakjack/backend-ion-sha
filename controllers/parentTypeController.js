// parentTypeController.js
const sql = require('../db');

exports.addParentType = (req, res, next) => {
  sql.query(
    `INSERT INTO parent_type (prt_name)
            values (?)`,
    req.body.prt_name,
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

exports.getAllParentType = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM parent_type`,
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

exports.getAtParentType = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM parent_type
            WHERE prt_id = ?`,req.params.id,
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
