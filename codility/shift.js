let A = [1,2,3,4]
let K =1

function shift (A,K) {
    let shiftedNum
    for(let i = 0; i <=K; i++) {
        shiftedNum = A.pop()
        A.reverse()
        A.push(shiftedNum)
        A.reverse()
    }
    
     console.log(A)
     // vanilla JS with minimal built in functions
     function shiftArrayRight(A) {
        let arrLength = A.length
        let B = new Array(arrLength)
        B[0] = A[arrLength -1]
        for(let i =1; i < arrLength;i++) {
            B[i] = A[i - 1]
        }
        return B
    }
    if( A.length == 0 || A == null){
        return A
    }

    for(let i=0; i < K; i++) {
        A = shiftArrayRight(A)
    }
    return A
}

shift(A,K)