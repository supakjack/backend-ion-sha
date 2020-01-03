// profilesController.js
const sql = require('../db');

exports.addProfiles = (req, res, next) => {
  sql.query(
    `INSERT INTO profiles ( pro_first_th_name,
                            pro_last_th_name,
                            pro_first_en_name,
                            pro_last_en_name,
                            pro_id_card,
                            pro_race,
                            pro_bod,
                            pro_nation_id,
                            pro_blood_id,
                            pro_prefix_id,
                            pro_province_id,
                            pro_religion_id  )
            values (?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      req.body.pro_first_th_name,
      req.body.pro_last_th_name,
      req.body.pro_first_en_name,
      req.body.pro_last_en_name,
      req.body.pro_id_card,
      req.body.pro_race,
      req.body.pro_bod,
      req.body.pro_nation_id,
      req.body.pro_blood_id,
      req.body.pro_prefix_id,
      req.body.pro_province_id,
      req.body.pro_religion_id
    ],
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

exports.getAllProfiles = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM profiles`,
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

exports.getAtProfiles = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM profiles
            WHERE pro_id = ?`,req.params.id,
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

exports.delAtProfiles = (req, res, next) => {
  sql.query(
    `DELETE 
            FROM profiles
            WHERE pro_id = ?`,req.params.id,
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
