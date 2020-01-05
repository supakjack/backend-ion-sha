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

exports.delAtParentType = (req, res, next) => {
  sql.query(
    `DELETE
            FROM parent_type
            WHERE prt_id = ?`,req.params.id,
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

exports.updateParentType = (req, res, next) => {
  sql.query(
    `UPDATE parent_type 
      SET prt_name =?,
          prt_use =?
      WHERE prt_id =?`,
    [req.body.prt_name,req.body.prt_use,req.params.id],
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