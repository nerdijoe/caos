var express = require('express');
var router = express.Router();
var item_controller = require('../controllers/itemController');

router.post('/', item_controller.create);
router.get('/', item_controller.get_items);
router.get('/:id', item_controller.get_item);
router.put('/:id', item_controller.update);
router.delete('/:id', item_controller.delete);

module.exports = router;
