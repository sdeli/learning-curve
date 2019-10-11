interface GameCharacter {
    life: number;
    strength: number;
    skills: string[];
    name: string;
}

class GameChracterFactory {
    public static getMage(level: number): GameCharacter {
        return  {
            life: level > 10 ? 100 : 50,
            strength: 20,
            skills: ['blood lust', 'rotten'],
            name: 'Nagy szurke kocsog'
        };
    }

    public static getWarrior(level: number): GameCharacter {
        return  {
            life: level > 10 ? 300 : 150,
            strength: 50,
            skills: ['bash', 'cut neck'],
            name: 'Arthur'
        };
    }

    public static getRouge(level: number): GameCharacter {
        return  {
            life: level > 10 ? 200 : 10,
            strength: 50,
            skills: ['steel'],
            name: 'Jakie'
        };
    }
}

console.log(GameChracterFactory.getMage(10));
console.log(GameChracterFactory.getWarrior(10));
console.log(GameChracterFactory.getRouge(10));
