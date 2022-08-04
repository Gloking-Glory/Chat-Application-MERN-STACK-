const authModel = require('../model/authModel');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary');
const nodemailer = require('nodemailer');
const secret = process.env.JWT_SECRET;

const register = (req, res) => {
    console.log(req.body)
}

const login = (req, res) => {
    console.log(req.body);
}

module.exports = { register, login }