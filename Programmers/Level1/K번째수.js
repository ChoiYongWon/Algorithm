function solution(array, commands) {
    return commands.map((data)=>{
        const arr = array.slice(data[0]-1, data[1])
        arr.sort((a,b)=>a-b)
        return arr[data[2]-1]
    });
}