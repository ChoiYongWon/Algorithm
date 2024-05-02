let [computer, link, ...log] = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")

// 아 좀 짜치는데?
computer = Number(computer)
link = Number(link)

let map = Array.from({length: computer}, () => Array.from({length: computer}, () => 0));

let effected = {}


for(let i=0;i<log.length;i++){
    const r = Number(log[i].split(" ")[0]) - 1
    const c = Number(log[i].split(" ")[1]) - 1
    map[r][c] = 1
    map[c][r] = 1
}


function dfs(num){
    effected[num] = true
    for(let i=0;i<computer;i++){
        // 감염되지 않았고 연결되었을때
        if(!effected[i] && map[num][i] == 1) dfs(i)
    }
}

dfs(0)

// 자기 자신 빼야됨
console.log(Object.keys(effected).length - 1)
