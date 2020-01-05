var express = require('express');
var router = express.Router();

const parentStaTabController = require('../controllers/parentStaTabController');

/* GET parentStaTab listing. */
router.get('/', parentStaTabController.getAllParentStaTab);
router.get('/:id', parentStaTabController.getAtParentStaTab);

/* DELETE parentStaTab listing. */
router.delete('/:id', parentStaTabController.delAtParentStaTab);

/* put parentStaTab listing. */
router.put('/:id', parentStaTabController.updateParentStaTab);


/* POST parentStaTab listing. */
router.post('/', parentStaTabController.addParentStaTab);

module.exports = router;
