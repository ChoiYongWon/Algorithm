let data = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").slice(1)

data.sort()

console.log(data.sort((a, b)=> {
    if(a.length != b.length) return a.length - b.length
    if(a.length == b.length) return a.split("").filter(l=>!isNaN(Number(l))).reduce((acc, cur)=>acc+Number(cur), 0) - b.split("").filter(l=>!isNaN(Number(l))).reduce((acc, cur)=>acc+Number(cur), 0)
}).join("\n"))
