// Trim // - Метод trim() возвращает строку с вырезанными пробельными символами с её концов. Метод trim() не изменяет
// значение самой строки.

const orig = '   foo  ';
console.log(orig.trim()); // 'foo'


const orig2 = ' _ _   foo  ';
console.log(orig2.trim()); // '_ _   foo'