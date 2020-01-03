var express = require('express');
var router = express.Router();

const termsController = require('../controllers/termsController');

/* GET terms listing. */
router.get('/', termsController.getAllTerms);
router.get('/:id', termsController.getAtTerms);

/* DELETE terms listing. */
router.delete('/:id', termsController.delAtTerms);

/* POST terms listing. */
router.post('/', termsController.addTerms);

module.exports = router;
