Filter // -  похож на find, но в отличии от find он ищет все элементы или переберает весь массив.
// если true - элемент добавляется к результату, и перебор продолжается
// возвращается пустой массив в случае, если ничего не найдено.
// используется для фильтрации массива через функцию.
// Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.
// Cинтаксис: arr.filter(function (item, index, array) {});

// Аргументы:
// item - значение элементов массива.
// index - индекс элемента массива.
// array - весь массив.

let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);

//Дан массив с числами. Оставьте в нем только отрицательные числа.
let arrayNumber = [1, -2, 3, 4, -5];
let num = arrayNumber.filter(item => item < 0);
console.log(num);
//-----------------------------------------------ok

//Дан массив с числами. Оставьте в нем только четные числа.
let arrayNumber = [1, -2, 3, 4, -5];
let num = arrayNumber.filter(item => item % 2 === 0);
console.log(num);
//-----------------------------------------------ok

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arrayString = ['BMW', 'Toyota', 'Bentley', 'CHRYSLER', 'CITROEN', 'Audi'];
let newStr = arrayString.filter(item => item.length > 5);
console.log(newStr);
//-----------------------------------------------ok

//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
let arrayNumber = [1, 2, [3, 4], 5, [6, 7]];
let newArr = arrayNumber.filter(item => item.length > 1);
console.log(newArr);
//-----------------------------------------------ok

//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
let arrayNumber = [1, -2, 3, 4, -5];
let num = arrayNumber.filter(item => item < 0);
console.log(num);
let sumNumber = 0;
num.forEach(item => sumNumber += item);
console.log(sumNumber);