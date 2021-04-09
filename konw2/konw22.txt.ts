// ------------
// ...c.d.typów
// ------------

// let aaaaa: number;
// let czywszedl = 'asd';
// Type assertion: '12' as number
// let aa = document.querySelector('#asd'); // type: Element
let aa: HTMLInputElement = document.querySelector('#asd'); // type: HTMLInputElement
aa.value
// alternatywnie
// let aa = document.querySelector('#asd'); // type: HTMLInputElement
// (aa as HTMLInputElement).value


let a = 12;
// const b: string = a; //error
// const b: string = a as string; // error - no bo jak?
const b: string = a as any as string; // brzydko, czasami wiemy lepiej niż typescript language service


// tablice
let arrA: number[]; // = [1, 2, 3]
// alternatywny sposób
let arrB: Array<number>;

// czy const jest zawsze const?
const constArr = [1, 2, 3];
constArr.push(4);
// rozwiązanie: typ ReadonlyArray<T>

// ------------
// DESTRUKTURYZACJA
// ------------
let destrA = ['john', 'doe'];
let [fname, lname]: string[] = destrA;
// dlaczego nie mogę [fname, lname]: [string, string] ale musze string[]?

// pomocne przy szybkiej podmianie wartości
// [a, b] = [b ,a];

// destrukturyzację można zastosować również do obiektów

// ------------
// REST PARAMETERS
// ------------
function restParams(first: number, ...others: number[]) {
    console.log(first, others)
}
// restParams(10, 12 ,12 ,3 )
restParams(10, 12, 123, 234, 345, 345, 45, 645, 7, 56, 686)

// ------------
// SPREAD OPERATOR 
// ------------

// działa na array & objects (tylko enumerable props - bez metod)
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
// [0, 1, 2, 3, 4, 5] z spread
// [0, [1,2], [3,4], 5] bez spread

// ------------
// Enumeratory
// ------------

// liczbowe: 
enum PermTypes {
    none,
    read,
    write
}
enum SmarterPermTypes { 'none' = 1, 'read' = 2, 'write' = 4, 'exec' = 8 } // dlaczego smarter?

// const upr = PermTypes.read | PermTypes.write
// tekstowe
enum StringPermTypes {
    none = 'none',
    read = 'read',
    write = 'write'
}
let userPerm: PermTypes = PermTypes.read // = 1
// można też odwrotnie: PermTypes[1] // = 'read'
