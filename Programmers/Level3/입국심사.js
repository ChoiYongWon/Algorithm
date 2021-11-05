function solution(n, times) {
    var answer = 0;
    let maxTime = Math.floor(Math.max.apply(null, times) * n / times.length)
    let minTime = Math.floor(Math.min.apply(null, times) * n / times.length)
    while(minTime <= maxTime){
        
        let mid = Math.floor((maxTime+minTime)/2)
        let count = times.reduce((acc, cur)=> acc + Math.floor((mid/cur)), 0)
        
        if(n<=count){
            maxTime = mid - 1
        }
        else{
            minTime = mid + 1
        }
    }
    return minTime
}