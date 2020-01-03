// studentTab
var express = require('express');
var router = express.Router();

const studentTabController = require('../controllers/studentTabController');

/* GET studentTab listing. */
router.get('/', studentTabController.getAllStudentTab);
router.get('/:id', studentTabController.getAtStudentTab);

/* POST studentTab listing. */
router.post('/', studentTabController.addStudentTab);

module.exports = router;
