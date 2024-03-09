function solution(lines) {
    const traffic = lines.map((data)=>{
        const endTime = new Date(`${data.split(" ")[0]} ${data.split(" ")[1]}`)
        const delayTime = data.split(" ")[2].slice(0, -1)
        const startTime = new Date(endTime)
        startTime.setSeconds(startTime.getSeconds() - 
                                  (Number(delayTime) % 1 == 0 ? Number(delayTime) : Number(delayTime.split(".")[0])))
        startTime.setMilliseconds(startTime.getMilliseconds() + 1 -
                                  (Number(delayTime) % 1 == 0 ? 0 : Number(delayTime.split(".")[1])))
        
        return [startTime, endTime]
    })
    
    
    let mdps = 0
    const endPointTraffic = []
    traffic.forEach((data)=>{endPointTraffic.push(data[0]); endPointTraffic.push(data[1]);})
    
    endPointTraffic.forEach((data)=>{
        let collapseCount = 0
        const secondDelayBefore = new Date(data)
        const secondDelayAfter = new Date(data) // 모든 endPointTraffic의 1초 뒤 Date
        secondDelayAfter.setMilliseconds(secondDelayAfter.getMilliseconds() + 999)
        traffic.forEach((trafficData)=>{
            const trafficDateStart = new Date(trafficData[0]) // 모든 트래픽의 시작 Date
            const trafficDateEnd = new Date(trafficData[1]) // 모든 트래픽의 끝 Date
           
            collapseCount += (!(trafficDateStart > secondDelayAfter || trafficDateEnd < secondDelayBefore)) ? 1 : 0
        })
        
        if(mdps < collapseCount) mdps = collapseCount
    })
    return mdps;
}