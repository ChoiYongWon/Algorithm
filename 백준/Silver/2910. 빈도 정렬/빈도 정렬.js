let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").splice(1)
const data = input[0].split(" ").map(Number)
const map = {}
let order = 1;

for(let i=0;i<data.length;i++){
    if(map[data[i]] == undefined) {
        map[data[i]] = {}
        map[data[i]].order = order++
        map[data[i]].count = 0
    }
    map[data[i]].count += 1
}

const preprocess = Object.keys(map).map(n=>{
    return [n, map[n].count, map[n].order] // [숫자, 빈도, 먼저 들어온 순서]
})

preprocess.sort((a, b)=>{
    if(a[1] !== b[1]) return b[1] - a[1]
    return a[2] - b[2]
})

for(let i=0;i<preprocess.length;i++){
    for(let j=0;j<preprocess[i][1];j++){
        process.stdout.write(preprocess[i][0]+" ");
    }
}