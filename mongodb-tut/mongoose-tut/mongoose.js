/* IMPORTENT NOTES FOR MONGOOSE
 * Title: Create A New Model
 * Description: 
 *      Mongoose applies a MODEL (document constructor)
 *      A model is a class with which we CONSTRUCT DOCUMENTS.
 *      By MODEL constructed DOCUMENTS will have an API to interact with the collection
 *      A collection is like a table in sql database. 
 *      Since it is non-structured we need to define a structure => Schema
 *      Schema defines the structure of a record => row in sql
 *      the records will be stored in a collection => table in sql
 *      in the schema definition consist of key : value pairs in object literal
 *      Schema adds validation to the doc before saving into the db
 * Author: Sandor Deli
 * logic: 
 *
 */

const mongoose = require('mongoose');
const {Schema} = mongoose;

let collection = 'TodoApp';
var url = `mongodb://localhost:27017/${collection}`;

var connectOpts = { 
    useNewUrlParser: true 
}

mongoose.Promise = global.Promise;

// connect passes down args to mongodbDrivers connect fn
mongoose.connect(url, connectOpts);

// create a schema for future documents
var UserScma = new Schema({
    name : {
        type : String,
        required : true,
        minlength : 1,
        trim : true,
        required : true
    },
    email : {
        type : String,
        unique: true,
        required : true,
        minlength : 1,
        trim : true,
        required : true
    },
});

var TodoScma = new Schema({
    text : {
        type : String,
        // validators
        required : true,
        minlength : 3,
        trim : true
    },
    completed : {
        type : Boolean,
        // validators
        default : false
    },
    completedAt : {
        type : Number,
        default : null
    },
    user : {
        type : Schema.Types.ObjectId
        ref : 
    }
});

var TodoItem = mongoose.model('Todo', TodoScma);

var newTodo = new TodoItem({
    text : '  cook food   '
})
.save()
.then(newTodo => {
    console.log(newTodo);
})
.catch(e => {
    console.log(e);
})