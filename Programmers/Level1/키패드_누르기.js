function solution(numbers, hand) {
    var answer = '';
    let numPad = ["1", "2", "3", "4", "5", "6", "7", "8" ,"9", "*", "0", "#"]
    let leftPos = "*"
    let rightPos = "#"
    for(let i=0; i<numbers.length; i++){
        const num = numbers[i].toString()
        if(["1", "4", "7"].includes(num)){
            leftPos = num
            answer += 'L'
        }
        else if(["3", "6", "9"].includes(num)){
            rightPos = num
            answer += 'R'
        }
        else {
            const leftDistance = Math.abs(Math.floor(numPad.indexOf(leftPos)/3) - Math.floor(numPad.indexOf(num)/3)) + Math.abs(numPad.indexOf(leftPos)%3 - numPad.indexOf(num)%3)
            const rightDistance = Math.abs(Math.floor(numPad.indexOf(rightPos)/3) - Math.floor(numPad.indexOf(num)/3)) + Math.abs(numPad.indexOf(rightPos)%3 - numPad.indexOf(num)%3)
            
            if(leftDistance>rightDistance){
                answer += "R"
                rightPos = num
            }else if(leftDistance<rightDistance){
                answer += "L"
                leftPos = num
            }else{
                if(hand=="right"){
                    answer += "R"
                    rightPos = num
                }else{
                    answer += "L"
                    leftPos = num
                }
            }
        }
    }
    return answer;
}