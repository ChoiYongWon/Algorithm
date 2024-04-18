let input = require("fs").readFileSync(0, 'utf-8').toString().trim().replace(/\r/g,"").split("\n")
const [address_length, find_length] = input[0].split(" ").map(Number)
const password_info = input.slice(1, address_length+1)
const find_info = input.slice(address_length+1)
const cache = {}

for(let i=0;i<password_info.length;i++){
    const site = password_info[i].split(" ")[0]
    const pw = password_info[i].split(" ")[1]
    cache[site] = pw
}

for(let i=0;i<find_info.length;i++){
    const site = find_info[i]
    console.log(cache[site])
}
