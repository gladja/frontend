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