"use strict";
// class Animal {
//     public run: boolean = true;
// }
//
// type SubclassOfAnimalBase<I extends Animal> = new () => I;
//
// interface MonkeyInterface extends Animal {
//     climb: boolean;
//     hair: boolean;
// }
//
// type MonkeyConstructor<I extends Animal> = new () => MonkeyInterface;
//
// interface HairyInterface extends Animal {
//     hasHair: boolean;
// }
//
// type HairyConstructor<I extends Animal> = new () => HairyInterface;
//
// function getMonkey<I extends Animal>(AnimalCnstr: I): MonkeyConstructor {
//     return class extends AnimalCnstr implements MonkeyInterface {
//         public climb: boolean = true;
//         public hair: boolean = false;
//     }
// }
//
// function getHairy<I extends Animal>(AnimalCnstr: I): HairyConstructor {
//     return class extends AnimalCnstr {
//         public hasHair: boolean = true;
//     }
// }
//
// let myMonkey = getMonkey(Animal);
// let myHairyMonkey = getHairy(myMonkey);
//
// console.log(myMonkey);
// console.log('--------------');
// console.log(myHairyMonkey);
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
    }
    return Base;
}());
function Flies(constructor) {
    if (constructor === void 0) { constructor = Base; }
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.fly = function () {
            console.log("Hi, I fly!");
        };
        return class_1;
    }(constructor));
}
function Quacks(constructor) {
    if (constructor === void 0) { constructor = Base; }
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.quack = function (loud) {
            console.log(loud ? this.sound.toUpperCase() : this.sound);
        };
        return class_2;
    }(constructor));
}
var MonsterDuck = /** @class */ (function (_super) {
    __extends(MonsterDuck, _super);
    function MonsterDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sound = "quackly!!!";
        return _this;
    }
    return MonsterDuck;
}(Quacks(Flies())));
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sound = "quack";
        return _this;
    }
    return RubberDuck;
}(Quacks()));
var monsterDuck = new MonsterDuck();
monsterDuck.quack(true); // "QUACKLY!!!"
monsterDuck.fly(); // "Hi, I fly!"
var rubberDuck = new RubberDuck();
rubberDuck.quack(false); // "quack
//# sourceMappingURL=class-composition.js.map