let input = require("fs").readFileSync(0, 'utf-8').toString().trim().replace(/\r/g,"").split("\n")
const length = Number(input[0])
const log = input.slice(1)

const cache = {}

for(let i=0;i<length;i++){
    const name = log[i].split(" ")[0]
    const status = log[i].split(" ")[1]

    // (입장)
    if(status == 'enter'){
        cache[name] = 'enter'
    }
    if(status == 'leave' && cache[name] == 'enter'){
        delete cache[name]
    }
}

console.log(Object.keys(cache).sort().reverse().join('\n'))
// Object.keys(cache).sort().reverse().forEach(name=>console.log(name))