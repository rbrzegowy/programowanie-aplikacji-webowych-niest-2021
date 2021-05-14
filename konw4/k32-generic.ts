
// generic
// problem - funkcja która pracuje z różnymi typami argumentów
function identity(arg: any): any {
    return arg; // say whaaat is it? 
}

// rozw.
function identityGeneric<Type>(arg: Type): Type {
    return arg;
}
const xx = identityGeneric<number>(10) // xx: number

// oznaczenia generyków są najczęściej jednoliterowe, ale wcale nie muszą być!
// function identityGeneric<Type>(arg: Type): Type {
//     return arg;
// }

// przykład wbudowanego w język generic types
// const people: string[] = []
// const people: Array<string> = []

// typ generyczny może byc inferowany z argumentu - nie trzeba go podawać
function mapElementsToObjects<ArrayItemType>(arr: ArrayItemType[]): { elem: ArrayItemType }[] {
    return arr.map(item => ({ elem: item }));
}
const data = mapElementsToObjects([1, 2, 3]); // data: number[] - z argumentu funkcji
// tak właśnie używasz .addEventListener:)

// generic class
class GenericNumber<NumberHolderType> {
    zeroValue: NumberHolderType;
    add: (x: NumberHolderType, y: NumberHolderType) => NumberHolderType;
    constructor(zeroValue: NumberHolderType, addFn: (x: NumberHolderType, y: NumberHolderType) => NumberHolderType) {
        this.add = addFn;
        this.zeroValue = zeroValue;
    }
}
const metric = new GenericNumber<number>(0, (a, b) => a + b)
const wynik = metric.add(10, 10)

// oganiczanie generic
interface LoggedUser {
    length: string;
}

function loggingIdentity<Type extends LoggedUser>(arg: Type): Type {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// ograniczanie do listy typów
function getLength<Type extends string | number>(data: Type): Type {
    let ret: Type;
    //do something with ret
    return ret;
}
// wiele typów generycznych
function getElement<DataType, ValueType>(data: DataType, value: ValueType): ValueType {
    let ret: ValueType;
    //do something with ret
    return ret;
}

// ograniczanie typów do kluczy innego obiektu
function getProperty<ObjectType, KeyType extends keyof ObjectType>(obj: ObjectType, key: KeyType) {
    return obj[key];
}

const x2 = { a: 'gfds', b: '2', c: 3, d: 4 };

// ok
const property = 'a';
const retNumber = getProperty(x2, 'a');
const retString = getProperty(x2, 'b');

// error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// getProperty(x2, "m"); 
















