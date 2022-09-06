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
sum([1, 5.2, 4, 0, -1]);
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

}
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');