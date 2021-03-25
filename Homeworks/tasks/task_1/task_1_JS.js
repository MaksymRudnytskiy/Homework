// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

let greeting = 'hello';
let company = 'owu';
let domain = 'com';
let country = 'ua';
let first = 1;
let students = 10;
let negative = -999;
let years = 3.14;
let golenYears = 2.7;
let subsidiaries = 16;
let active = true;
let failures = false;

console.log(greeting);
console.log(company);
console.log(domain);
console.log(country);
console.log(first);
console.log(students);
console.log(negative);
console.log(years);
console.log(golenYears);
console.log(subsidiaries);
console.log(active);
console.log(failures);

alert(greeting);
alert(company);
alert(domain);
alert(country);
alert(first);
alert(students);
alert(negative);
alert(years);
alert(golenYears);
alert(subsidiaries);
alert(active);
alert(failures);

document.write(greeting);
document.write(company);
document.write(domain);
document.write(country);
document.write(first);
document.write(students);
document.write(negative);
document.write(years);
document.write(golenYears);
document.write(subsidiaries);
document.write(active);
document.write(failures);


//- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

greeting = 'Salutations';
company = 'Okten';
domain = '.com';
country = 'Ucraine';
first = 2;
students = 35;
negative = -5;
years = 5.5;
golenYears = 4.1;
subsidiaries = 1;
active = false;
failures = true;

console.log(greeting);
console.log(company);
console.log(domain);
console.log(country);
console.log(first);
console.log(students);
console.log(negative);
console.log(years);
console.log(golenYears);
console.log(subsidiaries);
console.log(active);
console.log(failures);

alert(greeting);
alert(company);
alert(domain);
alert(country);
alert(first);
alert(students);
alert(negative);
alert(years);
alert(golenYears);
alert(subsidiaries);
alert(active);
alert(failures);

document.write(greeting);
document.write(company);
document.write(domain);
document.write(country);
document.write(first);
document.write(students);
document.write(negative);
document.write(years);
document.write(golenYears);
document.write(subsidiaries);
document.write(active);
document.write(failures);

//- Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

const name = 'Max';
const surName = 'Rudnytskyi';
const workPlace = 'Tickets'

const age = 28;
const children = 0;
const cars = 1;

console.log(name)
console.log(surName)
console.log(workPlace)
console.log(age)
console.log(children)
console.log(cars)

alert(name)
alert(surName)
alert(workPlace)
alert(age)
alert(children)
alert(cars)

document.write(name)
document.write(surName)
document.write(workPlace)
document.write(age)
document.write(children)
document.write(cars)

//- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

let nm = prompt('Submit your name');
let pn = prompt('Submit your patronym');
let sn = prompt('Submit your surname');

console.log(nm);
console.log(pn);
console.log(sn);

alert(nm + ' ' + pn + ' ' + sn);

document.write(nm + ' ' + pn + ' ' + sn);

//Part_2

//- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = `${nm} ${pn} ${sn}`

//- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

let motherNm = prompt("Submit your mother's name");
let motherPn = prompt("Submit your mother's patronym");
let motherSn = prompt("Submit your mother's surname");

let fatherNm = prompt("Submit your father's name");
let fatherPn = prompt("Submit your father's patronym");
let fatherSn = prompt("Submit your father's surname");

let brotherNm = prompt("Submit your brother's name");
let brotherPn = prompt("Submit your brother's patronym");
let brotherSn = prompt("Submit your brother's surname");

console.log(motherNm + ' ' + motherPn + ' ' + motherSn);
console.log(fatherNm + ' ' + fatherPn + ' ' + fatherSn);
console.log(brotherNm + ' ' + brotherPn + ' ' + brotherSn);

alert(motherNm + ' ' + motherPn + ' ' + motherSn);
alert(fatherNm + ' ' + fatherPn + ' ' + fatherSn);
alert(brotherNm + ' ' + brotherPn + ' ' + brotherSn);

document.write(motherNm + ' ' + motherPn + ' ' + motherSn);
document.write(fatherNm + ' ' + fatherPn + ' ' + fatherSn);
document.write(brotherNm + ' ' + brotherPn + ' ' + brotherSn);

let mother = `${motherNm} ${motherPn} ${motherSn}`;
let father = `${fatherNm} ${fatherPn} ${fatherSn}`;
let brother = `${brotherNm} ${brotherPn} ${brotherSn}`;

//- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let num1 = +prompt('Number 1');
let num2 = +prompt('Number 2');
let num3 = +prompt('Number 3');

console.log(num1, num2, num3);

//- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let num4 = prompt('Number 4');
let num5 = prompt('Number 5');
let num6 = prompt('Number 6');
let num7 = prompt('Number 7');

let parNum4 = parseInt(num4);
let parNum5 = parseInt(num5);
let parNum6 = parseInt(num6);
let parNum7 = parseInt(num7);

console.log(parNum4)
console.log(parNum5)
console.log(parNum6)
console.log(parNum7)

