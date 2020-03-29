const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator')
const Schema = mongoose.Schema

// User Schema
const MenteeSchema = Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        validate(name){
            if(validator.isEmpty(name)){
                throw new  Error("name can not be empty!");
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate(name){
            if(validator.isEmail(email)){
                throw new  Error("name can not be empty!");
            }
        }
    },
    username: {
        type: String,
        required: true,
        validate(username){
            if(validator.isEmpty(username)){
                throw new  Error("name can not be empty!");
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(password){
            if(validator.isEmpty(password)){
                throw new  Error("name can not be empty!");
            }
        }
    },
    isBlocked:{
        type: Boolean,
        default : false,
    },
    skills:{
        type: [String],
        required:false,
    },
});

module.exports = mongoose.model('Mentee', MenteeSchema)