// parentStaTypeController.js
const sql = require('../db');

exports.addParentStaType = (req, res, next) => {
  sql.query(
    `INSERT INTO parent_sta_type (ptt_name)
            values (?)`,
    req.body.ptt_name,
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

exports.getAllParentStaType = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM parent_sta_type`,
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

exports.getAtParentStaType = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM parent_sta_type
            WHERE ptt_id = ?`,req.params.id,
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

exports.delAtParentStaType = (req, res, next) => {
  sql.query(
    `DELETE
            FROM parent_sta_type
            WHERE ptt_id = ?`,req.params.id,
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