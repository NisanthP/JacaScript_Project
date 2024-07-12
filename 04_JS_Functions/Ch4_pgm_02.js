// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "Tamil",
  actors: "Lawrance,Asin",
  directors: "Sanmugam"
}

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");

// function Film(movie) {
//   console.log("Movie information for " + movie.title);
// console.log("------------------------------");
// console.log("Actors: " + movie.actors);
// console.log("Directors: " + movie.directors);
// console.log("------------------------------");
// }

// Film(movie1);
// Film(movie2);
// Film(movie3);
// Film(movie4);

var event1 = {
  title: "Conference",
  date: "2024-07-20",
  location: "New York",
  description: "Tech conference on the latest in AI and machine learning."
};

var event2 = {
  title: "Birthday Party",
  date: "2024-08-15",
  location: "San Francisco",
  description: "Celebration at Golden Gate Park with friends and family."
};

var event3 = {
  title: "Concert",
  date: "2024-09-10",
  location: "Los Angeles",
  description: "Live concert by a popular band at the Staples Center."
};

function displayEventInfo(event) {
  console.log("Event: " + event.title);
  console.log("------------------------------");
  console.log("Date: " + event.date);
  console.log("Location: " + event.location);
  console.log("Description: " + event.description);
  console.log("------------------------------");
  console.log("");
}

displayEventInfo(event1);
displayEventInfo(event2);
displayEventInfo(event3);


/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */