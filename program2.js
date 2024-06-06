// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// Creating a Prototype with Inhertiance and Adding a Method to the Prototype

function Person(name,age,grade){
    this.name=name;
    this.age=age;
    
}

Person.prototype.school='City School'

Person.prototype.sayHello=function(){
    console.log(`My name is ${this.name} and my age is ${this.age}`)
}

const Person1= new Person('Charlie',20,10)
Person1.sayHello()

function Student(name, age, grade) {
 Person.call(this, name, age);
 this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);

Student.prototype.checkGrade = function() {
 console.log(`${this.name} is studying in ${this.school} and he got ${this.grade} grade!`);
};

const student1 = new Student("Charlie", 22, "A");
student1.checkGrade()
