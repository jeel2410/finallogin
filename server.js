
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
require('dotenv').config()

const MongoDBURI = process.env.MONGO_URI

mongoose.connect(MongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})


const index = require('./routes/index');
app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

// listen on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express app listening on port 3000');
});