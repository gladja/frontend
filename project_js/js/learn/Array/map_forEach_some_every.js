Map // -  переберает массив и выполняет над его элементами какие небудь действия, и создает
// при этом новый массив не изменяя предедущий
// Cинтаксис: arr.map(function(item, index, array) {});

// Аргументы:
// item - значение элементов массива.
// index - индекс элемента массива.
// array - весь массив.

// Задачча нужно элементы массива умножить на 2. Сделаем решение двумя способами, по класике и через map 
let a = [2, 3, 4];
let b = [];

for (let i = 0; i < a.length; i++) {
    b[i] = a[i] * 2;
}
console.log(a);
console.log(b);

let a = [2, 3, 4];
let b = a.map(function (x) {
    return x * 2;
});
console.log(a);
console.log(b);

let a = [2, 3, 4];
let b = a.map((x) => x * 2);
console.log(a);
console.log(b);

//Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
let arrayNumber = [1, 2, 3, 4, 5];
let squareNumber = arrayNumber.map(function (item) {
    return item ** 2;
});
console.log(squareNumber);



forEach // - метод выполняет функцию для каждого элемента массива. Результат функции отбрасывается и игнорируетя. Ничего не возвращает.
// Cинтаксис: arr.forEach(function(item, index, array) {});

// Аргументы:
// item - значение элементов массива.
// index - индекс элемента массива.
// array - весь массив.

// Дан массив с числами. Найдите сумму этих чисел.
let arrayNumber = [1, 2, 3, 4, 5];
let sumNumber = 0;

arrayNumber.forEach(item => sumNumber += item);
console.log(sumNumber); // 15


Some / Every // - Эти методы используются для проверки массива.
// Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
// Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr.
// Функция fn вызывается для каждого элемента массива аналогично map. Если какие-либо/все результаты вызовов являются true, то метод возвращает true, иначе false.
// Эти методы ведут себя примерно так же, как операторы || и &&: если fn возвращает истинное значение, arr.some() немедленно возвращает true и останавливает перебор остальных элементов; если fn возвращает ложное значение, arr.every() немедленно возвращает false и также прекращает перебор остальных элементов.
// Cинтаксис: arr.some(function(item, index, array) {});
// Cинтаксис: arr.every(function(item, index, array) {});

// Аргументы:
// item - значение элементов массива.
// index - индекс элемента массива.
// array - весь массив.

//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let arrayNumber = [1, 2, 3, 4, 5];
let num = arrayNumber.every(item => item > 0)
console.log(num);

//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
let arrayNumber = [1, 2, 3, 4, -5];
let num = arrayNumber.some(item => item < 0)
console.log(num);
