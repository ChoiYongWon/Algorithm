let [info, sticks] = require("fs").readFileSync(0, 'utf-8').toString().trim().split("\n")
const [M, N] = info.split(" ").map(Number)
sticks = sticks.split(" ").map(Number).sort((a, b)=>a-b)
let left = 1
let right = sticks[sticks.length-1]
let mid = Math.floor((left+right)/2)
let answer = 0

while(left<=right){
    
    const sum = sticks.reduce((acc, cur)=>acc+Math.floor(cur / mid), 0)
    if(sum >= M) {
        answer = mid
        left = mid + 1
    }
    else right = mid - 1 
    mid = Math.floor((left+right)/2)
}
console.log(answer)