function getYears() {
    for(let i = 1; i < 2020; i++) {
        if(i.toString().split('').reduce((sum, item) => +sum + +item) === 13)
        {
            console.log(i)
        }
    }
}

getYears()