function solution(n, words) {
    var answer = [];
    let bank = []
    let last_word = ""
    let i
    for(i=0;i<words.length;i++){
        
        if(i>0 && words[i][0]!=last_word[last_word.length-1]) break 
        if(words[i].length == 1) break 
        if(bank.includes(words[i])) break
        
        bank.push(words[i])
        last_word = words[i]

    }
    if(i==words.length) answer = [0,0]
    else answer = [i%n + 1, Math.floor(i/n)+1]
    
    return answer;
}