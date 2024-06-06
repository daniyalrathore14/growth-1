//Create a function calculateSquare that calculates the square of a number. Use a prototype to reuse the function across instances.

function Calculator(base) {
 this.base = base;
}
Calculator.prototype.calculateSquare = function() {
 return this.base * this.base;
};
var calc1 = new Calculator(10);
var calc2 = new Calculator(20);
console.log(calc1.calculateSquare()); // Outputs: 25
console.log(calc2.calculateSquare()); // Outputs: 64