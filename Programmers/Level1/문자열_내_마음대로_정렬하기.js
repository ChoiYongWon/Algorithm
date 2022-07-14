function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a,b)=>{
        const result = a.charCodeAt(n)-b.charCodeAt(n)
        if(result == 0) return a < b ? -1 : 1
        return result
    })
    return answer;
}