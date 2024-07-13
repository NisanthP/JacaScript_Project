// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var sum = add(50, 23);
console.log('The sum of 50 and 23 is ' + sum);

var sum2 = add(75, 39);
console.log('The sum of 75 and 39 is ' + sum2);

var sum3 = add(add(10, 20), 5); 
console.log('The sum of 10, 20, and 5 is ' + sum3);

var addThree = function (num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
};

var sumThree = addThree(15, 30, 45);
console.log('The sum of 15, 30, and 45 is ' + sumThree);

/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */