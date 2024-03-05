

function solution(n) {
    var answer = 0;
    const pool = {0:0, 1:1}
    for(let i=2; i<=n; i++){
        pool[i] = (pool[i-1] + pool[i-2])% 1234567
    }
    console.log(n, pool[n])
    answer = pool[n] 
    return answer;
}