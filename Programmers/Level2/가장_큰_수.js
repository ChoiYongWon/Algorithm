const compare = (a, b) => {
    let comp_a = Number(String(a).repeat(4).substring(0, 4))
    let comp_b = Number(String(b).repeat(4).substring(0, 4))
    return comp_b - comp_a
}

function solution(numbers) {
    if(Number(numbers.join('') == 0)) return "0"
    let answer = numbers.sort(compare).join('')
    
    return answer;
}