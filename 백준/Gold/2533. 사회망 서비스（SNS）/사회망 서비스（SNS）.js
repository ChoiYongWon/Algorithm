let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")
let v_size = Number(input.shift())
input = input.map(row=>row.split(" ").map(Number))

let friend = Array.from({length:v_size+1}, ()=>[]) // 친구 관계

// 초기화
for(let i=0;i<input.length;i++){
    const from = input[i][0]
    const to = input[i][1]

    friend[from].push(to)
    friend[to].push(from)
}

// 재사용성 고려
function find_lowest_ea(friend, v){

    let visited = Array.from({length:v_size+1}, ()=>0)
    let dp = Array.from({length:v_size+1}, ()=>[1, 0])

    function dfs(v){
        visited[v] = true
        for(let i=0;i<friend[v].length;i++){
            const next = friend[v][i] // 자식
            if(!visited[next]) { // 방문 확인
                dfs(next)
                dp[v][1] += dp[next][0]; // 얼리 어답터가 아닐 경우 무조건 자식은 얼리 어답터
                dp[v][0] += Math.min(dp[next][0], dp[next][1]) // 얼리 어답터일 경우 조건부
            }
        }
    }

    dfs(v, v)

    return Math.min(dp[1][0], dp[1][1])
}


let answer = find_lowest_ea(friend, 1)
console.log(answer)