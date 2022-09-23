// Напишите функцию, которая принимает две строки: string1 и string2, а возвращает "yes", если вторая строка является анаграммой первой, и "no", если нет.Одна строка является анаграммой другой строки, если из первой можно получить вторую путём перестановки символов.
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