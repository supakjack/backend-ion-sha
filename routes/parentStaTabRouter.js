var express = require('express');
var router = express.Router();

const parentStaTabController = require('../controllers/parentStaTabController');

/* GET parentStaTab listing. */
router.get('/', parentStaTabController.getAllParentStaTab);
router.get('/:id', parentStaTabController.getAtParentStaTab);

/* POST parentStaTab listing. */
router.post('/', parentStaTabController.addParentStaTab);

module.exports = router;
