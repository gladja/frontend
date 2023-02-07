function longest(s1, s2) {
  const newArray = [...s1, ...s2];
  let sortArray = "";

  // console.log(newArray);
  newArray.sort();
  // console.log(newArray);

  sortArray = newArray.filter(function (value, index, array) {
    return value !== array[index - 1];
  });

  console.log(sortArray.join(""));
}

longest("aretheyhere", "yestheyarehere"); // "aehrsty"
