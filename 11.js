function reverse(array) {
    let arrReverse = new Array()

    for(let i = (array.length - 1); i >= 0; i--) {
        arrReverse.push(array[i])
    }
    return arrReverse
}

console.log(reverse([1, 2, 3]))