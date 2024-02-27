function solution(X, Y) {
    let common = []
    var answer = '';
    const objectY = {}
    for(let i in Y){
        if(objectY[Y[i]] == undefined) objectY[Y[i]] = 1
        else objectY[Y[i]] += 1
    }
    console.log(objectY)
    for(let i in X){
        if(objectY[X[i]] != undefined && objectY[X[i]] > 0){
            objectY[X[i]] -= 1
            common.push(X[i])
        }
    }
    
    answer = common.sort().reverse().join("")
    if(answer.length == 0) return "-1"
    if(Array.from(new Set(common)).join('') == "0") return "0"
    
    return answer;
}