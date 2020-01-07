const sql = require('../../db');

exports.checklogin = (req, res, next) => {
  sql.query(
    `SELECT usr_id AS id , usr_sta_id AS status
            FROM users
            WHERE usr_name = ? AND usr_pass = ?`,
    [req.params.name, req.params.pass],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('select all error');
        res.json(err);
      } else {
        console.log('select all complete');
        try {
          const id = query[0].id;
          const status = query[0].status;
          console.log('found user');
          res.json({id:id, status:status});
        } catch (error) {
          console.log('no user');
          res.json(false);
        }
      }
    }
  );
};
