Split // - преобразовывает строку в массив по заданному разделителю
// синтаксис: str.split(separator, limit);

// Аргументы:
// separator - регулярное выражение или строка, по которой делить str
// limit - максимальное количество кусков, на которые может быть разбита строка, необязателен
// Метод split возвращает новый массив.
// Строка бьется по separator, при разбивании separator пропадает:

let str = 'Alex, Jon, Bob';
let arr = str.split(); // строку сделает массивом с одним элементом 
console.log(arr); // ['Alex, Jon, Bob']

let str = 'Alex, Jon, Bob';
let arr = str.split(','); // находит это знанение делит на элементы массива 
console.log(arr); // (3) ['Alex', ' Jon', ' Bob']

let str = 'Alex, Jon, Bob';
let arr = str.split(' '); // пробел похож с запятой, но имена без пробелов
console.log(arr); // (3) ['Alex,', 'Jon,', 'Bob']

let str = 'Alex, Jon, Bob';
let arr = str.split(''); // так как ни что неуказано то каждый символ сделает элементом масссива 
console.log(arr); // (14) ['A', 'l', 'e', 'x', ',', ' ', 'J', 'o', 'n', ',', ' ', 'B', 'o', 'b']

let str = 'Alex, Jon, Bob';
let arr = str.split('.'); // пробел похож с запятой 
console.log(arr); // (3) ['Alex,', 'Jon,', 'Bob']

let str = 'Alex, Jon, Bob';
let arr = str.split(',', 2); // 2 указывает что два куска  
console.log(arr); // (2) ['Alex', ' Jon']

let ip = '192.168.1.0';
let b = ip.split('.'); // так как в стороке есть токи то делим по этому символи
console.log(b); // (4) ['192', '168', '1', '0']

let c = '|a|b|c|'.split('|');
console.log(c); // (5) ['', 'a', 'b', 'c', '']

// Как разделить с помощью регулярного выражения
// Мы также можем передать регулярное выражение (regex) в качестве разделителя /
// разделителя в split() метод. Давайте рассмотрим эту строку для разделения:

let message = 'The sky is blue. Grass is green! Do you know the color of the Cloud?';
let sent = message.split(/[.,!,?]/);
console.log(sent); // (4) ['The sky is blue', ' Grass is green', ' Do you know the color of the Cloud', '']

// ES6: Как разделить с деструктуризацией массива
// ECMAScript2015 (ES6) представил более инновационный способ извлечения элемента из массива и присвоения его переменной. Этот умный синтаксис известен как Array Destructuring. Мы можем использовать это с split() метод, чтобы легко назначить вывод переменной с меньшим количеством кода.

let name = 'Tapas Adhikary';
let [firstName, lastName] = name.split(' ');
console.log(firstName); //Tapas
console.log(lastName); //Adhikary




Join // - преобразовывает массив в строку с заданным разделителем
// синтаксис: arr.join(separator);

// Аргумент:
// separator - этот параметр является опциональным и позволяет указать разделитель, который будет использован при объединении элементов в строковом значении.

let arr = ['Alex', 'Jon', 'Bob'];
let str = arr.join(','); // каждое слово будет через запятую
console.log(str); // Alex,Jon,Bob

let arr = ['Alex', 'Jon', 'Bob'];
let str = arr.join(' ');
console.log(str); // Alex Jon Bob

let arr = ['Alex', 'Jon', 'Bob'];
let str = arr.join(, .');
console.log(str); // Alex, .Jon, .Bob

let arr = ['Alex', 'Jon', 'Bob'];
let str = arr.join(''); // бует слитно
console.log(str); // AlexJonBob

let arr = ['Alex', 'Jon', 'Bob'];
let str = arr.join(); // по умолчанию будет запятая
console.log(str); // Alex,Jon,Bob

let arr = ['Alex', 'Jon', 'Bob'];
let str = arr.join(' and '); // между строк будет and
console.log(str); // Alex and Jon and Bob

let arr = [undefined, false, 1, 2, 3, null, NaN, true];
let str = arr.join(); // null и undefined преобразованы в пустую строку
console.log(str); //  ,false,1,2,3,,NaN,true

// Соединение элементов массивоподобного объекта
// В следующем примере соединяется массивоподобный объект (в данном случае список аргументов функции) с использованием вызова Function.prototype.call для Array.prototype.join.

function f(a, b, c) {
    var s = Array.prototype.join.call(arguments);
    console.log(s); // '1,a,true'
}
f(1, 'a', true);

// Типовые выражения

let strReverse = str.split('').reverse().join(''); // реверс строки
let strChange = str.split('').sort().join(''); // упорядычивает символы строки по алфавиту



