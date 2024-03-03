function getScore(dart_arr){
    let result = ""
    
    while(!isNaN(Number(dart_arr[0]))){
        result += dart_arr.shift()
    }
    return Number(result)
}

function getBonus(dart_arr){
    return dart_arr.shift()
}

function getOption(dart_arr){
    const option = ["*", "#"]
    if(option.includes(dart_arr[0])) return dart_arr.shift()
    else return null
}

function preprocessing(dartResult){
    
    let dart_arr = dartResult.split("")
    let score = []
    let bonus = []
    let option = []
    
    // 3번의 기회로 구성
    for(let i=0;i<3;i++){
        score[i] = getScore(dart_arr)
        bonus[i] = getBonus(dart_arr)
        option[i] = getOption(dart_arr)
    }
    return [score, bonus, option]
}


function calculate(score, bonus, option){
    let result = 0;
    let star = false;
    const bonus_map = ["S", "D", "T"]
    
    for(let i=2;i>=0;i--){
        
        let tmp =  Math.pow(score[i], bonus_map.indexOf(bonus[i]) + 1)
        if(option[i] == "#") tmp *= (-1)
        else if(option[i] == "*") tmp *= 2
        if(i != 2 && option[i+1] == "*") tmp *= 2
        
        result += tmp
    }
    return result
}

function solution(dartResult) {
    const [score, bonus, option] = preprocessing(dartResult)
    const answer = calculate(score, bonus, option)
    return answer
}