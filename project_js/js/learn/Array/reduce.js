function findLongestWord(string) {
    const arrayNew = string.split(' ');
    const longestWord = arrayNew.reduce(function (sum, item) {
        if (item.length > sum.length) {
            return item;
        } else {
            return sum;
        }
    });
    console.log(longestWord);
}
findLongestWord("The quick brown fox jumped over  the lazy dog");