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
//
//let h = document.getElementsByClassName('fc_rules');
//console.log(h);
//
//////i) поміняти колір тексту у всіх елементів fc_rules на червони
//
//for (let i = 0; i < h.length; i++) {
//    h[i].style.color = 'red';
//}
//
//2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
//3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

//2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
//
//for (let i = 0; i < users.length; i++) {
//    let userDiv = document.createElement('div');
//    userDiv.innerHTML = `name: ${users[i].name} <br>
//     age: ${users[i].age} <br>
//     status: ${users[i].status} <br>
//     address: city: ${users[i].address.city}, country: ${users[i].address.country}, street: ${users[i].address.street}, House Number: ${users[i].address.houseNumber}`
//    document.body.appendChild(userDiv)
//}
//
//3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let i = 0; i < users.length; i++) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `name: ${users[i].name} <br>
     age: ${users[i].age} <br>
     status: ${users[i].status}`
    document.body.appendChild(userDiv)
}

for (let k = 0; k < users.length; k++) {
    let addressDiv = document.createElement('div');
    addressDiv.innerHTML = `address: city: ${users[k].address.city}, country: ${users[k].address.country}, street: ${users[k].address.street}, House Number: ${users[k].address.houseNumber}`
    document.body.appendChild(addressDiv)
}



