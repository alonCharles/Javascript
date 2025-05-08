//  const first = 'Successes is on the horizon';

//  const reverse = (str) => {
//     //with methods
//     // let backwards = first.split(' ');
//     // let reversed = backwards.reverse()
//     // console.log(reversed.toString().replaceAll(',', ' '))
//     // pure js
//     let reversed = ""
//     for(let i = str.length - 1; i >= 0 ; i--) {
//         reversed += str[i]
//     }
//     return reversed
//  }

//  const longest = () => {
//     let check = first.split(' ');
//     let long = ""

//     for(let word of check) {
//         if(word.length > long.length) {
//             long = word
//         }
//     }
//     return long
//  }

//  let nums = [1,4,7,3,3,6]
//  const dup = (arr) => {
//     let singles = []
//     arr.forEach((element) => {
//         if(!singles.includes(element)){
//             console.log(element)
//         }
//     })
//     console.log(singles);
//  }
//  dup(nums)

// currying example
const sum = (a) => {
    return function(b) {
        return function (c) {
            console.log(a + b + c)
        }
    }
}
sum(1)(2)(3)

const secret = () => {
    const magicWord = "closure"
    return () => magicWord
}
//when dealing with closures I have to make sure I set the closure function to another variable,
//otherwise the call will just return the helper function inside closure
const callClosure = secret()
console.log(callClosure())

const vowelCount = (str) => {
    const vowels = ["a", "e", "i","o","u"];
    let count = 0;

    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count ++
        }
    }
    return count;
   
}

