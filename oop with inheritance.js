
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); 
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  fetch() {
    console.log(`${this.name} fetches a ball.`);
  }
}

const animal = new Animal('Generic Animal');
const dog = new Dog('Buddy', 'Labrador');

animal.speak(); 
dog.speak();
dog.fetch(); 
