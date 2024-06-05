const firstWords = [
    "Alpha",
    "Bravo",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Juliet",
];
const secondWords = [
    "Kilo",
    "Lima",
    "Mike",
    "November",
    "Oscar",
    "Papa",
    "Quebec",
    "Romeo",
    "Sierra",
    "Tango",
];

const randomNumber1 = Math.floor(Math.random() * 10); 
const randomNumber2 = Math.floor(Math.random() * 10); 
const startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];
console.log(
  `The startup: ${startupName}, contains ${startupName.length} characters`
);
