const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();


router.get('/index',blogController.blog_index);
router.get('/createblog',blogController.blog_create_get);
router.get('/:id',blogController.blog_details);
router.delete('/:id',blogController.blog_delete);




module.exports = router;