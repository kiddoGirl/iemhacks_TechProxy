const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Blog = require('./models/blog');


//JSON Web Token for every user
const { requireAuth } = require('./middleware/authMiddleware');


//Routering 
const authRoutes = require('./routes/authRoutes'); 

const createproduceAuthRoutes = require('./routes/createproduceAuthRoutes');

const blogRoutes = require('./routes/blogRoutes'); 

const AuthenticationRoute = require('./routes/authentication.js');

const IndexRoute = require('./routes/index_news.js');

const UserRoute = require('./routes/user.js')

const APIRoute = require('./routes/api.js')






const app = express();



//connecting MongoDB
const dbURI = 'mongodb+srv://manjubashini2110:Manju03@cluster0.adkmyfp.mongodb.net/farmhub-data';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));



//set view engine
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






app.post('/blogs/index', upload.single('image'), async(req, res, next) => {
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
        res.redirect('/blogs/index');  
    });
   
});



// app.post('/greenmarket', upload.single('image'), async(req, res, next) => {
//     console.log(req.file);
//     var obj = {
//         produceName: req.body.produceName,
//         produceQuantity: req.body.produceQuantity,
//         produceAmount: req.body.produceAmount,
//         dietType: req.body. dietType,
//         speciality: req.body.speciality,
//         manufacture: req.body.manufacture,
//         itemFrom: req.body.itemFrom,
//         brand: req.body.brand,
//         itemWeight: req.body.itemWeight,
//         numberOfItems: req.body.numberOfItems,
//         aboutItem: req.body.aboutItem,
//         userNameFarmHub: req.body.userNameFarmHub,
//         image: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     await Produce.create(obj)
//     .then ((err, item) => {
//         res.redirect('greenmarket');  
//     });
   
// });





//Routering operation

app.use(authRoutes);  // login authentication route

app.use(blogRoutes); //knowledge sharing route

app.use(createproduceAuthRoutes); //newsale route

app.use('/agrinews/auth', AuthenticationRoute) // Authentication Route in Whether,market AgriNews

app.use('/agrinews/index', IndexRoute) //Index Route

app.use('/agrinews/user', UserRoute) //User Route

app.use('/agrinews/api', APIRoute) //API Route 



app.get('/', (req,res) => {
    res.render('home');
})



app.get('/about-us', (req,res) => {
    res.render('about-us');
})


app.get('/loan', (req,res) => {
    res.render('loan');
})


app.get('/admin', (req,res) => {
    res.render('admin');
})


app.get('/crop', (req,res) => {
    res.render('crop');
})


app.get('/chatpage', (req,res) => {
    res.render('chatpage');
})


app.get('/chatpage2', (req,res) => {
    res.render('chatpage2');
})


app.get('/get-details-from-user', (req,res) => {
    res.render('get-details-from-user');
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



app.get('/agribot', (req,res) => {
    res.render('agribot');
})



app.get('/schemes', (req,res) => {
    res.render('schemes');
})



app.get('/blogs', (req,res) => {
    res.render('blogs/index',{title:'All Blogs',blogs: []});
})







//404
app.use((req, res) => {
    res.status(404).render('404');
})

