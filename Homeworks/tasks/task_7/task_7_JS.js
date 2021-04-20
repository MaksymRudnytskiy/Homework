//- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//
//const text = document.getElementById('text')
//
//const button = document.getElementById('btn1');
//
//button.onclick = () => {
//    text.remove(text)
//}
//
//console.log(text)

//- Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
//const button = document.getElementById('btn1');
//
//button.onclick = () => {
//    button.hidden = true
//}

//- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//    При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
//
//const inputAge = document.getElementById('age')
//
//const button2 = document.getElementById('btn2');
//
//button2.onclick = (ev) => {
//    if (button2.value < 18) {
//    alert('You are not 18')
//    }
//}

//- Створіть меню, яке розгортається/згортається при клику
//
//function toggleMenu() {
//    let menuBox = document.getElementById('menu-box');
//    if(menuBox.style.display == "block") {
//        menuBox.style.display = "none";
//    }
//    else {
//        menuBox.style.display = "block";
//    }
//}

//- Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вивести список коментарів в документ, кожний в своєму блоці.
//    Додайте кожному коментарю по кнопці для згортання його body.

const comments = [
    {title: 'com1', body: 'lorem1'},
    {title: 'com2', body: 'lorem2'},
    {title: 'com3', body: 'lorem3'},
    {title: 'com4', body: 'lorem4'},
    {title: 'com5', body: 'lorem5'},
]

let ulComments = document.getElementById('comment')

comments.forEach(( value ) => {
    let list = document.createElement("li");
    list.innerHTML = value.title;
    ulComments.appendChild(list);

    let liButton = document.createElement("button")
    liButton.innerText = 'See comments'
    ulComments.appendChild(liButton)

    let buttonFunction = document.createElement('onclick')
    buttonFunction.onclick = ev => toggleMenu2()
    liButton.appendChild(buttonFunction)

    let div = document.createElement('div')
    div.innerHTML = value.body
    ulComments.appendChild(div)

    function toggleMenu2() {
        let menuBox = document.getElementById('comment');
        if (menuBox.style.display == "block") {
            menuBox.style.display = "none";
        } else {
            menuBox.style.display = "block";
        }
    }

})



console.log(ulComments)

//- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//    Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


//- Створити функцію, яка генерує таблицю.
//    Перший аргумент визначає кількість строк.
//    Другий параметр визначає кількість ячейок в кожній строці.
//    Третій параметр визначає елемент в який потрібно таблицю додати.


//- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
























