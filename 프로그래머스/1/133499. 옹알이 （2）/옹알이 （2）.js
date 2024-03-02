function solution(babbling) {
    var answer = 0;
    
    const regexp = /((aya)|(ye)|(woo)|(ma))(?!\1)/g
    answer = babbling.reduce((acc, cur)=>{
        
        if(cur.replace(regexp, '').length == 0) acc+=1
        return acc
    }, 0)
    return answer;
}