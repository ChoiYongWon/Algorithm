function solution(progresses, speeds) {
    var answer = [];
    let progress = [...progresses]
    let speed = [...speeds]
    
    
    while(progress.length > 0){
        // 진행률을 진행속도 만큼 더함
        for(let i in progress) progress[i] += speed[i] 
        
        let count = 0;
        
        // 첫번째 진행률이 100이 크면 계속 뺴줌
        while(progress[0] >= 100){
            progress.shift()
            speed.shift()
            count ++
        }
        if(count > 0) answer.push(count)
        
    }
    
    return answer;
}