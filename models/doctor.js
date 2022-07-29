const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String},
    password: { type: String },
    passwordConf:{ type: String }
});

const Doctor=mongoose.model('Doctor', doctorSchema)
module.exports = Doctor;

