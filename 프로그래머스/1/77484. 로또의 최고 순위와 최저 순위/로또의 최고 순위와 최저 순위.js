function solution(lottos, win_nums) {
    var answer = [];
    let most = win_nums.filter((num)=>lottos.includes(num)).length + lottos.filter((num)=>num==0).length || 1
    let worst = win_nums.filter((num)=>lottos.includes(num)).length || 1
    answer = [7 - most, 7 - worst]
    return answer;
}