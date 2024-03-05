// 재귀함수로 짰다가 콜스택 줫나게 쌓여서 for문으로 바꿈
// pool 객체에 n 값에 대한 결과를 계속 저장
// 중간에 1234567로 안나눠주면 Infinity로 바뀜

function solution(n) {
    var answer = 0;
    const pool = {0:0, 1:1}
    for(let i=2; i<=n; i++){
        pool[i] = (pool[i-1] + pool[i-2]) % 1234567
    }
    answer = pool[n] 
    return answer;
}