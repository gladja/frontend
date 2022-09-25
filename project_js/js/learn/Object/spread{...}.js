Spread // - позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
// для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
// для элементов(литералов массива)
// для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше(для объектных литералов)

// Синтаксис
// Для вызовов функций: myFunction(...iterableObj);
// Для литералов массива или строк: [...iterableObj, '4', 'five', 6];
// Для литералов объекта (новое в ECMAScript 2018): let objClone = { ...obj };


let obj = {
    name: 'Alex',
    age: 30,
    nick: 'Bob'
};

let obj2 = {
    nameLast: 'gladja',
    city: 'Cherkay'

};
let object = { ...obj, ...obj2 };
console.log(obj); // {name: 'Alex', age: 30, nic: 'Bob'}
console.log(object); // {name: 'Alex', age: 30, nic: 'Bob'}