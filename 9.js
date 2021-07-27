function sortNumbers(array) {
    let result = array.reduce((previousValue, currentValue) =>  (currentValue >= previousValue) ? currentValue : false)

    return result ? true : false
}

console.log(sortNumbers([2, 4, 5, 7]))