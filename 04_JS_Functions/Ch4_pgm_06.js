// Calling the sayHello function three times

var sayHello;

sayHello = function () {
	console.log("Hello World!");
};

sayHello();
sayHello("Hello \n World!");
sayHello("Hello \n World!");

function hello(str){
	for (let index = 0; index < str.length; index++) {
		const element = str[index];
		console.log(str[index]);
		
	}
}

hello(" Hello World");


/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */