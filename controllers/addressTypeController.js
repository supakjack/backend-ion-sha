// addressType.js
const sql = require('../db');

exports.addAddressType = (req, res, next) => {
  sql.query(
    `INSERT INTO address_type (art_name )
            values (?)`,
    req.body.art_name,
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

exports.getAllAddressType = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM address_type`,
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

exports.getATAddressType = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM address_type
            WHERE art_id = ?`,req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select AT error');
        res.json(err);
      } else {
        console.log('select AT complete');
        res.json(query);
      }
    }
  );
};

exports.delAddressType = (req, res, next) => {
  sql.query(
    `DELETE 
            FROM address_type
            WHERE art_id = ?`,req.params.id,
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