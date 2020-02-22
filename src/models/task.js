const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        minlength: 6,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

module.exports = Task;