function solution(wallpaper) {
    var answer = [];
    let [minX, minY, maxX, maxY] = [wallpaper.length,wallpaper[0].length,0,0]
    
    for(let i in wallpaper){
        for(let j in wallpaper[i]){
            if(wallpaper[i][j] == '#'){
                minX = Math.min(minX, i)
                minY = Math.min(minY, j)
                maxX = Math.max(maxX, i)
                maxY = Math.max(maxY, j)
            }
        }
    }
    answer = [minX, minY, maxX+1, maxY+1]
    return answer;
}