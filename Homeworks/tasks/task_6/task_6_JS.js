//1) Створити масив з 20 чисел та:
//    a) відсортувати його від меншого до більшого.
//    b) відсортувати його від більшого до меншого.
//    c) Відфілтрувати числа які є кратними 3.
//d) Відфілтрувати числа які є більшими за 10.
//e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//f) За допомогою map збільшити кожен елемент в масиві в три рази.
//    g) Порахувати загальну суму всіх елментів у масиві (reduce)
//

let numbers = [1, 5, 12, 36, 4, 98, 114, 73, 9, 0, 867, 300, 66, 123, 543, 823, 8, 55, 53, 16];

//    a) відсортувати його від меншого до більшого.
//
//let num1 = numbers.sort((a, b) => {
//    return a - b
//})

//    b) відсортувати його від більшого до меншого.
//
//let num2 = numbers.sort((a, b) => {
//    return b - a
//})

//    c) Відфілтрувати числа які є кратними 3.
//
//let filterNum3 = numbers.filter(value => {
//    return value % 3 === 0
//})

//d) Відфілтрувати числа які є більшими за 10.
//
//let filterMore10 = numbers.filter(value => {
//    return value > 10
//})

//e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//
//numbers.forEach(value => {
//    document.write(value)
//    document.write(`<br/>`)
//})

//f) За допомогою map збільшити кожен елемент в масиві в три рази.
//
//let mapNum = numbers.map(value => {
//    return  value * 3
//})
//console.log(mapNum)

//    g) Порахувати загальну суму всіх елментів у масиві (reduce)
//
//let reduceNum = numbers.reduce((previousValue, currentValue) => {
//    return previousValue + currentValue
//})
//console.log(reduceNum)



//2) Створити масив з 20 стрічок та:
//    a) Відсортувати його в алфавітному порядку
//b) Відсортувати в зворотньому порядку
//c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//

let array = ['Max', 'cars', 'Computer', 'Alex', 'Yuriy', 'bottle', 'display', 'keys', 'cup', 'smartphone', 'Lilia', 'commission', 'number', 'airport', 'Boeing', 'arrays', 'tea', 'JavaScript', 'Java', 'Python']

//    a) Відсортувати його в алфавітному порядку
//
//let strSort = array.sort()

//b) Відсортувати в зворотньому порядку
//
//let strSort = array.sort((a, b) => {
//    if ( a < b){
//        return 1
//    } else { return -1}
//})

//c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//
//let filterLength = array.filter(value => {
//    return value.length > 4
//})
//console.log(filterLength)

//d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//
//let mapArray = array.map(value => {
//    return (`Sam says ${value}`)
//})
//console.log(mapArray)



//3) Все робити тільки за допомогою методів масивів!
//    Дано масив :
//    const users = [
//        {name: 'vasya', age: 31, isMarried: false},
//        {name: 'petya', age: 30, isMarried: true},
//        {name: 'kolya', age: 29, isMarried: true},
//        {name: 'olya', age: 28, isMarried: false},
//        {name: 'max', age: 30, isMarried: true},
//        {name: 'anya', age: 31, isMarried: false},
//        {name: 'oleg', age: 28, isMarried: false},
//        {name: 'andrey', age: 29, isMarried: true},
//        {name: 'masha', age: 30, isMarried: true},
//        {name: 'olya', age: 31, isMarried: false},
//        {name: 'max', age: 31, isMarried: true}
//    ];
//a) відсортувати його за  віком (зростання , а потім окремо спадання)
//b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//та зберегти це в новий масив (первинний масив залишиться без змін)
//d) відсортувати його за індентифікатором
//e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

//a) відсортувати його за  віком (зростання , а потім окремо спадання)



//b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)



//c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//та зберегти це в новий масив (первинний масив залишиться без змін)



//d) відсортувати його за індентифікатором



//e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)













