var express = require('express');
var router = express.Router();

const termsController = require('../controllers/termsController');

/* GET terms listing. */
router.get('/', termsController.getAllTerms);

/* POST terms listing. */
router.post('/', termsController.addTerms);

module.exports = router;
