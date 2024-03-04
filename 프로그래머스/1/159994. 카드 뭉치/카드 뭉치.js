function solution(cards1, cards2, goal) {
    var answer = '';
    while(goal.length > 0){
        const match = goal.shift()
        if(cards1[0] == match) cards1.shift()
        else if(cards2[0] == match) cards2.shift()
        else return "No"
    }
    
    return "Yes"
    return answer;
}