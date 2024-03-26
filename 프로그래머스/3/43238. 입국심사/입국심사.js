function solution(n, times) {
    var answer = 0;
    let maxTime = Math.floor(Math.max.apply(null, times) * n / times.length) // 최소값
    let minTime = Math.floor(Math.min.apply(null, times) * n / times.length) // 최대값
    while(minTime <= maxTime){
        
        let mid = Math.floor((maxTime+minTime)/2) // 중간 값
        let count = times.reduce((acc, cur)=> acc + Math.floor((mid/cur)), 0) // 해당 분 동안 심사관이 처리한 인원 수
        
        if(n<=count){ // 처리한 인원이 더 많으면 더 낮은 값 찾도록 -1
            maxTime = mid - 1
        }
        else{ // 처리한 인원이 더 적으면 더 높은 값 찾도록 +1
            minTime = mid + 1
        }
    }
    return minTime
}