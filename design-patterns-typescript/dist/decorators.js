"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function methodDecorators() {
    // The expressions for each decorator are evaluated top-to-bottom.
    // The results are then called as functions from bottom-to-top.
    function f() {
        console.log("f(): evaluated");
        return function (target, propertyKey, descriptor) {
            console.log('f ----------------------');
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        };
    }
    function g() {
        console.log("g(): evaluated");
        return function (target, propertyKey, descriptor) {
            console.log('g ----------------------');
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        };
    }
    function e() {
        console.log('e ----');
        console.log(arguments);
        return function (target, propertyKey, descriptor) {
            console.log('e ----------------------');
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        };
    }
    var C = /** @class */ (function () {
        function C() {
        }
        C.prototype.method = function () { };
        __decorate([
            f(),
            g(),
            e()
        ], C.prototype, "method", null);
        return C;
    }());
}
// CLASS DECORATORS
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter = __decorate([
        sealed
    ], Greeter);
    return Greeter;
}());
//# sourceMappingURL=decorators.js.map