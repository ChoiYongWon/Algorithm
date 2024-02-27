function solution(absolutes, signs) {
    return absolutes.map((num, data)=>signs[data] ? num : -num).reduce((acc, cur)=>acc+cur)
}