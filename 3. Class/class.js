class Animal {
    constructor(name){
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

// extends 부모 클래스 연동
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speack() {
        console.log(`${this.name} barks.`);
    }
}

let d = new Dog("siba");
d.speack();

let cat = new Animal("cat");
cat.speak();