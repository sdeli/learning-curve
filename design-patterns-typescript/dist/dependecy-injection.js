"use strict";
var IPhone = /** @class */ (function () {
    function IPhone() {
        this.type = '6s';
        this.color = 'red';
    }
    IPhone.prototype.call = function (num, name) {
        console.log(num);
        console.log(name);
        return true;
    };
    return IPhone;
}());
var Person = /** @class */ (function () {
    function Person(phone) {
        this.phone = phone;
    }
    Person.prototype.messageToSomebody = function (num, name) {
        return this.phone.call(num, name);
    };
    return Person;
}());
var iPhone = new IPhone();
var jokey = new Person(iPhone);
var wasCallSuccessful = jokey.messageToSomebody(123, 'Andy');
console.log(wasCallSuccessful);
//# sourceMappingURL=dependecy-injection.js.map