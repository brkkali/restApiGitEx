const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        mingLength: 6
    },
    age: {
        type: Number,
        validate(value) {
            if(value<0) {
                throw new Error('Yaş 0 dan küçük olamaz.')
            }
        }
    },
    email: {
        type: String,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Doğru formatta mail adresi giriniz.')
            }
        }
    }
})

module.exports = User;