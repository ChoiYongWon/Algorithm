function solution(nums) {
    let result = nums.reduce((acc, cur)=>acc.includes(cur) ? [...acc] : [...acc, cur], []).length
    return result>nums.length/2 ? nums.length/2 : result;
}