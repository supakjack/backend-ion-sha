const sql = require('../db');

exports.addEducationLevels = (req, res, next) => {
  sql.query(
    `INSERT INTO education_levels (edl_name, edl_sub_name)
            values (?,?)`,
    [req.body.edl_name,req.body.edl_sub_name],
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

exports.getAllEducationLevels = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM education_levels`,
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

exports.getAtEducationLevels = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM education_levels
            WHERE edl_id = ?`,req.params.id,
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

