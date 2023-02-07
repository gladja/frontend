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



// The accounting department turned to the IT department with a request to help with the
//   financial report on the work of teams on the vendor side. It is known that the teams consist of
// a different number of specialists in different categories. It is also known that each category of
// specialists has its own fixed salary after taxes and this tax rate. Accounting must calculate
// the cost of the services for each specialty and the entire team. Your team leader has
// prepared a function template that will perform the task. You need to implement this function.
// Please note that some important hints are described in the comments to the code examples.
//     See details below

//where salaries is an object with more information about salaries and taxes by specialist
// categories; minimum specializations amount is 1, maximum up to 10; see template below

//where team is an array of objects represented by member of the team with name and
// specialization; minimal team size is 1, maximum up to 100; see template below

    const salaries1 = {
        Manager: { salary: 1000, tax: "10%" },
        Designer: { salary: 600, tax: "30%" },
        Artist: { salary: 1500, tax: "15%" },
    };
    const team1 = [
        { name: "Misha", specialization: "Manager" },
        { name: "Max", specialization: "Designer" },
        { name: "Vova", specialization: "Designer" },
        { name: "Leo", specialization: "Artist" },
    ];

    const financeReport1 = function calculateTeamFinanceReport(salaries1, team1) {

    };

    const teamSum = {};
    const specialization = team1.map((item, idx) => item.specialization);
// teamSum = specialization.filter((item. idx))
    console.log(specialization);

    for (let spec of specialization) {
        teamSum[spec] = (teamSum[spec] || 0) + 1;
    }
    console.log(teamSum);

// for (let [k, v] of Object.entries(salaries1)) {
//   // console.log(k, v.salary)
//   const totalBudgetManager = parseInt((v.salary / (100 - Number.parseInt(v.tax))) * 100);
//   console.log(totalBudgetManager);
// }

    let totalBudgetManager = parseInt((salaries1.Manager.salary / (100 - Number.parseInt(salaries1.Manager.tax))) * 100);
    totalBudgetManager *= teamSum.Manager;
    console.log(`totalBudgetManager: ${totalBudgetManager}`);

    let totalBudgetDesigner = parseInt((salaries1.Designer.salary / (100 - Number.parseInt(salaries1.Designer.tax))) * 100);
    totalBudgetDesigner *= teamSum.Designer;
    console.log(`totalBudgetDesigner: ${totalBudgetDesigner}`);

    let totalBudgetArtist = parseInt((salaries1.Artist.salary / (100 - Number.parseInt(salaries1.Artist.tax))) * 100);
    totalBudgetArtist *= teamSum.Artist;
    console.log(`totalBudgetArtist: ${totalBudgetArtist}`);

    const totalBudgetTeam = totalBudgetManager + totalBudgetDesigner + totalBudgetArtist;
    console.log(totalBudgetTeam);


    console.log(JSON.stringify(financeReport1));
//-----------------------------------------------ok



    // return ...
//     console.log(calc());
//result of calc method should be equal to
// {
// viktor: {
//         apple: 2,
//         grape: 1,
//         orange: 1,
//         banana: 1,
//         },
//   kate: {
//         apple: 1,
//         grape: 2,
//         orange: 1,
//         banana: 1,
//         }.
//}
// 3anpeщeнo обpaщаться Ha npямую  obj.viktor и obj.kate

    const obj = {
        viktor: ["apple", "grape", "orange", "apple", "banana"],
        kate: ["grape", "orange", "apple", "grape", "banana"],
    };

    function calc() {
        const { viktor } = obj;  // диструкторизация обьекта еще можно его переименовать { viktor: vkito }
        // console.log(viktor);
        const vi = {};
        for (let v of viktor) {
            vi[v] = (vi[v] || 0) + 1;
        }
        // console.log(vi);

        const { kate } = obj;
        // console.log(kate);
        const ka = {};
        for (let k of kate) {
            ka[k] = (ka[k] || 0) + 1;
        }
        // console.log(ka);

        obj.viktor = vi;
        obj.kate = ka;

        return obj;
    }
    console.log(calc());
//-----------------------------------------------ok