<<<<<<< HEAD
//module.exports = function(app){
=======
module.exports = function(app){
>>>>>>> 0027b162b95a334519d1bff0cca323cb83156393
	const mongoose = require("mongoose");
	const bodyParser = require("body-parser");
	// setting up body parser for POST methods fetching json	
	var jsonParser = bodyParser.json()
	// setting up mongodb on mlab
<<<<<<< HEAD
	mongoose.connect("mongodb://test:dalias19@ds155299.mlab.com:55299/todo-list");
=======
	mongoose.connect("mongodb://test:test@ds155299.mlab.com:55299/todo-list");
>>>>>>> 0027b162b95a334519d1bff0cca323cb83156393

	// Create nosql schema
	let todoSchema = new mongoose.Schema({
		todoitem : String,
		id : Number
	});

	let Todo = mongoose.model('Todo',todoSchema);
<<<<<<< HEAD
	Todo({
		todoitem : 'String',
		id : 1
	})
	.save(function(err){
			console.log('majom')
	})

	/*app.get('/todo', (req, res) => {
=======


	app.get('/todo', (req, res) => {
>>>>>>> 0027b162b95a334519d1bff0cca323cb83156393
		res.render('todo');
	});

	app.get('/', (req , res) => {
		Todo.find({},{__v:0,_id:0}).lean().exec(function (err, data) {
			res.render('todo', {todoitems : data})
		});
	});

	app.post('/add-task', jsonParser,(req, res) => {
		console.log(req.body);
		Todo(req.body).save(function(err){
			if (err) throw err;
			res.json(req.body);
		});
	});

	app.post('/remove-task', jsonParser,(req, res) => {
			console.log(req.body);
		Todo.remove(req.body,function (err) {
			if (err) return handleError(err);
			res.end("database updated");
	  		// removed!
		});
<<<<<<< HEAD
	});*/
//};
=======
	});
};
>>>>>>> 0027b162b95a334519d1bff0cca323cb83156393
