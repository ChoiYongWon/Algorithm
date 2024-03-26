function solution(s) {
    var answer = 0;
    let str = s
    
    const map = {
        '[' : ']',
        '(' : ')',
        '{' : '}',
    }
    
    function valid(str){
        const stack = []
        for(let i in str){
            if(str[i] == '[' || str[i] == '(' || str[i] == '{') stack.push(str[i])
            else{
                if(stack.length == 0) return false
                const pop = stack.pop()
                if(str[i] != map[pop]) return false
            }
        }
        if(stack.length != 0) return false
        return true
    }
    
    for(let i in str){
        answer += valid(str) ? 1 : 0
        str = str.slice(1) + str[0]
    }
    
    return answer;
}