function sortLetters(array) {
    let result = array.reduce((previosSym, currentSym) => previosSym <= currentSym ? currentSym : false)

    return result ? true : false
}

console.log(sortLetters(['c', 'b', 'a']))