//1) створити функцію яка приймає масив та виводить його
//
//let arr = [1, 65, 'Max', true, 345];
//
//function arrFunction(user = 'NO') {
//    document.write(user);
//    document.write('<br>')
//}
//
//arrFunction(arr);
//arrFunction();

//2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
//
//let arr = [1, 65, 'Max', true, 345];
//
//const newArr = [11, 22, 33, 44, 55]
//
//function arrFunction(user = 'NO') {
//    for (let arr1 of newArr) {
//        arr.push(arr1)
//    }
//}
//
//arrFunction(arr);

//3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
//function returnmin(a,b,c) {
//    let min;
//    if (a <= b && a <= c) min=a;
//    if (b <= a && b <= c) min=b;
//    if (c <= a && c <= b) min=c;
//    return min;
//}
//let min = returnmin(5,6,7);
//console.log(min);

////4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
//function returnmax(a,b,c) {
//    let max;
//    if (a >= b && a >= c) max=a;
//    if (b >= a && b >= c) max=b;
//    if (c >= a && c >= b) max=c;
//    return max;
//}
//let max = returnmax(5,6,7);
//console.log(max);

//5) створити функцію яка повертає найбільше число з масиву
//
//function returnmax(a,b,c) {
//    let max;
//    if (a >= b && a >= c) max=a;
//    if (b >= a && b >= c) max=b;
//    if (c >= a && c >= b) max=c;
//    return max;
//}
//let max = returnmax(5,6,7);
//
//const arr = []
//
//const maxReturn = arr.push(max)
//
//console.log(arr);

//6) створити функцію яка повертає найменьше число з масиву
//
//function returnmin(a,b,c) {
//    let min;
//    if (a <= b && a <= c) min=a;
//    if (b <= a && b <= c) min=b;
//    if (c <= a && c <= b) min=c;
//    return min;
//}
//let min = returnmin(5,6,7);
//
//const arr2 = []
//
//const minReturn = arr2.push(min)
//
//console.log(arr2);

//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//
//const arrNum = [33, 23, 12, 543, 219];
//
//function returnArr() {
//    let sum = 0;
//    for (let i = 0; i < arrNum.length; i++) {
//        sum += arrNum[i];
//
//    }
//    return sum;
//}
//
//let sum = returnArr()
//
//console.log(sum);

//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
//const arrNum2 = [33, 23, 12, 543, 219];
//
//function returnArr2() {
//    let sum = 0;
//    for (let i = 0; i < arrNum2.length; i++) {
//        sum += arrNum2[i];
//    }
//    let arrNum2Content = arrNum2.length;
//    let average = sum / arrNum2Content;
//
//    return average;
//}
//
//let sum2 = returnArr2()
//
//console.log(sum2);

//9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//const mixArr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
//function arrKey() {
//    const arr2 = [];
//    for (let item of mixArr) {
//        for (let key in item) {
//            arr2.push(key);
//        }
//    }
//    return arr2;
//}
//
//let arr = arrKey()
//console.log(arr)

//10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
//const mixArr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
//function arrValue() {
//    const arr2 = [];
//    for (let item of mixArr) {
//        for (let values in item) {
//            arr2.push(values);
//        }
//    }
//    return arr2;
//}
//
//let arr = arrValue()
//console.log(arr)

//11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//    EXAMPLE:
//[1,2,3,4]
//    [2,3,4,5]
//результат
//    [3,5,7,9]

const arr1 = [1,2,3,4];

const arr2 = [2,3,4,5];

function sumArr () {
    let sumArr3 = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let l = 0; l < arr2.length; l++) {
        sumArr3 += arr1[i] + arr2[l];
        }
    }
    return sumArr3
}
let sumArr3 = sumArr()

const arr3 = []

const pushArr3 = arr3.push(sumArr3)

console.log(arr3);
