function happyTicket(value) {

    let firstSum = 0, secondSum = 0;

    value.toString().split('').forEach((item, i) => {
        if(i > 2) {
            secondSum += +item
        }
        else {
            firstSum += +item
        }
    })

    return firstSum === secondSum
}

console.log(happyTicket(321123))