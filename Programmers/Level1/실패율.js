function solution(N, stages) {
    let answer = [];
    for(let i=1; i<=N; i++){
        let tried = stages.filter((data)=>data>=i).length
        let notCleared = stages.filter((data)=>data==i).length
        answer.push([i,notCleared/tried])
    }
    answer.sort((a,b)=> b[1] - a[1])
    return answer.map(data=>data[0]);
}