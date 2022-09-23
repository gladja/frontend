// У нас есть следующий объект:
let user = {
    name: "John",
    age: 30
};
// Проверьте, что этот объект не пустой и что в нем есть ключ age.
if (user.age) {
    console.log('yes');
} else {
    console.log('no');
}
console.log(user.age);
//-----------------------------------------------ok



// Имеется массив объектов:
function name(params) {
    let user = [
        {
            name: "John",
            age: 30
        },
        {
            name: "Bob",
            age: 21
        },
        {
            name: "Anna",
            age: 19
        }
    ]
}
// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.
function nameСheck(nameFirst) {
    for (let i = 0; i < user.length; i++) {
        // console.log(user[i].name);
        let strName = '';
        if (user[i].name == nameFirst) {
            strName = user[i].name;
            console.log(strName);
            return strName;
        } else {
            console.log('err');
        }
    }

    nameСheck('Bob');

    // Удалите из массива объектов (задание 2) объект с name == "Anna".
    delete user[2].name;
    console.log(user);

Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.
    //-----------------------------------------------no



    //Получите из объекта obj значение id в констанду id не используя выражение obj.id
    const obj = {
        id: 5,
        token: 12343423
    };

    let key = 1;

    obj.key = 2;
    console.log(obj);

    const { id } = obj; // как это работает
    console.log(id);

    // Получите из объекта obj значение id и разместите его в константу userId.

    let userId = obj.id;
    console.log(userId);
//-----------------------------------------------ok