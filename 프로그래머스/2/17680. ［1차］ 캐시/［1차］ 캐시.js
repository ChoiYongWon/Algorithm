function solution(cacheSize, cities) {
    var answer = 0;
    const cache = []
    
    if(cacheSize == 0) return cities.length * 5
    
    for(let i=0;i<cities.length;i++){
        const city = cities[i].toLowerCase()
        const cache_index = cache.indexOf(city)
        // HIT
        if(cache_index!=-1){
            cache.splice(cache_index, 1)
            cache.push(city)
            answer++
        }else{ // NO HIT
            if(cache.length == cacheSize){
                cache.shift();
            }
            cache.push(city)
            answer += 5
        }
    }    
    
    return answer;
}