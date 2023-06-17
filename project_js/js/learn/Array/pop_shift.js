// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd,
// return the middle character. If the word's length is even, return the middle 2 characters.
//
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"


function getMiddle(s) {
    let str = s.split('')
    console.log(str)
    // console.log(s.slice(1,3))
    while ( str.length > 2) {
        str.pop()
        str.shift()
    }
    console.log(str.join(''))
    return str.join('')
}
getMiddle("test")
getMiddle("testing")