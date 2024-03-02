function solution(keymap, targets) {
    var answer = [];
    const map = {}
    //Object로 최소 키맵 만듬
    for(let i in keymap){
        for(let j in keymap[i]){
            if(map[keymap[i][j]] == undefined) map[keymap[i][j]] = Number(j)+1
            else if(map[keymap[i][j]] > j) map[keymap[i][j]] = Number(j)+1
        }
    }
    
    //target를 순회하면서 map을 참고해 최소값 더함
    answer = targets.map(target=>{
        let count = 0;
        for(let i in target){
            if(map[target[i]] != undefined) count += map[target[i]]
            else return -1
        }
        return count
    })
    
    return answer;
}