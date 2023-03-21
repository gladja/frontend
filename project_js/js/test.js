const array = [2, 3, 5, 7, 11];
function find(array, element) {
  // for (const i in array) {
  //   if (array[i] === element) {
  //     // return (number = i);
  //     break;

  // return "Not found";
  // let newArray;
  // array.forEach((item, i) => {
  //   let newArray = array[i] === element ? i : "Not found";

  // if (array[i] === element) {
  //   return i;

  // console.log(newArray);
  // });
  // console.log(number);

  // array.map((itm, i) => itm === element);

  array.forEach((itm, i) => {
    return itm === element ? i : "Not found";
  });
}
find(array, 5); // 2);
