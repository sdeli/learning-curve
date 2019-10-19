"use strict";
var GameChracterFactory = /** @class */ (function () {
    function GameChracterFactory() {
    }
    GameChracterFactory.getMage = function (level) {
        return {
            life: level > 10 ? 100 : 50,
            strength: 20,
            skills: ['blood lust', 'rotten'],
            name: 'Nagy szurke kocsog'
        };
    };
    GameChracterFactory.getWarrior = function (level) {
        return {
            life: level > 10 ? 300 : 150,
            strength: 50,
            skills: ['bash', 'cut neck'],
            name: 'Arthur'
        };
    };
    GameChracterFactory.getRouge = function (level) {
        return {
            life: level > 10 ? 200 : 10,
            strength: 50,
            skills: ['steel'],
            name: 'Jakie'
        };
    };
    return GameChracterFactory;
}());
console.log(GameChracterFactory.getMage(10));
console.log(GameChracterFactory.getWarrior(10));
console.log(GameChracterFactory.getRouge(10));
//# sourceMappingURL=factory-pattern.js.map