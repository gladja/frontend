const uniqueInOrder=function(iterable){
    console.log(iterable.split(''))
    // let newArray = [...new Set(iterable)]
    // console.log(newArray)
    let arr = []
    let newArray = [];
    iterable.split('').forEach((item, i, arr) => {
        console.log(i)
        console.log(iterable[i])
        console.log(item)
        console.log(arr)
        newArray = arr.indexOf(item)
        console.log(newArray)
        arr.push(iterable[newArray])

        if (newArray === arr) {
            newArray
        }
            console.log(arr)
    })
}
uniqueInOrder('AAAABBBCCDAABBB')  //['A', 'B', 'C', 'D', 'A', 'B']