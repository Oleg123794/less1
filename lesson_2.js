const myName = "Oleg";
const age = 21;
const isStudent = true;
const height = 172;
const hobby = "My hobbi is games";
const favoriteNumber = 3;
const isGraduated = true;
console.log(`${typeof(myName)}, ${typeof(age)}, ${typeof(isStudent)}, ${typeof(height)}, ${typeof(hobby)}, ${typeof(favoriteNumber)}, ${typeof(isGraduated)}`);

const fUndefined = undefined;
const fNull = null;
console.log(`${typeof(fUndefined)} || ${typeof(fNull)}`);

const myYearOfBirth = 2001;
const thisYear = 2024;
let myAge = thisYear - myYearOfBirth;
console.log(`Привет, мне ${myAge} лет`);

{
let now = new Date(); //Текущя дата
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
let bithday = new Date(1987, 2, 6); //Дата рождения
let bithThisYear = new Date(today.getFullYear(), bithday.getMonth(), bithday.getDate()); //ДР в текущем году
let age; //Возраст

//Возраст = текущий год - год рождения
age = today.getFullYear() - bithday.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
if (today < bithThisYear) {
  age = age-1;
}

console.log(`Возраст: ${age}`);
}