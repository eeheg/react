class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}

class Lion extends Cat {
    speak() {
        super.speack();
        console.log(`${this.name} roars`);
    }
}

let lion = new Lion("fuzzy");
lion.speak();