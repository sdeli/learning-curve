class IOCContainer {
    private static _instance = new IOCContainer();
    private _dependencies: {[key: string]: object} = {};

    public static get instance() {
        return IOCContainer._instance;
    }

    constructor() {
        if (IOCContainer._instance) throw Error('use the \"instance\" method to get an instance')
    }

    public register(className: string, classImplementation: any): void {
        let isDependencyRegistered = Boolean(this._dependencies[className]);
        if (isDependencyRegistered) throw new Error('This dependency has already been registered');

        let dependenciesOfCurrClass = this.getDependenciesImplementations(classImplementation);
        this._dependencies[className] = new classImplementation(...dependenciesOfCurrClass);
    }

    public resolve(className: string): object {
        let requiredClass = this._dependencies[className];
        if (!requiredClass) throw new Error('required class is not registered');
        return this._dependencies[className];
    }

    private getDependenciesImplementations(classImplementation: any): object[] {
        let classBody = classImplementation.toString();
        let paramterNamesStr = classBody.match(/^function\s\w*.*\((.*)\).*/)[1];
        let  paramterNamesArr: string[] = paramterNamesStr ? paramterNamesStr.split(', ') : [];
        let dependenciesOfCurrClass = paramterNamesArr.map(currDependencyName => this._dependencies[currDependencyName]);

        return dependenciesOfCurrClass;
    }
}

class Monkey {

}

class Gorilla {

}

class Animals {
    constructor(
        public monkey: Monkey,
        public gorilla: Gorilla
    ) {};
}

let iocCont = IOCContainer.instance;
iocCont.register('monkey', Monkey);
iocCont.register('gorilla', Gorilla);
iocCont.register('animals', Animals);

let myAnimals = iocCont.resolve('animals');
console.log(myAnimals);