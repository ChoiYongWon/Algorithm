let input = require("fs").readFileSync(0, 'utf-8').toString().trim().replace(/\\r/g,"").replace(/\\s/g,"").split("\n")
let house = Number(input[0].split(" ")[0])
let router = Number(input[0].split(" ")[1])
let coord = input.splice(1).map(Number).sort((a, b)=>a-b)

let left = 1
let right = coord[coord.length-1] - coord[0]
let answer = 0

while(left<=right){
    let mid = Math.floor((right + left) / 2)
    let [count] = coord.reduce((acc, cur)=>{
        if(cur >= (acc[1] + mid)) {
            acc[1] = cur
            acc[0]++
        }
        return acc
    }, [1, coord[0]]) // [최대 공유기 수(시작점에 1개), 초기 acc]
    
    if(count >= router){ // 최대 설치할 수 있는 공유기 수가 주어진 공유기 수 보다 적거나 같으면
        left = mid + 1
        answer = mid

    }else right = mid - 1
}

console.log(answer)