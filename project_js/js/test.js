
//Получите из объекта obj значение id в констанду id не используя выражение obj.id

const obj = {
    id: 5,
    token: 12343423
};

let key;
obj.key = 'user';
console.log(obj);

const { id } = obj; // как это работает
console.log(id);

// Получите из объекта obj значение id и разместите его в константу userId.

let userId = obj.id;
console.log(userId);






// 2 && 1 && null && 0 && undefined
// null

// let str = "Hello";
// str.something = 5;
// alert(str.something); 
// undefined