function solution(k, tangerine) {
    var answer = new Set();
    let sortedTangerine = []
    // 귤 : 갯수
    let tanObj = tangerine.reduce((acc, cur)=>{
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    tanObj = Object.entries(tanObj)
    
    // 귤 갯수로 정렬
    tanObj = tanObj.sort((a, b)=>(b[1] - a[1]))
    
    // 귤 평탄화 작업
    /*
    before
    {
        2: 3,
        3: 2
    }
    
    after
    [2, 2, 2, 3, 3]
    */
    for(let i=0;i<tanObj.length;i++){
        for(let j=0;j<tanObj[i][1];j++){
            sortedTangerine.push(tanObj[i][0])
        }
    }
    
    
    // k만큼 더함 (set 중복방지)
    for(let i=0;i<k;i++){
        answer.add(sortedTangerine[i])
    }
    return answer.size;
}