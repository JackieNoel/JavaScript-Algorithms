//Print values 1-255
function printNums(val) {
    for (var i = 1; i <= val; i++) {
        console.log(i)
    }
}

printNums(255)

//Print sum of values 0-255
function sumOfNums(val) {
    var sum = 0
    for (var i = 0; i <= val; i++) {
        sum = sum + i
    }
    return sum
}

console.log(sumOfNums(255))

//Find and print max value
function findMax(arr) {
    var max = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([1, 2, 3, 4, 5, 6]))


//Print array with odd values 1-255
function OddUpTo255(val) {
    NewList = []
    for (var i = 0; i <= val; i++) {
        if (i % 2 != 0) {
            NewList.push(i)
        }
    }
    return NewList
}

console.log(OddUpTo255(255))

//greater than Y
function greaterThanY(arr, y) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    return count
}

console.log(greaterThanY([1, 2, 3, 4, 5, 6], 2)) //expecting 4


//Max, min, average
function MaxMinAvg(arr) {
    var min = arr[0]
    var max = arr[0]
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
        sum += arr[i]
    }
    console.log("The max value is:", max)
    console.log("The min value is:", min)
    console.log("The average is:", sum / arr.length)
}

MaxMinAvg([1, 2, 3, 4, 5])

//swap negatives for string
function NoNegative(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    return arr
}

console.log(NoNegative([-9, 1, 4, -3, 8, -1]))

//print odds 1-255
function OddsOnly(val) {
    var sum = 0
    for (var i = 0; i <= val; i++) {
        sum += i
    }
    return sum
}

console.log(OddsOnly(255))

//iterate and print array
function PrintArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

PrintArray(["Hello", 1, 2, 3, "World", 5, 6, 7, "Berthoud"])


//Get and print average
function Average(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log("The average of this array is:", sum / arr.length)
}

Average([1, 2, 3, 4, 5, 3])

//Square values
function Squared(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
    }
    return arr
}

console.log(Squared([1, 2, 3, 4, 5]))

//Zero out negatives
function Zeroed(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr
}

console.log(Zeroed([-9, 1, -7, 8, -4, 5, -2]))


//shift array values
function ShiftForward(arr) {
    for (var i = 1; i < arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

console.log(ShiftForward([1,2,3,4,5]))


