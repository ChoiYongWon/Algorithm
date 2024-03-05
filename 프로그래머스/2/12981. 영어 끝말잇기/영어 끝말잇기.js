function solution(n, words) {
    var answer = [];

    for(let i in words){
        const person = (i%n) + 1
        const turn = Math.floor(i/n) + 1
        // 한 글자 검증 (첫사람도 검증해야됨)
        if(words[i].length == 1) return [person, turn] 
        if(i==0) continue //젤 첫사람 턴
        
        // 문자 일치 검증
        if(words[i-1][words[i-1].length-1] != words[i][0]) return [person, turn]
        // 사용된 문자 검증
        if(words.slice(0, i).includes(words[i])) return [person, turn]
    }
    
    answer = [0,0]
    return answer;
}