let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")
let [node_count, edge_count, start_node] = input[0].split(" ").map(Number)
let edges = input.splice(1).map(row=>row.split(" ").map(Number))

let dfs_visited = Array.from({length: node_count+1}).fill(0)

let dfs_output = []
let bfs_output = []

let linked_map = {}


function dfs(start){
    if(dfs_visited[start]) return
    dfs_visited[start] = true
    dfs_output.push(start)
    for(let i=0;i<linked_map[start].length;i++){
        dfs(linked_map[start][i])
    }
}

function bfs(start){
    let queue = [start]
    let visited = Array.from({length: node_count+1}).fill(0)
    while(queue.length){
        const current_node = queue.shift()
        if(visited[current_node]) continue
        visited[current_node] = true
        bfs_output.push(current_node)


        for(let i=0;i<linked_map[current_node].length;i++){
            queue.push(linked_map[current_node][i])
        }
    }
}


for(let i=0;i<node_count;i++){
    linked_map[i+1] = []
}

for(let i=0;i<edges.length;i++){
    const edge = edges[i]
    const start_node = edge[0]
    const end_node = edge[1]
    linked_map[start_node].push(end_node)
    linked_map[end_node].push(start_node)
}

for(let i=0;i<node_count;i++){
    linked_map[i+1].sort((a, b)=> a-b)
}

dfs(start_node)
bfs(start_node)

console.log(dfs_output.join(" "))
console.log(bfs_output.join(" "))
