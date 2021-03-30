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
//
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
//let cycle_1 = [3, 90, 48, 24, 5, 17, 999, 123, 879, 1247];
//
//for (let i = 0; i < cycle_1.length; i++) {
//    console.log(cycle_1[i]);
//}
//
////- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
//let cycle_2 = ['Anna', 'Max', 'Sophia', 'Vova', 'Sasha', 'Ivan', 'Paul', 'Veronika', 'Alina', 'Maria'];
//
//let k = 0;
//while (k < 10) {
//    console.log(cycle_2[k]);
//    k++
//}
//
////- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
//let cycle_3 = [3, 90, 48, 24, 'Anna', 'Max', 'Sophia', 'Vova', true, false];
//
//for (let l = 0; l < cycle_3.length; l++) {
//    console.log(cycle_3[l]);
//}
//
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
//let mass_1 = [999, 123, true, 879, 1247, 'Veronika', 'Alina', false, 'Maria', 'Anna'];
//
//for (let i = 0; i < mass_1.length; i++) {
//    if (typeof (mass_1[i]) === "boolean") {
//        console.log(mass_1[i])
//    }
//}
//
//for (let i = 0; i < mass_1.length; i++) {
//    if (typeof (mass_1[i]) === "number") {
//        console.log(mass_1[i])
//    }
//}
//
//for (let i = 0; i < mass_1.length; i++) {
//    if (typeof (mass_1[i]) === "string") {
//        console.log(mass_1[i])
//    }
//}
//
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
//let empty_2 = [];
//
//empty_2[3] = 11;
//empty_2[0] = 'Max';
//empty_2[4] = true;
//empty_2[1] = 'table';
//empty_2[2] = 946;
//empty_2[9] = 111;
//empty_2[5] = 'Alina';
//empty_2[8] = false;
//empty_2[6] = 'TV';
//empty_2[7] = 1865;
//
//for (let l = 0; l < empty_2.length; l++) {
//    console.log(empty_2[l])
//}
//
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
//for (let i = 0; i < 10; i++) {
//    console.log(i);
//    document.write(i)
//}
//
////- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
//for (let k = 0; k < 100; k++) {
//    console.log(k);
//    document.write(`<div>${k}</div>`)
//}
//
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
//for (let l = 0; l < 200; l=l+2) {
//    console.log(l);
//    document.write(`<ul><li>${l}</li></ul>`)
//}
//
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
//for (let i = 0; i < 100; i++) {
//    if (i % 2 === 0) {
//        console.log(i);
//        document.write(`<ul><li>${i}</li></ul>`)
//    }
//}
//
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//for (let i = 0; i < 100; i++) {
//    if ((i % 2)  !==0) {
//        console.log(i);
//        document.write(`<div>${i}</div>`)
//    }
//}
//
//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
//- Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
for (let hour = 0; hour < 24; hour++) {

    for (let min = 0; min < 60; min++) {

        for (let sec = 0; sec < 60; sec++) {

            console.log(`${hour}:${min}:${sec}`);
            document.write(`<div>${hour}:${min}:${sec}</div>`);

            if (hour === 1 && min ===1 && sec === 23) {
                hour = 24;
                min = 60;
                break;
            }
        }
    }
}
