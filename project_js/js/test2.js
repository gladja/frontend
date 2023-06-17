


//  Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

function updateObject (obj, ...rest){
    console.log(obj)
    console.log(rest)

    const newObj = {};

    const newArr = Object.keys(obj)
    console.log(newArr)
    for (const key of newArr) {
        if(!rest.includes(key)) {
            console.log(key)

           newObj[key] = obj[key]
            console.log(newObj)
        }
    }
    return newObj
}

console.log(updateObject({a: 1, b: 2, c: 3}, 'b', 'a'))


// https://leetcode.com/


// const arrNumber = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Напишіть функцію, яка розвертає масив у зворотньому напрямку.Метод reverse() не використовувати

// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null
// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без 1, 2 => [1,2,3]



// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість Priopity,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)