let input = require("fs").readFileSync(0, 'utf-8').toString().trim().replace(/\r/g,"")
const cache = {}

for(let i=1;i<=input.length;i++){
    for(let j=0;j<input.length - i + 1; j++){
        const str = input.slice(j, j+i);
        cache[str] = true
    }
}

console.log(Object.keys(cache).length)