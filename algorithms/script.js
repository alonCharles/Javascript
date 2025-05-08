// reverse string/ number
//with methods
// const reverse = (str) => {
//     let reversed = '';
//     let back = str.split('');
//     reversed = back.reverse();
//     return reversed.toString();
// }

//pure js
// const reverse = (str) => {
//     let reversed = '';
//     for (let i = str.length -1; i>= 0; i-- ){
//         reversed += str[i]
//     }
//     for (let char of str) {
//         reversed = char + reversed
//     }
// }

// const reverseNum = (n) => {
//     let reversed = n.toString().split('').reverse().join('').replaceAll(',', ' ');
//     return parseInt(reversed) * Math.sign(n)
    
// }

// //check if palindrome
// const palindrome = (str) => {
//     let reversed = str.split('').reverse().join('');
//     if (str === reversed) {
//         return true
//     }
//     return false
// }
// //2-pointers method
// const twopointers = (str) => {
//     let first = 0;
//     let last = str.length -1;

//     while (first < last) {
//         if(str[first] != str[last]) {
//             return false
//         }
//         else {
//             first++;
//             last--
//         }
//         return true;
//     }
// }

// max character in a string

// const maxChar = (str) => {
//     let charMap = {}
//     let max = 0;
//     let maxChar = 0;
//     for (let char of str) {
//         charMap[char] ? charMap[char] + 1 : charMap[char] =1
//         // if(charMap[char]){
//         //     charMap[char] = charMap[char] + 1
//         // } else {
//         //     charMap[char] = 1
//         // }
//     } 
//     for (let key in charMap) {
//         if(charMap[key] > max) {
//             max = charMap[key]
//             maxChar = key
//         }
//     }
//     console.log(maxChar)
// }

// maxChar("nnndie");

//split array into subarrays based on chunk size

// const chunk = (arr, size) => {
//     const result = []
//     let index = 0
//         while(index < arr.length){
//             result.push(arr.slice(index,index+size))
//             index+= size
//         }
//         console.log(result)
        
// }

// chunk([1,2,3,4], 2)

// // capitalize first letter in each word of a string
// const capitalize = (str) => {
//     let words = str.split(' ');
//     let result = []
//     for(let word of words) {
//         //could also use words.map() with the same code below
//         result.push(word[0].toUpperCase() + word.slice(1))
//     }
//     console.log(result.join().replaceAll(',', ' '))
    
// }

// capitalize('words for sentence');

// //check for anagrams
// const charMap = (str) => {
//     let charmap = {}
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//     for(let char of str) {
//         charmap[char] = ++charmap[char] || 1;
//     }
//     return charmap
// }

// const anagrams = (str1, str2) => {
//     const charMap1 = charMap(str1)
//     const charMap2 = charMap(str2)
//     if(Object.keys(charMap1).length !== Object.keys(charMap2).length) return false

//     for(let key in charMap1) {
//         if(charMap1[key] !== charMap2[key]) return false
//     }

//     return true
    
// }

// //using sort 
// const cleanString = (str) => {
//     return str.toLowerCase() .replace(/[^a-z0-9]/g, "").split('').sort().join()
// }
// const useSort = (str1,str2) => {
//     let first = cleanString(str1);
//     let second = cleanString(str2);
//     return first === second ? true : false
// }

// console.log(anagrams("rail safety", "fairy tales "))
// console.log(useSort("rail safety", "fairy tales "))

// count vowels

// const vowelCount = (str) => {
//     const vowels = ["a","e","i","o","u"];
//     let count = 0;
//     for(let char in str.toLowerCase()){
//         if(vowels.includes(str[char]))
//             count++
//     }
//     console.log(count)

// }
// vowelCount("aeieou")

// //fizzbuzz challenge

// const fizzBuzz = (n) => {
// for(let i = 1; i <=n; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz")
//     } else if(i % 3 === 0) {
//         console.log("fizz")
//     } else if(i % 5 ===0) {
//         console.log("buzz")
//     } else {
//         console.log(i)
//     }
// }
// }
// fizzBuzz(30)

//logging string steps

// const steps = (n) => {
//     for(let row = 1; row <= n; row++) {
//         let line = ''
//         for(let col=1; col<=n; col++){
//             if(col <= row) {
//                 line += '#'
//             } else {
//                 line += " "
//             }
            
//         }
//         console.log(line)
//     }
// }

// steps(5)

// logging pyramids

// const pyramids = (n) => {
//     let mid = Math.floor(2*n-1 / 2)
//     for(let row = 0; row<n; row++){
//         let line = ''
//         for(let col = 0; col < 2*n-1; col++) {
//             if(col >= mid - row && col <= mid + row) {
//                 line += '#'
//             } else 
//             line += ' '
//         }
//         console.log(line)
//     }
// }

// pyramids(3);

//spiral matrix
const matrix = (n) => {
    
}