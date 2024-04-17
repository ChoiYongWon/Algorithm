let input = require("fs").readFileSync(0, 'utf-8').toString().trim().replace(/\r/g,"").split("\n")
const [group_length, problem_length] = input[0].split(" ").map(Number)
const team = {}
const member = {}

let index = 1

for(let i=0;i<group_length;i++){
    const team_name = input[index++]
    const team_length = Number(input[index++])
    for(let j=0;j<team_length;j++){
        if(!team[team_name]) team[team_name] = []
        team[team_name].push(input[index])
        member[input[index]] = team_name
        index++
    }
    team[team_name].sort()
}

for(let i=0;i<problem_length;i++){
    const quiz = input[index++]
    const type = Number(input[index++])

    if(type == 0) team[quiz].forEach(data=>console.log(data))
    else console.log(member[quiz])

}
