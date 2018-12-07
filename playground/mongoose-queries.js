const {ObjectId} = require ('mongodb');

const {mongoose} = require ('../server/db/mongose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');


// var id = '5c0a78c85c46c258265b8e55';

// if (!ObjectId.isValid(id)) {
//     console.log ('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// // findOne

// Todo.findOne({
//     id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// findById

// Todo.findById(id).then((todo) =>{
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo );
// }).catch((e) => console.log(e));

//user.findbyid  user not found, user found, handle errors, print errors

User.findById('5c0a3f89e1cf2c9032e17647').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined,2));
}, (e) => {
    console.log(e);
})