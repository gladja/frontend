// function myFirstApp(name, age) {
//     alert(`Привет, меня зовут ${name} и это моя первая программа!`);

//     function showSkills() {
//         let skills = ['html', 'css', 'js'];
//         for (let i = 0; i < skills.length; i += 1) {
//         console.log('Я владею: ', skills[i]);
//         }
//     }
//     showSkills();

//     function checkAge() {
//         let age = prompt('Какой ваш воззраст:');
//         if(age < 18) {
//             alert ('Круто что ты так рано задумался о своем будущем!');
//         } else {
//             alert('У тебя отличные шансы стать FrontEnd dev!');
//         }
//     }
//     checkAge()

//     function calcPow(num) {
//         // num **= 2;
//         num = Math.pow(num, 2)
//         console.log(num);
//     }
//     calcPow(4)
// } 

// myFirstApp('Alex', 39);

// // отдельно поигрался с возведением в степень
// function calcPow(num) {
//     num = prompt('Введи число:')
//     // num **= 2;
//     num = Math.pow(num, 2)
//     console.log(num);
//     alert (`Результат:  ${num}`);
// }
// calcPow();




///////////////////////////////////
// домашка level up 9.2
///////////////////////////////////

// function capsLock(str) {

// let strLower = str.toLowerCase();
//     console.log(strLower);
//     console.table(strLower.split(' '));

// let strFirstLetter = strLower.slice(0,1);

// let capitalized = strLower.replace(strFirstLetter,strFirstLetter.toUpperCase());
//     console.log(strFirstLetter);
//     console.log(capitalized);

//     return capsLock;
// }

// capsLock("Lock");

// function capsLock(str) {
//     const letters =  str.split('');
//     let invertedString = '';
    
//     for (const letter of letters) {
//         console.log(letter);
//         if (letter === letter.toLowerCase()) {
//             invertedString += letter.toUpperCase();
//         } else {
//             invertedString += letter.toLowerCase();
//         }
//     }

//     return invertedString;
// }    

// console.log(capsLock('wHy DO wE NEED cAPS lOCK?'));



// const str = 'Java Script'
// const letters =  str.split('');
// let invertedString = '';

// // console.log(letters);

// for (const letter of letters) {
//     console.log(letter);
// 


function count(countFrom = 0, countTo = 10, step = 1) {
    console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
    for (let i = countFrom; i <= countTo; i += step) {
      console.log(i);
    }
  }
  
  count(1, 5); // countFrom = 1, countTo = 5, step = 1
  count(2); // countFrom = 2, countTo = 10, step = 1
  count(); // countFrom = 0, countTo = 10, step = 1


