function randomInteger(min, max) {
    // случайное число лт min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    console.log(rand);
    return Math.floor(rand);

}

function moneyCycle() {
    let s2 = 0;
    for(let i = 0; true; i++);
    let m = randomInteger(0,100);
    console.log('add: ' + m);
    s2 += m;
    console.log('sum: ' +  s2);
    if (s2 > 300) return;
}
moneyCycle();