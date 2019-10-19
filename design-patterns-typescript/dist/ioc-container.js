"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var IOCContainer = /** @class */ (function () {
    function IOCContainer() {
        this._dependencies = {};
        if (IOCContainer._instance)
            throw Error('use the \"instance\" method to get an instance');
    }
    Object.defineProperty(IOCContainer, "instance", {
        get: function () {
            return IOCContainer._instance;
        },
        enumerable: true,
        configurable: true
    });
    IOCContainer.prototype.register = function (className, classImplementation) {
        var isDependencyRegistered = Boolean(this._dependencies[className]);
        if (isDependencyRegistered)
            throw new Error('This dependency has already been registered');
        var dependenciesOfCurrClass = this.getDependenciesImplementations(classImplementation);
        this._dependencies[className] = new (classImplementation.bind.apply(classImplementation, __spreadArrays([void 0], dependenciesOfCurrClass)))();
    };
    IOCContainer.prototype.resolve = function (className) {
        var requiredClass = this._dependencies[className];
        if (!requiredClass)
            throw new Error('required class is not registered');
        return this._dependencies[className];
    };
    IOCContainer.prototype.getDependenciesImplementations = function (classImplementation) {
        var _this = this;
        var classBody = classImplementation.toString();
        var paramterNamesStr = classBody.match(/^function\s\w*.*\((.*)\).*/)[1];
        var paramterNamesArr = paramterNamesStr ? paramterNamesStr.split(', ') : [];
        var dependenciesOfCurrClass = paramterNamesArr.map(function (currDependencyName) { return _this._dependencies[currDependencyName]; });
        return dependenciesOfCurrClass;
    };
    IOCContainer._instance = new IOCContainer();
    return IOCContainer;
}());
var Monkey = /** @class */ (function () {
    function Monkey() {
    }
    return Monkey;
}());
var Gorilla = /** @class */ (function () {
    function Gorilla() {
    }
    return Gorilla;
}());
var Animals = /** @class */ (function () {
    function Animals(monkey, gorilla) {
        this.monkey = monkey;
        this.gorilla = gorilla;
    }
    ;
    return Animals;
}());
var iocCont = IOCContainer.instance;
iocCont.register('monkey', Monkey);
iocCont.register('gorilla', Gorilla);
iocCont.register('animals', Animals);
var myAnimals = iocCont.resolve('animals');
console.log(myAnimals);
//# sourceMappingURL=ioc-container.js.map