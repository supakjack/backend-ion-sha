// studentTab
var express = require('express');
var router = express.Router();

const studentTabController = require('../controllers/studentTabController');

/* GET studentTab listing. */
router.get('/', studentTabController.getAllStudentTab);
router.get('/:id', studentTabController.getAtStudentTab);

/* DELETE studentTab listing. */
router.delete('/:id', studentTabController.delAtStudentTab);

/* put studentTab listing. */
router.put('/:id', studentTabController.updateStudentTab);

/* POST studentTab listing. */
router.post('/', studentTabController.addStudentTab);

module.exports = router;
