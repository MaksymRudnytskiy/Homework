////1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
////a) отримує текст з параграфа з id "content"
////b) отримує текст з блоку з id "rules"
////c) замініть текст параграфа з id 'content' на будь-який інший
////d) замініть текст параграфа з id 'rules' на будь-який інший
////e) змініть кожному елементу колір фону на червоний
////f) змініть кожному елементу колір тексту на синій
////g) отримати весь список класів елемента з id=rules і вивести їх в console.log
////h) отримати всі елементи з класом fc_rules
////i) поміняти колір тексту у всіх елементів fc_rules на червони
//
////a) отримує текст з параграфа з id "content"
//
//let a = document.getElementById('content');
//console.log(a);
//
////b) отримує текст з блоку з id "rules"
//
//let b = document.getElementById('rules');
//console.log(b);
//
////c) замініть текст параграфа з id 'content' на будь-який інший
//
//a.innerText = ('New text');
//console.log(a);
//
////d) замініть текст параграфа з id 'rules' на будь-який інший
//
//b.innerText = ('New text, part 2');
//console.log(b);
//
////e) змініть кожному елементу колір фону на червоний
//
//a.style.backgroundColor = 'red';
//b.style.backgroundColor = 'red';
//
////f) змініть кожному елементу колір тексту на синій
//
//a.style.color = 'blue';
//b.style.color = 'blue';
//
//g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//
//let idRules = document.getElementsByClassName('fc');
//console.log(idRules);
//
////h) отримати всі елементи з класом fc_rules

let h = document.getElementsByClassName('fc_rules');
console.log(h);

////i) поміняти колір тексту у всіх елементів fc_rules на червони

for (let i = 0; i < h.length; i++) {
    h[i].style.color = 'red';
}