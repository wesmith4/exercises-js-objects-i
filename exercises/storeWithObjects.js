let process = require('process');

/*
  To get started:

  1. Remove the lines involving the removeThisToStart variable, so that the
     program doesn't exit early.
  2. Implement userCanAffordSofa
*/

// --- DELETE THE LINES STARTING HERE ---
let removeThisToStart = true;

if (removeThisToStart) {
  console.log('Hey! Open up storeWithObjects.js to see how to get started.');
  process.exit();
}

// --- DELETE THE LINES ENDING HERE ---

/**
 * Creates and returns a new user (as an object).
 */
function newUser(firstName, lastName, budget) {
  let user = [];

  user['firstName'] = firstName;
  user['lastName'] = lastName;
  user['budget'] = budget;

  return user;
}

/**
 * Creates and returns a new sofa (as an object).
 */
function newSofa(name, price) {
  let sofa = [];

  sofa['name'] = name;
  sofa['price'] = price;

  return sofa;
}

/**
 * Returns `true` if the given user can afford to buy the given sofa
 * and `false` otherwise.
 */
function userCanAffordSofa(user, sofa) {
  // This is your job. :)

  return user['budget'] >= sofa['price'];
}

let allUsers = [
  newUser('Alyssa', 'Morris', 1800.00),
  newUser('Mindy', 'Weaver', 200.00),
  newUser('Louis', 'Washington', 850.00),
  newUser('Kevin', 'Isaacs', 80.00),
];

let sofa = newSofa('Nice Sofa', 800.00);

for (let user of allUsers) {
  // The '--------' lines are here just to make the display easier to read.
  console.log('--------------------');
  console.log();

  console.log(`Hi, ${user['firstName']}.`);
  console.log(`Checking whether you can afford a ${sofa['name']}, please hold on....`);
  console.log();

  if (userCanAffordSofa(user, sofa)) {
    console.log('Congratulations!');
    console.log(`A ${sofa['name']} costs ${sofa['price']}, which is within your budget of ${user['budget']}!`);
  } else {
    console.log(`Sorry, ${user['firstName']}, but you can't afford a ${sofa['name']}.`);
    console.log(`Your budget is ${user['budget']}, but a ${sofa['name']} costs ${sofa['price']}.`);
  }

  console.log();
}

console.log('--------------------');
