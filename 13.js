function arrSum(arr) {
    return arr.reduce(function(sum, current) { 
        if(current[0]) {
            return sum + arrSum(current)
        } 
        else {
            return sum + current
        }
    }, 0)
}


console.log(arrSum([[1, 2, 3], [4, 5], [6]]))