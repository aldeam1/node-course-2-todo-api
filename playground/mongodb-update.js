// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectId} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectId('5c0a1c2a0356c7e7d79861c4')
    }, {
        $set: {
            name: 'Mihai'
    },
    $inc: {
        age: 1
    }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })




    // db.close();

});