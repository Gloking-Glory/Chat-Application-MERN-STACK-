const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRound = 10;

const authSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

authSchema.pre('save', function (next) {
    const document = this;
    bcrypt.hash(document.password, saltRound, (err, hashedPassword)=> {
        if (!err) {
            document.password = hashedPassword;
            next();
        }
        else {
            throw err;
        }
    });
});

authSchema.methods.validatePassword = function (password, callback) {
    const document = this;
    bcrypt.compare(password, document.password, (err, same)=> {
        if (!err) {
            callback(err, same);
        }
        else {
            next();
        }
    });
}

const authModel = mongoose.model('users', authSchema);

module.exports = authModel;