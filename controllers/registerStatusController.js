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
