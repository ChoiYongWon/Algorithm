function solution(n,a,b)
{
    let [min,max] = [Math.min(a,b), Math.max(a,b)]
    let bin = n
    let fivot = bin
     
    do{
        bin = bin >> 1
        if(min > fivot) fivot += bin
        else if(max <= fivot) fivot -= bin
        else return bin.toString(2).split("").reverse().join("").indexOf("1") + 2
    }while(1)
}