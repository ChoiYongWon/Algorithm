function solution(s) {
    var answer = '';
    answer = s.split("").sort((a,b)=>{
        if(a>b) return -1
    }).join("")
    return answer;
}