const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();


router.get('/blogs/index',blogController.blog_index);
router.get('/createblog',blogController.blog_create_get);
router.get('/blogs/index:id',blogController.blog_details);
router.delete('/blogs/index:id',blogController.blog_delete);




module.exports = router;