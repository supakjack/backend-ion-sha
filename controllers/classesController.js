const sql = require('../db');

exports.addClasses = (req, res, next) => {
  sql.query(
    `INSERT INTO classes (cls_title,cls_sub)
            values (?,?)`,
    [req.body.cls_title,req.body.cls_sub],
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

exports.getAllClasses = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM classes`,
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

exports.getAtClasses = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM classes
            WHERE cls_id = ?`,req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select at error');
        res.json(err);
      } else {
        console.log('select at complete');
        res.json(query);
      }
    }
  );
};