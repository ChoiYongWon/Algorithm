function solution(board, moves) {
    var answer = 0;
    let basket = []
    for(let i=0;i<moves.length;i++){ // 가변
        for(let j=0;j<board.length;j++){ //5번, 내려오면서 존재하는 인형 감지
            let doll = board[j][moves[i]-1] //보드에서는 index가 1부터 시작
            if(doll!=0){
                board[j][moves[i]-1] = 0
                basket.push(doll)
                break
            }
            
        }
        // 연속되는 인형 감지
        if(basket.length > 1 && basket[basket.length-1] == basket[basket.length-2]){
            basket.splice(-2, 2)
            answer += 2
        }
    }
    return answer;
}