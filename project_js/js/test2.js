const arrayOne = [3, 2, 5, 6, 10, 11, 6, 8, 9, 13];
const arrayTwo = [4, 8, 9, 12, 3, 4, 5, 15, 10, 5];

let width = 0;
let height = 0;
let bigDiagonal = 0;

for (let i = 0; i < arrayOne.length; i++) {
  for (let j = 0; j < arrayTwo.length; j++) {}
  if (arrayOne[i] > arrayTwo[i]) {
    width++;
  } else {
    height++;
  }
  const c = Math.pow(arrayOne[i], 2) + Math.pow(arrayTwo[i], 2);
  const diagonal = Math.sqrt(c);
  if (diagonal > bigDiagonal) {
    bigDiagonal = diagonal;
  }
}
console.log(bigDiagonal);
console.log(`width: ${width} height: ${height}`);
