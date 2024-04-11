function solution(cacheSize, cities) {
    var answer = 0;
    const cache = [] // 뒤로 갈수록 fresh한 데이터
    
    if(cacheSize == 0) return cities.length * 5
    
    for(let i=0;i<cities.length;i++){
        const city = cities[i].toLowerCase()
        const cache_index = cache.indexOf(city) // 캐싱되어있는 index
        // HIT
        if(cache_index!=-1){
            cache.splice(cache_index, 1)// 기존 캐시 위치 fresh
            cache.push(city)
            answer++
        }else{ // NO HIT
            if(cache.length == cacheSize){
                cache.shift(); // 맨 앞에꺼 제거
            }
            cache.push(city) // 맨 뒤에 추가
            answer += 5
        }
    }    
    
    return answer;
}