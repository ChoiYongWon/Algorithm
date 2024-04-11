function solution(n, computers) {
    const map = {}
    var answer = 0;
    
    // 해당 정점과 연결되어있는 모든곳 탐색
    function dfs(i){
        map[i] = true // 방문한곳
        for(let j=0;j<n;j++){
            if(i == j) continue
            if(computers[i][j] == 1 && map[j] == undefined) dfs(j)
        }
    }
    
    for(let i=0;i<n;i++){
        if(map[i] == undefined) {
            dfs(i)
            answer += 1
        }
    }
    
    return answer;
}