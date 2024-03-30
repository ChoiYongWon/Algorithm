function solution(maps) {
    var answer = 0;
    
    const visited = maps.map(row=>row.map(data=>0))
    const maxR = maps.length
    const maxC = maps[0].length
    const dr = [1, -1, 0, 0]
    const dc = [0, 0, 1, -1]
    const queue = []
    
    queue.push([0,0,1])
    visited[0][0] = 1
    
    while(queue.length > 0){
        const coord = queue.shift()
        const [r, c] = [coord[0], coord[1]]
        
        // if(r == maxR-1 && c == maxC-1) return count
        for(let i in dr){
            if(r+dr[i] < 0 || r+dr[i] >= maxR || c+dc[i]< 0 || c+dc[i] >= maxC) continue
            if(maps[r+dr[i]][c+dc[i]] == 0 || visited[r+dr[i]][c+dc[i]] >= 1) continue
            queue.push([r+dr[i], c+dc[i]])
            visited[r+dr[i]][c+dc[i]] = visited[r][c] + 1
            
        }
    }
    
    if(visited[maxR-1][maxC-1] > 0) return visited[maxR-1][maxC-1]

    return -1;
}