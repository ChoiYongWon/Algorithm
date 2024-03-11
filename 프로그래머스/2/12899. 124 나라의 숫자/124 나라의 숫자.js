function solution(n) {
    var answer = '';
    let num = n
    let r
    
    while(num != 0){
        r = (num) % 3
        if(r == 0){
            r = 4
            num -= 1
        }
        answer = r + answer
        num = Math.floor(num / 3)
        
    }
    
    return answer;
}