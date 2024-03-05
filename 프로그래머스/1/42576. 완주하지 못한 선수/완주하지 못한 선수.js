// 해시는 거의 객체 사용

function solution(participant, completion) {
    
    let players = {}
    let answer = ""
    
    // 참여자를 객체에 추가
    participant.forEach((name) => {
        if(players[name]==undefined) players[name] = 1
        else players[name] += 1
    });
    
    // 완주자 객체에서 제거
    completion.forEach((name) => {
        players[name] -= 1
    })
    
    // 객체에 남은 플레이어 중 0이 아닌 플레이어 추출
    players = Object.entries(players).filter(info=>info[1]!=0).map(info=>info[0])    
    answer = players.join("")
    return answer
}