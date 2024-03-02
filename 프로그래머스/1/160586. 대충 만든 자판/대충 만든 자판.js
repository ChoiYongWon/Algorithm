function solution(keymap, targets) {
    var answer = [];
    const map = {}
    for(let i in keymap){
        for(let j in keymap[i]){
            if(map[keymap[i][j]] == undefined) map[keymap[i][j]] = Number(j)+1
            else if(map[keymap[i][j]] > j) map[keymap[i][j]] = Number(j)+1
        }
    }
    
    console.log(map)
    
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