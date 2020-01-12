const sql = require('../../db');

exports.getOnPf = (req, res, next) => {
  sql.query(
    `SELECT * FROM tsp60_hrdb.hr_prefix AS pf WHERE pf.pf_active = 'Y'`,
    req.params.username,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getOnPf error');
        res.json(err);
      } else {
        console.log('getOnPf complete');
        res.json(query);
      }
    }
  );
};

exports.getOnPv = (req, res, next) => {
  sql.query(
    `SELECT * FROM tsp60_hrdb.hr_province AS pv WHERE pv.pv_active = 'Y'`,
    req.params.username,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getOnPv error');
        res.json(err);
      } else {
        console.log('getOnPv complete');
        res.json(query);
      }
    }
  );
};

exports.getOnNa = (req, res, next) => {
  sql.query(
    `SELECT * FROM tsp60_hrdb.hr_nation AS na WHERE na.nation_active = 'Y'`,
    req.params.username,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getOnNa error');
        res.json(err);
      } else {
        console.log('getOnNa complete');
        res.json(query);
      }
    }
  );
};

exports.getOnBl = (req, res, next) => {
  sql.query(
    `SELECT * FROM tsp60_hrdb.hr_blood AS bl WHERE bl.blood_active = 'Y'`,
    req.params.username,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getOnBl error');
        res.json(err);
      } else {
        console.log('getOnBl complete');
        res.json(query);
      }
    }
  );
};

exports.getOnRe = (req, res, next) => {
  sql.query(
    `SELECT * FROM tsp60_hrdb.hr_religion AS reli WHERE reli.reli_active = 'Y'`,
    req.params.username,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getOnBl error');
        res.json(err);
      } else {
        console.log('getOnBl complete');
        res.json(query);
      }
    }
  );
};
