const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    taskName : String,
     status : String,
    
})

const listCollection = mongoose.model("listCollection", listSchema)
module.exports = listCollection;