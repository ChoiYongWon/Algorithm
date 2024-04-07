function solution(topping) {
    var answer = 0;
    const after = {}
    let after_size = 0
    const before = topping.reduce((acc, cur)=>{
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    let before_size = Object.keys(before).length
    
    for(let i=0;i<topping.length;i++){
        
        if(after[topping[i]]){
            after[topping[i]] = after[topping[i]] + 1
        // 왼쪽에 없는 토핑일 경우
        }else {
            after[topping[i]] = 1
            after_size++
            
        }
        // 오른쪽에 토핑이 하나밖에 없을 경우
        if(before[topping[i]] == 1){
            delete before[topping[i]]
            before_size--
        }
        else before[topping[i]]--
        if(after_size == before_size) answer++;
    }

    return answer;
}