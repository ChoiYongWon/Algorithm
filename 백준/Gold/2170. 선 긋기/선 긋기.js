let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").slice(1).map(data=>data.split(" ").map(Number))

input.sort((a, b)=> a[0] - b[0]) // 시작값 기준으로 정렬

// 시작값 기준으로 정렬을 했으니까 우리는 right 값만 계속 갱신해주면 됨

let collapsedLine = [] // 겹치는 선 저장하는 배열

let left = input[0][0] // 가장 작은 좌표
let right = input[0][0] // 점점 큰 값으로 갱신

for(let i=0;i<input.length;i++){
    if(input[i][0] > right) { // 순회하는 선의 시작 값이 right보다 크면 겹치지 않으니까 collapsedLine에 새로 등록
        collapsedLine.push([left, right])
        left = input[i][0]
        right = input[i][0]
    }
    if(input[i][1] > right) right = input[i][1] // 순회하는 선의 끝 값이 right보다 크면 겹치니까 right 갱신
    
}

collapsedLine.push([left, right]) // 모두 순회 했을 때 나머지 값 등록

let sum = 0;

for(let i=0;i<collapsedLine.length;i++){ // 겹치는 선들 길이 합쳐주는 로직
    sum += collapsedLine[i][1] - collapsedLine[i][0]
}

console.log(sum)