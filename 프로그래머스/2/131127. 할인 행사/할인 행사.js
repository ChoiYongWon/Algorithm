function solution(want, number, discount) {
    var answer = 0;
    const all_want = []
    
    for(let i=0;i<want.length;i++){
        for(let j=0;j<number[i];j++){
            all_want.push(want[i])
        }
    }
    
    
    for(let i=0;i<discount.length-9;i++){
        const days = discount.slice(i,i+10)
        const wants = [...all_want]
        let j;
        
        for(j=0;j<days.length;j++){
            const index = wants.indexOf(days[j])
            if(index != -1) wants.splice(index, 1)
            
        }
        
        if(wants.length == 0) answer++
        
        
    }
    return answer;
}