// 주식의 index 무조건 필요!!!!!! 

function solution(prices) {
    var answer = [];
    let price = prices.map((p, i)=>[p, i])    
    let stack = []
    let price_length = price.length;
    
    
    while(price_length > 0){
        
        // const p = price.shift()
        // shift의 시간 복잡도는 O(N)이다 -> 이거 때문에 효율성 걸림;;
        const p = price[price.length - price_length--]
        
        if(stack.length == 0) {
            stack.push(p)
            continue
        }
            
        // 주식 유지
        if(stack[stack.length - 1][0] <= p[0]) {
            stack.push(p)
            continue
        }

        // 주식 유지 못함
        // stack의 맨 위가 p보다 클 때
        while(stack.length > 0 && stack[stack.length-1][0] > p[0]){
            let top = stack.pop() // top 없앰
            answer[top[1]] = p[1] - top[1] // p의 index에서 top의 index를 뺀 값
        }
        stack.push(p)
    }
    
    // stack에 남은 주식들 prices 길이에서 원래 주식 index만큼 빼줌 
    for(let i in stack){
        answer[stack[i][1]] = prices.length - 1 - stack[i][1]
    }

  
    return answer;
}