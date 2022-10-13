// function isPrime(num) {
//   // console.log(num);
//   for (let i = 2; i < num; i++) {
//  
//     if (num % i === 0) {
//     // console.log(num);
//     return 'true';
//   }
// }
//   return 'false';
// }


// 1. isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(num) {
  let memory = true;

  if (num > 1) {
    for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {

      if (num % i === 0) {
        memory = false;
      }
    }
  } else memory = false;

  return memory;

}

console.log(isPrime(0));                          // false
console.log(isPrime(1));                          // false
console.log(isPrime(17));                         // true
console.log(isPrime(10000000000000));             // false          
//-----------------------------------------------ok





//////////////////////////////////////////////////
/////////////222222222222222222222////////////////
//////////////////////////////////////////////////


// 2. // factorial - Returns a number that is the factorial of the given number.
// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(0));                        // 1
// console.log(factorial(1));                        // 1
// console.log(factorial(6));                        // 720
//-----------------------------------------------ok


// 2. factorial - Returns a number that is the factorial of the given number.
function factorial(n) {
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact *= i;
  }
  return fact;
  // return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(0));                        // 1
console.log(factorial(1));                        // 1
console.log(factorial(6));                        // 720
//-----------------------------------------------ok+






//////////////////////////////////////////////////
/////////////333333333333333333333////////////////
//////////////////////////////////////////////////

// 3. fib - Returns the nth Fibonacci number.
// function fib(n) {
//   let a = 0;
//   let b =1;
//   for (let i = 1; i < n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b; 
// }

// console.log(fib(0));                              // 0
// console.log(fib(1));                              // 1
// console.log(fib(10));                             // 55
// console.log(fib(20));                             // 6765
//-----------------------------------------------bed


// 3. fib - Returns the nth Fibonacci number.
function fib(n) {
  let a = 0;
  let b = 1;
  let c;
  if (n === 0) {
    return n;
  } else {
    for (let i = 1; i < n; i++) {
      c = a + b;
      a = b;
      b = c;

    }
    return b;
  }

}
console.log(fib(0));                              // 0
console.log(fib(1));                              // 1
console.log(fib(10));                             // 55
console.log(fib(20));                             // 6765
//-----------------------------------------------ok








//////////////////////////////////////////////////
/////////////444444444444444444444////////////////
//////////////////////////////////////////////////

// 4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// function isSorted([]) {
//   for (let i = 0; i < length; i++) {
//     console.log(isSorted[i]);
//   }
// }


// console.log(isSorted([]));                        // true
// console.log(isSorted([-Infinity, -5, 0, 3, 9]));  // true
// isSorted([3, 9, -3, 10])            // false


______________________________________

// function isSorted(x) {
// 	// return x.sort((a, b) => a - b) ? true : false
// 	for (let i = 0; i < x.length; i++) {
// 		// console.log(100500)
// 		if (x.splice(i) === x.sort((a, b) => a - b)) {
// 			return true
// 		}
// 		return false
// 	}
// }



function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([]));                       // true
console.log(isSorted([-Infinity, -5, 0, 3, 9])); // true
console.log(isSorted([3, 9, -3, 10]));          // false
//-----------------------------------------------ok



//////////////////////////////////////////////////
/////////////555555555555555555555////////////////
//////////////////////////////////////////////////

// 5. reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse(''));                         // ''
console.log(reverse('abcdef'));                   // 'fedcba'
// //-----------------------------------------------ok



//////////////////////////////////////////////////
/////////////666666666666666666666////////////////
//////////////////////////////////////////////////

// 6. indexOf - Implement the indexOf function for arrays.
function numbers(arr, num) {
  console.log(arr.indexOf(num));
}

numbers([1, 2, 3], 1)               // 0
numbers([1, 2, 3], 4)               // -1
// //-----------------------------------------------ok



//////////////////////////////////////////////////
/////////////777777777777777777777////////////////
//////////////////////////////////////////////////

// 7. isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true
//-----------------------------------------------err



//Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель.
// Первый аргумент - это массив чисел, а второй - делитель.
function divisibleBy(number, num) {
  // console.log(number);
  // console.log(num);
  for (let i = 0; i < number.length; i++) {
    // console.log(number[i]);
    if ((number[i] % 2) === 0) {
      console.log(number[i]);
    }
  }
}
divisibleBy([1, 2, 3, 4, 5, 6], 2)
//-----------------------------------------------ok



//нужно посчитать сумму чисел в масиве
function sum(num) {
  let s = 0;
  for (i = 0; i < num.length; i++) {
    s += num[i];//как понять num[i]
  }
  return s
}
numArray([1, 5.2, 4, 0, -1]);
//-----------------------------------------------ok



//Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).
// For example,
function countSheeps(arrayOfSheep) {
  // console.log(arrayOfSheep);
  const array = [];
  for (let i = 0; i < arrayOfSheep.length; i++) {
    // console.log(arrayOfSheep[i]); //в чем отличие
    // console.log(i[arrayOfSheep]); //в чем отличие

    if (arrayOfSheep[i] === true) {
      array.push(true);
      console.log('yes');
    }
  }
  // console.log(array.length);
  return array.length
}
countSheeps([true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]);
//-----------------------------------------------ok



// Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
// которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать
// отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному.
// Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
function sequence(start, step = 1) {
  for (let num = start; num < 20; num += step) {
    console.log(num);

  }
  // return num нужен или нет 
}
const generator = sequence(10, 3);
sequence(7, 2);
//-----------------------------------------------err



// Напишите функцию, которая принимает массив с разными числами, а возвращает максимальное произведение двух чисел из этого массива.
// Пример входных параметров [1, 3, 2, 2, 3, 0]
// Ожидается на выходе 9

function Product(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let num2 = arr.slice(-2,);
  num2 = num2[0] * num2[1];
  console.log(num2);
  return num2
}
Product([1, 3, 2, 2, 3, 0]);
//or
function Product(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  arr = arr[0] * arr[1];
  console.log(arr);
  return arr
}
Product([1, 3, 2, 2, 3, 0]);

//codewar

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!
function paperwork(n, m) {
  let s = 0;
  if (n < 0 || m < 0) {
    return 0;
  } else
    s = n * m;
  return s;
}
paperwork(5, 0);
//or
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}
paperwork(5, 5);
//or
function paperwork(n, m) {
  if (m < 0 || n < 0) {
    return 0;
  }
  return m * n;
}
paperwork(5, 5);
//-----------------------------------------------ok



//Просто удалите пробелы из строки, затем верните результирующую строку.
function noSpace(x) {
  //перебор строки метод 'fot of'
  // for (let str of x) {
  //     console.log(str);
  // }
  // console.log(x.replace(/ /g, ''));
  return x.replace(/ /g, '');

  //можно через преобразование в масив 'split', а потом в строку 'join'
  //console.log(x.split(' ').join(''));
}
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');
//or
function noSpace(x) {
  var result = ""
  for (var index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      result += x[index];
    }
  }
  return result;
}
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');
//-----------------------------------------------ok



// Make a simple function called greet that returns the most-famous "hello world!".
function greet(m = 'hello world!') {
  return m;
}
greet();
// or
function greet() {
  return "hello world!";
}
//-----------------------------------------------ok


// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr(n, s) {
  let newStr = ('');
  for (let i = 0; i < n; i++) {
    newStr += s;
    // console.log(i);
    // console.log(newStr);
  }
  return newStr;
}
repeatStr(6, 'I');
//or
function repeatStr(n, s) {
  return s.repeat(n);
}
repeatStr(6, 'I');
//or
repeatStr = (n, s) => s.repeat(n) // как выводить стрелочную функцию!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//-----------------------------------------------ok



// Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.
function findAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    // console.log(sum);
  }
  sum = sum / array.length;
  return sum;
}
findAverage([1, 2, 3, 4]);
//or
function findAverage(array) {
  let arr = array.reduce(function (a, b) {
    return a + b;
  });
  arr = arr / array.length;
  // console.log(arr);
  return arr;
}
findAverage([1, 2, 3, 4]);
//-----------------------------------------------ok



// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.
function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i] ** 2);
    sum += numbers[i] ** 2;
    // console.log(sum);
  }
  return sum
}
squareSum([1, 2, 2]);
//or
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return (n * n) + sum;
  }, 0)
}
squareSum([1, 2, 2]);
//or
function squareSum(numbers) {
  let sum = 0;
  numbers.forEach(function (n) {
    sum += n * n
  });
  return sum;
}
squareSum([1, 2, 2]);
//-----------------------------------------------ok



// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade(s1, s2, s3) {
  let sum = (s1 + s2 + s3) / 3;
  console.log(sum);
  if (90 <= sum && 100 >= sum) {
    return 'A';
  } else if (80 <= sum && 90 >= sum) {
    return 'B';
  } else if (70 <= sum && 80 >= sum) {
    return 'C';
  } else if (60 <= sum && 70 >= sum) {
    return 'D';
  } else {
    return 'F';
  }
}
getGrade(95, 90, 93);
//or
function getGrade(s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}
getGrade(95, 90, 93);

//-----------------------------------------------ok



// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str) {
  return str.slice(1, -1);
};
removeChar('eloquent');
//or
function removeChar(str) {
  //You got this!
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
}
removeChar('eloquent');
//or
function removeChar(str) {
  return str.substring(1, str.length - 1);
}
removeChar('eloquent');
//-----------------------------------------------ok



// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  let sum = 0;
  for (let num of arr) {
    // console.log(num);
    if (num > 0) {
      sum += num;
      // console.log(sum);
      // return sum; // почему вывод 1 одна итерация
    }
    // return sum; // почему вывод 1 одна итерация
  }
  return sum;
}
positiveSum([1, -2, 3, 4, 5]);
//or
function positiveSum(arr) {
  var sum = 0;
  arr.forEach(function (v, i, a) {
    if (v > 0) { sum += v; }
  });
  return sum;
}
positiveSum([1, -2, 3, 4, 5]);
//-----------------------------------------------ok

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
  for (nameNew of name) {
    if (nameNew === 'R' || nameNew === 'r') {
      return `${name} plays banjo`;
    } else {
      return `${name} does not play banjo`;
    }
  }
}
areYouPlayingBanjo("Ringo");
//-----------------------------------------------ok



// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//   Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers) {
  let array = numbers.split(' '); // как работает пробел и запятая
  // console.log(array);
  // console.log(Math.max(...array), Math.min(...array));
  let numNewOne = Math.max(...array);
  let numNewTwo = Math.min(...array);
  return `${numNewOne} ${numNewTwo}`;
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
//or
function highAndLow(numbers) {
  let arr = numbers.split(' ').map(Number);
  return Math.max(...arr) + ' ' + Math.min(...arr);
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
//or
function highAndLow(numbers) {
  var arr = numbers.split(' ').sort(function (a, b) { return a - b });
  return arr[arr.length - 1] + ' ' + arr[0];
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
//-----------------------------------------------ok



// Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чиссел.
let arrayNumber = [1, 2, 3, 4, 5];
let squareNumber = [];

arrayNumber.forEach(function (item) { 
  squareNumber.push(item ** 2);
});
console.log(squareNumber); // (5) [1, 4, 9, 16, 25]
//or
let arrayNumber = [1, 2, 3, 4, 5];
let squareNumber = [];

arrayNumber.forEach(function (item, index) {
  squareNumber[index] = item ** 2;
});
console.log(squareNumber); // (5) [1, 4, 9, 16, 25]
//or
let arrayNumber = [1, 2, 3, 4, 5];
let squareNumber = [];

arrayNumber.forEach(item => squareNumber.push(item ** 2));
console.log(squareNumber); // (5) [1, 4, 9, 16, 25]
//-----------------------------------------------ok



// Дан массив с числами. Найдите сумму этих чисел.
let arrayNumber = [1, 2, 3, 4, 5];
let sumNumber = 0;

arrayNumber.forEach(item => sumNumber += item);
console.log(sumNumber); // 15
//-----------------------------------------------ok



//Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
let arrayNumber = [1, 2, 3, 4, 5];
let squareNumber = arrayNumber.map(function (item) {
  return item ** 2;
});
console.log(squareNumber);
//-----------------------------------------------ok



//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let arrayNumber = [1, 2, 3, 4, 5];
let num = arrayNumber.every(item => item > 0);
console.log(num);
//-----------------------------------------------ok



//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
let arrayNumber = [1, 2, 3, 4, -5];
let num = arrayNumber.some(item => item < 0);
console.log(num);
//-----------------------------------------------ok



//Дан массив с числами. Оставьте в нем только отрицательные числа.
let arrayNumber = [1, -2, 3, 4, -5];
let num = arrayNumber.filter(item => item < 0);
console.log(num);
//-----------------------------------------------ok



//Дан массив с числами. Оставьте в нем только четные числа.
let arrayNumber = [1, -2, 3, 4, -5];
let num = arrayNumber.filter(item => item % 2 === 0);
console.log(num);
//-----------------------------------------------ok



//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arrayString = ['BMW', 'Toyota', 'Bentley', 'CHRYSLER', 'CITROEN', 'Audi'];
let newStr = arrayString.filter(item => item.length > 5);
console.log(newStr);
//-----------------------------------------------ok



//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем
// только подмассивы.
let arrayNumber = [1, 2, [3, 4], 5, [6, 7]];
let newArr = arrayNumber.filter(item => item.length > 1);
console.log(newArr);
//or
let arrayNumber = [1, 2, [3, 4], 5, [6, 7]];
let newArr = arrayNumber.filter(item => Array.isArray(item));
console.log(newArr);
//or
let arrayNumber = [1, 2, [3, 4], 5, [6, 7]];
let newArr = arrayNumber.filter(Array.isArray);
console.log(newArr);
//-----------------------------------------------ok



//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
let arrayNumber = [1, -2, 3, 4, -5];
let num = arrayNumber.filter(item => item < 0);
console.log(num);
let sumNumber = 0;
num.forEach(item => sumNumber += item);
console.log(sumNumber);
//-----------------------------------------------ok


/////////////////////////////////////////////////////////////////////////////////////


//Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
const obj = { a: 1, b: 2, c: 3 };
obj.c;
obj['c'];
//-----------------------------------------------ok



// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
const obj = { Коля: '1000', Вася: '500', Петя: '200' };
obj.Петя;
obj.Коля;
//-----------------------------------------------err



// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
// а для чисел, делящихся на 5(но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
const num = 100;
for (let i = 1; i <= num; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
//-----------------------------------------------ok



// Сумма диапазона.  Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит 
// все числа из него, включая начальное и конечное.Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
// Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.В качестве бонуса дополните функцию range, чтобы она могла принимать 
// необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) 
// должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
// `console.log(sum(range(1, 10)));
// // → 55
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]`
const numArray = [];
function range(a, b, c = 1) {
  if (b <= a) {
    for (let i = a; i >= b; i += c) {
      numArray.push(i);
    }
  } else {
    for (let i = a; i <= b; i += c) {
      numArray.push(i);
    }
  }
  console.log(numArray);
  let sumArray = 0;
  const sum = numArray.map(item => sumArray += item);
  console.log(sumArray);
}
// range(1, 10);
range(1, 10, 2);
// range(5, 2, -1);
//or
function range(a, b, c = 1) {

  let result, sumArray = 0;

  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    typeof c !== 'number'
  ) {
    result = 'Arguments must be numbers';
    return result;
  }
  if (c === 0) {
    result = 'Step can`t be = 0 !';
    return result;
  }
  if (a > b && c > 0) {
    result = 'You have a mistake';
    return result;
  }
  if (a < b && c < 0) {
    result = 'You have a mistake';
    return result;
  }
  result = [];

  if (a > b && c < 0) {
    for (let i = a; i >= b; i += c) {
      result.push(i);
      sumArray += i;
    }
    console.log(sumArray);
    console.log(result);
    return result;
  }

  for (let i = a; i <= b; i += c) {
    result.push(i);
    sumArray += i;
  }
  console.log(sumArray);
  console.log(result);
  // numArray.forEach(item => sumArray += item);
  return console.log(result);
}
// range(1, 10);
// range(1, 10, 2);
range(5, 2, -1);
//-----------------------------------------------ok



// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation ' +
// 'of an integral number.
const stringToNumber = function(str){
  str = +str;
  console.log(str)
  return str;
}
stringToNumber("1234")
//or
const stringToNumber = function(str){
  return +str;
}
stringToNumber("1234")
//-----------------------------------------------ok



// In this simple assignment you are given a number and have to make it negative. But maybe the number
// is already negative?
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
function makeNegative(num) {
  if(num > 0) {
    num *= -1;
    console.log(num);
    return num;
  }
  console.log(num);
  return num;
}makeNegative(0);
//or
function makeNegative(num) {
  return -Math.abs(num);
}
//or
function makeNegative(num) {
  return num > 0 ? -num : num;
}
//-----------------------------------------------ok



// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
function oddOrEven(array) {
  let sumNumber = 0;
  array.forEach(item => sumNumber +=item);
  console.log(sumNumber);
  if (sumNumber % 2 === 0) {
    console.log('even');
    return 'even';
  } else {
    console.log('odd');
    return 'odd';
  }
}
oddOrEven([0, 1, 5]);
//or
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
//-----------------------------------------------ok
