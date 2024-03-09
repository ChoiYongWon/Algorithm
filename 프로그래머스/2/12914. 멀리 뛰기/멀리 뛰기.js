const pool = {}

function dfs(n){
    if(n == 1) return 1
    if(n == 2) return 2
    return (pool[n] ? pool[n] : dfs(n-1)) + (pool[n] ? pool[n] : dfs(n-2))
}

function solution(n) {
    var answer = 0;
    pool[1] = 1;
    pool[2] = 2;
    if(n<=2) return pool[n]
    for (let i=3; i<=2000;i++){
        pool[i] = pool[i-1]%1234567 + pool[i-2]%1234567
    }
    console.log(Number(pool[4])%1234567)
    return pool[n] % 1234567; 
}