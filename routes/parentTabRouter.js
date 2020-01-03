var express = require('express');
var router = express.Router();

const parentTabController = require('../controllers/parentTabController');

/* GET parentTab listing. */
router.get('/', parentTabController.getAllParentTab);
router.get('/:id', parentTabController.getAtParentTab);

/* POST parentTab listing. */
router.post('/', parentTabController.addParentTab);

module.exports = router;
