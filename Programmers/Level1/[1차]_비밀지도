function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0;i<n;i++){
        answer[i] = arr1[i] | arr2[i]
    }
    answer = answer.map((data, i)=>{
        let binary = data.toString(2).padStart(n, '0').split("")
        binary = binary.map((bit)=>bit=="0" ? " " : "#");
        return binary.join("")
    })
    return answer;
}
