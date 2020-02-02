# JavaScript Exercises - Objects I

Exercises to practice common ways of using objects in JavaScript.

## Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Exercises](#exercises)
  - [Creating And Accessing Data In Objects](#creating-and-accessing-data-in-objects)
  - [Comparing Arrays And Objects](#comparing-arrays-and-objects)
    - [Store With Arrays](#store-with-arrays)
    - [Store With Objects](#store-with-objects)
- [Object Access Syntax](#object-access-syntax)

## Getting Started

1. Fork this repository
1. Use `git clone` to clone your forked repository to your computer
1. Create a new branch so you can ask for feedback
1. Start working on the exercises in the `exercises/` directory
1. Push your branch up to GitHub
1. When you're ready for feedback, submit a pull request (PR) against your branch and your `master`. In the PR, tag any instructors you want to ask for feedback.

## Exercises

In JavaScript, objects and dictionaries are the same thing. In other languages, there's a sharp distinction between the two.

So, **remember**: read the [dictionary section][intro-js-dictionaries] of the JS Crash Course!

### Creating And Accessing Data In Objects

Even if you feel comfortable creating, accessing, and modifying objects, go through this exercise and treat it like a mini-quiz. If you really understand how to do all the above, this exercise should take no more than 2-3 minutes.

From the command line, run `printUserInfo.js`:

```console
node exercises/printUserInfo.js
```

You will be prompted to open [exercises/printUserInfo.js](exercises/printUserInfo.js). Modify the code inside so that it prints out something like the following:

```console
$ node exercises/printUserInfo.js
Hello, James Ford!

How's the weather in Jasper, Alambama?

I see you're 50 years old. When's your birthday?
$
```

You're free to use values other than `'James'`, `'Ford'`, etc. These are just examples. Keep in mind if you push this code to GitHub it will be publicly visible, so don't include personal details.

1. Add a property to the `user` object called `favoriteFood`. Use an `if/else` statement to print out a few different messages depending on what value you assign to the `favoriteFood` property.
1. Add a property to the `user` object called `favoriteMovies` and print them out like `favoriteSongs`.
1. Create a function called `printFavorites` that takes in any list of favorites things (songs, movies, etc.) and prints them out as a numbered list. Modify the code so that the parts that print out `favoriteSongs` and `favoriteMovies` use `printFavorites` to do print out the list.

### Comparing Arrays And Objects

If we want to represent something like a "user" or a "product" or a "school" in our code, we need some way to group many associated values together.

For example...

- A user might have a first name, last name, email address, location, etc.
- A product might have a brand, color, price, etc.
- A school might have a name, a list of students enrolled, a list of courses it offers, etc.

Arrays are capable of doing all of the above, but they're less than ideal. We're going to implement the same basic program using both arrays and objects to why we'd want something like objects.

#### Store With Arrays

To get started, run `storeWithArrays.js` in the `exercises/` directory.

1. Implement `userCanAffordSofa`. Add some more users and play with the price of the sofa to ensure the code works as expected.
1. Add support for keeping track of a user's email address. This will be an additional argument to `newUser`.
1. If a user is able to buy the sofa in question, print out a message along the lines of:

   ```text
   We will be emailing you at <email address>.
   ```

   where `<email address>` is something like `mindy@example.com`, `jesse@example.com`, etc. Every user should have a different email address.

#### Store With Objects

Next, run `storeWithObjects.js` in the `exercises` directory. Implement the exact same set of features in this file as you did in `storeWithArrays.js` using objects instead of arrays.

So, for example, rather than supporting an email address by adding an extra element to the array that represents a user, you should add an extra property with a helpful name (like `email` or `emailAddress`).

Pay attention to:

- What's easier? What's harder?
- What feel more natural to write? To read?
- If someone saw the `userCanAffordSofa` function in isolation, would the version with arrays or objects be more self-explanatory? Why or why not?
- Which version was easier to add support for an additional property?
- Which version do you think is more or less likely to have bugs introduced as more changes are added? Why?

## Object Access Syntax

In these exercises we've been accessing object properties using the following syntax:

```javascript
let person = {};

person['firstName'] = 'Jesse';
person['lastName'] = 'Farmer';

console.log(`Hello, ${person['firstName']} ${person['lastName']}!`);
```

We did this to mirror the syntax you'd use for arrays. However, there's a more commonly used syntax:

```javascript
let person = {};

person.firstName = 'Jesse';
person.lastName = 'Farmer';

console.log(`Hello, ${person.firstName} ${person.lastName}!`);
```

And in the same way that you can create an array with an array literal:

```javascript
let names = [
  'Jesse',
  'Alfred',
  'Erin',
  'Stacey',
];
```

You can create an object with an object literal:

```javascript
let person = {
  firstName: 'Jesse',
  lastName: 'Farmer',
};
```

In general, the `person.firstName` syntax is what you'll see used most often. However, there are two scenarios where the `person['firstName']` syntax is necessary.

1. The property name contains characters that can't appear in a JavaScript variable name. This is perfectly valid, for example:

   ```javascript
   person['01234'] = 'meow';
   ```

   Using `person.01234` would result in a syntax error, so we have to use `person['01234']`.
2. The property name we're interested in is supplied dynamically. For example:

   ```javascript
   let readlineSync = require('readlineSync');

   let user = {
     firstName: 'Jesse',
     lastName: 'Farmer',
   };

   // Prompt the user, who would type something like 'firstName'
   let dynamicPropertyName = readlineSync.question('What property do you want to see? ');
   let propertyValue = user[dynamicPropertyName];

   console.log(`You wanted to see ${dynamicPropertyName}. The value is ${propertyValue}.`);
   ```

   We couldn't type, say, `user.dynamicPropertyName`, because that'd be looking for the property whose name was literally `'dynamicPropertyName'`, not the property whose name is the value of the `dynamicPropertyName` variable.

[intro-js-dictionaries]: https://github.com/jfarmer/intro-javascript/blob/master/Collections/Dictionaries.md
