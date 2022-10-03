Split // - преобразовывает строку в массив по заданному разделителю
//Cинтаксис: str.split(separator, limit);

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

// Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.
function splitMessage(message, delimiter) {
    let words;
    words = message.split(delimiter);
    console.log(words);
    return words;
}
splitMessage("Mango", '');

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
    let arrayStr = message.split(' ');
    console.log(arrayStr.length * pricePerWord);
    return arrayStr.length * pricePerWord;
}
calculateEngravingPrice("JavaScript is in my blood", 10);

// ES6: Как разделить с деструктуризацией массива
// ECMAScript2015 (ES6) представил более инновационный способ извлечения элемента из массива и присвоения его переменной. Этот умный синтаксис известен как Array Destructuring. Мы можем использовать это с split() метод, чтобы легко назначить вывод переменной с меньшим количеством кода.

let nameUser = 'Tapas Adhikary';
let [firstName, lastName] = nameUser.split(' ');
console.log(firstName); //Tapas
console.log(lastName); //Adhikary



Join // - преобразовывает массив в строку с заданным разделителем, в новый массив
// Cинтаксис: arr.join(separator);

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

// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.

function makeStringFromArray(array, delimiter) {
    let string;
    string = array.join(delimiter);
    console.log(string);
    return string;
}
makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");

// Типовые выражения

let strReverse = str.split('').reverse().join(''); // реверс строки
let strChange = str.split('').sort().join(''); // упорядычивает символы строки по алфавиту



// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

function slugify(title) {
    // Change code below this line
    let slug;
    slug = title.
        slug = title.split(' ').join('-').toLowerCase();
    console.log(slug);
    return slug;
}
slugify("Arrays for begginers");
