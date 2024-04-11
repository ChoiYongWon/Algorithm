function solution(m, n, board) {
    
    const set = new Set()
    let answer = 0;
    const board_copy = [...board.map(v=>v.split(""))]
    
    
    function isSquare(r, c){
        if(board_copy[r][c] == null) return false
        const origin = board_copy[r][c] // 기준
        return board_copy[r+1][c] == origin && board_copy[r][c+1] == origin && board_copy[r+1][c+1] == origin
    }
    
    // 밑칸이 비어있으면 내려주는 함수
    function down(r, c){
        let count = 1;
        const value = board_copy[r][c]
        let [destR, destC] = [r, c]
        
        // 해당 블럭 밑에 최종 R 값
        while(true){
            if(destR+1 == m || board_copy[destR+1][destC]!=null) break;
            destR++
        }
        if(destR != r){
            board_copy[r][c] = null
            board_copy[destR][destC] = value
        }
    }
    
    // 계속 탐색할지
    let keepSearch = true;
    
    while(keepSearch){
        keepSearch = false
        for(let i=0;i<m-1; i++){
            for(let j=0;j<n-1; j++){
                if(isSquare(i, j)){
                    set.add(`${i} ${j}`)
                    set.add(`${i+1} ${j}`)
                    set.add(`${i} ${j+1}`)
                    set.add(`${i+1} ${j+1}`)
                    keepSearch = true
                }
            }
        }
        
        
        // 정사각형에 포함되는 좌표를 다 null화
        for(let square of set){
            const row = Number(square.split(" ")[0])
            const column = Number(square.split(" ")[1])
            answer++
            board_copy[row][column] = null
        }
        
        // set 초기화
        set.clear()
        
        // 한칸씩 밑으로 당김
        for(let i=m-2;i>=0;i--){
            for(let j=0;j<n;j++){
                down(i, j)
            }
        }
        
    }
    
    
    return answer;
}


