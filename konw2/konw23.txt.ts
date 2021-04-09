// excess property checking dla literałów (interface nie może mieć index signature!)
interface SquareConfig {
    color?: string;
    width?: number;
}
interface Box {
    color?: string; // właściwość opcjonalna
    readonly id: number; // readonly 
    isEmpty?(): boolean; // funkcje
}
function createBox(config: Box): number {
    return config.id;
}
// const boxConfig = {id: 12, colour: 'red'}
let newBox = createBox({ id: 12, colour: "red" }); // , coloUr????
// rozwiązania:
// 1. index signature w interfejsie
// 2. type assertion: {id: 12, colour: 'red'} as Box 
// 3. przypisanie literału do zmiennej: boxConfig = {id: 12, colour: 'red'}; - excess checking wylączone

// interfejsy dla funkcji:
interface SortFunc {
    (source: string[]): string[];
}
let bubbleSort: SortFunc;
bubbleSort = (data: string[]): string[] => {
    return data;
}

// na koniec ciekawostka - interfejsy mogą dziedziczyć po klasach:)
// dziedziczą jedynie definicję, nie implementację!

// ------------
// Klasy
// ------------
// deklaracja klasy tworzy dwie rzeczy - konstruktor dla nowych obiektów oraz typ.

class Person {
    private _firstName: string;
    set firstName(fname: string) {
        this._firstName = fname;
    };
    get firstName(): string {
        return this._firstName;
    }

    protected lastName: string;
    // public jest domyślne
    protected constructor(firstName: string, lastName: string) { // protected constuctor!
        this.firstName = firstName;
        this.lastName = lastName
    }
    getName(): string {
        return this.firstName;
    }
    static sex: string[] = ['male', 'female', 'sometimes camel'];
}
let john = new Person('john', 'doe') // nowy obiekt z klasy. UPS?
john.firstName = 'amy' // użycie settera
const s = Person.sex[1] // użycie właściwości statycznej klasy Person

// inny sposób deklaracji właściwości klas z użyciem konstruktora
class Person2 {
    constructor(private firstName: string, public lastName: string) { }

    getPersonalData(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
//dziedziczenie - klasyka
class Student extends Person {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName); // uruchomienie konstruktora rodzica
    }

    // private readonly xx = 10;
    get surname(): string {     // brak settera = readonly
        return this.lastName;
    }
    getName(): string {
        return 'Student ' + super.getName(); // odwołanie do metody rodzica
    }
}

// klasy astrakcyjne 
abstract class Creature { }
