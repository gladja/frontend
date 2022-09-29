Spread // - позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
// для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
// для элементов(литералов массива)
// для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше(для объектных литералов)

// Синтаксис
// Для вызовов функций: myFunction(...iterableObj);
// Для литералов массива или строк: [...iterableObj, '4', 'five', 6];
// Для литералов объекта (новое в ECMAScript 2018): let objClone = { ...obj };


let arr = ['Alex', 'Jon', 'Bob'];
let array = [...arr];
console.log(arr); // (3) ['Alex', 'Jon', 'Bob']
console.log(array); // (3) ['Alex', 'Jon', 'Bob']

// Можно складывать массивы 
let arr = ['Alex', 'Jon', 'Bob'];
let arr2 = [1, 11, 2, 45, 6, 0];
let arrNew = [...arr, ...arr2]
console.log(arrNew);

let arr = ['Alex', 'Jon', 'Bob'];
let arr2 = [1, 11, 2, 45, 6, 0];
arr = [...arr, ...arr2];
console.log(arr);

let arr = ['Alex', 'Jon', 'Bob'];
let arr2 = [1, 11, 2, 45, 6, 0];
arr.push(...arr2);
console.log(arr);

// Можно складывать массивы и вставить свое значение
let arr = ['Alex', 'Jon', 'Bob'];
let arr2 = [1, 11, 2, 45, 6, 0];
let arrNew = [...arr, 'true', ...arr2]
console.log(arrNew);

// Если нам нужно вычислить максимальное число массива, нам как раз пригодиться спред
let arr = [1, 11, 2, 45, 6, 0];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 45



Concat // - создает новый массив в который копирует данные из других массивов и дополнительныые 
// значения в конце массива.

let arr = ['Alex', 'Jon', 'Bob'];
let arrNew = arr.concat('gladja');
console.log(arrNew); // (4) ['Alex', 'Jon', 'Bob', 'gladja']

let arr = ['Alex', 'Jon', 'Bob'];
let arr2 = [1, 11, 2, 45, 6, 0];
let arrNew = arr.concat(arr2);
console.log(arrNew); // (9) ['Alex', 'Jon', 'Bob', 1, 11, 2, 45, 6, 0]

let arr = ['Alex', 'Jon', 'Bob'];
let arr2 = [1, 11, 2, 45, 6, 0];
let arrNew = [];
arrNew = arrNew.concat(arr);
console.log(arrNew); // (3) ['Alex', 'Jon', 'Bob']
arrNew = arrNew.concat(arr2);
console.log(arrNew); // (9) ['Alex', 'Jon', 'Bob', 1, 11, 2, 45, 6, 0]



Slice // - создает новый массив, в который копирует часть либо весь массив. Метод slice(start, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива. Если begin и end не указаны, будет создана полная копия исходного массива.
// Если не указан end, копирование будет от start и до конца исходного массива.
// Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.
// Cинтаксис: arr.slice(start, end);

// Аргументы:
// start - начало нового массива.
// end - конец массива.

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']




// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    let sumArray = firstArray.concat(secondArray).slice(0, maxLength);
    console.log(sumArray);
    return sumArray;

    // Change code above this line
}
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);



