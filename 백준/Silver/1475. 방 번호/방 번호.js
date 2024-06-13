let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim()

let num_map = {}

for(let i=0;i<=9;i++){
    num_map[i] = 0
}

for(let i=0;i<input.length;i++){
    num_map[input[i]]++
}

const half = Math.ceil((num_map[6] + num_map[9]) / 2)
num_map[6] = half
num_map[9] = half

console.log(Math.max(...Object.values(num_map)))
