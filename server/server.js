var express = require('express');
var bodyParser = require ('body-parser');
var {ObjectID} = require ('mongodb');

var {mongoose} = require ('./db/mongose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

//seting up a rout
app.post('/todos', (req, res) => {
    var todo = new Todo ({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});

//GET /todos/123456
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
    //valid id using isValid
      //404-- send back empty value

    //findById
        //success
            //if todo - send it back
            //if no todo--send back 404 with empty body
        //error
          //400 - 
});



app.listen(3000, () => {
    console.log('Server started at port 3000');
});

module.exports = {app};