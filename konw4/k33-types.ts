namespace K33 {
    // type declaration
    type Citizen = {
        sex: 'man' | 'woman',
        age: number,
        firstname: string,
        secondname: string
    }
    type Tourist = {
        vacationDuration: number,
        homeTown: string;
    }
    // union types - citizens
    type City = {
        people: (Citizen | Tourist)[], // means: Citizen[] | Tourist[]
        area: number | string,
        longitude: number,
        lattitude: number,
        name: string
    }

    class CityClass {
        private citizens: CityCitizen[]; // means: Citizen[] | Tourist[]
        area: number | string;
        longitude: number;
        lattitude: number;
        name: string
        getPeople(): CityCitizen[] {
            return this.citizens;
        }
        setPeople(data: Citizen[]) {
            this.citizens = data
        }
    }
    // new type from union
    class Animal {
        name: string;
        type: string;
    }
    class Dog extends Animal {
        type = 'dog'
    }
    class Cat extends Animal {
        type = 'cat'
    }
    type SomePerson = Citizen | Tourist | Android | Android2;
    type AlivePerson = Citizen | Tourist;
    type Android = {}
    type Android2 = {}
    type SomeGuyOnStreet = SomePerson | string;
    type OnlyAnimals = Dog | Cat
    type CityCitizen = SomePerson | OnlyAnimals // Citizen | Tourist | Dog | Cat
    let john: SomeGuyOnStreet;
 
    function a(a:SomePerson) {}
    function b(a:SomePerson) {}
    function c(a:SomePerson) {}
    function d(a: AlivePerson) {}
    function e(a: Android | Android2) {}
}