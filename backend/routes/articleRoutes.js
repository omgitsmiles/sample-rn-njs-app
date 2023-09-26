const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/', articleController.index);
router.get('/:id', articleController.details);
router.post('/', articleController.create);
router.delete('/:id', articleController.delete);

module.exports = router;