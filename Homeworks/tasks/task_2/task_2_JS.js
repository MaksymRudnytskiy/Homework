////--створити масив та вивести його в консоль:
////- з 5 числових значень
////- з 5 стічкових значень
////- з 5 значень стрічкового, числового та булевого типу
//
//let block1 = [3, 7, 11, 87, 998];
//console.log(block1);
//
//let block2 = ['Max', 'Taras', 'laptop', 'car', 'Oksana'];
//console.log(block2);
//
//const block3 = ['computer', 'chair', 56, true, 9];
//console.log(block3);
//
////-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//let emptyBlock = [];
//
//emptyBlock[3] = 11;
//console.log(emptyBlock);
//
//emptyBlock[0] = 'max';
//console.log(emptyBlock);
//
//emptyBlock[4] = true;
//console.log(emptyBlock);
//
//emptyBlock[1] = 'table';
//console.log(emptyBlock);
//
//emptyBlock[2] = 946;
//console.log(emptyBlock)
//
////- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
//for (let i = 0; i < 10; i++) {
//    document.write('<div>lorem</div>')
//}
//
////- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
//for (let i = 0; i < 10; i++) {
//    document.write(`<div>${i} ${'indexTest'}</div>`)
//}
//
////- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
//let k = 0;
//while (k < 20) {
//    document.write('<h1>whileTest</h1>');
//    k++
//}
//
////- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
//let l = 0;
//while (l < 20) {
//    document.write(`<h1>${l} ${'indexWhile'}</h1>`);
//    l++
//}
//
//Part_2

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let cycle_1 = [3, 90, 48, 24, 5, 17, 999, 123, 879, 1247];

for (let i = 0; i < cycle_1.length; i++) {
    console.log(cycle_1[i]);
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let cycle_2 = ['Anna', 'Max', 'Sophia', 'Vova', 'Sasha', 'Ivan', 'Paul', 'Veronika', 'Alina', 'Maria'];

let k = 0;
while (k < 10) {
    console.log(cycle_2[k]);
    k++
}


