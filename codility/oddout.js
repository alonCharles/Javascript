let A = [9,3,9,3,9,7,9]
// let A = [4,9,0,9,4]
function oddout (A) {
    // A.forEach((n) => {
    //     if(  A.lastIndexOf(n) === A.indexOf(n)) {
    //         console.log(n)
    //     } 
    // })
    let odd = []
    for(let i = 0; i < A.length; i++) {
        if(A.indexOf(A[i]) === A.lastIndexOf(A[i])) {
                odd.push(A[i])
            console.log(odd)
        }
        
    }
}

oddout(A)