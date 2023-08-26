const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');



const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please enter an fullname']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter an valid email']
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter an password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    role: {
        type: String,
        required: [true, 'Please enter an role']
    },
    place: {
        type: String,
        required: [true, 'Please enter an city']
    },
    phonenumber: {
        type: String,
        required: [true, 'Please enter an phone number']
    }
});


userSchema.post('save', function (doc,next) {
    console.log('new user was created and saved', doc);
    next();
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


userSchema.statics.login = async function(username,password) {
    const user = await this.findOne({ username });
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect username')
}

const User = mongoose.model('user', userSchema);

module.exports = User;

