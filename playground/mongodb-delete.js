// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectId} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // });

    // findOneAnddelete

    // db.collection('Todos').findOneAndDelete({completed : false}).then((result) =>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Mihai'}).then ((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectId("5c090c361c2c62230817373c")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    })

    // db.close();

});