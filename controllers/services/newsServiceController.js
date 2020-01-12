const sql = require('../../db');

exports.getReg = (req, res, next) => {
  sql.query(
    `SELECT 
            reg.reg_id AS id,
                reg.reg_code AS code,
                SUBSTR(reg.reg_start,1,10) AS start,
                SUBSTR(reg.reg_end,1,10) AS end,     
                reg.reg_round AS round,
                reg.reg_max AS max,
                reg.reg_now AS now,
                rgs.rgs_name AS status,
                yrs.yrs_name AS year,
                edl.edl_name AS edu,
                crs.crs_th_name AS cours_th,
                crs.crs_en_name AS cours_en,
                tem.tem_name AS term,
                cls.cls_title AS class_title,
                cls.cls_sub AS class_sub
        FROM register AS reg
        INNER JOIN years AS yrs ON reg.reg_yrs_id = yrs.yrs_id
        INNER JOIN education_levels AS edl ON reg.reg_edl_id = edl.edl_id
        INNER JOIN courses AS crs ON reg.reg_crs_id = crs.crs_id
        INNER JOIN terms AS tem ON reg.reg_tem_id = tem.tem_id
        INNER JOIN classes AS cls ON reg.reg_cls_id = cls.cls_id
        INNER JOIN register_status AS rgs ON reg_sta_id = rgs.rgs_id
        WHERE reg.reg_use = 'y'`,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getReg error');
        res.json(err);
      } else {
        console.log('getReg complete');
        res.json(query);
        // try {
        //   const id = query[0].id;
        //   const status = query[0].status;
        //   console.log('found user');
        //   res.json({ id: id, status: status });
        // } catch (error) {
        //   console.log('no user');
        //   res.json(false);
        // }
      }
    }
  );
};

exports.getRegUpdateById = (req, res, next) => {
  sql.query(
    `SELECT 
            reg.reg_id AS id,
                reg.reg_code AS code,
                SUBSTR(reg.reg_start,1,10) AS start,
                SUBSTR(reg.reg_end,1,10) AS end,     
                reg.reg_round AS round,
                reg.reg_max AS max,
                reg.reg_now AS now,
                rgs.rgs_name AS status,
                yrs.yrs_name AS year,
                edl.edl_name AS edu,
                crs.crs_th_name AS cours_th,
                crs.crs_en_name AS cours_en,
                tem.tem_name AS term,
                cls.cls_title AS class_title,
                cls.cls_sub AS class_sub
        FROM register AS reg
        INNER JOIN years AS yrs ON reg.reg_yrs_id = yrs.yrs_id
        INNER JOIN education_levels AS edl ON reg.reg_edl_id = edl.edl_id
        INNER JOIN courses AS crs ON reg.reg_crs_id = crs.crs_id
        INNER JOIN terms AS tem ON reg.reg_tem_id = tem.tem_id
        INNER JOIN classes AS cls ON reg.reg_cls_id = cls.cls_id
        INNER JOIN register_status AS rgs ON reg_sta_id = rgs.rgs_id
        WHERE reg.reg_use = 'y' AND reg.reg_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getReg error');
        res.json(err);
      } else {
        console.log('getReg complete');
        res.json(query);
        // try {
        //   const id = query[0].id;
        //   const status = query[0].status;
        //   console.log('found user');
        //   res.json({ id: id, status: status });
        // } catch (error) {
        //   console.log('no user');
        //   res.json(false);
        // }
      }
    }
  );
};

exports.getRegByCourseId = (req, res, next) => {
  sql.query(
    `SELECT 
      reg.reg_id AS id,
      reg.reg_code AS code,
      SUBSTR(reg.reg_start,1,10) AS start,
      SUBSTR(reg.reg_end,1,10) AS end,     
      reg.reg_round AS round,
      reg.reg_max AS max,
      reg.reg_now AS now,
      rgs.rgs_name AS status,
      yrs.yrs_name AS year,
      edl.edl_name AS edu,
      crs.crs_th_name AS cours_th,
      crs.crs_en_name AS cours_en,
      tem.tem_name AS term,
      cls.cls_title AS class_title,
      cls.cls_sub AS class_sub
    FROM register AS reg
    INNER JOIN years AS yrs ON reg.reg_yrs_id = yrs.yrs_id
    INNER JOIN education_levels AS edl ON reg.reg_edl_id = edl.edl_id
    INNER JOIN courses AS crs ON reg.reg_crs_id = crs.crs_id
    INNER JOIN terms AS tem ON reg.reg_tem_id = tem.tem_id
    INNER JOIN classes AS cls ON reg.reg_cls_id = cls.cls_id
    INNER JOIN register_status AS rgs ON reg_sta_id = rgs.rgs_id
    WHERE reg.reg_use = 'y' AND crs.crs_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getReg error');
        res.json(err);
      } else {
        console.log('getReg complete');
        res.json(query);
      }
    }
  );
};

exports.patchRegById = (req, res, next) => {
  sql.query(
    `UPDATE register 
      SET reg_start = ?,
       reg_end = ?,
       reg_max = ?
      WHERE register.reg_id = ?`,
    [req.body.reg_start, req.body.reg_end, req.body.reg_max, req.params.id],
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('patchRegById error');
        res.json(err);
      } else {
        console.log('patchRegById complete');
        res.json(query);
      }
    }
  );
};

exports.getAllCourse = (req, res, next) => {
  sql.query(
    `SELECT 
      crs.crs_id AS id_course
      FROM courses AS crs
      WHERE crs.crs_use = 'y'`,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getReg error');
        res.json(err);
      } else {
        console.log('getReg complete');
        res.json(query);
      }
    }
  );
};

exports.getRegById = (req, res, next) => {
  sql.query(
    `SELECT 
      reg.reg_id AS id,
      reg.reg_code AS code,
      SUBSTR(reg.reg_start,1,10) AS start,
      SUBSTR(reg.reg_end,1,10) AS end,     
      reg.reg_round AS round,
      reg.reg_max AS max,
      reg.reg_now AS now,
      rgs.rgs_name AS status,
      yrs.yrs_name AS year,
      edl.edl_name AS edu,
      crs.crs_th_name AS cours_th,
      crs.crs_en_name AS cours_en,
      tem.tem_name AS term,
      cls.cls_title AS class_title,
      cls.cls_sub AS class_sub
    FROM register AS reg
    INNER JOIN years AS yrs ON reg.reg_yrs_id = yrs.yrs_id
    INNER JOIN education_levels AS edl ON reg.reg_edl_id = edl.edl_id
    INNER JOIN courses AS crs ON reg.reg_crs_id = crs.crs_id
    INNER JOIN terms AS tem ON reg.reg_tem_id = tem.tem_id
    INNER JOIN classes AS cls ON reg.reg_cls_id = cls.cls_id
    INNER JOIN register_status AS rgs ON reg_sta_id = rgs.rgs_id
    WHERE reg.reg_use = 'y' AND edl.edl_id = ?`,
    req.params.id,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getReg error');
        res.json(err);
      } else {
        console.log('getReg complete');
        res.json(query);
      }
    }
  );
};

exports.getRegDistinct = (req, res, next) => {
  sql.query(
    `SELECT DISTINCT
    edl.edl_id  AS id,
    edl.edl_name  AS name
  FROM register AS reg
  INNER JOIN years AS yrs ON reg.reg_yrs_id = yrs.yrs_id
  INNER JOIN education_levels AS edl ON reg.reg_edl_id = edl.edl_id
  INNER JOIN courses AS crs ON reg.reg_crs_id = crs.crs_id
  INNER JOIN terms AS tem ON reg.reg_tem_id = tem.tem_id
  INNER JOIN classes AS cls ON reg.reg_cls_id = cls.cls_id
  INNER JOIN register_status AS rgs ON reg_sta_id = rgs.rgs_id
  INNER JOIN 
  WHERE reg.reg_use = 'y'`,
    (err, query) => {
      if (err) {
        console.log(err);
        console.log('getReg error');
        res.json(err);
      } else {
        console.log('getReg complete');
        res.json(query);
      }
    }
  );
};
