function numbers(num) {
    let result = num.toString().split('').reduce((sum, item) => +sum + +item, 0)
    
    if(result > 9) return numbers(result)
    else return result
}

console.log(numbers(78))