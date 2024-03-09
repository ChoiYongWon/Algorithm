function solution(n,a,b)
{
    console.log(n.toString(2).length-1)
    // 2의 진수 만큼 반복
    for(let i=1;i<=n.toString(2).length-1;i++){
        if(Math.abs((a + Math.pow(2, i)) - b) < 2) return i
    }


}