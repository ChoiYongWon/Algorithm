// 1줄만 갈색이라 해서 다행이라 생각중
// 약수 전부 구해서 대조

// 노란색 범위의 공식을 찾는 방식을 생각못했네 ㅅㅂ

function solution(brown, yellow) {
    var answer = [];
    
    let divisor = new Set()
    let sum = brown + yellow
    
    for(let i=1;i<=Math.sqrt(sum);i++){
        if(sum % i == 0) divisor.add(i)
    }
    
    for(let i of divisor){
        divisor.add(sum / i)
    }
    
    
    divisor = Array.from(divisor).sort((a,b)=>a-b)

    for(let i=0;i<=Math.floor(divisor.length/2); i++){
        const border = ((divisor[i]-2)*2 + (divisor[divisor.length-1-i]-2)*2 + 4)
        if(border == brown) {
            answer = [divisor[divisor.length-1-i], divisor[i]]
            break
        }
    }
    
    return answer;
}