const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./middleware/authMiddleware');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Blog = require('./models/blog');


const app = express();


const dbURI = 'mongodb+srv://manjubashini2110:Manju03@cluster0.adkmyfp.mongodb.net/farmhub-data';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(4000))
    .catch((err) => console.log(err));


app.set('view engine','ejs');
require('dotenv').config();

app.use(express.static('public'));
app.use('/uploads', express.static('public/uploads'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));

const multer = require('multer');

 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });


app.post('/index', upload.single('image'), async(req, res, next) => {
    console.log(req.file);
    var obj = {
        title: req.body.title,
        snippet: req.body.snippet,
        body:req.body.body,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    await Blog.create(obj)
    .then ((err, item) => {
        res.redirect('/blogs');  
    });
   
});



app.get('/', (req,res) => {
    res.render('home');
})



app.get('/about-us', (req,res) => {
    res.render('about-us');
})

app.get('/greenmarket', (req,res) => {
    res.render('greenmarket');
})


app.get('/get-details-from-user', (req,res) => {
    res.render('get-details-from-user');
})


app.get('/newsale', (req,res) => {
    res.render('newsale');
})

app.get('/customer-shopping-history', (req,res) => {
    res.render('customer-shopping-history');
})


app.get('/details-for-customer-shopping-history', (req,res) => {
    res.render('details-for-customer-shopping-history');
})


app.get('/detailsforsaler', (req,res) => {
    res.render('detailsforsaler');
})

app.get('/detsils-for-salers-sales-history', (req,res) => {
    res.render('detsils-for-salers-sales-history');
})

app.get('/get-details-from-user', (req,res) => {
    res.render('get-details-from-user');
})

app.get('/help', (req,res) => {
    res.render('help');
})

app.get('/salers-orders-history', (req,res) => {
    res.render('salers-orders-history');
})

app.get('/salers-sales-history', (req,res) => {
    res.render('salers-sales-history');
})

app.get('/account-info', (req,res) => {
    res.render('account-info');
})




app.get('/blogs', (req,res) => {
    res.render('blogs/index',{title:'All Blogs',blogs: []});
})




app.use(authRoutes);
app.use(blogRoutes);
app.use('/blogs',blogRoutes); 


app.use((req, res) => {
    res.status(404).render('404');
})

