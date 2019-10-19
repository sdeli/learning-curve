"use strict";
// CLASSIC DECORATORS IN TYPESCRIPT
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
var Computer = /** @class */ (function () {
    function Computer(_ipAddres) {
        this._ipAddres = _ipAddres;
        this.screenSize = '16 inch';
    }
    ;
    Computer.prototype.calculate = function (number1, number2) {
        return number1 + number2;
    };
    Computer.prototype.bootUp = function () {
        console.log('booted up');
    };
    Computer.prototype.shutDown = function () {
        console.log('shut down');
    };
    Object.defineProperty(Computer.prototype, "ipAddress", {
        get: function () {
            return this._ipAddres;
        },
        enumerable: true,
        configurable: true
    });
    return Computer;
}());
// class ComputerComponentDecorator {
//     constructor(computer: ComputerInterface) {
//         Object.assign(this, computer);
//         Object.assign(this.__proto__, ‌‌computer.__proto__);
//         console.log('finished')
//     };
// }
var ComputerComponentDecorator = /** @class */ (function () {
    function ComputerComponentDecorator(_computer) {
        this._computer = _computer;
    }
    ;
    Object.defineProperty(ComputerComponentDecorator.prototype, "screenSize", {
        get: function () {
            return this._computer.screenSize;
        },
        enumerable: true,
        configurable: true
    });
    ComputerComponentDecorator.prototype.calculate = function (number1, number2) {
        return this._computer.calculate(number1, number2);
    };
    ComputerComponentDecorator.prototype.bootUp = function () {
        this._computer.bootUp();
    };
    ComputerComponentDecorator.prototype.shutDown = function () {
        this._computer.shutDown();
    };
    Object.defineProperty(ComputerComponentDecorator.prototype, "ipAddress", {
        get: function () {
            return this._computer.ipAddress;
        },
        enumerable: true,
        configurable: true
    });
    return ComputerComponentDecorator;
}());
var ComputerHasMicrophone = /** @class */ (function (_super) {
    __extends(ComputerHasMicrophone, _super);
    function ComputerHasMicrophone(computer) {
        return _super.call(this, computer) || this;
    }
    ComputerHasMicrophone.prototype.recordSoundWithMicro = function (sound) {
        console.log(sound);
    };
    return ComputerHasMicrophone;
}(ComputerComponentDecorator));
var myComputer = new Computer(12324);
var myComputerWithPicrophone = new ComputerHasMicrophone(myComputer);
myComputerWithPicrophone.shutDown();
myComputerWithPicrophone.recordSoundWithMicro('sound recorded');
//# sourceMappingURL=decorator-patterns.js.map