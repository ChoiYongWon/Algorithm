function solution(t, p) {
    var answer = 0;
    for(let i=0;i<t.length - p.length+1;i++){
        let num = Number(t.substring(i, i+p.length))
        console.log(num, p)
        if(num <= Number(p)) answer += 1;
    }
    return answer;
}