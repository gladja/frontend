const obj = {
    viktor: ['apple', 'grape', 'orange', 'apple', 'banana'],
    kate: ['grape', 'orange', 'apple', 'grape', 'banana'],
};

function calc() {

    const { viktor } = obj;
    // console.log(viktor);
    const vi = {}
    for (let v of viktor) {
        vi[v] = (vi[v] || 0) + 1
    }
    console.log(vi)

    const { kate } = obj;
    // console.log(kate);
    const ka = {}
    for (let k of kate) {
        ka[k] = (ka[k] || 0) + 1
    }
    console.log(ka)


    }


console.log(calc());
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