let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")

let v_size = Number(input[0])
let edge_info = input.slice(1).map(row=>row.split(" ").slice(0, -1).map(Number))

let v = Array.from( { length : v_size + 1 }, ()=>[]) // 정점의 연결 상태
let e = Array.from( { length : v_size + 1}, ()=>[]) // 간선의 가중치

for(let i=0;i<edge_info.length;i++){
    let to = edge_info[i][0]
    let froms = edge_info[i].slice(1)
    for(let j=0;j<froms.length;j+=2){
        let from = froms[j]
        let weight = froms[j+1]

        v[to].push(from)
        e[to][from] = weight // 간선 가중치
        e[from][to] = weight // 간선 가중치
    }
}


function farthest_node(from, to){
    let result = [from, 0]

    function dfs(from, to, distance){
        if(result[1] < distance) result = [to, distance]
        for(let i=0;i<v[to].length;i++){ // from과 연결되어있는 정점 순회
            if(from != v[to][i]) {
                dfs(to, v[to][i], Number(distance) + Number(e[to][v[to][i]]))
            }
        }
    }

    dfs(from, to, 0)
    
    return result
}

const first = farthest_node(1, 1) // 임의의 정점에서 가장 먼 정점까지
const second = farthest_node(first[0], first[0])

console.log(second[1])