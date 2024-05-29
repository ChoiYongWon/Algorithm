let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").splice(1).map(Number)

let index = input.length - 1 // 맨 끝 index
let tmp = input[index]
let count = 0

while(index){
    index--
    if(input[index] >= tmp) { // 내림차순이 아닐 시
        const gap = (input[index] - tmp + 1)
        count += gap
        tmp = (input[index] - gap)
    }else {
        tmp = input[index]
    }
}

console.log(count)


