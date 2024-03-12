// Задание 1. 
// Функция для нахождения максимальной разницы между элементами массива
function findMaxDifference(arr) {
    let maxDiff = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const diff = Math.abs(arr[i] - arr[j]); //вычисление разниуы между двумя элементами
            maxDiff = Math.max(maxDiff, diff); //обновление макс. разницы
        }
    }
    
    return maxDiff;
}

//удаление дубликатов в массиве
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.findIndex(obj => obj.id === item.id) === index);
}

//фильтрация объектов по полю idDone равному true
function filterByDone(arr) {
    return arr.filter(obj => obj.idDone === true);
}
const objects = [
    {id: 1, idDone: true},
    {id: 2, idDone: false},
    {id: 3, idDone: true}
];

//вывод
console.log(findMaxDifference([1, 5, 8, 4, 2]));
console.log(removeDuplicates(objects));
console.log(filterByDone(objects));

// Задание 2. 
// Функция для поиска чисел больше заданного числа в массиве
function findNumbersGreaterThan(arr, num) {
    return arr.filter(item => item > num);
}
//функ для выравнивания вложенного массива
function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

// Вывод
console.log(findNumbersGreaterThan([1, 4, 6, 3, 2], 2));
console.log(flattenArray([1, 4, [34, 1, 20], [6, [6, 12, 8], 6]]));

// Задание 3. 
// Функция для подсчета пар элементов сумма которых равна 0
function countZeroSumPairs(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                count++;
            }
        }
    }
    
    return count;
}

//функ для подсчета 3 элементов сумма которых- 0
function countZeroSumTriples(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    count++;
                }
            }
        }
    }
    
    return count;
}

//вывод
console.log(countZeroSumPairs([-7, 12, 4, 6, -4, -12, 0]));
console.log(countZeroSumTriples([-7, 12, 4, 6, -4, -12, 0]));