const widths = [3, 2, 5, 6, 10, 11, 6, 8, 9, 13];
const heights = [4, 8, 9, 12, 3, 4, 5, 15, 10, 5];

let widthHigher = 0;
let heightHigher = 0;
let bigDiagonal = 0;

for (let i = 0; i < widths.length; i++) {
  if (widths[i] > heights[i]) {
    widthHigher++;
  } else {
    heightHigher++;
  }
  const c = Math.pow(widths[i], 2) + Math.pow(heights[i], 2);
  const diagonal = Math.sqrt(c);
  if (diagonal > bigDiagonal) {
    bigDiagonal = i;
  }
}
console.log(bigDiagonal);
console.log(`width: ${widthHigher} height: ${heightHigher}`);
