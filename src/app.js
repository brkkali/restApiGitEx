const express = require('express');
const User = require('./models/user');
const Task = require('./models/task')

require('./db/mongoose');


const app = express();


app.use(express.json());

app.post('/users', (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
   
    user.save().then((u)=>{
        res.send(u)
    });
});

app.post('/task', (req, res)=> {
    const task = new Task(req.body)

    task.save().then(t=> res.send(t)).catch(e=>res.send(e))
})


app.get('/users', (req, res) => {
    User.find({})
    .then(users=>res.status(200).send(users))
    .catch(e=> res.status(500).send())
})




app.listen(process.env.PORT || 3000, () => {
    console.log('Server ayakta.')
});