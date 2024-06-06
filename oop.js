class LivingBeing {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string.');
    }
  }

  static breath() {
    console.log('Taking a breath...');
  }
}

class Animal extends LivingBeing {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }

  get breed() {
    return this._breed;
  }

  set breed(newBreed) {
    if (typeof newBreed === 'string') {
      this._breed = newBreed;
    } else {
      throw new Error('Breed must be a string.');
    }
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  fetch() {
    console.log(`${this.name} fetches a ball.`);
  }
}

class WorkingDog extends Dog {
  constructor(name, breed, task) {
    super(name, breed);
    this._task = task;
  }

  get task() {
    return this._task;
  }

  set task(newTask) {
    if (typeof newTask === 'string') {
      this._task = newTask;
    } else {
      throw new Error('Task must be a string.');
    }
  }

  performTask() {
    console.log(`${this.name} is ${this.task}.`);
  }
}

const livingBeing = new LivingBeing('Organism');
const animal = new Animal('Generic Animal');
const dog = new Dog('Buddy', 'Labrador');
const workingDog = new WorkingDog('Rex', 'German Shepherd', 'herding');

LivingBeing.breath();

livingBeing.name = 'New Organism';
console.log(livingBeing.name);

animal.speak(); 
dog.speak(); 
dog.fetch();
workingDog.performTask();
