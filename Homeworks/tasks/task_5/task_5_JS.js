//Реалізовуємо свій компютерний магазин.
//===
//Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//    Оперативна память.
//    Потужність процесора. (цифра від 0 до 1000)
//Назва.
//    В кожного компютера має бути метод включання.

class Pc {
    constructor( ram, cpu, name ) {
        this.ram = ram;
        this.cpu = 9700;
        this.name = name
    }

    activate() {
        let pcOn = confirm('Turn on the PC?');
        if (pcOn === true) {
            console.log('Activated')
        } else if (pcOn === false) {
            alert('Not active')
        }
    }
}

let newPc = new Pc('HyperX', null, 'Asus');

newPc.activate()

console.log(newPc)

//===
//Від базового компютрера треба реалізувати ноутбук.
//    Він має нову властивість дюймаж монітора.
//
//    У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends Pc {
    constructor( ram, cpu, name, monitorInches ) {
        super(ram, cpu, name);
        this.monitorInches = monitorInches;
    }

    battery() {
        let power = this.cpu / (this.ram * this.monitorInches);
        console.log(power)
    }
}

let newLaptop = new Laptop(4, null, 'Alien', 23.6)

newLaptop.battery()

console.log(newLaptop)

//===
//Від ноутбука потрібно зробити ультрабук.
//    Він має нову змінну ваги.
//    При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class UltraLaptop extends Laptop {
    constructor( ram, cpu, name, monitorInches) {
        super(ram, cpu, name, monitorInches);
    }

    weightError() {
        let error = prompt("'What's the laptop weight?'")
        if (error <= 2) {
            alert('The battery will last more than 4 Hours')
        } else if (error > 2) {
            alert('The battery will not last more than 4 Hours')
        } else {
            alert('What??')
        }
    }
}

let newUltraLaptop = new UltraLaptop(8, null, 'Alien2',16);

newUltraLaptop.weightError()

console.log(newUltraLaptop)


//===
//Від базвого класу потрібно створити базовий ПК.
//    В нього має бути новий метод запуску ігор.
//    Кількість FPS визначається як потужність / опервтивку.
//    Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class GamingPc extends Pc {
    constructor(ram, cpu, name, game) {
        super(ram, cpu, name);
        this.game = game;
        this.fps = this.cpu / this.ram
    }
    launchGame(){
        let launcher = confirm('Start the GAME?')
        if (launcher === true){
            document.write(`<div><h1>Bomb Has Been Planted</h1></div>`)
        } else {
            document.write(`<div><h1>Reloading</h1></div>`)
        }
    }
    activation(){
        alert(`You are playing ${this.game} with ${this.fps} FSP`)
    }
}

let newGamingPc = new GamingPc(16, 14000, 'Ultra', 'Counter-Strike')

newGamingPc.launchGame()
newGamingPc.activation()

console.log(newGamingPc)



//
//Компютер можна апгрейдити.
//    Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//    Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//    Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
//===
//Від базового ПК необхідно зробити ігнорий ПК.
//    Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//    При запуску однієї гри потужніть процесора має падати на 0.1%.
//Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//    що на цьому відрі ігри не запускаються.



