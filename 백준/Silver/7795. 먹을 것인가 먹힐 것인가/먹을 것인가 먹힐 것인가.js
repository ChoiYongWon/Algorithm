let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")

let attempt = Number(input[0])
let data = input.slice(1)

for(let i=0;i<attempt;i++){
    let currentData = data.slice(i * 3, (i+1) * 3)
    const A = currentData[1].split(" ").map(Number)
    const B = currentData[2].split(" ").map(Number).sort((a,b)=>b-a)
    const sum = A.reduce((acc, cur)=>{
        let index = 0;
        for(let i=0;i<B.length;i++){
            index = i
            if(B[i] < cur) break
            if(i == B.length-1) index = -1
        }
        if(index != -1){
            return acc + B.length - index
        }
        
        return acc        
    }, 0)
    console.log(sum)
}

