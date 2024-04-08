function solution(routes) {
    var answer = 0;
    let sorted_routes = routes.sort((a,b)=>a[1]-b[1])
    
    let fivot = -30001;
        
    for(let i=0;i<sorted_routes.length;i++){
        if(sorted_routes[i][0] > fivot) {
            fivot = sorted_routes[i][1];
            answer++
            continue;
        }        
    }
    
    return answer;
}