// Const Rule 1: Have to assign a value when declaring.
const me = {
    /* Key: Value
    === key-value pairs
    */
   name : 'Johannes'
};
//Would not work, beacuse there is already a const named me
// Const Rule 2: Cannot reassign to constant 
// me = {}; 
me.name = 'Mohammad';

const hobbies = ["Football", "Swimming"];
hobbies.push("Cooking")
me.hobbies = hobbies

console.log(me)

const hobbyOne = "Football skill level: '6'";
const hobbyTwo = 'Swimming skill level: "3"';
// String template litterals
const hobbyThree = `Cooking skill level: "'${2 + 2}'"`;
console.log(hobbyThree)
