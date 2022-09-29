function findLongestWord(string) {
    let arrayNew = string.split(' ');
    // console.log(arrayNew);
    let longestWord = 0;
    for (let i = 0; arrayNew.length > i; i++) {
        // console.log(arrayNew[i].length);
        if (arrayNew[i].length > longestWord) {
            longestWord = arrayNew[i].length;
            // console.log(longestWord);
        }
    }
    console.log(longestWord);
    return longestWord;

    // Change code above this line
}
findLongestWord("The quick brown fox jumped over the lazy dog");