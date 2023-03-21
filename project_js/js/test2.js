const min = function (list) {
  let minNumber = 0;
  list.map((itm, index) => {
    minNumber < itm;
    minNumber = itm;
  });
  console.log(minNumber);
  return minNumber;
};
console.log(min);

const max = function (list) {
  return list[0];
};
min([-52, 56, 30, 29, -54, 0, -10]);
max([4, 6, 2, 1, 9, 63, -134, 566]);
