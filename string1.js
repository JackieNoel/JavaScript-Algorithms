// REMOVE BLANKS
function cutOutSpaces(str) {
    var newString = []
    newString = str.split("")
    var i = 0
    while (i < newString.length) {
        // console.log(newString[i])
        if (newString[i] == " ") {
            newString.splice(i, 1);
        }
        else {
            ++i
        }
    }
    console.log(newString.join(""));
}

cutOutSpaces('Pl ayTha tF u nkyM usi c')


// GET DIGITS
function getDigits(string) {
    var string2 = []
    var string3 = ""
    string2 = string.split("")
    console.log(string2.join(""))
    for (var x = 0; x < string2.length; x++) {
        if (string2[x] == '0' || string2[x] == '1' || string2[x] == '2' || string2[x] == '3' || string2[x] == '4' || string2[x] == '5' || string2[x] == '6' || string2[x] == '7' || string2[x] == '8' || string2[x] == '9') {
            string3 += string2[x]
        }
    }
    return string3
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))


// ACRONYMS
function acronyms(str) {
    ret_string = ""
    temp_arr = []
    temp_arr = str.split("")
    console.log(temp_arr.join(""))
    ret_string = temp_arr[0]
    for (var x = 0; x < temp_arr.length; x++) {
        if (temp_arr[x - 1] == " ") {
            ret_string += temp_arr[x]
        }
    }
    console.log(ret_string.toUpperCase())
}

acronyms("Live from New York, it's Saturday Night!")


// ZIP ARRAY INTO DICTIONARY
// function zipIt(arr1, arr2) {
//     emptyDict = {}
//     for (var x = 0; x < arr1.length; x++) {
//         console.log(x, arr1[x], arr2[x])
//         emptyDict[arr1[x]] = arr2[x]
//         console.log(emptyDict)
//     }
// }

// zipIt(["abc", 3, "yo"], [42, "wassup", true])

function zipIt(arr1, arr2) {
    emptyDict = {}
    for (var x = 0; x < arr2.length; x++) {
        console.log(x, arr1[x], arr2[x])
        emptyDict[arr1[x]] = arr2[x]
        console.log(emptyDict)
    }
}

zipIt(["abc", 3, "yo"], [42, "wassup", true])


// INVERT HASH
function invert(dict) {
    console.log(dict)
    var holder = {}
    for (let x in dict) {
        // console.log(x + " is " + dict[x])
        holder[dict[x]] = x
        for (var i = 0; i < holder.length; i++) {
            holder[i] = x
        }
    }
    console.log(holder)
}

invert({ "name": "Zaphod", "charm": "high", "morals": "dicey" })
