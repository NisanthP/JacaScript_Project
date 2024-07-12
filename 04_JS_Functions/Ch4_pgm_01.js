// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

var blogPost;

blogPost = {
  title: "The Future of JavaScript",
  author: "John Doe",
  content: "JavaScript continues to evolve and grow in popularity. In this post, we'll explore the latest trends and features...",
  tags: ["JavaScript", "Web Development", "Programming"]
};

console.log("Blog Post Information");
console.log("------------------------------");
console.log("Title: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Content: " + blogPost.content);
console.log("Tags: " + blogPost.tags);
console.log("------------------------------");


/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */