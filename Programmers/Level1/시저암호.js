function solution(s, n) {
    const low = 'abcdefghijklmnopqrstuvwxyz'
    const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var answer = '';
    for(let i=0;i<s.length;i++){
        if(low.includes(s[i])) answer += low[(low.indexOf(s[i])+n) % 26]
        else if(cap.includes(s[i])) answer += cap[(cap.indexOf(s[i])+n) % 26]
        else answer += " "
    }
    return answer;
}