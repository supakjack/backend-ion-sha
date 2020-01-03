// address.js
const sql = require('../db');

exports.addAddress = (req, res, next) => {
  sql.query(
    `INSERT INTO address (  adr_home_number,
                            adr_hmo,
                            adr_road,
                            adr_tum_id,
                            adr_aum_id,
                            adr_pro_id,
                            adr_pri_id  )
            values (?,?,?,?,?,?,?)`,
    [
      req.body.adr_home_number,
      req.body.adr_hmo,
      req.body.adr_road,
      req.body.adr_tum_id,
      req.body.adr_aum_id,
      req.body.adr_pro_id,
      req.body.adr_pri_id
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

exports.getAllAddress = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM address`,
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

exports.getAddressAt = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM address
            WHERE adr_id = ?`,req.params.id,
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

exports.delAddressAt = (req, res, next) => {
  sql.query(
    `DELETE 
            FROM address
            WHERE adr_id = ?`,req.params.id,
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

