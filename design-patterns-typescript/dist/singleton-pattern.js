"use strict";
var StatsTracker = /** @class */ (function () {
    function StatsTracker() {
        this.someProp = 11;
        if (StatsTracker._instance)
            throw new Error('there is already an instance of this class');
    }
    Object.defineProperty(StatsTracker, "instance", {
        get: function () {
            return StatsTracker._instance;
        },
        enumerable: true,
        configurable: true
    });
    StatsTracker.prototype.getStatistics = function () {
        console.log(1111);
    };
    StatsTracker._instance = new StatsTracker();
    return StatsTracker;
}());
var statsTracker1 = StatsTracker.instance;
console.log(statsTracker1);
console.log(statsTracker1.getStatistics());
var statsTracker2 = new StatsTracker();
console.log(statsTracker2);
//# sourceMappingURL=singleton-pattern.js.map