function Editable() {
	return function(target) {
		target.prototype.edit = function(text: string) {
			this.text = text;
		};
	}
}

/**
 * @name Archivable
 **/
function Archivable() {
    return function(target) {
        target.prototype.archive = function(text: string) {
            target.prototype.archived = true;
        };
    }
}

/**
 * @name Readable
 **/
function Readable() {
	return function(target) {
		target.prototype.read = function() {
			return this.text;
		};
	}
}

// interface for the Todo class
interface ITodo {
	archived?: boolean;
	edit?(text: string): void;
	archive?(): void;
}


// creating the class
@Editable()
@Archivable()
@Readable()
class Todo implements ITodo {
	constructor(private text: string) {}
}

// creating an instance of Todo
const todo = new Todo("Learn Typescript"); // text = "Learn Typescript"
todo.edit("I learnt Typescript!");
todo.read(); // I learnt Typescript!
todo.archive(); // archived = true