// CLASSIC DECORATORS IN TYPESCRIPT

interface ComputerInterface {
    ipAddress: number;
    screenSize: string;
    calculate(number1: number, number2: number): number;
    bootUp(): void;
    shutDown(): void;
}

class Computer implements ComputerInterface{
    constructor(private _ipAddres: number) {};
    public screenSize = '16 inch';

    public calculate(number1: number, number2: number): number {
        return number1 + number2;
    }

    public bootUp(): void {
        console.log('booted up');
    }

    public shutDown(): void {
        console.log('shut down');
    }

    public get ipAddress(): number {
        return this._ipAddres;
    }
}

// class ComputerComponentDecorator {
//     constructor(computer: ComputerInterface) {
//         Object.assign(this, computer);
//         Object.assign(this.__proto__, ‌‌computer.__proto__);
//         console.log('finished')
//     };
// }

class ComputerComponentDecorator implements ComputerInterface{
    constructor(private _computer: ComputerInterface) {};

    public get screenSize(): string {
        return this._computer.screenSize;
    }

    public calculate(number1: number, number2: number): number {
        return this._computer.calculate(number1, number2);
    }

    public bootUp(): void {
        this._computer.bootUp();
    }

    public shutDown(): void {
        this._computer.shutDown()
    }

    public get ipAddress(): number {
        return this._computer.ipAddress;
    }
}

class ComputerHasMicrophone extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    recordSoundWithMicro(sound: string): void {
        console.log(sound);
    }
}

const myComputer = new Computer(12324);
const myComputerWithPicrophone = new ComputerHasMicrophone(myComputer);
myComputerWithPicrophone.shutDown();
myComputerWithPicrophone.recordSoundWithMicro('sound recorded');