function solution(s){
    let s_arr = s.toLowerCase().split("")
    let result = s_arr.reduce((acc, cur)=>{
        if(cur == "p") return acc -= 1
        else if(cur == "y") return acc += 1
        else return acc
    }, 0)
    
    return result==0 ? true : false;
}