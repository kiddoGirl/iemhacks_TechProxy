const express = require('express')

// route controller
const IndexController = require("../controllers/index_controller.js");
const router = express.Router();

// Index GET routes
router.get("/", IndexController.HeadLineGet)


// Index POST routes
router.post("/search", IndexController.SearchPost)


module.exports = router;