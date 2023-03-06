// Напишите функцию, которая принимает две строки: string1 и string2, а возвращает "yes", если вторая строка является
// анаграммой первой, и "no", если нет.Одна строка является анаграммой другой строки, если из первой можно получить
// вторую путём перестановки символов.
// Пример входных параметров #1
// string1 = "one"
// string2 = "two"
// Ожидается на выходе
// "no"
// Пример входных параметров #2
// string1 = "school master"
// string2 = "the classroom"
// Ожидается на выходе
// "yes"

function Anagram(string1, string2) {
  console.log(string1.split("").sort().join(""));
  console.log(string2.split("").sort().join(""));
  function stringChange(str) {
    return str.split("").sort().join("");
  }
  return stringChange(string1) === stringChange(string2) ? "yes" : "no";
}
Anagram("school master", "the classroom");
Anagram("one", "two");

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of
// the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or
// there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  let newDNA = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      newDNA += "T";
    } else if (dna[i] === "T") {
      newDNA += "A";
    } else if (dna[i] === "G") {
      newDNA += "C";
    } else if (dna[i] === "C") {
      newDNA += "G";
    }
    console.log(newDNA);
  }
  return newDNA;
}
DNAStrand("ATTGC");
//or
function DNAStrand(dna) {
  const table = {
    C: "G",
    G: "C",
    A: "T",
    T: "A",
  };
  return dna
    .split("")
    .map(function (cv) {
      return table[cv];
    })
    .join("");
}
DNAStrand("ATTGC");
//-----------------------------------------------ok

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
  const stringRevers = str.split("").reverse().join("");
  const wordRevers = stringRevers.split(" ").reverse().join(" ");
  console.log(wordRevers);
  return wordRevers;
}
reverseWords("The quick brown fox jumps over the lazy dog.");




// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
//     solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending){
  let newReversEnd = ending.split('').reverse().join('')
  let newReversStr = str.split('').reverse().slice(0, newReversEnd.length).join('')
  console.log(newReversStr)
  console.log(newReversEnd)
  return (newReversStr === newReversEnd) ? true : false;

}

//or

function solution(str, ending){
  return str.endsWith(ending);
}
solution('abcde', 'cde')
solution('samurai', 'ai')




// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in
// descending order. Essentially, rearrange the digits to create the highest possible number.
//     Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321

function descendingOrder(n){
  let arrNew = String(n)
  console.log(arrNew)
  let numNew = Number(arrNew.split('').sort((a, b) => b -a).join(''))
  console.log(numNew)
  return numNew
}
descendingOrder(123456789) // 987654321
descendingOrder(1021) // 2110
descendingOrder(0)
descendingOrder(1)