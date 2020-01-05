// addressTab
var express = require('express');
var router = express.Router();

const addressTabController = require('../controllers/addressTabController');

/* GET addressTab listing. */
router.get('/', addressTabController.getAllAddressTab);
router.get('/:id', addressTabController.getAddressTabAt);

/* DELETE addressTab listing. */
router.delete('/:id', addressTabController.delAddressTabAt);

/* PUT addressTab listing. */
router.put('/:id', addressTabController.updateAddressTab);

/* POST addressTab listing. */
router.post('/', addressTabController.addAddressTab);

module.exports = router;
