function solution(k, tangerine) {
    var answer = {};
    let sortedTangerine = []
    let tanObj = tangerine.reduce((acc, cur)=>{
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    tanObj = Object.entries(tanObj)
    tanObj = tanObj.sort((a, b)=>(b[1] - a[1]))
    
    
    for(let i=0;i<tanObj.length;i++){
        for(let j=0;j<tanObj[i][1];j++){
            sortedTangerine.push(tanObj[i][0])
        }
    }
    
    
    for(let i=0;i<k;i++){
        answer[sortedTangerine[i]] = (answer[sortedTangerine[i]] || 0) + 1
    }
    return Object.keys(answer).length;
}