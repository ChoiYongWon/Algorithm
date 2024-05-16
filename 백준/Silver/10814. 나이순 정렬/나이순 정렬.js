let data = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").slice(1)
.map(line=>[Number(line.split(" ")[0]), line.split(" ")[1]])

console.log(data.sort((a, b)=> {
    return a[0] - b[0]
}).map(line=>line.join(" ")).join("\n"))