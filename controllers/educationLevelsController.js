const sql = require('../db');

exports.addEducationLevels = (req, res, next) => {
  sql.query(
    `INSERT INTO education_levels (edl_name, edl_sub_name)
            values (?,?)`,
    [req.body.edl_name, req.body.edl_sub_name],
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
            WHERE edl_id = ?`,
    req.params.id,
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

exports.delAtEducationLevels = (req, res, next) => {
  sql.query(
    `DELETE
            FROM education_levels
            WHERE edl_id = ?`,
    req.params.id,
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

exports.updateEducationLevels = (req, res, next) => {
  sql.query(
    `UPDATE education_levels 
      SET edl_name = ?,
          edl_sub_name =?,
          edl_use =?,
      WHERE edl_id = ? `,
    [req.body.edl_name, req.body.edl_sub_name, req.body.edl_use, req.params.id],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('UPDATE error');
        res.json(err);
      } else {
        console.log('UPDATE complete');
        res.json(query);
      }
    }
  );
};
