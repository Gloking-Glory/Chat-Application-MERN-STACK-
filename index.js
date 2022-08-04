const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI
const app = express()

mongoose.connect(URI, ()=> { console.log('DB Connected') });
mongoose.Promise = global.Promise;

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.options('*', cors());

const authRouter = require('./routes/authRoutes');
const verifyToken = require('./middlewares/verifyToken');

app.use('/auth', authRouter);
app.use('/auth/profile', verifyToken, authRouter);

app.listen(PORT, ()=> {
    console.log(`server connected,  ${PORT}`);
});