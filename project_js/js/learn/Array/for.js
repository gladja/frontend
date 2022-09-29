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