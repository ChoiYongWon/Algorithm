function solution(answers) {
    let answer
    let user = [
        {i : 1, c : 0, p : [1,2,3,4,5]}, 
        {i : 2, c : 0, p : [2,1,2,3,2,4,2,5]}, 
        {i : 3, c : 0, p : [3,3,1,1,2,2,4,4,5,5]}]
    for(let i = 0; i < answers.length; i ++) {
        for(let j = 0; j<user.length; j++){
            if(answers[i]==user[j].p[i%(user[j].p.length)]) user[j].c += 1
        }
    }
    user.sort((a, b)=>b.c - a.c)
    user = user.filter((data)=>user[0].c == data.c).map(data=>data.i)
    user.sort((a, b)=>a - b)
    return user
}