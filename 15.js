function editStr(str) {
    let newStr = str.split('_').map((item ,i) => {
        return i === 0 ? item : item.replace(item[0], item[0].toUpperCase())
    }).join('')
    
    return newStr
}

console.log(editStr("var_text_hello"))