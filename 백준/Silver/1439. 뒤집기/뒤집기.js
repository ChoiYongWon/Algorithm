let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("")
let count = [0, 0]
let turn = input[0] // 시작 숫자 정보

count[turn] = 1 // 시작 숫자 ++

for(let i=0;i<input.length;i++){
    if(turn != input[i]) {
        count[input[i]] ++ // 새로 나타난 숫자 count ++
        turn = input[i]
    }
}

console.log(Math.min(...count))