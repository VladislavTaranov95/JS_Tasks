function dateDifference(firstDate, secondDate) {
    return Math.floor((secondDate - firstDate) / (1000 * 3600 * 24));
}

console.log(dateDifference(new Date("2017-07-25"), new Date("2021-04-13")))