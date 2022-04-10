function solution(id_list, report, k) {
    let report_list = {}
    let answer = {}
    for(let i=0;i<id_list.length;i++){
        report_list[id_list[i]] = []
        answer[id_list[i]] = 0
    }
    for(let i=0;i<report.length;i++){
        let attacker = report[i].split(" ")[0]
        let victim = report[i].split(" ")[1]
        
        if(!report_list[victim].includes(attacker)) report_list[victim].push(attacker)
    }
    Object.values(report_list).forEach((data)=>{
        if(data.length>=k){
            for(let i=0;i<data.length;i++){
                answer[data[i]] += 1
            }
        }
    })
    return Object.values(answer)
}
