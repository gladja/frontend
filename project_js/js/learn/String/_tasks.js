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
    console.log(string1.split('').sort().join(''));
    console.log(string2.split('').sort().join(''));
    function stringChange(str) {
        return str.split('').sort().join('');
    }
    return stringChange(string1) === stringChange(string2) ? 'yes' : 'no';
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

function DNAStrand(dna){
    let newDNA ='';
    for( let i = 0; i < dna.length; i++) {
        if(dna[i] === 'A') {
            newDNA += 'T';
        } else if  (dna[i] === 'T') {
            newDNA += 'A';
        } else if (dna[i] === 'G') {
            newDNA += 'C';
        } else if (dna[i] === 'C') {
            newDNA += 'G';
        }
        console.log(newDNA);
    }
    return newDNA;
}
DNAStrand("ATTGC");
//or
function DNAStrand(dna){
    const table = {
        C : 'G',
        G : 'C',
        A : 'T',
        T : 'A'
    };
    return dna.split('').map(function(cv) {
        return table[cv];
    }).join('');
}
DNAStrand("ATTGC");
//-----------------------------------------------ok