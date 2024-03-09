function solution(elements) {
    var answer = new Set();
    for(let i=0;i<elements.length;i++){
        let sum = 0;
        
        for(let j=0;j<elements.length;j++){
            sum += elements[(i+j)%elements.length]
            answer.add(sum)
        }
    } 
    return Array.from(answer).length
}