let [input, ...info]= require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")
const [M, N, K] = input.split(" ").map(Number)

const board =  Array.from({length: M}, () =>  Array.from({length: N}, () => 0))

function bfs(x, y){
    let count = 0
    let queue = [[x,y]]
    const DIRECTION = [[1,0], [0,1], [-1,0], [0,-1]]
    while(queue.length){
        count += 1
        const [x, y] = queue.pop()
        if(board[x][y] == 0) board[x][y] = 1
        
        for(let i=0;i<DIRECTION.length;i++){
            // 벽에 막힐때
            if(!((0 <= x + DIRECTION[i][0] && x + DIRECTION[i][0] < M) && (0 <= y + DIRECTION[i][1] && y + DIRECTION[i][1] < N))) continue
            if(board[x + DIRECTION[i][0]][y + DIRECTION[i][1]] == 0){
                queue.push([x + DIRECTION[i][0], y + DIRECTION[i][1]])
                board[x + DIRECTION[i][0]][y + DIRECTION[i][1]] = 1
            }
        }
    }
    return count
}


for(let i=0;i<info.length;i++){
    const [sc, sr, ec, er] = info[i].split(" ").map(Number)
    const width = ec - sc;
    const height = er - sr;

    for(let r=0;r<height;r++){
        for(let c=0;c<width;c++){
            board[sr+r][sc+c] = 1
        }
    }
}

let count = 0
let area = []
for(let i=0;i<M;i++){
    for(let j=0;j<N;j++){
        if(board[i][j] == 0){
            count += 1
            area.push(bfs(i, j))
        }
    }
}

console.log(count)
console.log(area.sort((a,b)=>a-b).join(" "))



