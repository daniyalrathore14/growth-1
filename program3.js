// Description: Explore the prototype chain of an object. Create instances of Person, Student (inheriting from Person), and School.

function Person(name,age,grade){
    this.name=name;
    this.age=age;
    
}
function Student(name, age, grade) {
 Person.call(this, name, age);
 this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);

function Graduate(name, age, grade, school) {
 Student.call(this, name, age, grade);
 this.school = school;
}
Graduate.prototype = Object.create(Student.prototype);
var person = new Person("Thomas", 10);
var student = new Student("Doe", 12, "A");
var graduate = new Graduate("Alpha", 13, "B", "Becon");
console.log(graduate.name); 
console.log(graduate.grade); 
console.log(graduate.school); 
console.log(student.name); 
console.log(student.grade); 
console.log(student.school); 