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
