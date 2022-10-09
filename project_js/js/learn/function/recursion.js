// Функция рекурсия // - это когда функция вызввает сама себя

// Пример:
let t = 0;
function f1() {
    t++;
    console.log(t);
    f1(); // бесконечный вызов
}
f1();

// Пример:

let t = 0;
function f1() {
    t++;
    console.log(t);
    if (t === 30) return;
    f1(); // мы ограничили 30 циклами
}
f1();

// Рекурсия является аналогом цикла. Большую часть задач, которая решается с помощью рекурсии
// можно решить через циклы, и это будет проще и наглядней, но есть задачи которые решаются
// только при помощи рекурсии.

// Решим выше задачу при помощи циклов.
function f2() {
    let out = '';
    for(let i = 1; i <= 30; i++) {
        out += i + ' ';
    }
    console.log(out); // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
}
f2();

// Теперь рекурсией
let i = 0;
let out = '';
function f3() {
    i++;
    out += i + ' ';
    if(i >= 30) return;
    f3();
}
f3();
console.log(out); // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30

// Пример когда рекурсией прописать решение проще чем через цикл.
function randomInteger(min, max) {
    // случайное число лт min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let s1 = 0;
function moneyRecursion() {
    let m = randomInteger(0,100);
    console.log('add: ' + m);
    s1 +=m;
    console.log('sum: ' +  s1);
    if (s1 > 300) return;
    moneyRecursion();
}
moneyRecursion();

// Пропишем через циклы
function randomInteger(min, max) {
    // случайное число лт min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function moneyCycle() {
    let s2 = 0;
    for(let i = 0; true; i++);
    let m = randomInteger(0,100);
    console.log('add: ' + m);
    s2 += m;
    console.log('sum: ' +  s2);
    if (s2 >= 300) return;
}
moneyCycle();