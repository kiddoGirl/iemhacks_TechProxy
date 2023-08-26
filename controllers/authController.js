const User = require('../models/user');
const jwt = require('jsonwebtoken');


const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { fullname: '',email: '', username: '', password: '', role: '', place: '',phonenumber: '' };


    if (err.message === 'incorrect username' ){
        errors.username = 'that email is not registered';
    }

    if (err.message === 'incorrect password' ){
        errors.password = 'that password is incorrect';
    }


    if (err.code === 11000 ){
        errors.email = 'that email is already register';
        errors.username = 'that username is already register';
        return errors;
    }

    // if (phonenumber.length !== 10) {
    //     errors.phonenumber = 'Phone number must be 10 digits';
    //     return errors;
    // }

    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }

    return errors;
}


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id },'manju agronimynet',{
        expiresIn: maxAge
    })
}


module.exports.signup_get = (req,res) => {
    res.render('signup');
}


module.exports.login_get = (req,res) => {
    res.render('login');
}


module.exports.signup_post = async (req,res) => {
    const { fullname, email,  username, password, role, place, phonenumber } = req.body;

    try{
        const user =  await User.create({ fullname, email, username,  password, role, place, phonenumber });
        const token = createToken(user._id);
        res.cookie('jwt', token , {httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    }
    catch (err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}


module.exports.login_post = async (req,res) => {
    const { username, password } = req.body;

    try{
        //var user = false
        const user = await User.login(username,password);
        console.log(user);
        const token = createToken(user._id);
        res.cookie('jwt', token , {httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id })
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}


module.exports.logout_get = (req,res) => {
    res.cookie('jwt','',{ maxAge: 1 });
    res.redirect('/');
}