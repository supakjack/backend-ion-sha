const sql = require('../db');

exports.addCourses = (req, res, next) => {
  sql.query(
    `INSERT INTO courses (crs_th_name,crs_en_name,crs_ment)
            values (?,?,?)`,
    [req.body.crs_th_name, req.body.crs_en_name, req.body.crs_ment],
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

exports.getAllCourses = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM courses`,
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
