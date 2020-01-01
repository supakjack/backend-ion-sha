// addressTab
var express = require('express');
var router = express.Router();

const addressTabController = require('../controllers/addressTabController');

/* GET addressTab listing. */
router.get('/', addressTabController.getAllAddressTab);

/* POST addressTab listing. */
router.post('/', addressTabController.addAddressTab);

module.exports = router;
