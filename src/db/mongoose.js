const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/food-order-api', (err, db) => {
    if(err){
        console.log('unable to connect to mongodb')
    } else {
        console.log('connected to mongodb!')
    }
}, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})