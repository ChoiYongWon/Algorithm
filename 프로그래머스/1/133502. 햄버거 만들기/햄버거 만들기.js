function solution(ingredient) {
    var answer = 0;
    
    for(let i=0;i<ingredient.length;i++){
        if(''+ingredient[i]+ingredient[i+1]+ingredient[i+2]+ingredient[i+3] == "1231"){
            ingredient.splice(i, 4);
            answer++
            i -= 5
        }
    }
    
    
    return answer
} 