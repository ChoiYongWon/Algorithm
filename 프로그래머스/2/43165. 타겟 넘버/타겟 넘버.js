function dfs(numbers, target, depth, sum){
    if(depth == numbers.length){ // 최대 깊이 도달 시
        if(sum == target) return 1
        return 0
    }
    
    let case1 = dfs(numbers, target, depth+1, sum + numbers[depth])
    let case2 = dfs(numbers, target, depth+1, sum - numbers[depth])
    
    return case1 + case2
}

function solution(numbers, target) {
    var answer = 0;
    
    answer = dfs(numbers, target, 0, 0)
    
    return answer;
}