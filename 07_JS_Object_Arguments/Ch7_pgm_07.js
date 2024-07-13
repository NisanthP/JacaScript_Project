// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

var getBig = function (text) {
    return text.toUpperCase();
};

console.log(getBig("Mars")); 
console.log(getBig("Earth")); 


var getSmall = function (text) {
    return text.toLowerCase();
};

console.log(getSmall("VENUS"));
console.log(getSmall("SATURN")); 

/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */