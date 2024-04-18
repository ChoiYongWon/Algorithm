let input = require("fs").readFileSync(0, 'utf-8').toString().trim().replace(/\r/g,"").split("\n")
const log = input.slice(1)
const [start, end, stream_end] = input[0].split(" ").map(time=>{
    return getDate(time)
})
const cache = {}
let count = 0

function getDate(time){
    const hour = Number(time.split(":")[0])
    const minute = Number(time.split(":")[1])

    return hour * 60 + minute
}

for(let i=0;i<log.length;i++){
    const date = getDate(log[i].split(" ")[0])
    const name = log[i].split(" ")[1]

    // 시작 전 (입장)
    if(date <= start) cache[name] = "enter"

    // 종료 뒤 스트리밍 종료 전 (퇴장)
    if(date >= end && date <= stream_end && cache[name] == "enter") {
        cache[name] = 'exit' // 두번 퇴장 방지
        count++
    }
}

console.log(count)

