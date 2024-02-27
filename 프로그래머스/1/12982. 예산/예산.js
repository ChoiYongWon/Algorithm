function solution(d, budget) {
    let answer = [...d]
    answer.sort((a, b)=> (a - b))
    return answer.reduce((acc, cur, i, arr)=>{ 
        //만족 하면 즉시 빠져나옴 reduce의 특성 이용 ( arr을 추종 )
        if(acc[1] - cur<0) { arr.splice(0, arr.length-1); return [...acc]}
        else return [acc[0] + 1, acc[1] - cur]
    }, [0,budget])[0]
}