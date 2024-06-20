let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")
let v_size = Number(input.shift())
input = input.map(row=>row.split(" ").map(Number))

let friend = Array.from({length:v_size+1}, ()=>[]) // 친구 관계
let dp = Array.from({length:v_size+1}, ()=>[1, 0])
let visited = Array.from({length:v_size+1}, ()=>0)


for(let i=0;i<input.length;i++){
    const from = input[i][0]
    const to = input[i][1]

    friend[from].push(to)
    friend[to].push(from)
}

function dfs(v){
    visited[v] = true
    for(let i=0;i<friend[v].length;i++){
        const next = friend[v][i]
        if(!visited[next]) { // 이전 노드가 아닐 시
            dfs(next)
            dp[v][1] += dp[next][0]; // 얼리 어답터가 아닐 경우 무조건 자식은 얼리 어답터
            dp[v][0] += Math.min(dp[next][0], dp[next][1]) // 얼리 어답터일 경우 조건부
        }
    }
}

dfs(1, 1)
console.log(Math.min(dp[1][0], dp[1][1]))