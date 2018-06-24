const mongoose = require('mongoose');
const db = 'mongodb://test:test@ds155299.mlab.com:55299/todo-list';

// setting up mongodb on mlab
mongoose.connect(db);

// Create nosql schema / o
let todoSchema = new mongoose.Schema({
	todoitem : String,
	id : Number
});

// Mongodb will pluralise the name to Todo
todoDb = mongoose.model('todoDb',todoSchema);

todoDb.remove({},function (err) {
  if (err) return handleError(err);
  // removed!

	var todoitems = [
			{todoitem:"majom"},
	    	{todoitem:"majom2"},
	    	{todoitem:"majom1"}
	 ];
	 addIdToTododItems(todoitems);
	//var todoitems = [{todoitem:"majom"},{todoitem:"majom2"},{todoitem:"majom1"}];

	todoDb.collection.insert(todoitems,function(err){
		if (err) throw err;
	});

	todoDb({todoitem:"majom4"}).save(function(err){
		if (err) throw err;
	});

	todoDb.find({},{__v:0}).lean().exec(function (err, data) {

		console.log(JSON.stringify(data));

	});

	function addIdToTododItems(arrOfObjs){

		arrOfObjs.forEach(function(item, index){
			item.id = Math.floor(Math.random() * 20);
			console.log(item);
		});		

	}
});
