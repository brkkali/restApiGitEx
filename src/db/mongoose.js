const mongoose = require('mongoose')
const connectionUrl = 'mongodb://localhost:27017/task';

mongoose.connect(connectionUrl, {
    useUnifiedTopology: true,
    useCreateIndex: true
});