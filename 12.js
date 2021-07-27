function pyramid() {
    let result = ''

    for(let i = 0; i < 9; i++) {
        result += '_'
        for(let j = 0; j < (i + 1); j++) {
            result += (i + 1)
        }
        result += '_\n'
    }
    return result
}

console.log(pyramid())