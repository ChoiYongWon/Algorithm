let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim()

let suffix = []

for(let i=0; i<input.length;i++){
    suffix.push(input.slice(i))
}

suffix.sort()

console.log(suffix.join("\n"))
