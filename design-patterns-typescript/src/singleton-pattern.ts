class StatsTracker {
    public someProp: number = 11;
    constructor() {
        if (StatsTracker._instance) throw new Error('there is already an instance of this class');
    }

    private static _instance: StatsTracker = new StatsTracker();

    public static get instance(): StatsTracker {
        return StatsTracker._instance;
    }

    public getStatistics() {
        console.log(1111);
    }
}

const statsTracker1 = StatsTracker.instance;
console.log(statsTracker1);
console.log(statsTracker1.getStatistics());
const statsTracker2 = new StatsTracker();
console.log(statsTracker2);