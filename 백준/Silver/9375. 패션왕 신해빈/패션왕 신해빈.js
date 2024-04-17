let input = require("fs").readFileSync(0, 'utf-8').toString().trim().replace(/\r/g,"").split("\n")
const length = input[0].split(" ").map(Number)
let wear = {}

let index = 1

for(let i=0;i<length;i++){
    const wear_length = Number(input[index++])
    for(let j=0;j<wear_length;j++){
        const name = input[index].split(" ")[0]
        const type = input[index].split(" ")[1]
        if(!wear[type]) wear[type] = []
        wear[type].push(name)

        index++
    }
    const result =  + Object.keys(wear).reduce((acc, cur)=>((wear[cur].length+1) * acc), 1) - 1
    console.log(result)
    wear = {}
}