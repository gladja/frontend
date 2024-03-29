For; // - Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
// Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

const fruits = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; order.length > i; i++) {
    total += order[i];
  }
  console.log(total);
  return total;
}
calculateTotalPrice([12, 85, 37, 4]);

//Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
  let arrayNew = string.split(" ");
  // console.log(arrayNew);
  let longestWord = 0;
  const wordsList = [];
  let wordsListStr = "";
  for (let i = 0; arrayNew.length > i; i++) {
    // console.log(arrayNew[i].length);
    if (arrayNew[i].length > longestWord) {
      longestWord = arrayNew[i].length;
      console.log(longestWord);
    }
  }
  for (let i = 0; arrayNew.length > i; i++) {
    if (arrayNew[i].length === longestWord) {
      console.log(arrayNew[i].length);
      wordsList.push(arrayNew[i]);
      wordsListStr = wordsList.join(" ");
    }
  }
  console.log(wordsListStr);
  return wordsListStr;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
// а для чисел, делящихся на 5(но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
const num = 100;
for (let i = 1; i <= num; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all
// if he was simply to buy and
// sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr) {
  const newMinMax = [];

  const minNum = Math.min(...arr);
  // console.log(minNum);

  const maxNum = Math.max(...arr);
  // console.log(maxNum);

  newMinMax.push(minNum, maxNum);
  console.log(newMinMax);
  return newMinMax;
}

//or
function minMax(arr) {
  // console.log(arr);
  let maxNum = 0;
  let minNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  console.log(`max: ${maxNum}`);
  console.log(`min: ${minNum}`);
}

minMax([1, 2, 3, 4, 5]); // [1, 5]
minMax([2334454, 5]); // [5, 2334454]
minMax([5]); // [5, 5]

While; // - while (условие) { тело цикла которое будет выполнятся покане удовлетворит условию}

//Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P'
// has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

function calculateYears(principal, interest, tax, desired) {
  let year = 0;

  while (principal < desired) {
    const taxOneYear = (principal * interest * (tax * 100)) / 100;
    console.log(taxOneYear);

    const profitOneYear = principal * interest - taxOneYear;
    console.log(profitOneYear);

    principal += profitOneYear;
    console.log(principal);

    year++;
    console.log(year);
  }
  return year;
}
calculateYears(1000, 0.05, 0.18, 1100); //3



// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
//
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
//
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//
//     Don't change the order of the elements that are left.
//
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
//     * Input: [5,3,2,1,4], output = [5,3,2,4]
//     * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let minNum = numbers[0];
  let newArray = [];
  let idx = [];


  for (let i = 0; i < numbers.length; i++) {
    if (minNum > numbers[i]) {
      minNum = numbers[i]
    }
  }
  console.log(minNum)

  idx = numbers.findIndex(item => item === minNum)
  console.log(idx);
  for (let i = 0; i < numbers.length; i++) {
    console.log(i)
    console.log(idx)
    if (idx !== i) {
      newArray.push(numbers[i])
    }
  }
  console.log(numbers)
  console.log(newArray)
  return [newArray];
}

// console.log(removeSmallest(numbers()))
// console.log(newArray)
removeSmallest([1, 2, 3, 4, 5])
removeSmallest([2, 2, 1, 2, 1])
removeSmallest([269, 168, 68, 317, 95, 34])




for of //




//   Time to win the lottery!
//     Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
// Example ticket:
//     [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number,
// you get a mini win. Note you can only have one mini win per sub array.
//     Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
//     All inputs will be in the correct format. Strings on tickets are not always the same length.


  function bingo(ticket, win) {
    let winner = 0;
    console.log(ticket[0][0])
    console.log(win)

    for (let i = 0; i < ticket.length; i++) {
      console.log(ticket[i][0])
      for (let j = 0; j < ticket[i][0].length; j++) {
        console.log(ticket[i][0][j])
        // console.log(ticket[i][0][j].charCodeAt())
        // console.log(ticket[i][1])
        if (ticket[i][0][j].charCodeAt() === ticket[i][1]) {
          winner++
          break
        }
        // console.log(ticket[i][0][j])
      }
    }
    console.log(winner)
    console.log(win)
    if (winner >= win) return 'Winner!';
    return 'Loser!'

//or

    for (const ticketElement of ticket) {
      console.log(ticketElement)
      for (const ticketElementElement of ticketElement[0]) {
        console.log(ticketElementElement)
        // console.log(ticketElement[1])
        console.log(ticketElementElement.charCodeAt())
        if (ticketElementElement.charCodeAt() === ticketElement[1]) {
          winner++
        }
      }
    }
    console.log(winner)
    return  winner >= win ? 'Winner!' : 'Loser!'

// let arr2 = []
//     ticket.forEach((item, i) => {
//         console.log(item[0])
//         arr2.push(item[0])
//         console.log(arr2)
//         // let arr2 =arr
//         })
//         console.log(arr2)
//         arr2.forEach(itm => {
//             console.log(itm)
//     })

  }

bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)
bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)
