let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")
let node_count = Number(input[0])
let edge = input.splice(1).map(row=>row.split(" ").map(Number))

const linked_map = {}
const parent = Array.from({ length: node_count+1 })

// 초기화
for(let i=0;i<node_count;i++){
    linked_map[i+1] = []
}

// 정점의 연걸 정보를 linked_map에 저장
for(let i=0;i<edge.length;i++){
    linked_map[edge[i][0]].push(edge[i][1])
    linked_map[edge[i][1]].push(edge[i][0])
}

let queue = [1]
// 각 정점의 부모를 parent 배열에 저장

while(queue.length){
    const parent_node = queue.shift()
    for(let j=0;j<linked_map[parent_node].length;j++){
        const current_node = linked_map[parent_node][j]
    
        if(parent[current_node] == undefined) {
            queue.push(current_node)
            parent[current_node] = parent_node
        }
    }
}


console.log(parent.splice(2).join("\n"))