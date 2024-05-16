let numbers = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").map(Number).slice(1)

console.log(numbers.sort((a, b)=>b - a).join("\n"))