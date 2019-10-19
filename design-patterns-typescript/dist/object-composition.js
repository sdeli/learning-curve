"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Editable() {
    return function (target) {
        target.prototype.edit = function (text) {
            this.text = text;
        };
    };
}
/**
 * @name Archivable
 **/
function Archivable() {
    return function (target) {
        target.prototype.archive = function (text) {
            target.prototype.archived = true;
        };
    };
}
/**
 * @name Readable
 **/
function Readable() {
    return function (target) {
        target.prototype.read = function () {
            return this.text;
        };
    };
}
// creating the class
var Todo = /** @class */ (function () {
    function Todo(text) {
        this.text = text;
    }
    Todo = __decorate([
        Editable(),
        Archivable(),
        Readable(),
        __metadata("design:paramtypes", [String])
    ], Todo);
    return Todo;
}());
// creating an instance of Todo
var todo = new Todo("Learn Typescript"); // text = "Learn Typescript"
todo.edit("I learnt Typescript!");
todo.read(); // I learnt Typescript!
todo.archive(); // archived = true
//# sourceMappingURL=object-composition.js.map