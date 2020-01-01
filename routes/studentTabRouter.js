// studentTab
var express = require('express');
var router = express.Router();

const studentTabController = require('../controllers/studentTabController');

/* GET studentTab listing. */
router.get('/', studentTabController.getAllStudentTab);

/* POST studentTab listing. */
router.post('/', studentTabController.addStudentTab);

module.exports = router;
