// class base {
//     fuck = true;
// }
//
// interface DisposeInterface {
//     isDisposed: boolean;
//     dispose(): void;
// }
//
// class Disposable implements DisposeInterface{
//     isDisposed: boolean = false;
//     dispose() {
//         this.isDisposed = true;
//     }
// }
//
// interface ActivatableInterface {
//     isActive: boolean;
//     activate(): void;
//     deactivate(): void;
// }
//
// class Activatable {
//     isActive: boolean = true;
//     activate() {
//         this.isActive = true;
//     }
//     deactivate() {
//         this.isActive = false;
//     }
// }
//
//
// interface Joined extends ActivatableInterface, DisposeInterface {
//     fuck: boolean
// }
//
// function getClass(): Joined {
//     let myObj = {};
//     base.call(myObj);
//     Disposable.call(myObj);
//     Activatable.call(myObj);
//     return myObj;
// }
//
// type DisposableConstructor = new () => DisposeInterface;
//
// function canDispose<T extends {new (...args: any[]): Base}>(BaseConstructor: T): DisposableConstructor {
//     return class extends BaseConstructor {
//         isDisposed: boolean = false;
//         dispose() {
//             this.isDisposed = true;
//         }
//     }
// }


// class SmartObject{
//     constructor() {
//         Disposable.call(this);
//         Activatable.call(this);
//         setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
//     }
//
//     interact() {
//         console.log(this.isDisposed);
//         console.log(this.isActive);
//     }
// }
//
// applyMixins(SmartObject, [Disposable, Activatable]);
// interface SmartObject extends Disposable, Activatable {}

// let smartObj = new SmartObject();
// smartObj.interact();
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
//         });
//     });
// }

interface ZooInterface {
    monkey: boolean;
    lion: boolean;
    rhino: boolean;
}

interface duck {
    duck: boolean;
    lake: boolean;
}

function hasDuck() {
    return function <T extends {new (...args: any[]): Zoo}>(ZooConstructor: T) {
        return class extends ZooConstructor {
            duck = true;
            lake = true;
        }
    }
}

@hasDuck()
class Zoo implements ZooInterface, duck {
    public monkey = true;
    public lion = true;
    public rhino = true;
}

let zoo = new Zoo();
console.log(zoo);

export function foo(target: any)
{
    return target;
}

export function bar(target: any)
{
    return target;
}

export function baz(target: any)
{
    return target;
}

export function standard<T>()
{
    return (target: { new(): T}) =>
    {
        return foo(bar(baz(target)));
    }
}

@foo
@bar
@baz
export class MyClass  { /* ... */ }

@standard<MyClass>()
export class MyClassA { /* ... */ }

class Animal {
    public run: boolean = true;
}

interface Monkey extends Animal {
    climb: boolean;
    hair: boolean;
}

function getMonkey(): Monkey {
    class Monkey extends Animal {
        public climb = true;
        public hair = false;
    }

    return new Monkey();
}