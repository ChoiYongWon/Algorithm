const isPrime = num => {
    for(let i=2;i*i<=num;i++){
        if(num%i==0) return false
    }
    return true
}

function solution(nums) {
    var answer = 0;
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                
                const sum = nums[i] + nums[j] + nums[k]
                if(isPrime(sum)){
                    answer += 1
                    console.log(`[${nums[i]},${nums[j]},${nums[k]}]를 이용해서 ${sum}을 만들 수 있습니다.`)
                }
            }
        }
    }
    
    return answer;
}