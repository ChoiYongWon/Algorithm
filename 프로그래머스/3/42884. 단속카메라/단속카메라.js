function solution(routes) {
    var answer = 0;
    
    // 진출점을 기준으로 정렬
    let sorted_routes = routes.sort((a,b)=>a[1]-b[1])
    
    let fivot = -30001;
    
        
    for(let i=0;i<sorted_routes.length;i++){
        
        // 진입점이 fivot보다 크면 진출점으로 fivot을 바꿈
        if(sorted_routes[i][0] > fivot) {
            fivot = sorted_routes[i][1];
            answer++
            continue;
        }        
    }
    
    return answer;
}