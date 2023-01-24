Map // -  переберет массив и выполняет над его элементами какие не будь действия, и создает
// при этом новый массив не изменяя предедущий
// Cинтаксис: arr.map(function(item, index, array) {});

// Аргументы:
// item - значение элементов массива.
// index - индекс элемента массива.
// array - весь массив.

//[1, 1, 1, 1, 1,].map(...)

// Задачча нужно элементы массива умножить на 2. Сделаем решение двумя способами, по классике и через map
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


// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent
// the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop
// (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
var number = function(busStops){
    let sum = 0
    const sunBusStop = busStops.map(item => sum += (item[0]-item[1]));
    // sunBusStop.map((item ,idx) =>  sum += item);
    console.log(sunBusStop);
    console.log(sum);
    return sum;
};
number([[10,0],[3,5],[5,8]]); //5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]); //17


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
