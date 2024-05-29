let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").splice(1)
const A = input[0].split(" ").map(Number)
const B = input[1].split(" ").map(Number)

A.sort((a, b)=>a - b)
B.sort((a, b)=>b - a)

let S = 0;

for(let i=0;i<A.length;i++){
    S += A[i] * B[i]
}

console.log(S)


