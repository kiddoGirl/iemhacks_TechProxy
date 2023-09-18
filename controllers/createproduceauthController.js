const Produce = require('../models/createproduce');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');




module.exports.greenmarket_get = (req,res) => {
    Produce.find().sort({createdAt: -1})
    .then((result) => {
        // console.log(result);
        res.render('greenmarket',{products: result})
    })
    .catch((err) => {
        console.log(err);
    })

}




module.exports.newsale_get = (req,res) => {
    res.render('newsale');
}





module.exports.newsale_post = async (req, res) => {
    console.log(req.file);
        var obj = {
            produceName: req.body.produceName,
            produceQuantity: req.body.produceQuantity,
            produceAmount: req.body.produceAmount,
            dietType: req.body. dietType,
            speciality: req.body.speciality,
            manufacture: req.body.manufacture,
            itemFrom: req.body.itemFrom,
            brand: req.body.brand,
            itemWeight: req.body.itemWeight,
            numberOfItems: req.body.numberOfItems,
            aboutItem: req.body.aboutItem,
            userNameFarmHub: req.body.userNameFarmHub,
            image: {
                data: fs.readFileSync(path.join(__dirname,'..', '/uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }
        await Produce.create(obj)
        .then ((err, item) => {
            res.redirect('/greenmarket');  
        });
}





module.exports.produce_details = (req,res) => {
    const id = req.params.id;
    Produce.findById(id)
        .then((result) => {
            res.render('greenmarket/get-details-from-user' , { product: result });
        })
        .catch((err) => {
            console.log(err);
        });
};





module.exports.produce_delete = (req,res) =>{
    const id = req.params.id;
 
    Produce.findByIdAndDelete(id) 
        .then((result) => {
           res.json({ redirect: '/greenmarket'})   
        })
        .catch((err) => {
            console.log(err);
        })
};
