For // - Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
    console.log(planets[i]);
}
// Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
    const fruit = fruits[i]; // Change this line
    console.log(fruit);
}

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
    let total = 0;
    for (let i = 0; order.length > i; i++) {
        total += order[i];
    }
    console.log(total);
    return total;
}
calculateTotalPrice([12, 85, 37, 4]);

//Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
    let arrayNew = string.split(' ');
    // console.log(arrayNew);
    let longestWord = 0;
    const wordsList = [];
    let wordsListStr = '';
    for (let i = 0; arrayNew.length > i; i++) {
        // console.log(arrayNew[i].length);
        if (arrayNew[i].length > longestWord) {
            longestWord = arrayNew[i].length;
            console.log(longestWord);
        }
    }
    for (let i = 0; arrayNew.length > i; i++) {
        if (arrayNew[i].length === longestWord) {
            console.log(arrayNew[i].length);
            wordsList.push(arrayNew[i]);
            wordsListStr = wordsList.join(' ');
        }
    }
    console.log(wordsListStr);
    return wordsListStr;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
// а для чисел, делящихся на 5(но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
const num = 100;
for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


//Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all
// if he was simply to buy and
// sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr){

    const newMinMax = [];

    const minNum = Math.min(...arr);
    // console.log(minNum);

    const maxNum = Math.max(...arr);
    // console.log(maxNum);

    newMinMax.push(minNum, maxNum);
    console.log(newMinMax)
    return newMinMax
}

//or
function minMax(arr){
    // console.log(arr);
    let maxNum = 0;
    let minNum = arr[0];

    for (let i = 0; i < arr.length ; i++) {
        // console.log(arr[i]);
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
        if (arr[i] < minNum) {
            minNum = arr[i];
        }

    }
    console.log(`max: ${maxNum}`);
    console.log(`min: ${minNum}`);

}

minMax([1, 2, 3, 4, 5]); // [1, 5]
minMax([2334454, 5]); // [5, 2334454]
minMax([5]); // [5, 5]