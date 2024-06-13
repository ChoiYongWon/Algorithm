let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")
let sequence = input[1].split(" ").map(Number)
let target = Number(input[2])
/*
    1. 각 숫자의 index를 객체에 저장
    2. 순회하면서 target을 만들기 위한 숫자가 순회하는 숫자보다 큰지, 크다면 객체에 필요한 숫자가 있는지 검사
    3. 있으면 count up 
*/
const sequence_map = {}
let count = 0

for(let i=0;i<sequence.length;i++){
    sequence_map[sequence[i]] = true
}

for(let i=0;i<sequence.length;i++){
    const need = target - sequence[i]
    if(sequence[i] < need){
        if(sequence_map[need]) count++
    }
}

console.log(count)