// studentTabController.js
const sql = require('../db');

exports.addStudentTab = (req, res, next) => {
  sql.query(
    `INSERT INTO student_tab (stt_pro_id,stt_app_id)
            values (?,?)`,
    [req.body.stt_pro_id, req.body.stt_app_id],
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

exports.getAllStudentTab = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM student_tab`,
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


exports.getAtStudentTab = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM student_tab
            WHERE stt_id = ?`,req.params.id,
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

exports.delAtStudentTab = (req, res, next) => {
  sql.query(
    `DELETE
            FROM student_tab
            WHERE stt_id = ?`,req.params.id,
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