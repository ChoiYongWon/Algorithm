let input = require("fs").readFileSync(0, 'utf-8').toString().replace(/\r/g,"").trim().split("")
let flag = false

for(let i=0;i<input.length;i++){
    if(input[i] == '-'){
        if(flag) {
            input.splice(i, 0, ')')
            flag = false
        }else{
            input.splice(i+1, 0, '(')
            flag = true
        }
    }
}

if(flag) input.push(")")

let newExpression = ""
let number = ""

// 앞에 0으로 시작하는거 없애주는 과정
for(let i=0;i<input.length;i++){
    if(input[i] == '-' || input[i] == '+' || input[i] == '(' || input[i] == ')'){
        if(number.length){
            newExpression += Number(number)
            number = ""
        }
        newExpression += input[i]

    }else{
        number += input[i]
    }
}

if(number.length) newExpression += Number(number)

console.log(eval(newExpression))