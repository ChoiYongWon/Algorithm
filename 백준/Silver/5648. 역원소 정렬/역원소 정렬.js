let numbers = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").filter(e => e !== '').reduce((acc, cur)=>[...acc, ...cur.split(" ")], []).map(Number).splice(1)
let reverse = numbers.map(n=>Number(String(n).split("").reverse().join("")))
console.log(reverse.sort((a, b)=> a - b).join("\n"))