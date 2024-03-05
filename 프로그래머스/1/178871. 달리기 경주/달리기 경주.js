// splice로 변경하니까 시간초과 뜸

function solution(players, callings) {
    
    let rank = {}
    let player = {}
    let answer = []
    
    players.forEach((name, index) => {
        rank[name] = index+1;
        player[index+1] = name
    });
    
    
    
    for(const i in callings){
        const cur_rank = rank[callings[i]] // 추월한 사람의 순위
        const ahead_player = player[cur_rank-1] // 추월 당한 사람 이름
                
        rank[callings[i]]--; // 추월한 자
        rank[ahead_player]++; // 추월 당한 자
        
        player[cur_rank-1] = callings[i]; // 추월한 자
        player[cur_rank] = ahead_player // 추월 당한 자
        
    }
    
    
    answer = Object.values(player)
    
    return answer;
}