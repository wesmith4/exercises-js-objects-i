let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {};

user['firstName'] = 'Han';
user['lastName'] = 'Solo';
user['currentLocation'] = 'Tatooine';
user['favoriteSongs'] = ['Talledega', 'FloraBama', 'Outskirts of Heaven'];
user['age'] = 70;
user['favoriteFood'] = 'desert rat';
user['favoriteMovies'] = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
user['printFavorites'] = function() {
  console.log('Your favorite songs: ');
  for (let song of this.favoriteSongs) {
    console.log(`${this.favoriteSongs.indexOf(song) + 1}: ${song}`);
  }
  console.log();
  console.log('Your favorite movies: ');
  for (let movie of this.favoriteMovies) {
    console.log(`${this.favoriteMovies.indexOf(movie) + 1}: ${movie}`);
  }
  console.log();
  if (this.favoriteFood === 'apples') {
    console.log(`Your favorite food is ${this.favoriteFood}! You've kept the doctor away!`);
  } else {
    console.log(`Your favorite food is ${this.favoriteFood}`);
  }
}

// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}

console.log(`Hello, ${user['firstName']} ${user['lastName']}.`);
console.log();

console.log(`How's the weather in ${user['currentLocation']}?`);
console.log();

if (user['age'] >= 100) {
  console.log(`Wow! You're ${user['age']} years old? Fewer than 0.2% reach that age.`);
  console.log();
} else {
  console.log(`I see you're ${user['age']} years old.  When's your birthday?`);
}

user.printFavorites();
