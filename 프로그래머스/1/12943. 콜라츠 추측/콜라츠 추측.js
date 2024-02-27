function solution(num, count) {
    if(!count) count = 0
    else if(count===500) return -1
    
    if(num==1){
        return count
    }
    if(num%2==0){
        return solution(num/2, ++count)
    }else if(num%2==1){
        return solution(num*3 + 1, ++count)
    }
}