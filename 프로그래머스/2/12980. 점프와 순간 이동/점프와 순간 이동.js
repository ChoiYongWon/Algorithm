function solution(n)
{
    var ans = 0;
    let acc = n
    while(acc!=1){
        if(acc%2 == 1){
            ans += 1
            acc -= 1
        }
        acc /= 2
    }
    ans += acc
    return ans;
}