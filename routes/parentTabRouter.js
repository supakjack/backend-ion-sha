var express = require('express');
var router = express.Router();

const parentTabController = require('../controllers/parentTabController');

/* GET parentTab listing. */
router.get('/', parentTabController.getAllParentTab);
router.get('/:id', parentTabController.getAtParentTab);

/* DELETE parentTab listing. */
router.delete('/:id', parentTabController.delAtParentTab);

/* POST parentTab listing. */
router.post('/', parentTabController.addParentTab);

module.exports = router;
