
export class Person {
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
    private _name: string

    private _age: number

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
}

let driver = new Person("James", 30)

driver.age = 24
driver.name = "Hiro"

let name = driver.name