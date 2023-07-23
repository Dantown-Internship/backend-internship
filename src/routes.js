const { Router } = require("express");
const controller = require('./controller');

const router = Router();

router.get('/:name/price', controller.showCoinPrice);
router.post('/convert', controller.convertToUsd);
router.post('/convert/:from/:to', controller.convertToAnotherCoin);

module.exports = router;