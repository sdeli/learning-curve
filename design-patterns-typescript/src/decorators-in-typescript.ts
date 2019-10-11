
function methodDecorators() {
    // The expressions for each decorator are evaluated top-to-bottom.
    // The results are then called as functions from bottom-to-top.
    function f() {
        console.log("f(): evaluated");
        return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log('f ----------------------')
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        }
    }

    function g() {
        console.log("g(): evaluated");
        return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log('g ----------------------')
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        }
    }

    function e() {
        console.log('e ----');
        console.log(arguments);
        return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log('e ----------------------');
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        }
    }

    class C {
        @f()
        @g()
        @e()
        method() {}
    }
}

function classDecorator() {
    @sealed
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    function sealed(constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }

    const greeting = new Greeter('hyhyhy');
    console.log(greeting);
}

classDecorator();


// CLASS DECORATORS
