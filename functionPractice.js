function VowelCount(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
            count++
        }
    }

    console.log("There are", count, "vowels in your string!")
}


VowelCount("Hello")
VowelCount("Hello my name is Earl")


function Prime(num) {
    var count = 0;
    if (num % 2 != 0) {
        console.log("This number is prime!")
    }
    else {
        console.log("This number is not prime!")
    }
}

Prime(9) //expecting prime!
Prime(18) //expecting not prime!

function Coins(val) {
    Array = [25, 10, 5, 1];
    var Answer = { "Quarters": 0, "Dimes": 0, "Nickels": 0, "Pennies": 0 }
    if (val >= 25) {
        Answer["Quarters"] = Math.floor(val / 25)
        val -= (Answer["Quarters"] * 25)
    }
    if (val >= 10) {
        Answer["Dimes"] = Math.floor(val / 10)
        val -= (Answer["Dimes"] * 10)
    }
    if (val >= 5) {
        Answer["Nickels"] = Math.floor(val / 5)
        val -= (Answer["Quarters"] * 5)
    }
    if (val >= 1) {
        Answer["Pennies"] = Math.floor(val / 1)
        val -= (Answer["Pennies"] * 1)
    }
    return Answer
}

console.log(Coins(42))


function RemoveLetter(arr, x) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > x) {
            count++
        }
    }
    console.log("There are", count, "numbers greater than x!")
}

RemoveLetter([5, 6, 7, 8, 9, 10], 7) //expecting 3