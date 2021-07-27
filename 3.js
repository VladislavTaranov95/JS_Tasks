function palindrom(str) {
    let newStr = str.split(' ').join('')
    let strArr = newStr.split('')
    return strArr.join('').toLowerCase() === strArr.reverse().join('').toLowerCase()
}

console.log(palindrom('Лёша на полке клопа нашёл'))