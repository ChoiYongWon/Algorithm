function solution(board, moves) {
    var answer = 0;
    let basket = []
    for(let i=0;i<moves.length;i++){
        for(let j=0;j<board.length;j++){
            let doll = board[j][moves[i]-1]
            if(doll!=0){
                board[j][moves[i]-1] = 0
                basket.push(doll)
                break
            }

        }
        if(basket.length > 1 && basket[basket.length-1] == basket[basket.length-2]){
            basket.splice(-2, 2)
            answer += 2
        }
    }
    return answer;
}