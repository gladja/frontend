// Что такое функция высшего порядка и что такое колбэк, он же функция обратного вызова. Разбираемся на простых примерах и пытаемся ухватить саму идею.
// Колбэки - это функции, которые передаются другим функциям или методам в качестве аргумента.
// Функции высшего порядка - это функции, которые либо принимают другую функцию в качестве аргумента, либо возвращают новую функцию в результате вызова.


// Напишим функцию котороая не получает параметр, а просто решает поставлению задачу.
function twoSquared() {
    return 2 * 2;
}
twoSquared();

function threeSquared() {
    return 3 * 3;
}
twoSquared();

// Упростим и напишим функцию которая будет получать параметры, и так образм упростим упростим и сократим код.
function numSquared(num) {
    console.log(num * num);
    return num * num;
}
numSquared();

// Создадим функцию которая будет работать с массивами. Принимать массив ччисле и возводить их в квадрат.
function copyArrayAndSquareNums(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] ** 2); // arr[i] * arr[i]
    }
    return output;
}
const num = [1, 2, 4, 5];
const result = copyArrayAndSquareNums(num);
console.log(result);
// Но нам нужно создать такую же функциу только она должна не возводить степеь а делить на 2.
function copyArrayAndDeilivedByTwo(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] / 2);
    }
    return output;
}
const num = [1, 2, 4, 5];
const result = copyArrayAndDeilivedByTwo(num);
console.log(result);
// У этих 2 функций есть только 2 отличающиеся части (arr[i] ** 2) и ( arr[i] / 2). Посути у нас отличчаются только сами
// операции. Мы можем в параметры передать другую функцию которая будет выполнять наши операции. Пример:
function copyArrayAndDoSmth(arr, instructions) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(instructions(arr[i]));
    }
    return output;
}
function numSquared(num) {
    return num * num;
}
function dilivedBy2(num) {
    return num / 2;
}
const result = copyArrayAndDoSmth([1, 2, 4, 5], numSquared);
console.log(result);
const result2 = copyArrayAndDoSmth([1, 2, 4, 5], dilivedBy2);
console.log(result2);