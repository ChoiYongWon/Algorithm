function solution(genres, plays) {
    var answer = [];
    let genre = {}
    let result = []
    // genre[genres[0]] = [...genre[genres[0]] ?? []]
    for(let i=0;i<genres.length;i++){
        
        genre[genres[i]] = [...genre[genres[i]] || [], {
            id: i,
            plays: plays[i]
        }]
    }
    for(let i in genre){
        genre[i] = genre[i].sort((a, b)=>{
            return b.plays - a.plays
        })
        answer.push({
            genre: i,
            musics: genre[i]
        })
    }

    answer = answer.sort((a, b)=>{
        return b.musics.reduce((acc, cur)=>acc+cur.plays, 0) - a.musics.reduce((acc, cur)=>acc+cur.plays, 0)
    })
    
    for(let i=0;i<answer.length;i++){
        if(answer[i].musics.length < 2) result.push(answer[i].musics[0].id)
        else{
            result.push(answer[i].musics[0].id)
            result.push(answer[i].musics[1].id)
        }
    }
    
    return result;
}