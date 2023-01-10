function romanNumber(content) {
    let numbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = []
    let split = content.split("")
    for (let i = 0; i < split.length; i++) {
        if (numbers[split[i]] > result.at(-1)) {
            result[result.length - 1] = result.at(-1) * -1
        }
        result.push(numbers[split[i]])
    }
    let sum = result.reduce(function (a, b) {
        return a + b
    })
    console.log(sum)
}

romanNumber("XXVIII")