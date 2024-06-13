let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n").slice(1)

for(let i=0;i<input.length;i++){
    const line = input[i].split(" ")
    const A = line[0].split("").sort().join()
    const B = line[1].split("").sort().join()
    if(A == B) console.log("Possible")
    else console.log("Impossible")
}