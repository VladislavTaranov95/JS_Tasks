function anagram(firstStr, secondStr) {
    return firstStr.replace(/\s+/g, '').split('').sort().join('') === secondStr.replace(/\s+/g, '').split('').sort().join('')
}

console.log(anagram('стационар', 'соратница'))