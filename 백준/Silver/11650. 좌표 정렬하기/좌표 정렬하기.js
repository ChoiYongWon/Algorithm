let numbers = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").slice(1).map(n=>n.split(" ").map(Number))

console.log(numbers.sort((a, b)=>{
    if(a[0] != b[0]) return a[0] - b[0]
    return a[1] - b[1]
}).map(n=>n.join(" ")).join("\n"))