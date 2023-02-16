String.prototype.toJadenCase = function () {
    // str.toJadenCase()
};
let str = "How can mirrors be real if our eyes aren't real";
let words = str.split(' ');
let newStr = '';
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    newStr = words.join(' ');
}
// return words.join(' ');
    console.log(newStr)


//     test = str.toLowerCase().split(' ')
//     console.log(test)
//
//
// for (let i = 0; i < test.length; i++) {
//     console.log(test[i])
//     test[i] = test[i][0].toUpperCase()+ test[i].substring(1)


// }
// console.log(test.join(' '))
