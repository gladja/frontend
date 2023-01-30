let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"



Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения.Например, имя свойства может храниться в переменной:

let key = "likes birds";

// то же самое, что и user["likes birds"] = true;
user[key] = true;

const person = {
    name: 'alex',
    id: 10,
    age: 24,
    lastName: 'ivan',
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


Object.freeze();
Object.seal();