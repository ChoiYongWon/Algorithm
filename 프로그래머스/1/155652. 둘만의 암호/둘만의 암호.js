function solution(s, skip, index) {
    var answer = '';
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    const regexp = new RegExp(`[${skip}]`, 'g');
    alphabet = alphabet.replace(regexp, "")
    //s를 배열로 만들고 alphabet을 참조하여 index만큼 shift
    answer = s.split("").map(letter=>alphabet[(alphabet.indexOf(letter) + index)%alphabet.length]).join("")
    
    return answer;
}