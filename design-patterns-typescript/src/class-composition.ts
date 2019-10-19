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

type Constructor<I extends Base> = new (...args: any[]) => I;

class Base {}

function Flies<T extends Constructor<Base>>(constructor: T = Base as any) {
  return class extends constructor implements IFlies {
    public fly() {
      console.log("Hi, I fly!");
    }
  };
}

function Quacks<T extends Constructor<Base>>(constructor: T = Base as any) {
  return class extends constructor implements ICanQuack {
    public quack(this: IHasSound, loud: boolean) {
      console.log(loud ? this.sound.toUpperCase() : this.sound);
    }
  };
}

interface IHasSound {
  sound: string;
}

interface ICanQuack {
  quack(loud: boolean): void;
}

interface IQuacks extends IHasSound, ICanQuack {}

interface IFlies {
  fly(): void;
}

class MonsterDuck extends Quacks(Flies()) implements IQuacks, IFlies {
  public sound = "quackly!!!";
}

class RubberDuck extends Quacks() implements IQuacks {
  public sound = "quack";
}

const monsterDuck = new MonsterDuck();
monsterDuck.quack(true); // "QUACKLY!!!"
monsterDuck.fly(); // "Hi, I fly!"

const rubberDuck = new RubberDuck();
rubberDuck.quack(false); // "quack
