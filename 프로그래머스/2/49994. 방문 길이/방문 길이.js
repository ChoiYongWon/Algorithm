function solution(dirs) {
    var answer = 0;
    const log = {}
    let [x, y] = [0, 0]
    
    function validate(x, y, dx, dy){
        if(x+dx > 5 || x+dx < -5 || y+dy > 5 || y+dy < -5) return [x,y] // 벽에 막히는 경우
        if(log[`${Math.min(x,x+dx)},${Math.min(y, y+dy)}-${Math.max(x,x+dx)},${Math.max(y, y+dy)}`] != undefined) return [x+dx, y+dy] // 이미 왔던 길
        log[`${Math.min(x,x+dx)},${Math.min(y, y+dy)}-${Math.max(x,x+dx)},${Math.max(y, y+dy)}`] = true
        answer += 1
        return [x+dx, y+dy]
        
    }
    
    for(let i in dirs){
        if(dirs[i] == 'U') [x,y] = validate(x, y, 0, 1)
        else if(dirs[i] == 'D') [x,y] = validate(x, y, 0, -1)
        else if(dirs[i] == 'R') [x,y] = validate(x, y, 1, 0)
        else if(dirs[i] == 'L') [x,y] = validate(x, y, -1, 0)
    }
    
    return answer;
}