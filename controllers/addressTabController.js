// addressTab.js
const sql = require('../db');

exports.addAddressTab = (req, res, next) => {
  sql.query(
    `INSERT INTO address_tab (  adt_type_id,
                            adt_adr_id,
                            adt_app_id  )
            values (?,?,?)`,
    [req.body.adt_type_id, req.body.adt_adr_id, req.body.adt_app_id],
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

exports.getAdtByAppId = (req, res, next) => {
  sql.query(
    `SELECT * 
      FROM address_tab AS adt 
      INNER JOIN address AS adr ON adr.adr_id = adt.adt_adr_id
      WHERE adt.adt_app_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getAdtByAppId error');
        res.json(err);
      } else {
        console.log('getAdtByAppId complete');
        res.json(query);
      }
    }
  );
};

exports.getAllAddressTab = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM address_tab`,
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

exports.getAatIdByAppId = (req, res, next) => {
  sql.query(
    `SELECT 
    CASE
        WHEN COUNT(adt.adt_id) > 0 THEN adt.adt_id
        ELSE "n"
    END AS adt_id
    FROM address_tab AS adt
    WHERE adt.adt_app_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getAppIdByAdtId error');
        res.json(err);
      } else {
        console.log('getAppIdByAdtId complete');
        res.json(query);
      }
    }
  );
};

exports.getAddressTabAt = (req, res, next) => {
  sql.query(
    `SELECT * 
            FROM address_tab
            WHERE adt_id = ?`,
    req.params.id,
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

exports.delAddressTabAt = (req, res, next) => {
  sql.query(
    `DELETE 
            FROM address_tab
            WHERE adt_id = ?`,
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

exports.updateAddressTab = (req, res, next) => {
  sql.query(
    `UPDATE address_tab 
      SET  adt_type_id = ?,
           adt_adr_id = ?,
           adt_app_id = ?  
      WHERE adt_id = ?`,
    [
      req.body.adt_type_id,
      req.body.adt_adr_id,
      req.body.adt_app_id,
      req.params.id
    ],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('update error');
        res.json(err);
      } else {
        console.log('update complete');
        res.json(query);
      }
    }
  );
};
