function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(n=>n%divisor==0)
    answer.sort((a, b)=>a-b)
    if(answer.length == 0) answer.push(-1)
    return answer;
}