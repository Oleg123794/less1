let name = "Oleg";
let age = 23;
let isStudent = true;
let height = 175;
let hobby = "games";
let favoriteNumber = 7;
let isGraduated = false;

const nameType = typeof name;
const ageType = typeof age;
const isStudentType = typeof isStudent;
const heightType = typeof height;
const hobbyType = typeof hobby;
const favoriteNumberType = typeof favoriteNumber;
const isGraduatedType = typeof isGraduated;

console.log(`${nameType}:${name}, ${ageType}:${age}, ${isStudentType}:${isStudent}, ${heightType}:${height}, ${hobbyType}:${hobby}, ${favoriteNumberType}:${favoriteNumber}, ${isGraduatedType}:${isGraduated}`);

let myVariable;
console.log(myVariable);
let implicitUndefined;
console.log(implicitUndefined);
let NullVariable = null;
console.log(NullVariable);

console.log(typeof myVariable, "||", typeof implicitUndefined, "||", typeof NullVariable);

let birthYear = 2001;
let currentYear = new Date().getFullYear();
let currentAge = currentYear - birthYear;
console.log(`Привет, мне ${currentAge} года.`)