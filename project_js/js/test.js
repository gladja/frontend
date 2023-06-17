<<<<<<< HEAD
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
=======
const atTheOldToad = {
    potions: [
        {name: "Speed potion", price: 460},
        {name: "Dragon breath", price: 780},
        {name: "Stone skin", price: 520},
    ],
    // Change code below this line

    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        const {name, price} = newPotion

        for (const potion of this.potions) {
            if (potion.name === name) {
                return `Error! Potion ${name} is already in your inventory!`;
            }
        }
        return this.potions.push(newPotion);
    },
    removePotion(potionName) {

        for (let i = 0; i < this.potions.length; i += 1) {

            if (this.potions[i].name === potionName) {
                this.potions.splice(i, 1);
            }
        }
        return `Potion ${potionName} is not in inventory!`;
    },
    updatePotionName(oldName, newName) {

        for (const potion of this.potions) {
            console.log(potion.name)
            if (potion.name === oldName) {
                potion.name = newName
            }
        }

        return `Potion ${oldName} is not in inventory!`;
    },
    // Change code above this line
};

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
console.log(atTheOldToad.potions)
>>>>>>> 70d51d0d42ea4be803e1309361b98413ed742b11
