const {ObjectId} = require ('mongodb');

const {mongoose} = require ('../server/db/mongose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

//will delete all
// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// find one and remove
// Todo.findOneAndRemove()
Todo.findOneAndremove({_id: '5c0e68d7bb9e3e7c7de61745'}).then((todo) =>{

});

// find by id and remove
//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5c0e68d7bb9e3e7c7de61745').then((todo) =>{
    console.log(todo);
});