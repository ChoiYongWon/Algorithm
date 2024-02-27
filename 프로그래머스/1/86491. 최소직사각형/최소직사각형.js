function solution(sizes) {
    let card = sizes.map((data)=>data.sort((a, b)=> a - b))
    let minSize = card.reduce((acc, cur)=>{
        return [(cur[0] > acc[0]) ? cur[0] : acc[0], (cur[1] > acc[1]) ? cur[1] : acc[1]]
    }, [0,0])
    return minSize[0] * minSize[1]
}