function lastNums(n, m) {
    let numToStr = m.toString()
    return numToStr.substr((numToStr.length - n), n).split('').reduce((sum, item) => +sum + +item, 0)
}

console.log(lastNums(2, 3456))