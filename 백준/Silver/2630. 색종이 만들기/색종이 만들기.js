let [size, ...info] = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("\n")

// 아 좀 짜치는데?
size = Number(size)

const paper = info.map(line=>line.split(" ").map(Number))
let white = 0
let blue = 0

function check(paper){
    const sum = paper.reduce((r_acc, r_cur)=>(r_acc + r_cur.reduce((c_acc, c_cur)=>(c_acc + c_cur), 0)), 0)
    const size = Math.pow(paper.length, 2)

    if(sum == size) {
        blue++
        return;
    }
    
    if(sum == 0) {
        white++
        return;
    }
    
    const [
        top_left, top_right, bottom_left, bottom_right
    ] = [
        paper.slice(0, paper.length / 2).map(line=>line.slice(0, paper.length / 2)),
        paper.slice(0, paper.length / 2).map(line=>line.slice(paper.length / 2)),
        paper.slice(paper.length / 2).map(line=>line.slice(0, paper.length / 2)),
        paper.slice(paper.length / 2).map(line=>line.slice(paper.length / 2))
    ]

    check(top_left)
    check(top_right)
    check(bottom_left)
    check(bottom_right)

    // 4개로 쪼개기
}

check(paper)

console.log(white)
console.log(blue)