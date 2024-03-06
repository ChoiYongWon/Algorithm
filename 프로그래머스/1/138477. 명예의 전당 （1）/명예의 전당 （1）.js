function solution(k, score) {
    return score.map((s, i)=>score.slice(0, i+1).sort((a,b)=>b-a)[i>k-1 ? k-1 : i])
}