class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum() {
        return this.first + this.second;
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }
    sum() { //super.sum() : 부모의 함수
        return super.sum() + this.third;
    }
    avg() {
        return (this.first + this.second + this.third) / 3;
    }
}

const hun = new PersonPlus("hun", 1, 2, 3);
console.log(hun.sum());
console.log(hun.avg());

const person = new Person("hun", 1, 2);
console.log(person.sum());