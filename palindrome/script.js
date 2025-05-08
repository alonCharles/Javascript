const input = document.getElementById("input");

function reverseStr(str) {
    return str.split('').reverse().join().replaceAll(',','')
}


function check() {
    const value = input.value;
    let reversed = reverseStr(value)
    console.log(reversed)

    if (value === reversed) {
        alert("This is a Palindrome")
    } else {
        alert("Not a Palindrome")
    }
    input.value = ''
}