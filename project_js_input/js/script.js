const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('button[data-reset]');
const inputNum = document.querySelector('input[data-num]');
const sumTotal = document.querySelector('.text span');

// console.log(btnAdd);

let total= 0;

btnAdd.textContent = 'added';
btnAdd.addEventListener('click', () => {
console.log('work');
// console.log(inputNum.value);
total += Number(inputNum.value);
sumTotal.textContent = total;

console.log('Total: ', total);
inputNum.value = '';
})

btnReset.addEventListener('click', () => {
    sumTotal.textContent = 0;
    total = 0;
})
