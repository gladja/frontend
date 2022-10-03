Sort //- сортирует массив на месте, меняя в нём порядок элементов.
// синтаксис: sort(function() {});

// Аргументы:
// function - мы передаем функцию для нужной нам сортировкки, если значение агрмента будет без
// значения, сотритовка будет произведенна по строччному порядку.

let arr = ['Alex', 'Jon', 'Bob'];
console.log(arr.sort()); // (3) ['Alex', 'Bob', 'Jon']

let arr = [1, 11, 2, 45, 6, 0];
console.log(arr.sort()); // (6) [0, 1, 11, 2, 45, 6] как видим без задание функции сортировка не такая 
//как нам нужно.

//Сделаем сортировку чилес с задание функции в аргументе.let arr = [1, 11, 2, 45, 6, 0];
let arr = [1, 11, 2, 45, 6, 0];
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr); // (6) [0, 1, 2, 6, 11, 45] сотрировка произошла по возрастанию

let arr = [1, 11, 2, 45, 6, 0];
arr.sort((a, b) => a - b); //стрелочная функци
console.log(arr); // (6) [0, 1, 2, 6, 11, 45] сотрировка произошла по возрастанию

let arr = [1, 11, 2, 45, 6, 0];
arr.sort((a, b) => b - a); //стрелочная функци
console.log(arr); // (6) [45, 11, 6, 2, 1, 0] сотрировка произошла по убыванию

//Spread массива {...}
let arr = [1, 11, 2, 45, 6, 0];
let array = [...arr].sort((a, b) => b - a); //стрелочная функци
console.log(arr); // без изменений так как мы использовали спред или высыпание
console.log(array); // (6) [45, 11, 6, 2, 1, 0]

//Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
    const arrayNew = string.split(' ');
    // console.log(arrayNew);
    arrayNew.sort((a, b) => {
        return b.length - a.length;
    });
    console.log(arrayNew[0]);
}
findLongestWord("The quick brown fox jumped over  the lazy dog");



Revers // - меняет порядок элементовв в массиве на обратный
// синтаксис: revers();

let arr = ['Alex', 'Jon', 'Bob'];
console.log(arr.reverse()); // (3) ['Bob', 'Jon', 'Alex']

// создадим новый массив и сделаем реверс его
let arr = ['Alex', 'Jon', 'Bob'];
let newArr = arr.concat().reverse();
console.log(arr);
console.log(newArr);