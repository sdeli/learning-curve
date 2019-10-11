/* DEPENDENCY INJECTION
* */
interface Phone {
    color: string;
    call(num: number, name: string): boolean;
}

class IPhone implements Phone {
    public type: string = '6s';
    public color: string = 'red';
    public call(num: number, name: string): boolean {
        console.log(num);
        console.log(name);
        return true;
    }
}

class Person {
    constructor(private phone: Phone) {}

    messageToSomebody(num: number, name: string): boolean {
        return this.phone.call(num, name);
    }
}

const iPhone = new IPhone();
const jokey = new Person(iPhone);

const wasCallSuccessful: boolean = jokey.messageToSomebody(123, 'Andy');
console.log(wasCallSuccessful);