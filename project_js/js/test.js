function expressionMatter(a, b, c) {
    let num1 = a * (b + c);
    let num2 = a * b * c;
    let num3 =a + b * c;
    let num4 =(a + b) * c;

    let array = [num1, num2, num3, num4];
    let max = Math.max(...array);
    console.log(max);
    return max;
}
expressionMatter(2, 1, 2) // 6
expressionMatter(2, 1, 1) // 4