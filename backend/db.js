const mongoose = require('mongoose');

const connection_string = 'mongodb://localhost:27017/todo'

const connect= () =>{
    mongoose.connect(connection_string, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connect;
