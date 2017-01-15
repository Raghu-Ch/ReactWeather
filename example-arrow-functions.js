/**
 * @file
 * Provides example arrow-function functionality.
 */

// var names = ['Swapna', 'Raghu', 'Ram'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

//anonymous function 
function add (a,b) {
	return a+b ;
}

console.log(add(1,3));

//Arrow function: addStatement {for multiple lines}
var addStatement = (a,b) => {
	return a + b;
}
console.log(addStatement(5,6));

//Arrow function: addExpression {for single line / expression }
var addExpression = (a,b) => a + b ;
console.log(addExpression(5,-3));