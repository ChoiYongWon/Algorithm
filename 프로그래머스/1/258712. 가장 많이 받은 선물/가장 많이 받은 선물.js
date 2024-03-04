function solution(friends, gifts) {
    var answer = 0;
    
    const gt_table = Array.from({ length: friends.length }, () => Array.from({ length: friends.length }, () => 0));
    
    // [사람 index][준선물, 받은선물, 선물 지수, 받을 선물]
    const info_table = Array.from({ length: friends.length }, () => Array.from({ length: 4 }, () => 0));
    
    // 준사람 받은사람 테이블
    for(let i in gifts){
        let giver_index = friends.indexOf(gifts[i].split(" ")[0])
        let taker_index = friends.indexOf(gifts[i].split(" ")[1])
        gt_table[giver_index][taker_index] += 1
        info_table[giver_index][0] += 1
        info_table[taker_index][1] += 1
        info_table[giver_index][2] += 1
        info_table[taker_index][2] -= 1
    }
    
    for(let i=0;i<friends.length;i++){
        for(let j=0;j<i;j++){
            if((gt_table[i][j] > 0 || gt_table[j][i] > 0) && gt_table[i][j] != gt_table[j][i]){ // 서로 주고 받았다면
                const gift_receiver = gt_table[i][j] > gt_table[j][i] ? i : j
                info_table[gift_receiver][3] += 1
            }
            // 서로 주고 받은적이 없거나 같다면
            if((gt_table[i][j] == 0 && gt_table[j][i] == 0) || gt_table[i][j] == gt_table[j][i]){ 
                if(info_table[i][2] == info_table[j][2]) continue // 지수가 같을 시
                const gift_receiver = info_table[i][2] > info_table[j][2] ? i : j
                info_table[gift_receiver][3] += 1
            }
        }
    }
    
    answer = Math.max(...info_table.map((info)=>info[3]))
    
    return answer;
}