// function isPrime(num) {
//   // console.log(num);
//   for (let i = 2; i < num; i++) {
    
//     if (num % i === 0) {
//     // console.log(num);
//     return 'true';
//   }
// }
//   return 'false';
// }


// 1. isPrime - Returns true or false, indicating whether the given number is prime.
// function isPrime(num) {
//   let memory = true;
//  
//   if (num > 1) {
//     for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
// 
//       if (num % i === 0) {
//         memory = false;
//       }
//     }
//   } else memory = false;
//  
//   return memory;
// 
// }

// console.log(isPrime(0));                          // false
// console.log(isPrime(1));                          // false
// console.log(isPrime(17));                         // true
// console.log(isPrime(10000000000000));             // false          
// ---------------------------------------------ok





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
// ---------------------------------------------ok


// 2. factorial - Returns a number that is the factorial of the given number.
// function factorial(n) {
//   let fact = 1;
//   for (let i = n; i > 0; i-- ) {
//   fact *= i;
//   }
//   return fact;
//   // return n ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(0));                        // 1
// console.log(factorial(1));                        // 1
// console.log(factorial(6));                        // 720
// ---------------------------------------------ok+






//////////////////////////////////////////////////
/////////////333333333333333333333////////////////
//////////////////////////////////////////////////

// 3. fib - Returns the nth Fibonacci number.
function fib(n) {
  let a = 0;
  let b =1;
  for (let i = 1; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b; 
}

console.log(fib(0));                              // 0
console.log(fib(1));                              // 1
console.log(fib(10));                             // 55
console.log(fib(20));                             // 6765
// ---------------------------------------------ok


// 3. fib - Returns the nth Fibonacci number.
function fib(n) {
  let a = 0;
  let b = 1; 
  let c;
  if (n === 0) {
    console.log(n)
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
// ---------------------------------------------err








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
    if(arr[i] < arr[i-1]) {
        return false
    }
  }
  return true
}

console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10])); 



//////////////////////////////////////////////////
/////////////555555555555555555555////////////////
//////////////////////////////////////////////////

// 5. reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse(str) {
return str.split("").reverse().join("");
}

console.log(reverse(''));                         // ''
console.log(reverse('abcdef'));                   // 'fedcba'
// ---------------------------------------------ok



//////////////////////////////////////////////////
/////////////666666666666666666666////////////////
//////////////////////////////////////////////////

// 6. indexOf - Implement the indexOf function for arrays.
function numbers(arr, num ) {
  // console.log(num.join());
  // console.log(num.indexOf(1));
  console.log(arr.indexOf(num));
}

numbers([1, 2, 3], 1)               // 0
numbers([1, 2, 3], 4)               // -1