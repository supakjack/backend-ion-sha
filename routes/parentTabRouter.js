var express = require('express');
var router = express.Router();

const parentTabController = require('../controllers/parentTabController');

/* GET parentTab listing. */
router.get('/', parentTabController.getAllParentTab);
router.get('/:id', parentTabController.getAtParentTab);

/* DELETE parentTab listing. */
router.delete('/:id', parentTabController.delAtParentTab);

/* put parentTab listing. */
router.put('/:id', parentTabController.updateParentTab);

/* POST parentTab listing. */
router.post('/', parentTabController.addParentTab);

module.exports = router;
