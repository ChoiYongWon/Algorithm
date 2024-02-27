function solution(new_id) {
    let answer = new_id.toLowerCase()
        .replace(/[~!@#$%^&*()=+\[\{\]\}:?,<>\/]/g, "").replace(/[.]+/g, ".").replace(/^[.]/g, "")
    if(answer.length == 0) answer = "a"
    answer = answer.replace(/[.]$/g, "").substring(0, 15).replace(/[.]$/g, "")
    let word = [...answer]
    return word.length <= 2 ? answer + String(word[word.length-1]).repeat(3 - word.length) : answer
}