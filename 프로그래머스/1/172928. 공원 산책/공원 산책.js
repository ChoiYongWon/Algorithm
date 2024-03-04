function isOut(w, h, x ,y){
    return y >= w || y < 0 || x >= h || x < 0
}

function hasObstacle(park, sx, sy, dx, dy, step){
    if(step+1 == 0) return 0
    if(park[sx][sy] == 'X') return 1
    return hasObstacle(park, sx + dx, sy + dy, dx, dy, step - 1 )
}

function solution(park, routes) {
    var answer = [];
    
    const width = park[0].length
    const height = park.length
    
    let [sx, sy] = [Math.floor(park.join("").indexOf("S")/width), park.join("").indexOf("S")%width]
    for(let i in routes){
        const direction = routes[i].split(" ")[0]
        const step = Number(routes[i].split(" ")[1])
        
        if(direction == 'N'){
            if(isOut(width, height, sx - step, sy) || hasObstacle(park, sx, sy, -1, 0, step)) continue
            sx -= step
        }
        if(direction == 'S'){
            if(isOut(width, height, sx + step, sy) || hasObstacle(park, sx, sy, 1, 0, step)) continue
            sx += step
        }
        if(direction == 'W'){
            if(isOut(width, height, sx, sy - step) || hasObstacle(park, sx, sy, 0, -1, step)) continue
            sy -= step
        }
        if(direction == 'E'){
            if(isOut(width, height, sx, sy + step) || hasObstacle(park, sx, sy, 0, 1, step)) continue
            sy += step
        }
        
    }
    
    answer = [sx, sy]
    
    return answer;
}