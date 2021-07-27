function fibonacci(n) {
    let a = 1
    let b = 1

    for(let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return b
}

console.log(fibonacci(7)); // 120

// n = F(n - 1) + F(n - 2)
// n = 