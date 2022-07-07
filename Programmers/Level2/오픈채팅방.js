/*
    user에는 uuid별로 이름을 저장함
    uuid는 고유하기 때문에 프로퍼티명으로 지정

    이후에 이름이 바뀌더라도 uuid를 key값으로 참조하기 때문에 이름 중복 가능함

    log는 Enter와 Leave만 추가함
*/

function addUser(user, uuid, name){
    user[uuid] = name
}

function changeUsername(user, uuid, name){
    user[uuid] = name
}

function addLog(log, action, uuid){
    const log_msg = `${action} ${uuid}`
    log.push(log_msg)
}

function getLogList(log, user){
    let log_list = []
    const action_map = {
        "Enter" : "들어왔습니다.",
        "Leave" : "나갔습니다.",
    }
    for(let i=0;i<log.length;i++){
        const [action, uuid] = log[i].split(" ")
        log_list.push(`${user[uuid]}님이 ${action_map[action]}`)
    }
    return log_list
}

function solution(record) {
    var answer = [];
    let log = []
    let user = {}
    
    for(let i=0;i<record.length;i++){
        const [action, uuid, name] = record[i].split(" ")
        switch(action){
            case "Enter":
                addUser(user, uuid, name)
                addLog(log, action, uuid)
                break
            case "Leave":
                addLog(log, action, uuid)
                break
            case "Change":
                changeUsername(user, uuid, name)
                break
        }
    }
    
    answer = getLogList(log, user)
    
    return answer;
}