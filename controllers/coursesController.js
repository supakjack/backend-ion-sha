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

exports.getAtCourses = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM courses
            WHERE crs_id = ?`,req.params.id,
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


exports.delAtCourses = (req, res, next) => {
  sql.query(
    `DELETE 
            FROM courses
            WHERE crs_id = ?`,req.params.id,
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
