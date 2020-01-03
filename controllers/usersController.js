const sql = require('../db');

exports.addUser = (req, res, next) => {
  sql.query(
    `INSERT INTO users (usr_name,usr_pass,usr_sta_id)
            values (?,?,?)`,
    [req.body.usr_name, req.body.usr_pass, req.body.usr_sta_id],
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

exports.getAllUser = (req, res, next) => {
  sql.query(
    `SELECT *
      FROM users`,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select error');
        res.json(err);
      } else {
        console.log('select complete');
        res.json(query);
      }
    }
  );
};

exports.getAtUser = (req, res, next) => {
  sql.query(
    `SELECT *
      FROM users
      WHERE usr_id = ?`,req.params.id,
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

exports.delAtUser = (req, res, next) => {
  sql.query(
    `DELETE
      FROM users
      WHERE usr_id = ?`,req.params.id,
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
