let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").slice(1).map(data=>data.split(" ").map(Number))

input.sort((a, b)=> a[0] - b[0])

let collapsedLine = []

let left = input[0][0] // 가장 작은 좌표
let right = input[0][0]

for(let i=0;i<input.length;i++){
    if(input[i][0] > right) { // 새로 등록
        collapsedLine.push([left, right])
        left = input[i][0]
        right = input[i][0]
    }
    if(input[i][1] > right) right = input[i][1]
    
}

collapsedLine.push([left, right])

let sum = 0;

for(let i=0;i<collapsedLine.length;i++){
    sum += collapsedLine[i][1] - collapsedLine[i][0]
}

console.log(sum)