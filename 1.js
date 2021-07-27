function factorial(n) {

    for(let i = n; i > 1 ; i--) {
        n = n * (i - 1)
    }

    return n
}

console.log(factorial(10));