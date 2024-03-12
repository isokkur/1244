// Задание 1. Работа с переменными
let admin;
let name = "Джон";
admin = name;
alert(admin);

// Задание 2. Исправьте сложение
let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); // Результат должен быть 3

// Задание 3. Выведите чётные числа
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Задание 4. Замените for на while
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

// Задание 5. Повторять цикл, пока ввод неверен
let number;
do {
    number = prompt("Введите число больше 100", "");
} while (number <= 100 && number !== null);

// Задание 6. Простые числа
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
    }
    console.log(i);
}