const express = require('express');

const router = express.Router();
const sellerControllers = require('../controllers/seller');

router.get('/',sellerControllers.getHomePage);

router.post('/add-seller',sellerControllers.postAddSeller);

router.get('/all-seller',sellerControllers.getSeller);

router.delete('/delete-seller/:id',sellerControllers.deleteSeller);


module.exports = router;