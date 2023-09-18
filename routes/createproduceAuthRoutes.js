const { Router } = require('express'); //extract router from the express package
const createproduceauthController = require('../controllers/createproduceauthController');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });
const router = Router();


router.get('/greenmarket',createproduceauthController.greenmarket_get);

router.get('/newsale', createproduceauthController.newsale_get);
router.post('/newsale', upload.single('image'),createproduceauthController.newsale_post);
// router.get('/greenmarket/:id',createproduceauthController.produce_details);
// router.delete('/greenmarket/:id',createproduceauthController.produce_delete);


module.exports = router;


