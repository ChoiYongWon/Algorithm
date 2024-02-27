function solution(s) {
    if(s.length !== 4 && s.length !== 6) return false
    let reg = new RegExp(/[0-9]/g)
    return s.match(reg).join("") == s
}