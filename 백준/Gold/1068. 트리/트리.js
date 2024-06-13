let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")
let node_count = Number(input[0])
let parent_info = input[1].split(" ").map(Number)
let delete_node = Number(input[2])

let linked_map = {}
let root = -1

/*
1. 루트 노드가 0이 아닐 때
2. 루트 노드가 리프 노드 일때
3. 루트 노드를 삭제하면 0이 나와야됨
*/

for(let i=0;i<node_count;i++){
    linked_map[i] = []
}


// 삭제된 노드는 애초에 추가를 안함
for(let i=0;i<parent_info.length;i++){
    if(parent_info[i] >= 0 && i != delete_node && parent_info[i] != delete_node) linked_map[parent_info[i]].push(i)
    if(parent_info[i] == -1) root = i
}


let queue = [root]
let answer = 0

while(queue.length){
    const current_node = queue.shift()
    if(linked_map[current_node].length == 0) {
        answer++
    }

    const child_nodes = linked_map[current_node]
    for(let i=0;i<child_nodes.length;i++){
        queue.push(child_nodes[i])
    }
}

if(delete_node == root) console.log(0)
else console.log(answer)

