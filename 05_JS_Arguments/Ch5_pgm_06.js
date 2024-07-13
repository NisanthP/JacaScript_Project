// A function with two arguments

var showSum;
var showProduct;
var  showDifference;
var showQuotient;
showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
	
	
};

showSum(30, 23);
showSum(2.8, -5);
showSum(56,74);

showProduct = function (number1,number2){
	var total2 = number1 * number2;
    console.log("The product is " + total2);

}

showProduct(76,23);
showProduct(23,56);
showProduct(12,65);

showDifference = function (number1,number2){
	var total2 = number1 * number2;
    console.log("The difference is " + total2);

}

showDifference(76,23);
showDifference(23,56);
showDifference(12,65);

showQuotient = function (number1,number2){
	var total2 = number1 * number2;
    console.log("The quotient is " + total2);

}

showQuotient(76,23);
showQuotient(23,56);
showQuotient(12,65);


/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */